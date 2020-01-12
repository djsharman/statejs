import ejs from "ejs";
import ExistingFileContent from "./ExistingFileContent";
import fs from "fs";

class AbstractClassGen {
  generate(templateDir, targetDir, className, dataOrg) {
    const templateFile = `${templateDir}/AbstractStateClass.ejs`;

    const targetFileName = `${targetDir}/Abstract${className}State.js`;

    // grab the existing content if there is any
    const existingFileContent = new ExistingFileContent();
    existingFileContent.procExistingContent(targetFileName);
    const section1 = existingFileContent.getSection1();
    const section2 = existingFileContent.getSection2();

    const operations = this.processExistingOperations(
      existingFileContent,
      dataOrg.specification.operations
    );

    let data = {
      className: dataOrg.className,
      section1: section1,
      section2: section2,
      onEnterState: true,
      onExitState: true,
      operations: operations
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

  processExistingOperations(existingFileContent, operations) {
    let requiredOperations = [];
    for (let operation in operations) {
      if (!existingFileContent.methodExists(operation)) {
        requiredOperations.push(operation);
      }
    }
    return requiredOperations;
  }
}
export default AbstractClassGen;
