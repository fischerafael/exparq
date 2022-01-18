import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";

interface IState {
  height: number;
  size: number;
  complexity: number;
  shape: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const ShapeSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Altura"
        options={options.height}
        value={state.height}
        onChange={(e) => setState({ ...state, height: +e.target.value })}
      />
      <SelectInput
        label="Tamanho"
        options={options.size}
        value={state.size}
        onChange={(e) => setState({ ...state, size: +e.target.value })}
      />
      <SelectInput
        label="Complexidade Volumétrica"
        options={options.complexity}
        value={state.complexity}
        onChange={(e) => setState({ ...state, complexity: +e.target.value })}
      />
      <SelectInput
        label="Formas Dominantes"
        options={options.shape}
        value={state.shape}
        onChange={(e) => setState({ ...state, shape: +e.target.value })}
      />
    </VStack>
  );
};
