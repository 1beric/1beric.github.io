import reduxState from "../state";
import page from "./page";
import theme from "./theme";

const checkReducers = (reducers, actionType) => {
  const array = reducers.find(([type]) => type === actionType);
  if (array) return array[1];
  return null;
};

const reducer = (state = reduxState.initialState, action) => {
  if (!action) return state;

  let handle = checkReducers(Object.values(page), action.type);
  if (handle) return handle(state, action);

  handle = checkReducers(Object.values(theme), action.type);
  if (handle) return handle(state, action);

  return state;
};

export default reducer;
