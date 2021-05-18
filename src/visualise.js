import getDefFilesArray from "./definition/getDefFilesArray";
import cleanArgStrings from "./utils/cleanArgStrings";
import SMVisualiser from "./visualiser/SMVisualiser";

const args = process.argv.slice(2);

const baseDirRaw = args[0];
const baseDir = cleanArgStrings(baseDirRaw);
const defsDir = baseDir + "/_defs";
const diagramLoc = defsDir + "/diagrams";
let genDenatured = false;

// check if we should generate a denatured diagram
if (typeof args[1] !== "undefined") {
  genDenatured = true;
}

try {
  // get a list of the SMs defined in the _defs directory
  const defFiles = getDefFilesArray(defsDir);
  console.log(defFiles);

  defFiles.forEach((defFileName) => {
    let generator = new SMVisualiser();
    generator.create(defFileName, defsDir, diagramLoc, genDenatured);
  });

  console.log("Visualisation complete");
} catch (e) {
  console.log(e);
}
