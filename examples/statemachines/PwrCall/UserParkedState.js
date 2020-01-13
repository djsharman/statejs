import AbstractPwrCallState from "./AbstractPwrCallState";
import NextCallState from "./NextCallState";
import EndState from "./EndState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class UserParkedState extends AbstractPwrCallState {
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
  
  startCalling() {
    return new NextCallState();
  }
  
  cancel() {
    return new EndState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
