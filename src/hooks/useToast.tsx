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

  return {
    onSuccess,
  };
};
