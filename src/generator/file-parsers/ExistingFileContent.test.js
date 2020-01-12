import ExistingFileContent from "./ExistingFileContent";

describe("Existing file content", () => {
  it("Test that we can find existing content", () => {
    const fileContent = `import AbstractDoorState from "./AbstractDoorState";
    import ClosedDoorState from "./ClosedDoorState";
    
    //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
    //###START_CUSTOMCODE1
        
    //###END_CUSTOMCODE1
    class OpenDoorState extends AbstractDoorState {
    //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
    //###START_CUSTOMCODE2

    onEnterState() {
          
    }
    
    onExitState() {
      
    }
        
    //###END_CUSTOMCODE2
    
      constructor() {
        super();
      }
    
      

        
        close() {
          return new ClosedDoorState();
        }
        
    }
    export default OpenDoorState;
    `;

    const existingFileContent = new ExistingFileContent();
    existingFileContent.parseContent(fileContent);

    const shouldExist = existingFileContent.methodExists("onEnterState");
    expect(shouldExist).toBe(true);

    const shouldNotExist = existingFileContent.methodExists("close");
    expect(shouldNotExist).toBe(false);
  });
});
