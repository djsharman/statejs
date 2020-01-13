import AbstractPwrCallState from "./AbstractPwrCallState";
import UserParkedState from "./UserParkedState";
import UserParkFailState from "./UserParkFailState";
import EndState from "./EndState";
import TechnicalProblemState from "./TechnicalProblemState";
//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class WaitForUserParkedState extends AbstractPwrCallState {
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
  
  userParked() {
    return new UserParkedState();
  }
  
  userParkFailed() {
    return new UserParkFailState();
  }
  
  cancel() {
    return new EndState();
  }
  
  techProblem() {
    return new TechnicalProblemState();
  }
  
}
export default OpenDoorState;
