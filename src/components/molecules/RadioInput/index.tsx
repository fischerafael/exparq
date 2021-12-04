import { Stack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

export const RadioInput = () => {
  return (
    <RadioGroup defaultValue="1">
      <Stack>
        <Radio value="1" isDisabled>
          Checked
        </Radio>
        <Radio value="2">Unchecked</Radio>
        <Radio value="3">Unchecked</Radio>
      </Stack>
    </RadioGroup>
  );
};
