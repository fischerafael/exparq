import Router from "next/router";
import { Image } from "@chakra-ui/image";
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Button, Icon, IconButton } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useSession } from "../../contexts/useSession";
import { Header } from "../../components/organisms/Header";
import { AppTemplate } from "../../components/templates/AppTemplate";

export const AppPage = () => {
  const { sessionUserData } = useSession();

  const onNavigate = (url: string) => {
    Router.push(url);
  };

  return (
    <AppTemplate
      header={<Header />}
      body={
        <VStack
          h="full"
          spacing="8"
          justify="center"
          align="flex-start"
          w="full"
          overflowY="auto"
        >
          <Text textAlign="start" fontWeight="bold">
            Bem vindo, {sessionUserData.displayName}
          </Text>

          <Text textAlign="start">
            Primeiramente, adicione referências de projetos existentes. Quanto
            mais referências você adicionar, mais preciso será a previsão da
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
            onClick={() => onNavigate("/app/references")}
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
          >
            Projetos
          </Button>
        </VStack>
      }
    />
  );
};
