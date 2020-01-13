import ejs from "ejs";
import ExistingFileContent from "./file-parsers/ExistingFileContent";
import fs from "fs";

/**
 * Creates the IllegalStateTransitionError class
 */
class IllegalStateTransitionGen {
  generate(templateDir, targetDir) {
    const templateFile = `${templateDir}/IllegalStateTransitionError.ejs`;

    const targetFileName = `${targetDir}/IllegalStateTransitionError.js`;

    // grab the existing content if there is any
    const existingFileContent = new ExistingFileContent();
    existingFileContent.procExistingContent(targetFileName);
    const section1 = existingFileContent.getSection1();
    const section2 = existingFileContent.getSection2();

    let data = {
      section1: section1,
      section2: section2
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
}
export default IllegalStateTransitionGen;
