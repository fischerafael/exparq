import { handleNavigate } from "../../utils/handleNavigate";
import { useSession } from "../../contexts/useSession";
import { Text, VStack } from "@chakra-ui/layout";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";

import { Header } from "../../components/organisms/Header";
import { AppTemplate } from "../../components/templates/AppTemplate";
import { useGetProjectsByUser } from "../../hooks/useGetProjectsByUser";
import { useLoading } from "../../hooks/useLoading";
import { useEffect } from "react";
import { LoadingSpinner } from "../../components/organisms/LoadingSpinner";
import { MenuCards } from "../../components/organisms/MenuCards";

export const AppPage = () => {
  const projectType = "reference";

  const { sessionUserData } = useSession();

  const { projects, isLoading } = useGetProjectsByUser({
    projectType: projectType,
  });

  const isEvaluationDisabled = projects.length < 1 ? true : false;
  const isProjectDisabled = projects.length < 3 ? true : false;

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
            <VStack w="full" align="flex-start" spacing="0">
              <Text textAlign="start" fontSize="sm">
                Bem vindo,
              </Text>
              <Text textAlign="start" fontSize="2xl" fontWeight="bold">
                {sessionUserData.displayName}
              </Text>
            </VStack>

            <MenuCards />
          </VStack>
        )
      }
    />
  );
};
