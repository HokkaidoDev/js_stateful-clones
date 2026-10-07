'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const currentState = { ...state };
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear': {
        Object.keys(currentState).forEach((key) => delete currentState[key]);
        break;
      }

      case 'addProperties': {
        for (const key of Object.keys(action.extraData)) {
          currentState[key] = action.extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;
      }
    }

    result.push({ ...currentState });
  }

  return result;
}

module.exports = transformStateWithClones;
