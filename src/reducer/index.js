import { combineReducers } from 'redux';

const surveyReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  survey: surveyReducer  
});