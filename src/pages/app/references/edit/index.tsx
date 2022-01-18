import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import Router, { useRouter } from "next/router";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";
import { Header } from "../../../../components/organisms/Header";
import { AppTemplate } from "../../../../components/templates/AppTemplate";
import { Button, IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../../utils/handleNavigate";
import { Image } from "@chakra-ui/image";
import { Input } from "../../../../components/molecules/Input";
import { SelectInput } from "../../../../components/molecules/SelectInput";
import {
  height,
  shape,
  size,
  complexity,
  materials,
  textures,
  tones,
  colors,
} from "../../../../constants/options";
import { useEffect, useState } from "react";

import { api } from "../../../../services/axios";
import { useSession } from "../../../../contexts/useSession";
import { LightSection } from "../../../../components/organisms/Projects/LightSection";
import { UsersSection } from "../../../../components/organisms/Projects/UsersSection";
import { ContextSection } from "../../../../components/organisms/Projects/ContextSection";
import { TimeSection } from "../../../../components/organisms/Projects/TimeSection";
import { predictXP } from "../../../../utils/ml";
import { IProject } from "../../../../interfaces/IProject";
import { getEmoji } from "../../../../utils/getEmoji";
import { useIsDisabled } from "../../../../hooks/useIsDisabled";
import { useProjectState } from "../../../../hooks/useProjectState";
import { Project } from "../../../../services/mongodb/Project";
import { ColorSection } from "../../../../components/organisms/Projects/ColorSection";
import { MaterialsSection } from "../../../../components/organisms/Projects/MaterialsSection";
import { ShapeSection } from "../../../../components/organisms/Projects/ShapeSection";
import { GeneralSection } from "../../../../components/organisms/Projects/GeneralSection";
import { BreadCrumb } from "../../../../components/organisms/BreadCrumb";

export const EditReferencePage = () => {
  const projectEditionType = "reference";
  const projectGetType = "reference";

  const { query } = useRouter();
  const { id } = query;

  const { sessionUserData } = useSession();
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
    XPInfo,
    setXPInfo,
    emoji,
  } = useProjectState({
    projectCreationType: projectEditionType,
    userEmail: sessionUserData.email,
  });

  const [projects, setProjects] = useState([] as IProject[]);

  const onEditProject = () => {
    api
      .put(`/projects/${id}`, projectData)
      .then((res) => {
        console.log(res.data);
        Router.push("/app/references");
      })
      .catch((err) => {
        console.log("ERROR EDITING PROJECT", err);
      });
  };

  useEffect(() => {
    (async () => {
      api
        .get(
          `/projects?userId=${sessionUserData.email}&projectType=${projectGetType}`
        )
        .then((res) => {
          const projects = res.data.projects as IProject[];
          setProjects(projects);
        })
        .catch((err) => {
          console.log("ERROR LOADING REFERENCES", err);
        });
    })();
  }, []);

  useEffect(() => {
    if (!id) return;

    (async () => {
      api
        .get(`/projects/${id}`)
        .then((res) => {
          const project = res?.data?.project as IProject;

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
        })
        .catch((err) => {
          console.log("ERROR LOADING PROJECT", err);
        });
    })();
  }, [id]);

  useEffect(() => {
    if (!projects.length) return;

    const { result } = predictXP({
      trainingData: projects,
      predict: projectData,
    });

    setXPInfo({ ...XPInfo, predicted: result });
  }, [
    shapeInfo,
    materialsAndContrast,
    colorsInfo,
    lightInfo,
    usersInfo,
    contextInfo,
    timeInfo,
    projects,
  ]);

  const { isDisabled } = useIsDisabled(generalInfo);

  const breadCrumb = [
    { href: "/app", label: "App" },
    { href: "/app/references", label: "Referências" },
    { href: "/app/references/edit", label: "Editar" },
  ];

  return (
    <AppTemplate
      header={<Header />}
      body={
        <VStack
          h="full"
          spacing="12"
          justify="flex-start"
          align="flex-start"
          w="full"
        >
          <Flex
            w="full"
            justify="space-between"
            minH="5vh"
            align="center"
            color="gray.500"
          >
            <BreadCrumb items={breadCrumb} />
          </Flex>

          <Flex
            w="full"
            justify="space-between"
            h="5vh"
            align="center"
            color="gray.500"
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.900">
              Editar Referência
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlineX />}
              borderRadius="full"
              colorScheme="blue"
              size="sm"
              onClick={() => handleNavigate("/app/projects")}
            />
          </Flex>

          <Flex w="full" h="40vh">
            <Image
              alt="Image"
              src={generalInfo.image}
              fallbackSrc="/no_image.jpg"
              objectFit="cover"
            />
          </Flex>

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
      }
    />
  );
};
