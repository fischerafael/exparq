import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { handleNavigate } from "../../../utils/handleNavigate";

export const ReferencesPage = () => {
  return (
    <AppTemplate
      header={<Header />}
      body={
        <Flex h="full" spacing="8" justify="center" align="flex-start" w="full">
          <Flex w="full" justify="space-between" h="5vh" align="center">
            <Text fontWeight="bold" fontSize="lg">
              Referências
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlineChevronLeft />}
              borderRadius="full"
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavigate("/app")}
            />
          </Flex>
        </Flex>
      }
    />
  );
};
