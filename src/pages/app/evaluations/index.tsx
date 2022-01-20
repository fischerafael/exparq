import { Flex, Text, VStack, SimpleGrid } from "@chakra-ui/layout";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { ProjectEvaluationCard } from "./components/ProjectEvaluationCard";
import { useGetProjectsByUser } from "../../../hooks/useGetProjectsByUser";
import { LoadingSpinner } from "../../../components/organisms/LoadingSpinner";
import { BreadCrumb } from "../../../components/organisms/BreadCrumb";
import { breadcrumbs } from "../../../constants/breadCrumb";

export const EvaluationsPage = () => {
  const projectType = "reference";

  const { projects, isLoading } = useGetProjectsByUser({
    projectType,
  });

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
            <BreadCrumb items={breadcrumbs.evaluationPageBreadCrumb} />

            <Flex
              w="full"
              justify="space-between"
              h="5vh"
              align="center"
              color="gray.500"
            >
              <Text fontWeight="bold" fontSize="xl" color="gray.900">
                Avaliações
              </Text>
            </Flex>

            <SimpleGrid w="full" gap="8" columns={[1, 1, 2]}>
              {projects.map((project) => (
                <ProjectEvaluationCard
                  projectType="Referência"
                  projectName={project.projectName}
                  projectLocation={project.projectLocation}
                  projectURL={project.projectURL}
                  projectId={project._id!}
                  projectXPPerceived={project.projectXPPerceived}
                  key={project._id}
                />
              ))}
            </SimpleGrid>
          </VStack>
        )
      }
    />
  );
};
