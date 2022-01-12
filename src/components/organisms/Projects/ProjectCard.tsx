import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { HiOutlineChevronRight, HiOutlineTrash } from "react-icons/hi";
import { getEmoji } from "../../../utils/getEmoji";

interface Props {
  projectURL: string;
  projectType: string;
  projectName: string;
  projectLocation: string;
  predictedXP?: number;
  onRemove: () => void;
  onClick: () => void;
}

export const ProjectCard = ({
  projectURL,
  projectType,
  projectName,
  projectLocation,
  predictedXP,
  onRemove,
  onClick,
}: Props) => {
  return (
    <VStack
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      overflow="hidden"
      _hover={{ shadow: "md" }}
      p="0"
    >
      <Image alt="" w="full" h="30vh" objectFit="cover" src={projectURL} />

      <IconButton
        aria-label="Remove"
        position="absolute"
        right="4"
        top="4"
        colorScheme="blue"
        icon={<HiOutlineTrash />}
        onClick={onRemove}
      />

      <VStack
        spacing="0"
        w="full"
        align="flex-start"
        p="4"
        pb="0"
        position="relative"
      >
        {predictedXP && (
          <VStack position="absolute" right="4" bottom="4" align="flex-end">
            <Text fontSize="xs">XP Prevista</Text>
            <Text>{getEmoji(predictedXP)}</Text>
          </VStack>
        )}
        <Text fontSize="xs">{projectType}</Text>
        <Text fontWeight="bold">{projectName}</Text>
        <Text fontSize="xs">{projectLocation}</Text>
      </VStack>

      <VStack w="full" align="flex-end">
        <IconButton
          onClick={onClick}
          borderRadius="0"
          aria-label="Edit"
          bg="transparent"
          color="blue.500"
          icon={<HiOutlineChevronRight />}
        />
      </VStack>
    </VStack>
  );
};
