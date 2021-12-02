import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import NextLink from "next/link";
import { Flex } from "@chakra-ui/layout";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Header } from "../../../components/organisms/Header";
import { AppTemplate } from "../../../components/templates/AppTemplate";

export const ReferencesPage = () => {
  return (
    <AppTemplate
      header={<Header />}
      body={
        <Flex h="full" spacing="8" justify="center" align="flex-start" w="full">
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
        </Flex>
      }
    />
  );
};
