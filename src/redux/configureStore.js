import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { getCall } from './apiCalls/getCall';
import DPState, { setChoice, setParams } from './DPSlice';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setChoice,
  effect: async (action) => {
    if (action.payload.key !== 'platform') store.dispatch(getCall(true));
  },
});
listenerMiddleware.startListening({
  actionCreator: setParams,
  effect: async (action) => {
    console.log(action);
  },
});
const root = combineReducers({
  DPState,
});

const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});

export default store;
