import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import candidateReducer from '../reducers/candidateReducer';
import interviewReducer from '../reducers/interviewReducer';
import processReducer from '../reducers/processReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      candidate: candidateReducer,
      interview: interviewReducer,
      process: processReducer
    }),
    //composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
