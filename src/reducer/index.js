import { combineReducers } from 'redux';

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case "FIRST":
      return [...state, action.data]
    case "NEXT":
      state.shift();
      return [...state,action.data]
    default:
      return state;
  }
};

const barReducer = (state = [], action) => {
  switch (action.type) {
    case "NEXT":
      return [...state,'initial-red']
    default:
      return state;
  }
};
export default combineReducers({
  survey: surveyReducer,
  bar: barReducer
});