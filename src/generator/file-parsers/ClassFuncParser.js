import parse from "shift-parser";
const recast = require("recast");

/**
 * Takes section 2 from the state classes
 * and parses the class data to return an array of functions it contains
 *
 */
class ClassFuncParser {
  parse(fileContent) {
    // create a fake class so we can parse the functions
    const classData = this.appendClassSections(fileContent);

    let ast = parse(classData);
    this.findFunctions(ast);

    console.log("Done");
  }

  findFunctions(ast) {
    const functionNames = [];
    recast.visit(ast, function visitFunctionDeclaration(path) {
      var newPath = path.get("body");

      // subtraversing
      recast.visit(newPath, function visitFunctionDeclaration(path) {
        functionNames.push(path.node.id.name);
        return false;
      });

      // return false to not look at other functions contained in this function
      // leave this role to the sub-traversing
      return false;
    });
  }

  /**
   * add missing content to the class functions
   * so that we can parse the class
   * @param {string} fileContent
   */
  appendClassSections(fileContent) {
    const topSection = "class fakeClass extends otherFake { \n";
    const bottomSection = "\n } \n";

    const ret = topSection + fileContent + bottomSection;
    return ret;
  }
}

export default ClassFuncParser;
