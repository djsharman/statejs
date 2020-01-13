import AbstractPwrCallState from "./AbstractPwrCallState";
import WaitForUserRegState from "./WaitForUserRegState";
import EndState from "./EndState";
import WPCompleteState from "./WPCompleteState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class StartUpState extends AbstractPwrCallState {
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
  
  reqRegState() {
    return new WaitForUserRegState();
  }
  
  cancel() {
    return new EndState();
  }
  
  wpComplete() {
    return new WPCompleteState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
