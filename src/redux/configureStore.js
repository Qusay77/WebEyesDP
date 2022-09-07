import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { getCall } from './apiCalls/getCall';
import DPState, { setChoice } from './DPSlice';
import theme from '../ui/theme';
import loaderState from './counterSlice';
import { eventTracker } from '../../ProductAnalytics';
import { dropDownEvents } from '../utils/DPDropDownOptions';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setChoice,
  effect: async (action) => {
    const currentSize = window.innerWidth;
    const isMobile = currentSize <= theme.breakpoints.magicMachineInt;
    if (action.payload.key !== 'platform') {
      if (!isMobile) {
        store
          .dispatch(getCall(true))
          .then(() => eventTracker(dropDownEvents[action.payload.key]));
      }
    }
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
