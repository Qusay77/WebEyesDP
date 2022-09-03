import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { getCall } from './apiCalls/getCall';
import DPState, { setChoice, setParams } from './DPSlice';
import theme from '../ui/theme';
import loaderState from './counterSlice';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setChoice,
  effect: async (action) => {
    const currentSize = window.innerWidth;
    const isMobile = currentSize <= theme.breakpoints.magicMachineInt;
    if (action.payload.key !== 'platform' && !isMobile)
      store.dispatch(getCall(true));
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
  loaderState,
});

const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});

export default store;
