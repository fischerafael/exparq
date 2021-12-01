import { Image } from "@chakra-ui/image";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { Button, Icon } from "@chakra-ui/react";
import {
  HiChevronRight,
  HiOutlineChevronRight,
  HiOutlineHome,
} from "react-icons/hi";

export const AppPage = () => {
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
          <Button
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            variant="ghost"
          >
            Sair
          </Button>
        </Flex>

        <VStack
          h="85vh"
          spacing="8"
          justify="center"
          align="flex-start"
          w="full"
        >
          <Text textAlign="start" fontWeight="bold">
            Bem vindo, Rafael
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
