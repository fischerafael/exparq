import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";

interface IState {
  quantity: number;
  movement: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const UsersSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Quantidade"
        options={options.quantity}
        value={state.quantity}
        onChange={(e) =>
          setState({
            ...state,
            quantity: +e.target.value,
          })
        }
        helperText="Exemplo: Quantiade de pessoas presente na imagem que ilustra o projeto/obra"
      />
      <SelectInput
        label="Movimento"
        options={options.movement}
        value={state.movement}
        onChange={(e) =>
          setState({
            ...state,
            movement: +e.target.value,
          })
        }
        helperText="Exemplo: Intensidade de movimento por parte dos usuários presentes na imagem que ilustra o projeto/obra"
      />
    </VStack>
  );
};
