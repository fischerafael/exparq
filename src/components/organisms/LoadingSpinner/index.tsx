import { Spinner, Text, VStack } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <VStack w="full" justify="center" align="center" h="full" spacing="4">
      <Text>Carregando...</Text>
      <Spinner />
    </VStack>
  );
};
