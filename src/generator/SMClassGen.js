import ejs from "ejs";
import ExistingFileContent from "./file-parsers/ExistingFileContent";
import fs from "fs";

class SMClassGen {
  generate(templateDir, targetDir, className, dataOrg) {
    const templateFile = `${templateDir}/SMClass.ejs`;

    const targetFileName = `${targetDir}/${className}.js`;

    // grab the existing content if there is any
    const existingFileContent = new ExistingFileContent();
    existingFileContent.procExistingContent(targetFileName);
    const section1 = existingFileContent.getSection1();
    const section2 = existingFileContent.getSection2();

    const allStates = this.processStates(dataOrg.specification.states);

    const transitions = this.processExistingTransitions(
      existingFileContent,
      dataOrg.specification.operations
    );

    const queries = this.processExistingQueries(
      existingFileContent,
      dataOrg.specification.states
    );

    let data = {
      className: className,
      section1: section1,
      section2: section2,
      onEnterState: !existingFileContent.methodExists("onEnterState"),
      onExitState: !existingFileContent.methodExists("onExitState"),
      transitions: transitions,
      queries: queries,
      allStates: allStates,
      setState: !existingFileContent.methodExists("setState")
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

  processStates(states) {
    let requireStates = [];
    for (let state in states) {
      requireStates.push(state);
    }
    return requireStates;
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

  processExistingQueries(existingFileContent, states) {
    let requiredQueries = {};
    for (let state in states) {
      const query = states[state].query;
      if (!existingFileContent.methodExists(query)) {
        // push property into the object
        requiredQueries[query] = state;
      }
    }
    return requiredQueries;
  }
}
export default SMClassGen;
