import { Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const menus = [
  {
    number: "01",
    title: "Referências",
    description:
      "Adicione referências de projetos parecidas com o que você irá projetar.",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "Avalie as referências de projeto. O UxArch vai aprender a pensar como seu usuário.",
  },
  {
    number: "03",
    title: "Projeto",
    description:
      "Crie alternativas de projeto e adicone-as ao UxArch. O UxArch vai prever a experiência do usuário",
  },
];

export const MenuCards = () => {
  return (
    <SimpleGrid w="full" gap="8" py="8" columns={[1, 1, 2]}>
      {menus.map((menu) => (
        <MenuCard key={menu.title} onClick={() => {}} menu={menu} />
      ))}
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
  onClick: (e: any) => void;
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <SimpleGrid
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      _hover={{ shadow: "md" }}
      p="8"
      position="relative"
      cursor="pointer"
      columns={1}
      alignItems="center"
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
      <VStack w="full" align="flex-end">
        <Button variant="ghost" borderRadius="0" colorScheme="blue">
          Acessar
        </Button>
      </VStack>
    </SimpleGrid>
  );
};
