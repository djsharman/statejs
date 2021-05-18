/**
 * Makes the SM information anonymous.
 */
export default function denatureSpec(states) {
  let outputStates = {};

  let stateLookup = [];

  let stateCounter = 0;
  for (let stateName in states) {
    stateCounter++;

    stateLookup[stateName] = `State_${stateCounter}`;
  }

  let transitionCounter = 0;
  for (let stateName in states) {
    const state = states[stateName];
    const transitions = state.transitions;

    const newTrans = [];
    for (let transition in transitions) {
      transitionCounter++;
      const getTransState = transitions[transition];
      const transNewName = `Transition_${transitionCounter}`;
      newTrans[transNewName] = stateLookup[getTransState];
    }
    const newStateName = stateLookup[stateName];
    outputStates[newStateName] = { transitions: newTrans };
  }
  return outputStates;
}
