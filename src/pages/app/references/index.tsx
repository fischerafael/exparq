import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import {
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineTrash,
} from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../utils/handleNavigate";
import { useEffect } from "react";
import { api } from "../../../services/axios";
import { useSession } from "../../../contexts/useSession";
import { Image } from "@chakra-ui/image";

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

          <VStack
            w="full"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            overflow="hidden"
            position="relative"
            cursor="pointer"
            _hover={{ shadow: "xl" }}
            p="0"
          >
            <Image
              alt=""
              w="full"
              h="30vh"
              objectFit="cover"
              src="data:image/jpeg;base64,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"
            />

            <IconButton
              aria-label="Remove"
              position="absolute"
              right="4"
              top="4"
              colorScheme="blue"
              icon={<HiOutlineTrash />}
            />

            <VStack spacing="0" w="full" align="flex-start" p="4">
              <Text fontSize="xs">Referência</Text>
              <Text fontWeight="bold">Casa 1</Text>
              <Text fontSize="xs">Curitiba, Paraná</Text>
            </VStack>
          </VStack>
        </VStack>
      }
    />
  );
};
