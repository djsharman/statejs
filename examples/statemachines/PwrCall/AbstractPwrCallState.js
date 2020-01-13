import IllegalStateTransitionError from "./IllegalStateTransitionError";

//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class AbstractPwrCallState {
  //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
  //###START_CUSTOMCODE2
  
  //###END_CUSTOMCODE2

  setParentStateMachine(SM) {
    this.SM = SM;
  }
  
  onEnterState() {
    
  }
  
  onExitState() {
    
  }
  
  reqRegState() {
    throw new IllegalStateTransitionError();
  }
  
  cancel() {
    throw new IllegalStateTransitionError();
  }
  
  wpComplete() {
    throw new IllegalStateTransitionError();
  }
  
  techProblem() {
    throw new IllegalStateTransitionError();
  }
  
  userRegistered() {
    throw new IllegalStateTransitionError();
  }
  
  userRegFailed() {
    throw new IllegalStateTransitionError();
  }
  
  userParked() {
    throw new IllegalStateTransitionError();
  }
  
  userParkFailed() {
    throw new IllegalStateTransitionError();
  }
  
  startCalling() {
    throw new IllegalStateTransitionError();
  }
  
  showCall() {
    throw new IllegalStateTransitionError();
  }
  
  stopCalling() {
    throw new IllegalStateTransitionError();
  }
  
  agentHangup() {
    throw new IllegalStateTransitionError();
  }
  
  customerHangup() {
    throw new IllegalStateTransitionError();
  }
  
  goNextCall() {
    throw new IllegalStateTransitionError();
  }
  
  redialCustomer() {
    throw new IllegalStateTransitionError();
  }
  
  restartAfterTechFailure() {
    throw new IllegalStateTransitionError();
  }
  

}
export default AbstractDoorState;