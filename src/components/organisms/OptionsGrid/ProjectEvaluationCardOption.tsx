import { Text, VStack } from "@chakra-ui/react";

interface IProjectEvaluationCardOption {
  emoji: string;
  hashtags: string;
  isActive?: boolean;
  onClick: () => void;
}

export const ProjectEvaluationCardOption = ({
  emoji,
  hashtags,
  isActive,
  onClick,
}: IProjectEvaluationCardOption) => {
  return (
    <VStack
      w="full"
      bg={isActive ? "blue.500" : "gray.50"}
      color={isActive ? "white" : "blue.500"}
      p="4"
      cursor="pointer"
      onClick={onClick}
    >
      <Text>{emoji}</Text>
      <Text fontSize="xs">{hashtags}</Text>
    </VStack>
  );
};
