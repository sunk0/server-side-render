import { createStore, combineReducers } from "redux";
import { modelReducer, DEFAULT_STATE } from "./reducers";

const allReducers = combineReducers({
  model: modelReducer,
});

export const store = createStore(
  allReducers,
  DEFAULT_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
