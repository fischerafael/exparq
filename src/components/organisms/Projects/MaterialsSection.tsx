import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";

interface IState {
  materials: number;
  texture: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const MaterialsSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Materiais"
        options={options.materials}
        value={state.materials}
        onChange={(e) =>
          setState({
            ...state,
            materials: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Texturas"
        options={options.textures}
        value={state.texture}
        onChange={(e) =>
          setState({
            ...state,
            texture: +e.target.value,
          })
        }
      />
    </VStack>
  );
};
