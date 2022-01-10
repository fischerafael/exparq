import brain from "brainjs";
import { IProject } from "../interfaces/IProject";

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
// lol
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
];

net.train(trainingData);

const result = net.run([0, 0]);

console.log("RESULT", result);

interface IProps {
  trainingData: IProject[];
  predict: IProject;
}

const predictXP = ({ trainingData, predict }: IProps) => {
  return { trainingData: trainingData, predict: predict };
};

export { predictXP };
