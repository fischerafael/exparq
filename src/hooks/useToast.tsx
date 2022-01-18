import { useToast } from "@chakra-ui/react";

export const useToats = () => {
  const toast = useToast();

  const onSuccess = (description: string) => {
    toast({
      title: "Sucesso.",
      description: description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const onError = (description: string) => {
    toast({
      title: "Erro.",
      description: description,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const onInfo = (description: string) => {
    toast({
      title: "Informação.",
      description: description,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    onSuccess,
    onError,
    onInfo,
  };
};
