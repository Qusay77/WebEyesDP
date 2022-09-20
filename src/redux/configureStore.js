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
import { queryParams } from '../utils/urlParams';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: setChoice,
  effect: async (action) => {
    const currentSize = window.innerWidth;
    const isMobile = currentSize <= theme.breakpoints.magicMachineInt;
    const isMultiple = action.payload.multiple;
    if (action.payload.key !== 'platform') {
      if (!isMobile) {
        store.dispatch(getCall(true)).then(() => {
          if (isMultiple) {
            isMultiple.forEach(([k]) => {
              eventTracker(dropDownEvents[k]);
            });
          } else {
            eventTracker(dropDownEvents[action.payload.key]);
            queryParams([action.payload.key, action.payload.option.value]);
          }
        });
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
