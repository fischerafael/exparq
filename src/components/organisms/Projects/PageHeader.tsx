import { Flex, IconButton, Text } from "@chakra-ui/react";
import { HiOutlineX } from "react-icons/hi";
import { handleNavigate } from "../../../utils/handleNavigate";

interface Props {
  closeUrl: string;
  pageTitle: string;
}

export const PageHeader = ({ pageTitle, closeUrl }: Props) => {
  return (
    <Flex
      w="full"
      justify="space-between"
      h="5vh"
      align="center"
      color="gray.500"
    >
      <Text fontWeight="bold" fontSize="xl" color="gray.900">
        Editar Referência
      </Text>

      <IconButton
        aria-label="Logout"
        icon={<HiOutlineX />}
        borderRadius="full"
        colorScheme="blue"
        size="sm"
        onClick={() => handleNavigate(closeUrl)}
      />
    </Flex>
  );
};
