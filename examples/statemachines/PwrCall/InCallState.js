import AbstractPwrCallState from "./AbstractPwrCallState";
import AgentCallHangupState from "./AgentCallHangupState";
import CustCallHangupState from "./CustCallHangupState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class InCallState extends AbstractPwrCallState {
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
  
  agentHangup() {
    return new AgentCallHangupState();
  }
  
  customerHangup() {
    return new CustCallHangupState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
