/**
 * Remove problematic characters from argument string
 * @param {string} arg
 */
function cleanArgStrings(arg) {
  const cleanArg = arg.replace(/(\r\n|\n|\r)/gm, "");
  return cleanArg;
}
export default cleanArgStrings;
