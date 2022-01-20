import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { HiOutlineChevronRight, HiOutlinePlus } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../utils/handleNavigate";
import { api } from "../../../services/axios";
import { useSession } from "../../../contexts/useSession";
import { ProjectCard } from "../../../components/organisms/Projects/ProjectCard";
import { useGetProjectsByUser } from "../../../hooks/useGetProjectsByUser";
import { LoadingSpinner } from "../../../components/organisms/LoadingSpinner";

export const ProjectsPage = () => {
  const projectType = "project";
  const { push } = useRouter();

  const { projects, setProjects, isLoading } = useGetProjectsByUser({
    projectType,
  });

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

  const onNavigate = (projectId: string) => {
    push(`/app/projects/edit?id=${projectId}`);
  };

  return (
    <AppTemplate
      header={<Header />}
      body={
        isLoading ? (
          <LoadingSpinner />
        ) : (
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
                  <BreadcrumbLink as={NextLink} href="/app/projects">
                    Projetos
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
                Projetos
              </Text>

              <IconButton
                aria-label="Logout"
                icon={<HiOutlinePlus />}
                borderRadius="full"
                colorScheme="blue"
                size="sm"
                onClick={() => handleNavigate("/app/projects/add")}
              />
            </Flex>

            <SimpleGrid w="full" gap="8" columns={[1, 1, 2]}>
              {projects.map((project) => (
                <ProjectCard
                  projectType="Referência"
                  projectName={project.projectName}
                  projectLocation={project.projectLocation}
                  projectURL={project.projectURL}
                  predictedXP={project.projectXPPredicted}
                  key={project._id}
                  onRemove={() => onRemove(project._id!)}
                  onClick={() => onNavigate(project._id!)}
                />
              ))}
            </SimpleGrid>
          </VStack>
        )
      }
    />
  );
};
