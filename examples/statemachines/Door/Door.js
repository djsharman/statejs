import OpenDoorState from "./OpenDoorState";
import ClosedDoorState from "./ClosedDoorState";
import LockedDoorState from "./LockedDoorState";

//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
export class Door {
  //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
  //###START_CUSTOMCODE2
  
  //###END_CUSTOMCODE2
  
  
  constructor(state) {
    this.state = undefined;
    this.setState(state);
  }
  
  open() {
    this.setState(this.state.open());
  }
  
  close() {
    this.setState(this.state.close());
  }
  
  lock() {
    this.setState(this.state.lock());
  }
  
  unlock() {
    this.setState(this.state.unlock());
  }
  
  isOpenDoorState() {
      return this.state instanceof OpenDoorState;
  }
  
  isClosedDoorState() {
      return this.state instanceof ClosedDoorState;
  }
  
  isLockedDoorState() {
      return this.state instanceof LockedDoorState;
  }
  
  setState(state) {
    if (this.state !== undefined) {
      this.state.onExitState();
    }

    this.state = state;
    this.state.onEnterState();
  }
  
}
export default Door;
