import { useEffect, useState } from "react";
import { getEmoji } from "../utils/getEmoji";

interface IProps {
  projectCreationType: string;
  userEmail: string;
}

export const useProjectState = ({ projectCreationType, userEmail }: IProps) => {
  const [generalInfo, setGeneralInfo] = useState({
    image: "",
    name: "",
    location: "",
  });

  const [shapeInfo, setShapeInfo] = useState({
    height: 0,
    size: 0,
    complexity: 0,
    shape: 0,
  });

  const [materialsAndContrast, setMaterialsAndContrast] = useState({
    materials: 0,
    texture: 0,
  });

  const [colorsInfo, setColorsInfo] = useState({
    tone: 0,
    primaryColor: 0,
    secondaryColor: 0,
    tertiaryColor: 0,
  });

  const [lightInfo, setLightInfo] = useState({
    intensity: 0,
    open: 0,
    contrast: 0,
  });

  const [usersInfo, setUsersInfo] = useState({
    quantity: 0,
    movement: 0,
  });

  const [contextInfo, setContextInfo] = useState({
    type: 0,
    isProjectLandmark: 0,
    isContextLandmark: 0,
  });

  const [timeInfo, setTimeInfo] = useState({
    timeOfDay: 0,
    weather: 0,
    temperature: 0,
  });

  const [XPInfo, setXPInfo] = useState({
    perceived: 0,
    predicted: 0,
  });

  const projectData = {
    projectType: projectCreationType,
    userId: userEmail,
    projectName: generalInfo.name,
    projectLocation: generalInfo.location,
    projectURL: generalInfo.image,
    projectHeight: shapeInfo.height,
    projectSize: shapeInfo.size,
    projectComplexity: shapeInfo.complexity,
    projectShape: shapeInfo.shape,
    projectMaterials: materialsAndContrast.materials,
    projectTexture: materialsAndContrast.texture,
    projectColorTone: colorsInfo.tone,
    projectColorPrimaryColor: colorsInfo.primaryColor,
    projectColorSecondaryColor: colorsInfo.secondaryColor,
    projectColorTertiaryColor: colorsInfo.tertiaryColor,
    projectLightIntensity: lightInfo.intensity,
    projectLightOpen: lightInfo.open,
    projectLightContrast: lightInfo.contrast,
    projectUsersQuantity: usersInfo.quantity,
    projectUsersMovement: usersInfo.movement,
    projectContextType: contextInfo.type,
    projectContextIsProjectLandmark: contextInfo.isProjectLandmark,
    projectContextIsContextLandmark: contextInfo.isContextLandmark,
    projectTimeOfDay: timeInfo.timeOfDay,
    projectWeather: timeInfo.weather,
    projectTemperature: timeInfo.temperature,
    projectXPPerceived: XPInfo.perceived,
    projectXPPredicted: XPInfo.predicted,
  };

  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const emoji = getEmoji(XPInfo.predicted);
    setEmoji(emoji);
  }, [XPInfo]);

  console.log(projectData);
  console.log(projectData.projectXPPredicted);

  return {
    projectData,
    generalInfo,
    setGeneralInfo,
    shapeInfo,
    setShapeInfo,
    materialsAndContrast,
    setMaterialsAndContrast,
    colorsInfo,
    setColorsInfo,
    lightInfo,
    setLightInfo,
    usersInfo,
    setUsersInfo,
    contextInfo,
    setContextInfo,
    timeInfo,
    setTimeInfo,
    XPInfo,
    setXPInfo,
    emoji,
  };
};
