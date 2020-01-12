class ExistingFileContent {
  constructor() {
    // variables to store code sections from existing files
    this.section1 = null;
    this.section2 = null;
  }

  procExistingContent(output_filename) {
    let content = "";

    if (!fs.existsSync(output_filename)) {
      content = fs.readFileSync(output_filename, "utf8");
    }

    this.section2 = this.getAutocode(content, "2");
    this.section1 = this.getAutocode(content, "1");
  }

  getAutocode(text, section) {
    ret = "";
    var start = "//###START_CUSTOMCODE" + section;
    var end = "//###END_CUSTOMCODE" + section;
    var pos = this.findStr(text, start);

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
    return ret;
  }

  /**
   * Check if a method exists in the main code section
   * @param {string} method_name
   */
  methodExists(method_name) {
    let matches = this.section2.match(`/function[\\s]+[&]?${method_name}\\(/i`);
    const ret = typeof matches[1] === "undefined";
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
