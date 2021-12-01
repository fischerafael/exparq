import { Flex, Text, VStack } from "@chakra-ui/layout";

export const HomePage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      fontFamily="sans-serif"
      textAlign="center"
    >
      <VStack w="full" maxW="lg">
        <Text fontWeight="bold">Ux Arch</Text>
        <Text fontSize="xl">Projete Experiências Arquitetônicas</Text>
        <Text>
          O Ux Arch utiliza Inteligência Artificial para ajudar arquitetos a
          preverem como os usuários se sentirão nos espaços projetados.
        </Text>
      </VStack>
    </Flex>
  );
};
