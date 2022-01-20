import { HStack, Text } from "@chakra-ui/react";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <HStack w="full" justify="flex-start">
      <Text fontWeight="bold">{title}</Text>
    </HStack>
  );
};
