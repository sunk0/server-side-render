import { MODEL_CHOSEN, GET_MODEL_CHOSEN } from "./actions";

export const DEFAULT_STATE = {
  chosenModel: null,
};

export function modelReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case MODEL_CHOSEN:
      return {
        ...state,
        chosenModel: action.payload.chosenModel,
      };
    case GET_MODEL_CHOSEN:
      return state.chosenModel;
    default:
      return state;
  }
}
