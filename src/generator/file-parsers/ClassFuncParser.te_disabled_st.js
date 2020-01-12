import ClassFuncParser from "./ClassFuncParser";

describe("class fun parser", () => {
  it("tests that we can parse functions successfully", () => {
    const fileContent = `  
        constructor() {
          super();
        }


        onEnterState() {
          
        }
        
        onExitState() {
          
        }
        
        open() {
          return new OpenDoorState();
        }
        
        lock() {
          return new LockedDoorState();
        }`;

    const classFuncParser = new ClassFuncParser();
    const funcs = classFuncParser.parse(fileContent);

    const expectedFuncs = [
      "constructor",
      "onEnterState",
      "onExitState",
      "open",
      "lock"
    ];

    const res = funcs == expectedFuncs;
    expect(res).toBe(true);
  });
});
