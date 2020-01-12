import ejs from "ejs";
import ExistingFileContent from "./ExistingFileContent";
import fs from "fs";

class StateClassGen {
  generate(templateDir, targetDir, stateName, smClassName, stateOrg) {
    const templateFile = `${templateDir}/StateClass.ejs`;
    const abstractName = `Abstract${smClassName}State`;
    const targetFileName = `${targetDir}/${stateName}.js`;

    // grab the existing content if there is any
    const existingFileContent = new ExistingFileContent();
    existingFileContent.procExistingContent(targetFileName);
    const section1 = existingFileContent.getSection1();
    const section2 = existingFileContent.getSection2();

    const transitions = this.processExistingTransitions(
      existingFileContent,
      stateOrg.transitions
    );

    let data = {
      className: stateName,
      section1: section1,
      section2: section2,
      onEnterState: true,
      onExitState: true,
      transitions: transitions,
      abstractName: abstractName
    };

    ejs.renderFile(templateFile, data, null, function(err, str) {
      if (err) {
        console.log(err);
      }
      if (str) {
        fs.writeFileSync(targetFileName, str, "utf8");
      }
    });
  }

  processExistingTransitions(existingFileContent, transitions) {
    let requiredTransitions = {};
    for (let transition in transitions) {
      if (!existingFileContent.methodExists(transition)) {
        // push property into the object
        requiredTransitions[transition] = transitions[transition];
      }
    }
    return requiredTransitions;
  }
}
export default StateClassGen;
