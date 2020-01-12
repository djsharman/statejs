import fs from "fs";
import DefParser from "../definition/DefParser";
import path from "path";
import ExistingFileContent from "./ExistingFileContent";
import ejs from "ejs";

class SMGenerator {
  create(defFileName, templateDir, defsDir) {
    const className = this.getSMClassName(defFileName);

    console.log(`Processing: ${className}`);

    const defFileWithPath = `${defsDir}/${defFileName}`;

    // load the XML specification for this SM
    const defXML = this.loadDefFile(defFileWithPath);

    const DefParse = new DefParser(defXML);
    const targetDir = DefParse.getTargetDir();

    this.checkDirExists(targetDir);

    let data = {
      className: className,
      specification: DefParse.getSpecification(),
      sm_extends: DefParse.getSMExtends(),
      sm_implements: DefParse.getSMImplements()
    };

    this.generateAbstract(templateDir, className, data);
  }

  generateAbstract(templateDir, className, dataOrg) {
    const templateFile = `${templateDir}/AbstractStateClass.ejs`;

    let data = Object.assign(
      { onEnterState: true, onExitState: true },
      dataOrg
    );

    const output = ejs.renderFile(templateFile, data, null, function(err, str) {
      console.log(err);
      console.log(str);
    });
  }

  getDefFilesArray(defFile, baseDir, defsDir) {
    const targetDir = baseDir;
  }

  checkDirExists(targetDir) {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
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
