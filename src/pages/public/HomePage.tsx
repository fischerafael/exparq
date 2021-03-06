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

  return (
    <Flex
      w="screen"
      minH="100vh"
      justify="center"
      align="center"
      color="gray.900"
      flexDirection="column"
    >
      <VStack w="full" maxW="container.md" bg="white" px="8">
        <Flex minH="15vh" h="full" align="center">
          <Image src="/logo-black.svg" alt="UXArch" />
        </Flex>

        <VStack minH="85vh" h="full" spacing="8" justify="center">
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

      <VStack bg="gray.50" w="full" spacing="8" align="center" py="16">
        <VStack w="full" maxW="container.md" spacing="16">
          <Text fontSize="2xl" fontWeight="extrabold" lineHeight="1.15">
            Como funciona?
          </Text>
          <MenuCards isPublic={true} />
        </VStack>
      </VStack>
    </Flex>
  );
};
