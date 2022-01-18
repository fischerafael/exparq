import Router from "next/router";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../../../components/organisms/Header";
import { AppTemplate } from "../../../../components/templates/AppTemplate";
import { Button } from "@chakra-ui/button";

import { UsersSection } from "../../../../components/organisms/Projects/UsersSection";
import { ContextSection } from "../../../../components/organisms/Projects/ContextSection";
import { TimeSection } from "../../../../components/organisms/Projects/TimeSection";
import { LightSection } from "../../../../components/organisms/Projects/LightSection";
import { api } from "../../../../services/axios";
import { useSession } from "../../../../contexts/useSession";
import { useIsDisabled } from "../../../../hooks/useIsDisabled";
import { ImageSection } from "../../../../components/organisms/Projects/ImageSection";
import { BreadCrumb } from "../../../../components/organisms/BreadCrumb";
import { breadcrumbs } from "../../../../constants/breadCrumb";
import { PageHeader } from "../../../../components/organisms/Projects/PageHeader";
import { GeneralSection } from "../../../../components/organisms/Projects/GeneralSection";
import { ShapeSection } from "../../../../components/organisms/Projects/ShapeSection";
import { MaterialsSection } from "../../../../components/organisms/Projects/MaterialsSection";
import { ColorSection } from "../../../../components/organisms/Projects/ColorSection";
import { useProjectState } from "../../../../hooks/useProjectState";

export const AddReferencePage = () => {
  const projectType = "reference";
  const { sessionUserData } = useSession();

  const {
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
  } = useProjectState({
    projectCreationType: projectType,
    userEmail: sessionUserData.email,
  });

  const { isDisabled } = useIsDisabled(generalInfo);

  const onAddProject = () => {
    const projectData = {
      projectType: projectType,
      userId: sessionUserData.email,
      projectName: generalInfo.name,
      projectLocation: generalInfo.location,
      projectURL: generalInfo.image,
      projectHeight: shapeInfo.height,
      projectSize: shapeInfo.size,
      projectComplexity: shapeInfo.complexity,
      projectShape: shapeInfo.shape,
      projectMaterials: materialsAndContrast.materials,
      projectTexture: materialsAndContrast.texture,
      projectColorTone: colorsInfo.tone,
      projectColorPrimaryColor: colorsInfo.primaryColor,
      projectColorSecondaryColor: colorsInfo.secondaryColor,
      projectColorTertiaryColor: colorsInfo.tertiaryColor,
      projectLightIntensity: lightInfo.intensity,
      projectLightOpen: lightInfo.open,
      projectLightContrast: lightInfo.contrast,
      projectUsersQuantity: usersInfo.quantity,
      projectUsersMovement: usersInfo.movement,
      projectContextType: contextInfo.type,
      projectContextIsProjectLandmark: contextInfo.isProjectLandmark,
      projectContextIsContextLandmark: contextInfo.isContextLandmark,
      projectTimeOfDay: timeInfo.timeOfDay,
      projectWeather: timeInfo.weather,
      projectTemperature: timeInfo.temperature,
      projectXPPerceived: XPInfo.perceived,
      projectXPPredicted: XPInfo.predicted,
    };
    api
      .post("/projects", projectData)
      .then((res) => {
        console.log(res.data);
        Router.push("/app/references");
      })
      .catch((err) => {
        console.log("ERROR CREATING PROJECT", err);
      });
  };

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
          <BreadCrumb items={breadcrumbs.addReferenceBreadCrumb} />

          <PageHeader closeUrl="/app/add" pageTitle="Adicionar Referência" />

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
              onClick={onAddProject}
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
