import { SimpleGrid } from "@chakra-ui/react";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { HiOutlinePlus } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../utils/handleNavigate";
import { api } from "../../../services/axios";
import { ProjectCard } from "../../../components/organisms/Projects/ProjectCard";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../../../components/organisms/LoadingSpinner";
import { useToats } from "../../../hooks/useToast";
import { useGetProjectsByUser } from "../../../hooks/useGetProjectsByUser";
import { BreadCrumb } from "../../../components/organisms/BreadCrumb";
import { breadcrumbs } from "../../../constants/breadCrumb";

export const ReferencesPage = () => {
  const projectType = "reference";
  const { push } = useRouter();
  const { onSuccess, onError } = useToats();

  const { projects, setProjects, isLoading } = useGetProjectsByUser({
    projectType,
  });

  const onRemove = (projectId: string) => {
    api
      .delete(`/projects?projectId=${projectId}`)
      .then((res) => {
        setProjects(projects.filter((project) => project._id !== projectId));
        onSuccess("Referência removida com sucesso!");
      })
      .catch((err) => {
        onError("Falha ao remover referência!");
      });
  };

  const onNavigate = (projectId: string) => {
    push(`/app/references/edit?id=${projectId}`);
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
            <BreadCrumb items={breadcrumbs.referencesPageBreadCrumb} />

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

            <SimpleGrid w="full" gap="8" columns={[1, 1, 2]}>
              {projects.map((project) => (
                <ProjectCard
                  projectType="Referência"
                  projectName={project.projectName}
                  projectLocation={project.projectLocation}
                  projectURL={project.projectURL}
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
