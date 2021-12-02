import { Flex, VStack } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  body: ReactNode;
}

export const AppTemplate = ({ header, body }: Props) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" maxW="lg" bg="white" px="8">
        <Flex h="15vh" w="full">
          {header}
        </Flex>

        <VStack h="85vh" w="full">
          {body}
        </VStack>
      </VStack>
    </Flex>
  );
};
