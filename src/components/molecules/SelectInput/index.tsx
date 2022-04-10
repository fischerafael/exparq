import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { Select, SelectProps } from "@chakra-ui/select";

interface IOption {
  value: number;
  label: string;
}

interface Props extends SelectProps {
  options: IOption[];
  label: string;
  helperText?: string;
}

export const SelectInput = ({
  label,
  options,
  helperText,
  ...props
}: Props) => {
  return (
    <VStack
      as={FormControl}
      spacing="0"
      w="full"
      align="flex-start"
      justify="flex-start"
    >
      <FormLabel fontSize="xs">{label}</FormLabel>
      <Select borderRadius="sm" value={0} {...props}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Text color="gray.500" fontSize="xs">
        {helperText}
      </Text>
    </VStack>
  );
};
