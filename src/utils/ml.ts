import brain from "brainjs";
import { IProject } from "../interfaces/IProject";

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

interface IProps {
  trainingData: IProject[];
  predict: IProject;
}

const predictXP = ({ trainingData, predict }: IProps) => {
  if (!trainingData.length)
    return {
      trainingData: [],
      predict: [],
      result: 0,
    };

  const formatedTrainningData = trainingData?.map((data) => {
    const {
      projectColorPrimaryColor,
      projectColorSecondaryColor,
      projectColorTertiaryColor,
      projectColorTone,
      projectComplexity,
      projectContextIsContextLandmark,
      projectContextIsProjectLandmark,
      projectContextType,
      projectHeight,
      projectLightContrast,
      projectLightIntensity,
      projectLightOpen,
      projectMaterials,
      projectShape,
      projectSize,
      projectTemperature,
      projectTexture,
      projectTimeOfDay,
      projectUsersMovement,
      projectUsersQuantity,
      projectWeather,
      projectXPPerceived,
    } = data;
    const formatedInput = [
      projectColorPrimaryColor,
      projectColorSecondaryColor,
      projectColorTertiaryColor,
      projectColorTone,
      projectComplexity,
      projectContextIsContextLandmark,
      projectContextIsProjectLandmark,
      projectContextType,
      projectHeight,
      projectLightContrast,
      projectLightIntensity,
      projectLightOpen,
      projectMaterials,
      projectShape,
      projectSize,
      projectTemperature,
      projectTexture,
      projectTimeOfDay,
      projectUsersMovement,
      projectUsersQuantity,
      projectWeather,
    ];
    return { input: formatedInput, output: [projectXPPerceived] };
  });

  net.train(formatedTrainningData);

  const {
    projectColorPrimaryColor,
    projectColorSecondaryColor,
    projectColorTertiaryColor,
    projectColorTone,
    projectComplexity,
    projectContextIsContextLandmark,
    projectContextIsProjectLandmark,
    projectContextType,
    projectHeight,
    projectLightContrast,
    projectLightIntensity,
    projectLightOpen,
    projectMaterials,
    projectShape,
    projectSize,
    projectTemperature,
    projectTexture,
    projectTimeOfDay,
    projectUsersMovement,
    projectUsersQuantity,
    projectWeather,
  } = predict;

  const formatedPredict = [
    projectColorPrimaryColor,
    projectColorSecondaryColor,
    projectColorTertiaryColor,
    projectColorTone,
    projectComplexity,
    projectContextIsContextLandmark,
    projectContextIsProjectLandmark,
    projectContextType,
    projectHeight,
    projectLightContrast,
    projectLightIntensity,
    projectLightOpen,
    projectMaterials,
    projectShape,
    projectSize,
    projectTemperature,
    projectTexture,
    projectTimeOfDay,
    projectUsersMovement,
    projectUsersQuantity,
    projectWeather,
  ];

  const result = net.run(formatedPredict);

  return {
    trainingData: formatedTrainningData,
    predict: formatedPredict,
    result,
  };
};

export { predictXP };
