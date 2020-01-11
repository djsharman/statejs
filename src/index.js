import getDefFilesArray from "./getDefFilesArray";
import SMGenerator from "./SMGenerator";

const args = process.argv.slice(2);

const baseDirRaw = args[0];
const baseDir = baseDirRaw.replace(/(\r\n|\n|\r)/gm, "");
const defsDir = baseDir + "_defs";

try {
  // get a list of the SMs defined in the _defs directory
  const defFiles = getDefFilesArray(defsDir);
  console.log(defFiles);

  defFiles.forEach(defFileName => {
    let generator = new SMGenerator();
    generator.create(defFileName, baseDir, defsDir);
  });
} catch (e) {
  console.log(e);
}
