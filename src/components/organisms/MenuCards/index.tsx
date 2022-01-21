import { Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { onNavigate } from "../../../utils/onNavigate";

const menus = [
  {
    number: "01",
    title: "Referências",
    description:
      "Adicione referências de projetos parecidas com o que você irá projetar.",
    url: "/app/references",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "Avalie as referências de projeto. O UxArch vai aprender a pensar como seu usuário.",
    url: "/app/evaluations",
  },
  {
    number: "03",
    title: "Projeto",
    description:
      "Crie alternativas de projeto e adicone-as ao UxArch. O UxArch vai prever a experiência do usuário",
    url: "/app/projects",
  },
];

export const MenuCards = ({ isPublic }: { isPublic?: boolean }) => {
  return (
    <SimpleGrid w="full" gap="8" pb="8" columns={[1, 1, 2]}>
      {menus.map((menu) => {
        if (isPublic) return <MenuCard key={menu.title} menu={menu} />;

        return (
          <MenuCard
            key={menu.title}
            onClick={() => onNavigate(menu.url)}
            menu={menu}
          />
        );
      })}
    </SimpleGrid>
  );
};

interface CardProps {
  number: string;
  title: string;
  description: string;
}

interface MenuCardProps {
  menu: CardProps;
  onClick?: (e: any) => void;
}

const MenuCard = ({ menu, onClick }: MenuCardProps) => {
  return (
    <SimpleGrid
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      _hover={{ shadow: "md" }}
      p="8"
      position="relative"
      columns={1}
      alignItems="center"
      cursor="pointer"
      onClick={onClick && onClick}
    >
      <Text
        fontWeight="bold"
        textAlign="start"
        fontSize="8xl"
        style={{
          WebkitFontSmoothing: "antialiased",
          WebkitTextFillColor: "white",
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#3182CE",
        }}
      >
        {menu.number}
      </Text>
      <VStack w="full" align="flex-start">
        <Text fontSize="2xl" fontWeight="bold" textAlign="start">
          {menu.title}
        </Text>
        <Text fontSize="md" textAlign="start">
          {menu.description}
        </Text>
      </VStack>
    </SimpleGrid>
  );
};
