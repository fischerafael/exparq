import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { ProjectEvaluationCard } from "./components/ProjectEvaluationCard";
import { useGetProjectsByUser } from "../../../hooks/useGetProjectsByUser";
import { LoadingSpinner } from "../../../components/organisms/LoadingSpinner";

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
                  <BreadcrumbLink as={NextLink} href="/app/evaluations">
                    Avaliações
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
                Avaliações
              </Text>
            </Flex>

            <VStack w="full" spacing="8">
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
            </VStack>
          </VStack>
        )
      }
    />
  );
};
