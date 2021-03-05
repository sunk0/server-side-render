export const MODEL_CHOSEN = "MODEL_CHOSEN";
export const GET_MODEL_CHOSEN = "GET_MODEL_CHOSEN";

export function chooseModel(model) {
  return {
    type: MODEL_CHOSEN,
    payload: {
      chosenModel: model,
    },
  };
}

export function getChoosenModel() {
  return {
    type: GET_MODEL_CHOSEN,
  };
}
