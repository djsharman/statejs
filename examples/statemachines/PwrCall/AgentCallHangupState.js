import AbstractPwrCallState from "./AbstractPwrCallState";
import TechnicalProblemState from "./TechnicalProblemState";
import EndState from "./EndState";
import NextCallState from "./NextCallState";
import InCallState from "./InCallState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class AgentCallHangupState extends AbstractPwrCallState {
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
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
  stopCalling() {
    return new EndState();
  }
  
  goNextCall() {
    return new NextCallState();
  }
  
  redialCustomer() {
    return new InCallState();
  }
  
}
export default OpenDoorState;
