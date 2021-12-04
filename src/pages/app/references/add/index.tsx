import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";
import { Header } from "../../../../components/organisms/Header";
import { AppTemplate } from "../../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../../utils/handleNavigate";
import { Image } from "@chakra-ui/image";
import { Input } from "../../../../components/molecules/Input";

export const AddReferencePage = () => {
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

              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href="/app/references">
                  Adicionar
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
              Adicionar Referência
            </Text>

            <IconButton
              aria-label="Logout"
              icon={<HiOutlineX />}
              borderRadius="full"
              colorScheme="blue"
              size="sm"
              onClick={() => handleNavigate("/app/references")}
            />
          </Flex>

          <Flex w="full" h="40vh">
            <Image alt="Image" fallbackSrc="/no_image.jpg" objectFit="cover" />
          </Flex>

          <VStack w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">1. Informações Gerais</Text>

            <Input
              label="Imagem da Referência (URL)"
              placeholder="Ex: www.google.com/images/projeto.jpg"
            />

            <Input label="Nome da Referência" placeholder="Ex: Casa 6" />

            <Input
              label="Localização da Referência"
              placeholder="Ex: Curitiba, Paraná"
            />
          </VStack>
        </VStack>
      }
    />
  );
};
