import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { getCall } from './apiCalls/getCall';
import DPState, { setChoice } from './DPSlice';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setChoice,
  effect: async () => {
    store.dispatch(getCall(true));
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
