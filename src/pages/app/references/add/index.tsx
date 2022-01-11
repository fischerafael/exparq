import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import Router from "next/router";
import { Flex, Text, VStack } from "@chakra-ui/react";
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
import { useState } from "react";

import { UsersSection } from "../../../../components/organisms/Projects/UsersSection";
import { ContextSection } from "../../../../components/organisms/Projects/ContextSection";
import { TimeSection } from "../../../../components/organisms/Projects/TimeSection";
import { LightSection } from "../../../../components/organisms/Projects/LightSection";
import { api } from "../../../../services/axios";
import { useSession } from "../../../../contexts/useSession";

export const AddReferencePage = () => {
  const projectType = "reference";
  const { sessionUserData } = useSession();

  const [generalInfo, setGeneralInfo] = useState({
    image: "",
    name: "",
    location: "",
  });

  const [shapeInfo, setShapeInfo] = useState({
    height: 0,
    size: 0,
    complexity: 0,
    shape: 0,
  });

  const [materialsAndContrast, setMaterialsAndContrast] = useState({
    materials: 0,
    texture: 0,
  });

  const [colorsInfo, setColorsInfo] = useState({
    tone: 0,
    primaryColor: 0,
    secondaryColor: 0,
    tertiaryColor: 0,
  });

  const [lightInfo, setLightInfo] = useState({
    intensity: 0,
    open: 0,
    contrast: 0,
  });

  const [usersInfo, setUsersInfo] = useState({
    quantity: 0,
    movement: 0,
  });

  const [contextInfo, setContextInfo] = useState({
    type: 0,
    isProjectLandmark: 0,
    isContextLandmark: 0,
  });

  const [timeInfo, setTimeInfo] = useState({
    timeOfDay: 0,
    weather: 0,
    temperature: 0,
  });

  const [XPInfo, setXPInfo] = useState({
    perceived: 0,
    predicted: 0,
  });

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
          <Flex
            w="full"
            justify="space-between"
            minH="5vh"
            align="center"
            color="gray.500"
          >
            <Breadcrumb separator={<HiOutlineChevronRight />}>
              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app">
                  App
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app/references">
                  Referências
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app/references">
                  Adicionar
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <Flex
            w="full"
            justify="space-between"
            h="5vh"
            align="center"
            color="gray.500"
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.900">
              Adicionar Referência
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlineX />}
              borderRadius="full"
              colorScheme="blue"
              size="sm"
              onClick={() => handleNavigate("/app/references")}
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

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">1. Informações Gerais</Text>

            <Input
              label="Imagem da Referência (URL)"
              placeholder="Ex: www.google.com/images/projeto.jpg"
              value={generalInfo.image}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, image: e.target.value })
              }
            />
            <Input
              label="Nome da Referência"
              placeholder="Ex: Casa 6"
              value={generalInfo.name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, name: e.target.value })
              }
            />
            <Input
              label="Localização da Referência"
              placeholder="Ex: Curitiba, Paraná"
              value={generalInfo.location}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, location: e.target.value })
              }
            />
          </VStack>

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">2. Forma</Text>

            <SelectInput
              label="Altura"
              options={height}
              value={shapeInfo.height}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, height: +e.target.value })
              }
            />
            <SelectInput
              label="Tamanho"
              options={size}
              value={shapeInfo.size}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, size: +e.target.value })
              }
            />
            <SelectInput
              label="Complexidade Volumétrica"
              options={complexity}
              value={shapeInfo.complexity}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, complexity: +e.target.value })
              }
            />
            <SelectInput
              label="Formas Dominantes"
              options={shape}
              value={shapeInfo.shape}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, shape: +e.target.value })
              }
            />
          </VStack>

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">3. Materiais e Contraste</Text>

            <SelectInput
              label="Materiais"
              options={materials}
              value={materialsAndContrast.materials}
              onChange={(e) =>
                setMaterialsAndContrast({
                  ...materialsAndContrast,
                  materials: +e.target.value,
                })
              }
            />
            <SelectInput
              label="Texturas"
              options={textures}
              value={materialsAndContrast.texture}
              onChange={(e) =>
                setMaterialsAndContrast({
                  ...materialsAndContrast,
                  texture: +e.target.value,
                })
              }
            />
          </VStack>

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">4. Cores</Text>

            <SelectInput
              label="Tons"
              options={tones}
              value={colorsInfo.tone}
              onChange={(e) =>
                setColorsInfo({
                  ...colorsInfo,
                  tone: +e.target.value,
                })
              }
            />
            <SelectInput
              label="Cor Primária"
              options={colors}
              value={colorsInfo.primaryColor}
              onChange={(e) =>
                setColorsInfo({
                  ...colorsInfo,
                  primaryColor: +e.target.value,
                })
              }
            />
            <SelectInput
              label="Cor Secundária"
              options={colors}
              value={colorsInfo.secondaryColor}
              onChange={(e) =>
                setColorsInfo({
                  ...colorsInfo,
                  secondaryColor: +e.target.value,
                })
              }
            />
            <SelectInput
              label="Cor Terciária"
              options={colors}
              value={colorsInfo.tertiaryColor}
              onChange={(e) =>
                setColorsInfo({
                  ...colorsInfo,
                  tertiaryColor: +e.target.value,
                })
              }
            />
          </VStack>

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
