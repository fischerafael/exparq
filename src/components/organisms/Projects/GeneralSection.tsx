import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../molecules/SelectInput";
import { options } from "../../../constants/options";
import { Input } from "../../molecules/Input";

interface IState {
  image: string;
  name: string;
  location: string;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const GeneralSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <Input
        label="Imagem da Referência (URL)"
        placeholder="Ex: www.google.com/images/projeto.jpg"
        value={state.image}
        onChange={(e) => setState({ ...state, image: e.target.value })}
      />
      <Input
        label="Nome da Referência"
        placeholder="Ex: Casa 6"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <Input
        label="Localização da Referência"
        placeholder="Ex: Curitiba, Paraná"
        value={state.location}
        onChange={(e) => setState({ ...state, location: e.target.value })}
      />
    </VStack>
  );
};
