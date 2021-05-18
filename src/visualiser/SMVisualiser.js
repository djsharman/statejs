import fs from "fs";
import DefParser from "../definition/DefParser";
import path from "path";
import { exec } from "child_process";
import denatureSpec from "./denatureSpec";

/**
 * Generates a state machine based on an XML configuration
 *
 * Parses the state machine XML configuration
 * Creates the output directory if required
 * Generates the main class, state classes, abstract class and illegal state transition class
 */
class SMVisualiser {
  create(defFileName, defsDir, diagramLoc, genDenatured) {
    // the basic class name of the SM
    const className = this.getSMClassName(defFileName);
    console.log(`Visualising: ${className}`);

    const defFileWithPath = `${defsDir}/${defFileName}`;

    // load the XML specification for this SM
    const defXML = this.loadDefFile(defFileWithPath);
    const DefParse = new DefParser(defXML);

    this.checkDirExists(diagramLoc);

    const spec = DefParse.getSpecification();
    let states = spec.states;

    let denaturedFileName = "";

    if (genDenatured == true) {
      denaturedFileName = "_denatured";
      states = denatureSpec(states);
    }

    // get dot file output
    const output = this.getDotFileOutput(className, states);

    // write dot file
    const dotOutputFilename = `${diagramLoc}/${className}.dot`;
    fs.writeFileSync(dotOutputFilename, output, "utf8");

    // convert to png
    const pngOutputFilename = `${diagramLoc}/${className}${denaturedFileName}.png`;
    this.convertToPng(dotOutputFilename, pngOutputFilename);
  }

  convertToPng(dotOutputFilename, pngOutputFilename) {
    const command = `/usr/bin/dot -Tpng  ${dotOutputFilename}  -o ${pngOutputFilename}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`${stdout}`);
    });
  }

  /**
   * Convert states and transitions into dot format
   * @param {string} states
   */
  getDotFileOutput(className, states) {
    let output = "digraph " + className + " { \n";

    for (let state in states) {
      let data = states[state];
      let trans = data.transitions;

      for (var operation in trans) {
        var to = trans[operation];
        output += '"' + state + '" -> "' + to + '" [ color=blue, label = "' + operation + '"];\n';
      }
    }

    output += "}\n";

    return output;
  }

  getDefFilesArray(defFile, baseDir, defsDir) {
    const targetDir = baseDir;
  }

  checkDirExists(targetDir) {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
  }

  getSMClassName(filename) {
    const className = path.basename(filename, ".xml");
    return className;
  }

  loadDefFile(defFileName) {
    const defXML = fs.readFileSync(defFileName, "utf8");
    return defXML;
  }
}

export default SMVisualiser;
