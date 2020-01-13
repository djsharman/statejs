import AbstractPwrCallState from "./AbstractPwrCallState";
import WaitForUserParkedState from "./WaitForUserParkedState";
import UserRegFailState from "./UserRegFailState";
import EndState from "./EndState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class WaitForUserRegState extends AbstractPwrCallState {
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
  
  userRegistered() {
    return new WaitForUserParkedState();
  }
  
  userRegFailed() {
    return new UserRegFailState();
  }
  
  cancel() {
    return new EndState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
