import { Image } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";

import { useEffect, useState } from "react";
import { api } from "../../../../../services/axios";
import { OptionsGrid } from "../../../../../components/organisms/OptionsGrid";

interface Props {
  projectURL: string;
  projectId: string;
  projectType: string;
  projectName: string;
  projectLocation: string;
  projectXPPerceived: number;
}

export const ProjectEvaluationCard = ({
  projectURL,
  projectId,
  projectXPPerceived,
  projectType,
  projectName,
  projectLocation,
}: Props) => {
  const [selectedOptionValue, setSelectedOptionValue] =
    useState(projectXPPerceived);

  const onChangeScore = (value: number) => {
    setSelectedOptionValue(value);
  };

  useEffect(() => {
    api
      .put(`/projects?projectId=${projectId}`, {
        projectXPPerceived: selectedOptionValue,
      })
      .then((res) => {
        console.log("XP PERCEIVED UPDATED SUCCESFFULLY", res.data);
      })
      .catch((err) => {
        console.log("ERROR UPDATING XP PERCEIVED", err);
      });
  }, [selectedOptionValue, projectId]);

  console.log("SELECTED OPTION VALUE", selectedOptionValue);

  return (
    <VStack
      w="full"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      shadow="sm"
      _hover={{ shadow: "xl" }}
      p="0"
    >
      <Image alt="" w="full" h="30vh" objectFit="cover" src={projectURL} />

      <OptionsGrid
        selectedOptionValue={selectedOptionValue}
        onChange={onChangeScore}
      />
    </VStack>
  );
};
