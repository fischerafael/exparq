import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Select, SelectProps } from "@chakra-ui/select";

interface IOption {
  value: number;
  label: string;
}

interface Props extends SelectProps {
  options: IOption[];
  label: string;
}

export const SelectInput = ({ label, options, ...props }: Props) => {
  return (
    <FormControl w="full">
      <FormLabel fontSize="xs">{label}</FormLabel>
      <Select borderRadius="sm" value={0} {...props}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
