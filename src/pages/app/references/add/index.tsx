import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";
import { Header } from "../../../../components/organisms/Header";
import { AppTemplate } from "../../../../components/templates/AppTemplate";
import { IconButton } from "@chakra-ui/button";
import { handleNavigate } from "../../../../utils/handleNavigate";
import { Image } from "@chakra-ui/image";
import { Input } from "../../../../components/molecules/Input";
import { SelectInput } from "../../../../components/molecules/SelectInput";
import { height, shape, size, complexity } from "../../../../constants/options";
import { useState } from "react";

export const AddReferencePage = () => {
  const [generalInfo, setGeneralInfo] = useState({
    image: "",
    name: "",
    location: "",
  });

  const [shapeInfo, setShapeInfo] = useState({
    height: 0,
    size: 0,
    complexity: 0,
    shape: 0,
  });

  console.log("PROJECT STATE", { ...generalInfo, ...shapeInfo });

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
            minH="5vh"
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
            <Image
              alt="Image"
              src={generalInfo.image}
              fallbackSrc="/no_image.jpg"
              objectFit="cover"
            />
          </Flex>

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">1. Informações Gerais</Text>

            <Input
              label="Imagem da Referência (URL)"
              placeholder="Ex: www.google.com/images/projeto.jpg"
              value={generalInfo.image}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, image: e.target.value })
              }
            />
            <Input
              label="Nome da Referência"
              placeholder="Ex: Casa 6"
              value={generalInfo.name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, name: e.target.value })
              }
            />
            <Input
              label="Localização da Referência"
              placeholder="Ex: Curitiba, Paraná"
              value={generalInfo.location}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, location: e.target.value })
              }
            />
          </VStack>

          <VStack h="full" w="full" spacing="4" align="flex-start">
            <Text fontWeight="bold">2. Forma</Text>

            <SelectInput
              label="Altura"
              options={height}
              value={shapeInfo.height}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, height: +e.target.value })
              }
            />
            <SelectInput
              label="Tamanho"
              options={size}
              value={shapeInfo.size}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, size: +e.target.value })
              }
            />
            <SelectInput
              label="Complexidade Volumétrica"
              options={complexity}
              value={shapeInfo.complexity}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, complexity: +e.target.value })
              }
            />
            <SelectInput
              label="Formas Dominantes"
              options={shape}
              value={shapeInfo.shape}
              onChange={(e) =>
                setShapeInfo({ ...shapeInfo, shape: +e.target.value })
              }
            />
          </VStack>

          <Flex w="full" minH="5vh"></Flex>
        </VStack>
      }
    />
  );
};
