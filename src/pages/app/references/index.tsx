import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { HiOutlineChevronRight, HiOutlinePlus } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../utils/handleNavigate";
import { useEffect } from "react";
import { api } from "../../../services/axios";
import { useSession } from "../../../contexts/useSession";

export const ReferencesPage = () => {
  const projectType = "reference";
  const { sessionUserData } = useSession();

  useEffect(() => {
    api
      .get(
        `/projects?userId=${sessionUserData.email}&projectType=${projectType}`
      )
      .then((res) => {
        console.log("PROJECTS", res.data);
      })
      .catch((err) => {
        console.log("ERROR LOADING REFERENCES", err);
      });
  }, []);

  return (
    <AppTemplate
      header={<Header />}
      body={
        <VStack
          h="full"
          spacing="8"
          justify="flex-start"
          align="flex-start"
          w="full"
        >
          <Flex
            w="full"
            justify="space-between"
            h="5vh"
            align="center"
            color="gray.500"
          >
            <Breadcrumb separator={<HiOutlineChevronRight />}>
              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app">
                  App
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app/references">
                  Referências
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <Flex
            w="full"
            justify="space-between"
            h="5vh"
            align="center"
            color="gray.500"
          >
            <Text fontWeight="bold" fontSize="xl" color="gray.900">
              Referências
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlinePlus />}
              borderRadius="full"
              colorScheme="blue"
              size="sm"
              onClick={() => handleNavigate("/app/references/add")}
            />
          </Flex>
        </VStack>
      }
    />
  );
};
