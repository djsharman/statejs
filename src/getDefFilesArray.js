import * as fs from "fs";
import path from "path";

const DEF_FILE_EXT = ".xml";

/**
 * Get a list of files from the defs directory stored under the base dir
 * @param {string} defsDir
 */
function getDefFilesArray(defsDir) {
  const fileList = fs.readdirSync(defsDir);

  const defFiles = fileList.filter(function(file) {
    return path.extname(file).toLowerCase() === DEF_FILE_EXT;
  });

  if (defFiles.length == 0) {
    throw new Error("Your _defs directory is empty");
  }

  return defFiles;
}
export default getDefFilesArray;
