import AbstractPwrCallState from "./AbstractPwrCallState";
import InCallState from "./InCallState";
import WPCompleteState from "./WPCompleteState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class NextCallState extends AbstractPwrCallState {
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
  
  showCall() {
    return new InCallState();
  }
  
  wpComplete() {
    return new WPCompleteState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
