import { combineReducers } from 'redux';

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    case 'FIRST':
      return [...state, action.data];
    case 'NEXT':
      state.shift();
      return [...state, action.data];
    case 'BACK':
      state.shift();
      return [...state, action.data];
    case 'DONE':
      state.shift();
      return state;
    default:
      return state;
  }
};

const resultReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case 'DONE':
      return { ...state, show: true };
    case 'SHOW':
      return { ...state, show: false };
    default:
      return state;
  }
};

var i = 0;
const barReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEXT':
      i++;
      state.shift();
      return [...state, `initial-${i}`];
    case 'BACK':
      i--;
      state.shift();
      return [...state, `initial-${i}`];
    case 'DONE':
      i++;
      state.shift();
      return [...state, `initial-${i}`];
    case 'SHOW':
      state.shift();
      return [...state];
    default:
      return state;
  }
};

const previewReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW':
      return [...state, action.data];
    default:
      return state;
  }
};

export default combineReducers({
  survey: surveyReducer,
  bar: barReducer,
  result: resultReducer,
  preview: previewReducer
});
