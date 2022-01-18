import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";
import { Header } from "../../../../components/organisms/Header";
import { AppTemplate } from "../../../../components/templates/AppTemplate";
import { Button, IconButton } from "@chakra-ui/button";

import { api } from "../../../../services/axios";
import { useSession } from "../../../../contexts/useSession";
import { LightSection } from "../../../../components/organisms/Projects/LightSection";
import { UsersSection } from "../../../../components/organisms/Projects/UsersSection";
import { ContextSection } from "../../../../components/organisms/Projects/ContextSection";
import { TimeSection } from "../../../../components/organisms/Projects/TimeSection";
import { IProject } from "../../../../interfaces/IProject";
import { getEmoji } from "../../../../utils/getEmoji";
import { useIsDisabled } from "../../../../hooks/useIsDisabled";
import { useProjectState } from "../../../../hooks/useProjectState";
import { ColorSection } from "../../../../components/organisms/Projects/ColorSection";
import { MaterialsSection } from "../../../../components/organisms/Projects/MaterialsSection";
import { ShapeSection } from "../../../../components/organisms/Projects/ShapeSection";
import { GeneralSection } from "../../../../components/organisms/Projects/GeneralSection";
import { BreadCrumb } from "../../../../components/organisms/BreadCrumb";
import { breadcrumbs } from "../../../../constants/breadCrumb";
import { ImageSection } from "../../../../components/organisms/Projects/ImageSection";
import { useLoading } from "../../../../hooks/useLoading";
import { LoadingSpinner } from "../../../../components/organisms/LoadingSpinner";
import { PageHeader } from "../../../../components/organisms/Projects/PageHeader";
import { useToats } from "../../../../hooks/useToast";

export const EditReferencePage = () => {
  const projectEditionType = "reference";
  const { sessionUserData } = useSession();
  const { onInfo, onError, onSuccess } = useToats();

  const { query } = useRouter();
  const { id } = query;

  const [project, setProject] = useState({} as IProject);
  const {
    projectData,
    generalInfo,
    setGeneralInfo,
    shapeInfo,
    setShapeInfo,
    materialsAndContrast,
    setMaterialsAndContrast,
    colorsInfo,
    setColorsInfo,
    lightInfo,
    setLightInfo,
    usersInfo,
    setUsersInfo,
    contextInfo,
    setContextInfo,
    timeInfo,
    setTimeInfo,
    setXPInfo,
  } = useProjectState({
    projectCreationType: projectEditionType,
    userEmail: sessionUserData.email,
  });

  const onEditProject = () => {
    api
      .put(`/projects/${id}`, projectData)
      .then((res) => {
        onSuccess("Projeto atualizado com sucesso");
        Router.push("/app/references");
      })
      .catch((err) => {
        onError("Falha ao atualizar projeto");
      });
  };

  const { isLoading } = useLoading(true, project._id);

  useEffect(() => {
    if (!id) return;

    (async () => {
      api
        .get(`/projects/${id}`)
        .then((res) => {
          const project = res?.data?.project as IProject;

          setProject(project);

          setGeneralInfo({
            image: project.projectURL,
            location: project.projectLocation,
            name: project.projectName,
          });

          setShapeInfo({
            complexity: project.projectComplexity,
            height: project.projectHeight,
            shape: project.projectShape,
            size: project.projectSize,
          });

          setMaterialsAndContrast({
            materials: project.projectMaterials,
            texture: project.projectTexture,
          });

          setColorsInfo({
            tone: project.projectColorTone,
            primaryColor: project.projectColorPrimaryColor,
            secondaryColor: project.projectColorSecondaryColor,
            tertiaryColor: project.projectColorTertiaryColor,
          });

          setLightInfo({
            contrast: project.projectLightContrast,
            intensity: project.projectLightIntensity,
            open: project.projectLightOpen,
          });

          setUsersInfo({
            quantity: project.projectUsersQuantity,
            movement: project.projectUsersMovement,
          });

          setContextInfo({
            type: project.projectContextType,
            isContextLandmark: project.projectContextIsContextLandmark,
            isProjectLandmark: project.projectContextIsProjectLandmark,
          });

          setTimeInfo({
            timeOfDay: project.projectTimeOfDay,
            weather: project.projectWeather,
            temperature: project.projectTemperature,
          });

          setXPInfo({
            perceived: project.projectXPPerceived,
            predicted: project.projectXPPredicted,
          });

          onInfo("Projeto carregado com sucesso!");
        })
        .catch((err) => {
          onError("Falha ao carregar projeto");
        });
    })();
  }, [id]);

  const { isDisabled } = useIsDisabled(generalInfo);

  return (
    <AppTemplate
      header={<Header />}
      body={
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <VStack
            h="full"
            spacing="12"
            justify="flex-start"
            align="flex-start"
            w="full"
          >
            <BreadCrumb items={breadcrumbs.editReferenceBreadCrumb} />

            <PageHeader
              closeUrl="/app/references"
              pageTitle="Editar Referência"
            />

            <ImageSection image={generalInfo.image} />

            <GeneralSection
              sectionTitle="1. Informações Gerais"
              state={generalInfo}
              setState={setGeneralInfo}
            />

            <ShapeSection
              sectionTitle="2. Forma"
              state={shapeInfo}
              setState={setShapeInfo}
            />

            <MaterialsSection
              sectionTitle="3. Materiais e Texturas"
              state={materialsAndContrast}
              setState={setMaterialsAndContrast}
            />

            <ColorSection
              sectionTitle="4. Cores"
              state={colorsInfo}
              setState={setColorsInfo}
            />

            <LightSection
              sectionTitle="5. Iluminação"
              state={lightInfo}
              setState={setLightInfo}
            />

            <UsersSection
              sectionTitle="6. Usuários"
              state={usersInfo}
              setState={setUsersInfo}
            />

            <ContextSection
              sectionTitle="7. Contexto"
              state={contextInfo}
              setState={setContextInfo}
            />

            <TimeSection
              sectionTitle="8. Tempo"
              state={timeInfo}
              setState={setTimeInfo}
            />

            <Flex w="full" minH="5vh" justify="flex-end">
              <Button
                borderRadius="sm"
                colorScheme="blue"
                size="lg"
                variant="solid"
                onClick={onEditProject}
                isDisabled={isDisabled}
              >
                Salvar
              </Button>
            </Flex>

            <Flex w="full" minH="5vh" />
          </VStack>
        )
      }
    />
  );
};
