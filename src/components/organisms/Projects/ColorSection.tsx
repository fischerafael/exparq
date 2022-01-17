import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";

interface IState {
  tone: number;
  primaryColor: number;
  secondaryColor: number;
  tertiaryColor: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const ColorSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Tons"
        options={options.tones}
        value={state.tone}
        onChange={(e) =>
          setState({
            ...state,
            tone: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Cor Primária"
        options={options.colors}
        value={state.primaryColor}
        onChange={(e) =>
          setState({
            ...state,
            primaryColor: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Cor Secundária"
        options={options.colors}
        value={state.secondaryColor}
        onChange={(e) =>
          setState({
            ...state,
            secondaryColor: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Cor Terciária"
        options={options.colors}
        value={state.tertiaryColor}
        onChange={(e) =>
          setState({
            ...state,
            tertiaryColor: +e.target.value,
          })
        }
      />
    </VStack>
  );
};
