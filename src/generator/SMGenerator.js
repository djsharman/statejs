import fs from "fs";
import DefParser from "../definition/DefParser";
import path from "path";
import AbstractClassGen from "./AbstractClassGen";
import StateClassGen from "./StateClassGen";
import SMClassGen from "./SMClassGen";

class SMGenerator {
  create(defFileName, templateDir, defsDir, baseDir) {
    // the basic class name of the SM
    const className = this.getSMClassName(defFileName);

    console.log(`Processing: ${className}`);

    const defFileWithPath = `${defsDir}/${defFileName}`;

    // load the XML specification for this SM
    const defXML = this.loadDefFile(defFileWithPath);

    const DefParse = new DefParser(defXML);
    const targetDir = baseDir + "/" + DefParse.getTargetDir() + "/" + className;

    this.checkDirExists(targetDir);

    let data = {
      className: className,
      specification: DefParse.getSpecification(),
      sm_extends: DefParse.getSMExtends(),
      sm_implements: DefParse.getSMImplements()
    };

    // Process the single abstract state class, this is the base class for all states
    const abstractClassGen = new AbstractClassGen();
    abstractClassGen.generate(templateDir, targetDir, className, data);

    // Process all states, one class per state
    for (let stateName in data.specification.states) {
      const state = data.specification.states[stateName];
      const stateClassGen = new StateClassGen();
      stateClassGen.generate(
        templateDir,
        targetDir,
        stateName,
        className,
        state
      );
    }

    // Process the primary class of the SM
    const smClassGen = new SMClassGen();
    smClassGen.generate(templateDir, targetDir, className, data);
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

export default SMGenerator;
