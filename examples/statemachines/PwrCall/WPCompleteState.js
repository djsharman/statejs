import AbstractPwrCallState from "./AbstractPwrCallState";
import EndState from "./EndState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class WPCompleteState extends AbstractPwrCallState {
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
  
  stopCalling() {
    return new EndState();
  }
  
}
export default OpenDoorState;
