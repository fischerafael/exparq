import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../../../../components/molecules/SelectInput";
import { options } from "../../../../../constants/options";

interface IState {
  intensity: number;
  open: number;
  contrast: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const LightSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Contraste Visual"
        options={options.contrast}
        value={state.contrast}
        onChange={(e) =>
          setState({
            ...state,
            contrast: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Intensidade da Luz"
        options={options.lightIntensity}
        value={state.intensity}
        onChange={(e) =>
          setState({
            ...state,
            intensity: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Aberturas"
        options={options.open}
        value={state.open}
        onChange={(e) =>
          setState({
            ...state,
            open: +e.target.value,
          })
        }
      />
    </VStack>
  );
};
