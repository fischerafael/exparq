import { Flex, Image } from "@chakra-ui/react";

interface Props {
  image: string;
}

export const ImageSection = ({ image }: Props) => {
  return (
    <Flex w="full" h="40vh">
      <Image
        alt="Image"
        src={image}
        fallbackSrc="/no_image.jpg"
        objectFit="cover"
        w="full"
        h="full"
      />
    </Flex>
  );
};
