import { useSession } from "../../contexts/useSession";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text, VStack } from "@chakra-ui/layout";

import { useGetProjectsByUser } from "../../hooks/useGetProjectsByUser";
import { MenuCards } from "../../components/organisms/MenuCards";

export const HomePage = () => {
  const { handleLogin } = useSession();

  const onLogin = () => {
    handleLogin()
      .then(() => {
        console.log("LOGIN SUCCESSFUL");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { projects } = useGetProjectsByUser({});

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" maxW="container.md" bg="white" px="8">
        <MenuCards />

        <Flex h="15vh" align="center">
          <Image src="/logo-black.svg" alt="UXArch" />
        </Flex>

        <VStack h="70vh" spacing="8" justify="center">
          <Text fontSize="4xl" fontWeight="extrabold" lineHeight="1.15">
            Projete Experiências Arquitetônicas
          </Text>
          <Text>
            O Ux Arch utiliza Inteligência Artificial para ajudar arquitetos a
            preverem nos estágios iniciais do projeto como usuários irão se
            sentir nos espaços concebidos.
          </Text>

          <Button
            leftIcon={<FaGoogle />}
            borderRadius="sm"
            colorScheme="blue"
            size="lg"
            variant="solid"
            onClick={onLogin}
          >
            Projetar usando Google
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};
