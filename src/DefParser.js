import XmlReader from "xml-reader";
import XmlQuery from "xml-query";

/**
 * Loads an XML string into a DOM parser so it can be queried
 */
class DefParser {
  constructor(defXML) {
    const ast = XmlReader.parseSync(defXML);
    const xq = XmlQuery(ast);
    this.xmlSpec = xq.find("specification");
  }

  _getConfValue(valueId) {
    const conf = this.xmlSpec.find("configuration");
    const value = conf.find(valueId).attr("name");
    return value;
  }

  getTargetDir() {
    const targetdir = this._getConfValue("targetdir");
    return targetdir;
  }

  /**
   * Gets the sm_implements value or an empty string
   */
  getSMImplements() {
    const implements = this._getConfValue("sm_implements");
    return implements;
  }

  /**
   * Gets the sm_implements value or an empty string
   */
  getSMExtends() {
    const smExtends = this._getConfValue("sm_extends");
    return smExtends;
  }
}

export default DefParser;
