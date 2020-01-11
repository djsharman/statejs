import fs from "fs";
import DefParser from "./DefParser";
import path from "path";

class SMGenerator {
  create(defFileName, baseDir, defsDir) {
    const className = this.getSMClassName(defFileName);

    console.log(`Processing: ${className}`);

    const defFileWithPath = `${defsDir}/${defFileName}`;

    // load the XML specification for this SM
    const defXML = this.loadDefFile(defFileWithPath);

    let DefParse = new DefParser(defXML);
    let targetDir = DefParse.getTargetDir();
  }

  getDefFilesArray(defFile, baseDir, defsDir) {
    const targetDir = baseDir;
  }

  checkDirExists(targetDir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
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
