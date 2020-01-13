import AbstractDoorState from "./AbstractDoorState";
import ClosedDoorState from "./ClosedDoorState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class OpenDoorState extends AbstractDoorState {
  //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
  //###START_CUSTOMCODE2
  
  //###END_CUSTOMCODE2
  
    constructor() {
    super();
  }

  
  onEnterState() {
    
  }
    
  onExitState() {
    
  }
  
  close() {
    return new ClosedDoorState();
  }
  
}
export default OpenDoorState;
