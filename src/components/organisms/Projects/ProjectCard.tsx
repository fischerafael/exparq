import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text, VStack } from "@chakra-ui/layout";
import { HiOutlineTrash } from "react-icons/hi";

interface Props {
  projectURL: string;
  projectType: string;
  projectName: string;
  projectLocation: string;
  onRemove: () => void;
}

export const ProjectCard = ({
  projectURL,
  projectType,
  projectName,
  projectLocation,
  onRemove,
}: Props) => {
  return (
    <VStack
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      cursor="pointer"
      shadow="sm"
      _hover={{ shadow: "xl" }}
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

      <VStack spacing="0" w="full" align="flex-start" p="4">
        <Text fontSize="xs">{projectType}</Text>
        <Text fontWeight="bold">{projectName}</Text>
        <Text fontSize="xs">{projectLocation}</Text>
      </VStack>
    </VStack>
  );
};
