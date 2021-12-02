import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, HStack } from "@chakra-ui/layout";
import { HiOutlineLogout } from "react-icons/hi";
import { useSession } from "../../../contexts/useSession";

export const Header = () => {
  const { handleLogout, sessionUserData } = useSession();

  const onLogout = () => {
    handleLogout();
  };

  return (
    <Flex h="full" justify="space-between" w="full" align="center">
      <Image src="/logo-black.svg" alt="UXArch" />
      <HStack spacing="4">
        <Avatar
          name={sessionUserData.displayName}
          src={sessionUserData.photoURL}
          bg="blue.500"
          color="white"
          size="sm"
        />

        <IconButton
          aria-label="Logout"
          icon={<HiOutlineLogout />}
          borderRadius="sm"
          colorScheme="blue"
          size="lg"
          variant="ghost"
          onClick={onLogout}
        >
          Sair
        </IconButton>
      </HStack>
    </Flex>
  );
};
