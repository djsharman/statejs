import AbstractDoorState from "./AbstractDoorState";
import OpenDoorState from "./OpenDoorState";
import LockedDoorState from "./LockedDoorState";

//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1
    
//###END_CUSTOMCODE1
class ClosedDoorState extends AbstractDoorState {
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
    
    open() {
      return new OpenDoorState();
    }
    
    lock() {
      return new LockedDoorState();
    }
    
}
export default OpenDoorState;
