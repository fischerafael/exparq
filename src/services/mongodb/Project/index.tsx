import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  projectType: String,
  userId: String,
  projectName: String,
  projectLocation: String,
  projectURL: String,
  projectHeight: Number,
  projectSize: Number,
  projectComplexity: Number,
  projectShape: Number,
  projectMaterials: Number,
  projectTexture: Number,
  projectColorTone: Number,
  projectColorPrimaryColor: Number,
  projectColorSecondaryColor: Number,
  projectColorTertiaryColor: Number,
  projectLightIntensity: Number,
  projectLightOpen: Number,
  projectLightContrast: Number,
  projectUsersQuantity: Number,
  projectUsersMovement: Number,
  projectContextType: Number,
  projectContextIsProjectLandmark: Number,
  projectContextIsContextLandmark: Number,
  projectTimeOfDay: Number,
  projectWeather: Number,
  projectTemperature: Number,
  projectXPPerceived: Number,
  projectXPPredicted: Number,
});

const Project = mongoose.models.Project || mongoose.model("Project", Schema);

export { Project };
