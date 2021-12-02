import { Image } from "@chakra-ui/image";
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Button, Icon, IconButton } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";
import {
  HiChevronRight,
  HiOutlineChevronRight,
  HiOutlineHome,
} from "react-icons/hi";
import { useSession } from "../../contexts/useSession";

export const AppPage = () => {
  const { handleLogout, sessionUserData } = useSession();

  const onLogout = () => {
    handleLogout();
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" maxW="lg" bg="white" px="8">
        <Flex h="15vh" justify="space-between" w="full" align="center">
          <Image src="/logo-black.svg" alt="UXArch" />
          <HStack spacing="4">
            <Avatar
              name={sessionUserData.displayName}
              src={sessionUserData.photoURL}
              bg="blue.500"
              color="white"
              size="sm"
            />

            <IconButton
              aria-label="Logout"
              icon={<HiOutlineLogout />}
              borderRadius="sm"
              colorScheme="blue"
              size="lg"
              variant="ghost"
              onClick={onLogout}
            >
              Sair
            </IconButton>
          </HStack>
        </Flex>

        <VStack
          h="85vh"
          spacing="8"
          justify="center"
          align="flex-start"
          w="full"
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
      </VStack>
    </Flex>
  );
};
