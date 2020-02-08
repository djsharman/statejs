import fs from "fs";
class ExistingFileContent {
  constructor() {
    // variables to store code sections from existing files
    this.section1 = null;
    this.section2 = null;
  }

  procExistingContent(output_filename) {
    let content = "";

    if (fs.existsSync(output_filename)) {
      content = fs.readFileSync(output_filename, "utf8");
    }

    this.parseContent(content);
  }

  parseContent(content) {
    this.section2 = this.getAutocode(content, "2");
    this.section1 = this.getAutocode(content, "1");
  }

  getAutocode(text, section) {
    let ret = "";
    let start = "//###START_CUSTOMCODE" + section;
    let end = "//###END_CUSTOMCODE" + section;
    let pos = this.findStr(text, start);

    if (pos !== -1) {
      text = text.substr(pos + 22);
      pos = this.findStr(text, end);

      if (pos === -1) {
        ret = text;
      } else {
        text = text.substr(0, pos);
        text = text.trim();
        text = "    " + text;

        ret = text;
      }
    }
    // trim the resultant strings otherwise we can add whitespace in the templates
    ret = ret.trim();
    return ret;
  }

  /**
   * Check if a method exists in the main code section
   * @param {string} methodName
   */
  methodExists(methodName) {
    //(isEndState)\([a-zA-Z0-9_-]*\)( ){0,7}\{
    // prettier-ignore
    let regex = new RegExp("( )+(" + methodName + ")\(.*\)( ){0,7}\{", "g");

    // work around for weird regex in JS
    let test = " " + this.section2;

    let match = test.match(regex);
    let ret = false;
    if (match !== null) {
      ret = true;
    }
    return ret;
  }

  getSection1() {
    return this.section1;
  }

  getSection2() {
    return this.section2;
  }

  /**
   * locate a string in a haystack
   * Returns either the position of the string in the haystack or -1
   * @param {string} haystack
   * @param {string} needle
   * @param {int} offset
   */
  findStr(haystack, needle, offset) {
    // force everything lower case for case insensitve search
    const haystackLower = haystack.toLowerCase();
    const needleLower = needle.toLowerCase();

    // locate the text if it exists
    const index = haystackLower.indexOf(needleLower, offset);

    return index;
  }
}
export default ExistingFileContent;
