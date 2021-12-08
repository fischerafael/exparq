import { IconButton, SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { HiOutlineTrash } from "react-icons/hi";
import { useEffect, useState } from "react";
import { api } from "../../../../../services/axios";

const options = [
  {
    emoji: "😱",
    hashtags: "#tenso #nervoso",
    value: 0,
  },
  {
    emoji: "😤",
    hashtags: "#estressado #irritado",
    value: 1 / 7,
  },
  {
    emoji: "😢",
    hashtags: "#triste #deprimido",
    value: 2 / 7,
  },
  {
    emoji: "🥱",
    hashtags: "#letárgico #fatigado",
    value: 3 / 7,
  },
  {
    emoji: "🙂",
    hashtags: "#calmo #relaxado",
    value: 4 / 7,
  },
  {
    emoji: "😃",
    hashtags: "#sereno #contente",
    value: 5 / 7,
  },
  {
    emoji: "😁",
    hashtags: "#feliz #alegre",
    value: 6 / 7,
  },
  {
    emoji: "🤪",
    hashtags: "#excitado #eufórico",
    value: 7 / 7,
  },
];

interface Props {
  projectURL: string;
  projectId: string;
  projectType: string;
  projectName: string;
  projectLocation: string;
  projectXPPerceived: number;
}

export const ProjectEvaluationCard = ({
  projectURL,
  projectId,
  projectXPPerceived,
  projectType,
  projectName,
  projectLocation,
}: Props) => {
  const [selectedOptionValue, setSelectedOptionValue] =
    useState(projectXPPerceived);

  const onChangeScore = (value: number) => {
    setSelectedOptionValue(value);
  };

  useEffect(() => {
    api
      .put(`/projects?projectId=${projectId}`, {
        projectXPPerceived: selectedOptionValue,
      })
      .then((res) => {
        console.log("XP PERCEIVED UPDATED SUCCESFFULLY", res.data);
      })
      .catch((err) => {
        console.log("ERROR UPDATING XP PERCEIVED", err);
      });
  }, [selectedOptionValue, projectId]);

  console.log("SELECTED OPTION VALUE", selectedOptionValue);

  return (
    <VStack
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      shadow="sm"
      _hover={{ shadow: "xl" }}
      p="0"
    >
      <Image alt="" w="full" h="30vh" objectFit="cover" src={projectURL} />

      <SimpleGrid
        columns={4}
        gap="4"
        spacing="0"
        w="full"
        align="flex-start"
        p="8"
      >
        {options.map((option) => (
          <ProjectEvaluationCardOption
            key={option.value}
            emoji={option.emoji}
            hashtags={option.hashtags}
            isActive={option.value === selectedOptionValue}
            onClick={() => onChangeScore(option.value)}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

interface IProjectEvaluationCardOption {
  emoji: string;
  hashtags: string;
  isActive?: boolean;
  onClick: () => void;
}

const ProjectEvaluationCardOption = ({
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
