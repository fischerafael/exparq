import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import {
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../utils/handleNavigate";
import { useEffect, useState } from "react";
import { api } from "../../../services/axios";
import { useSession } from "../../../contexts/useSession";
import { Image } from "@chakra-ui/image";
import { ProjectCard } from "../../../components/organisms/Projects/ProjectCard";

interface IProject {
  _id?: string;
  projectColorPrimaryColor: number;
  projectColorSecondaryColor: number;
  projectColorTertiaryColor: number;
  projectColorTone: number;
  projectComplexity: number;
  projectContextIsContextLandmark: number;
  projectContextIsProjectLandmark: number;
  projectContextType: number;
  projectHeight: number;
  projectLightContrast: number;
  projectLightIntensity: number;
  projectLightOpen: number;
  projectLocation: string;
  projectMaterials: number;
  projectName: string;
  projectShape: number;
  projectSize: number;
  projectTemperature: number;
  projectTexture: number;
  projectTimeOfDay: number;
  projectType: string;
  projectURL: string;
  projectUsersMovement: number;
  projectUsersQuantity: number;
  projectWeather: number;
  projectXPPerceived: number;
  projectXPPredicted: number;
  userId: string;
}

export const ReferencesPage = () => {
  const projectType = "reference";
  const { sessionUserData } = useSession();

  const [projects, setProjects] = useState<IProject[]>([]);

  console.log("PROJECTS STATE", projects);

  useEffect(() => {
    api
      .get(
        `/projects?userId=${sessionUserData.email}&projectType=${projectType}`
      )
      .then((res) => {
        const projects = res.data.projects as IProject[];
        setProjects(projects);
      })
      .catch((err) => {
        console.log("ERROR LOADING REFERENCES", err);
      });
  }, []);

  const onRemove = (projectId: string) => {
    api
      .delete(`/projects?projectId=${projectId}`)
      .then((res) => {
        setProjects(projects.filter((project) => project._id !== projectId));
      })
      .catch((err) => {
        console.log("ERROR DELETING");
      });
  };

  return (
    <AppTemplate
      header={<Header />}
      body={
        <VStack
          h="full"
          spacing="8"
          justify="flex-start"
          align="flex-start"
          w="full"
        >
          <Flex
            w="full"
            justify="space-between"
            h="5vh"
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
              Referências
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlinePlus />}
              borderRadius="full"
              colorScheme="blue"
              size="sm"
              onClick={() => handleNavigate("/app/references/add")}
            />
          </Flex>

          <VStack w="full" spacing="8">
            {projects.map((project) => (
              <ProjectCard
                projectType="Referência"
                projectName={project.projectName}
                projectLocation={project.projectLocation}
                projectURL={project.projectURL}
                key={project._id}
                onRemove={() => onRemove(project._id!)}
              />
            ))}
          </VStack>
        </VStack>
      }
    />
  );
};
