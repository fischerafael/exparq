export interface IProject {
  _id?: string;
  projectColorPrimaryColor: number;
  projectColorSecondaryColor: number;
  projectColorTertiaryColor: number;
  projectColorTone: number;
  projectComplexity: number;
  projectContextIsContextLandmark: number;
  projectContextIsProjectLandmark: number;
  projectContextType: number;
  projectHeight: number;
  projectLightContrast: number;
  projectLightIntensity: number;
  projectLightOpen: number;
  projectLocation: string;
  projectMaterials: number;
  projectName: string;
  projectShape: number;
  projectSize: number;
  projectTemperature: number;
  projectTexture: number;
  projectTimeOfDay: number;
  projectType: string;
  projectURL: string;
  projectUsersMovement: number;
  projectUsersQuantity: number;
  projectWeather: number;
  projectXPPerceived: number;
  projectXPPredicted: number;
  userId: string;
}