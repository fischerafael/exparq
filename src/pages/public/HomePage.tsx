import { Button } from "@chakra-ui/button";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { FaGoogle } from "react-icons/fa";

export const HomePage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" maxW="lg" bg="white" px="8">
        <Flex h="30vh" align="center">
          <Text fontWeight="extrabold">Ux Arch</Text>
        </Flex>

        <VStack h="70vh" spacing="8" justify="center">
          <Text fontSize="4xl" fontWeight="extrabold" lineHeight="1.15">
            Projete Experiências Arquitetônicas
          </Text>
          <Text>
            O Ux Arch utiliza Inteligência Artificial para ajudar arquitetos a
            preverem nos estágios iniciais do projeto como usuários irão se
            sentir nos espaços concebidos.
          </Text>

          <Button
            leftIcon={<FaGoogle />}
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            variant="solid"
          >
            Projetar
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};
