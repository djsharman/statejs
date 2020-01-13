import IllegalStateTransitionError from "./IllegalStateTransitionError";

//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
class AbstractDoorState {
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
  
  open() {
    throw new IllegalStateTransitionError();
  }
  
  close() {
    throw new IllegalStateTransitionError();
  }
  
  lock() {
    throw new IllegalStateTransitionError();
  }
  
  unlock() {
    throw new IllegalStateTransitionError();
  }
  

}
export default AbstractDoorState;