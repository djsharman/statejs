import StartUpState from "./StartUpState";
import WaitForUserRegState from "./WaitForUserRegState";
import WaitForUserParkedState from "./WaitForUserParkedState";
import UserParkedState from "./UserParkedState";
import NextCallState from "./NextCallState";
import InCallState from "./InCallState";
import AgentCallHangupState from "./AgentCallHangupState";
import CustCallHangupState from "./CustCallHangupState";
import WPCompleteState from "./WPCompleteState";
import UserRegFailState from "./UserRegFailState";
import UserParkFailState from "./UserParkFailState";
import TechnicalProblemState from "./TechnicalProblemState";
import EndState from "./EndState";

//>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
//###START_CUSTOMCODE1

//###END_CUSTOMCODE1
export class PwrCall {
  //>>>> don't change the CUSTOM CODE comments, if you do generation will overwrite your code >>>>
  //###START_CUSTOMCODE2
  
  //###END_CUSTOMCODE2
  
  
  constructor(state) {
    this.state = undefined;
    this.setState(state);
  }
  
  reqRegState() {
    this.setState(this.state.reqRegState());
  }
  
  cancel() {
    this.setState(this.state.cancel());
  }
  
  wpComplete() {
    this.setState(this.state.wpComplete());
  }
  
  techProblem() {
    this.setState(this.state.techProblem());
  }
  
  userRegistered() {
    this.setState(this.state.userRegistered());
  }
  
  userRegFailed() {
    this.setState(this.state.userRegFailed());
  }
  
  userParked() {
    this.setState(this.state.userParked());
  }
  
  userParkFailed() {
    this.setState(this.state.userParkFailed());
  }
  
  startCalling() {
    this.setState(this.state.startCalling());
  }
  
  showCall() {
    this.setState(this.state.showCall());
  }
  
  stopCalling() {
    this.setState(this.state.stopCalling());
  }
  
  agentHangup() {
    this.setState(this.state.agentHangup());
  }
  
  customerHangup() {
    this.setState(this.state.customerHangup());
  }
  
  goNextCall() {
    this.setState(this.state.goNextCall());
  }
  
  redialCustomer() {
    this.setState(this.state.redialCustomer());
  }
  
  restartAfterTechFailure() {
    this.setState(this.state.restartAfterTechFailure());
  }
  
  isStartUpState() {
      return this.state instanceof StartUpState;
  }
  
  isWaitForUserRegState() {
      return this.state instanceof WaitForUserRegState;
  }
  
  isWaitForUserParkedState() {
      return this.state instanceof WaitForUserParkedState;
  }
  
  isUserParkedState() {
      return this.state instanceof UserParkedState;
  }
  
  isNextCallState() {
      return this.state instanceof NextCallState;
  }
  
  isInCallState() {
      return this.state instanceof InCallState;
  }
  
  isAgentCallHangupState() {
      return this.state instanceof AgentCallHangupState;
  }
  
  isCustCallHangupState() {
      return this.state instanceof CustCallHangupState;
  }
  
  isWPCompleteState() {
      return this.state instanceof WPCompleteState;
  }
  
  isUserRegFailState() {
      return this.state instanceof UserRegFailState;
  }
  
  isUserParkFailState() {
      return this.state instanceof UserParkFailState;
  }
  
  isTechnicalProblemState() {
      return this.state instanceof TechnicalProblemState;
  }
  
  isEndState() {
      return this.state instanceof EndState;
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
