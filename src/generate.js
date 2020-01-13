import getDefFilesArray from "./definition/getDefFilesArray";
import SMGenerator from "./generator/SMGenerator";
import cleanArgStrings from "./utils/cleanArgStrings";

const args = process.argv.slice(2);

const baseDirRaw = args[0];
const baseDir = cleanArgStrings(baseDirRaw);
const templateDirRaw = args[1];
const templateDir = cleanArgStrings(templateDirRaw);
const defsDir = baseDir + "/_defs";

try {
  // get a list of the SMs defined in the _defs directory
  const defFiles = getDefFilesArray(defsDir);
  console.log(defFiles);

  defFiles.forEach(defFileName => {
    let generator = new SMGenerator();
    generator.create(defFileName, templateDir, defsDir, baseDir);
  });

  console.log("Generation complete");
} catch (e) {
  console.log(e);
}
