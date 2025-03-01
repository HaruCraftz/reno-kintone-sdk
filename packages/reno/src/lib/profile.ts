import path from "path";
import fs from "fs-extra";
import { CONFIG_DIRECTORY } from "../constants/directory.js";
import { PROFILES_FILE_NAME } from "../constants/fileName.js";

export async function loadProfiles(): Promise<reno.Profiles> {
  const cwd = process.cwd();
  const configDir = path.join(cwd, CONFIG_DIRECTORY);
  const profilesPath = path.join(configDir, PROFILES_FILE_NAME);

  if (!(await fs.pathExists(profilesPath))) {
    throw new Error('Please run command "npm run setup" first.');
  }

  return await fs.readJson(profilesPath);
}
