
import { createAction, combineReducers } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';

const rootReducer = combineReducers({
  
  sessionSlice,
});

export const storeReset = createAction('store/reset');

const reducer = (state: any, action: any) => {
  if (action.type === storeReset.toString()) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default reducer;
