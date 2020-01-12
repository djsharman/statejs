import XmlReader from "xml-reader";
import XmlQuery from "xml-query";
import capitalize from "capitalize";

/**
 * Loads an XML string into a DOM parser so it can be queried
 */
class DefParser {
  constructor(defXML) {
    const ast = XmlReader.parseSync(defXML);
    const xq = XmlQuery(ast);
    this.xmlSpec = xq.find("specification");

    // process the xml file for the states and transitions
    this._parse();
  }

  /**
   * Called at startup this function parses the states and transitions
   */
  _parse() {
    // these are questions we can ask to the SM to understand its state.
    let queries = [];
    // the states that the SM can be in.
    let states = [];
    // operations we can do to the SM to change its state.
    let operations = [];

    // n.b. params below are pass by reference because of array types
    this._parseStates(states, queries);
    this._parseTransitions(states, operations);

    // store the parsed values for later
    this.specification = {
      operations: operations,
      queries: queries,
      states: states
    };
  }

  /**
   * Parse states and prepare queries
   * Add empty transition array for each state
   * @param {array} states
   * @param {*} queries
   */
  _parseStates(states, queries) {
    // prepare states with
    const XMLstates = this.xmlSpec.find("states");
    XMLstates.find("state").each(state => {
      const stateName = state.attributes.name;
      states[stateName] = {
        transitions: [],
        query: "is" + stateName
      };

      queries.push(stateName);
    });
  }

  /**
   * Prepare transitions for each state
   * @param {array} states
   * @param {*} operations
   */
  _parseTransitions(states, operations) {
    //
    const transitions = this.xmlSpec.find("transitions");
    transitions.find("transition").each(transition => {
      const from = transition.attributes.from;
      const to = transition.attributes.to;
      const operation = transition.attributes.operation;

      states[from]["transitions"][operation] = to;

      // store the correct verb for the operation in question
      const capFirstOperation = capitalize(operation);
      operations[operation] = {
        allowed: "can" + capFirstOperation,
        disallowed: "cannot" + capFirstOperation
      };
    });
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
    const sm_implements = this._getConfValue("sm_implements");
    return sm_implements;
  }

  /**
   * Gets the sm_implements value or an empty string
   */
  getSMExtends() {
    const smExtends = this._getConfValue("sm_extends");
    return smExtends;
  }

  getSpecification() {
    return this.specification;
  }
}

export default DefParser;
