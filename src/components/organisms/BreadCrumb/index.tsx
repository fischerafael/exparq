import {
  Breadcrumb as ChakraBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import NextLink from "next/link";

interface IBreadCrumbItem {
  href: string;
  label: string;
}

interface Props {
  items: IBreadCrumbItem[];
}

export const BreadCrumb = ({ items }: Props) => {
  return (
    <Flex
      w="full"
      justify="space-between"
      minH="5vh"
      align="center"
      color="gray.500"
    >
      <ChakraBreadCrumb separator={<HiOutlineChevronRight />}>
        {items?.map((item) => (
          <BreadcrumbItem key={item.href}>
            <BreadcrumbLink as={NextLink} href={item.href}>
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </ChakraBreadCrumb>
    </Flex>
  );
};
