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
      align="center"
      direction="column"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" px="4">
        <Flex h="15vh" w="full" maxW="lg">
          {header}
        </Flex>
      </VStack>

      <VStack
        w="full"
        bg="white"
        px="4"
        pb="8"
        overflowY="auto"
        h="85vh"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f1f1f1",
            borderRadius: "24px",
          },
        }}
      >
        <VStack w="full" maxW="lg">
          {body}
        </VStack>
      </VStack>
    </Flex>
  );
};
