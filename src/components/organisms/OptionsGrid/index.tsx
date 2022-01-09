import { SimpleGrid } from "@chakra-ui/react";
import { ProjectEvaluationCardOption } from "./ProjectEvaluationCardOption";

interface IOptionsGrid {
  selectedOptionValue: number;
  onChange: (value: number) => void;
}

export const OptionsGrid = ({
  selectedOptionValue,
  onChange,
}: IOptionsGrid) => {
  return (
    <SimpleGrid
      columns={4}
      gap="4"
      spacing="0"
      w="full"
      align="flex-start"
      p="8"
    >
      {options.map((option) => (
        <ProjectEvaluationCardOption
          key={option.value}
          emoji={option.emoji}
          hashtags={option.hashtags}
          isActive={option.value === selectedOptionValue}
          onClick={() => onChange(option.value)}
        />
      ))}
    </SimpleGrid>
  );
};

const options = [
  {
    emoji: "😱",
    hashtags: "#tenso #nervoso",
    value: 0,
  },
  {
    emoji: "😤",
    hashtags: "#estressado #irritado",
    value: 1 / 7,
  },
  {
    emoji: "😢",
    hashtags: "#triste #deprimido",
    value: 2 / 7,
  },
  {
    emoji: "🥱",
    hashtags: "#letárgico #fatigado",
    value: 3 / 7,
  },
  {
    emoji: "🙂",
    hashtags: "#calmo #relaxado",
    value: 4 / 7,
  },
  {
    emoji: "😃",
    hashtags: "#sereno #contente",
    value: 5 / 7,
  },
  {
    emoji: "😁",
    hashtags: "#feliz #alegre",
    value: 6 / 7,
  },
  {
    emoji: "🤪",
    hashtags: "#excitado #eufórico",
    value: 7 / 7,
  },
];
