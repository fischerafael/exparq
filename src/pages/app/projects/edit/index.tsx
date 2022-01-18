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
import { useLoading } from "../../../../hooks/useLoading";
import { LoadingSpinner } from "../../../../components/organisms/LoadingSpinner";
import { ImageSection } from "../../../../components/organisms/Projects/ImageSection";

export const EditProjectPage = () => {
  const projectCreationType = "project";
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
    projectCreationType: projectCreationType,
    userEmail: sessionUserData.email,
  });

  const [projects, setProjects] = useState([] as IProject[]);
  const [project, setProject] = useState({} as IProject);

  const { isLoading } = useLoading(true, project._id);

  const onEditProject = () => {
    api
      .put(`/projects/${id}`, projectData)
      .then((res) => {
        console.log(res.data);
        Router.push("/app/projects");
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
          console.log("ERROR LOADING PROJECTS", err);
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
            <Flex
              w="full"
              justify="space-between"
              minH="5vh"
              align="center"
              color="gray.500"
            >
              <Box
                position="absolute"
                bg="white"
                shadow="xl"
                zIndex="10"
                bottom="4"
                left="4"
                p="8"
                border="1px"
                borderColor="gray.200"
              >
                <Text fontSize="xs">XP Prevista</Text>

                <Text fontSize="xl">{emoji}</Text>
              </Box>
              <Breadcrumb separator={<HiOutlineChevronRight />}>
                <BreadcrumbItem>
                  <BreadcrumbLink as={NextLink} href="/app">
                    App
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={NextLink} href="/app/projects">
                    Projetos
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={NextLink} href="/app/projects/add">
                    Editar
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
                Editar Projeto
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

            <ImageSection image={generalInfo.image} />

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
