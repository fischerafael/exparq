import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";

interface IState {
  type: number;
  isProjectLandmark: number;
  isContextLandmark: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const ContextSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Tipo"
        options={options.contextType}
        value={state.type}
        onChange={(e) =>
          setState({
            ...state,
            type: +e.target.value,
          })
        }
        helperText="Contexto (Vizinhança) no qual o projeto está inserido"
      />
      <SelectInput
        label="Grau de Interesse do Contexto"
        options={options.landmark}
        value={state.isProjectLandmark}
        onChange={(e) =>
          setState({
            ...state,
            isProjectLandmark: +e.target.value,
          })
        }
        helperText="Exemplo: Existem atrações turísticas ou pontos de interesse na vizinhança imediata?"
      />
      <SelectInput
        label="Nível de Interesse do Projeto"
        options={options.landmark}
        value={state.isContextLandmark}
        onChange={(e) =>
          setState({
            ...state,
            isContextLandmark: +e.target.value,
          })
        }
        helperText="Exemplo: O projeto se propõe a ser um ícone ou referência arquitetônica?"
      />
    </VStack>
  );
};
