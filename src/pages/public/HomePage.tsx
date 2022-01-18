import { useSession } from "../../contexts/useSession";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text, VStack } from "@chakra-ui/layout";

import brain from "brainjs";
import { useGetProjectsByUser } from "../../hooks/useGetProjectsByUser";

// "brain.js": "^2.0.0-alpha.12",

export const HomePage = () => {
  const { handleLogin } = useSession();

  const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
  // lol
  const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ];

  net.train(trainingData);

  const result = net.run([0, 0]);

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

  console.log("RESULT", result, projects);

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      textAlign="center"
      color="gray.900"
    >
      <VStack w="full" maxW="lg" bg="white" px="8">
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
