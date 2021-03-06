import ejs from "ejs";
import ExistingFileContent from "./file-parsers/ExistingFileContent";
import fs from "fs";

/**
 * Creates the state classes
 */
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

    const allTransitions = this.dedupTransitions(
      stateOrg.transitions,
      stateName
    );

    let data = {
      className: stateName,
      section1: section1,
      section2: section2,
      onEnterState: !existingFileContent.methodExists("onEnterState"),
      onExitState: !existingFileContent.methodExists("onExitState"),
      constructor: !existingFileContent.methodExists("constructor"),
      transitions: transitions,
      allTransitions: allTransitions, // all transitions needed for the include statement
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

  /**
   * Sometime we have transitions leading to the same state.
   * We need to remove the duplicates otherwise we will end
   * up with multiple duplicate require statements in the output file
   */
  dedupTransitions(transitions, stateName) {
    let allTrans = [];
    for (let transition in transitions) {
      let curTrans = transitions[transition];
      // don't include the current transition name incase a state loops back on itself
      if (curTrans == stateName) continue;

      // ignore duplicate transition
      if (allTrans.indexOf(curTrans) === -1) {
        allTrans.push(curTrans);
      }
    }
    return allTrans;
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
