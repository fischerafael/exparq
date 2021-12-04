import { Text, VStack } from "@chakra-ui/layout";
import { SelectInput } from "../../../../../components/molecules/SelectInput";
import { options } from "../../../../../constants/options";

interface IState {
  timeOfDay: number;
  weather: number;
  temperature: number;
}

interface Props {
  sectionTitle: string;
  state: IState;
  setState: (data: IState) => void;
}

export const TimeSection = ({ sectionTitle, state, setState }: Props) => {
  return (
    <VStack h="full" w="full" spacing="4" align="flex-start">
      <Text fontWeight="bold">{sectionTitle}</Text>

      <SelectInput
        label="Período do Dia"
        options={options.timeOfDay}
        value={state.timeOfDay}
        onChange={(e) =>
          setState({
            ...state,
            timeOfDay: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Tempo"
        options={options.weather}
        value={state.weather}
        onChange={(e) =>
          setState({
            ...state,
            weather: +e.target.value,
          })
        }
      />
      <SelectInput
        label="Temperatura"
        options={options.temperature}
        value={state.temperature}
        onChange={(e) =>
          setState({
            ...state,
            temperature: +e.target.value,
          })
        }
      />
    </VStack>
  );
};
