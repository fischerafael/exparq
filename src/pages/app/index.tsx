import { handleNavigate } from "../../utils/handleNavigate";
import { useSession } from "../../contexts/useSession";
import { Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";

import { Header } from "../../components/organisms/Header";
import { AppTemplate } from "../../components/templates/AppTemplate";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { IProject } from "../../interfaces/IProject";

export const AppPage = () => {
  const projectType = "reference";
  const { sessionUserData } = useSession();
  const [projects, setProjects] = useState([] as IProject[]);

  const isEvaluationDisabled = projects.length < 1 ? true : false;
  const isProjectDisabled = projects.length < 3 ? true : false;

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
          <Text textAlign="start" fontWeight="bold">
            Bem vindo, {sessionUserData.displayName}
          </Text>

          <Text textAlign="start">
            Primeiramente, adicione referências de projetos existentes. Quanto
            mais referências você adicionar, mais precisa será a previsão da
            inteligência artificial do UxArch.
          </Text>
          <Text textAlign="start">
            Em seguida, mostre estas referências para o usuário e peça para ele
            avaliar sua experiência. Desta forma, a inteligência artificial do
            UxArch vai aprender como ele pensa.
          </Text>
          <Text textAlign="start">
            Finalmente, adicione no UxArch as alternativas de projeto que você
            criou e deixe a inteligência artificial prever como o usuário irá
            experenciá-las.
          </Text>

          <Button
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            w="full"
            rightIcon={<HiOutlineChevronRight />}
            py="8"
            onClick={() => handleNavigate("/app/references")}
          >
            Referências
          </Button>

          <Button
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            w="full"
            rightIcon={<HiOutlineChevronRight />}
            py="8"
            isDisabled={isEvaluationDisabled}
            onClick={() => handleNavigate("/app/evaluations")}
          >
            Avaliações
          </Button>

          <Button
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            w="full"
            rightIcon={<HiOutlineChevronRight />}
            py="8"
            isDisabled={isProjectDisabled}
            onClick={() => handleNavigate("/app/projects")}
          >
            Projetos
          </Button>
        </VStack>
      }
    />
  );
};
