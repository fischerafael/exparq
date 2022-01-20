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
      direction="column"
      textAlign="center"
      color="gray.900"
      position="relative"
    >
      <Flex justify="center" minH="10vh" w="full" shadow="xs" zIndex="10">
        <Flex w="full" h="full" maxW="container.md" px="4">
          {header}
        </Flex>
      </Flex>

      <Flex
        w="full"
        minH="90vh"
        bg="white"
        overflowY="auto"
        justify="center"
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
        <VStack w="full" h="full" maxW="container.md" p="4">
          {body}
        </VStack>
      </Flex>
    </Flex>
  );
};
