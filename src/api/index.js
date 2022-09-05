import axios from 'axios';
import store from '../redux/configureStore';
import { decrement, increment } from '../redux/counterSlice';
// eslint-disable-next-line no-undef
export const baseURL = process.env.REACT_APP_API_KEY;
export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (req) => {
    store.dispatch(increment());
    return req;
  },
  (e) => {
    return e;
  },
);
instance.interceptors.response.use(
  (res) => {
    setTimeout(() => store.dispatch(decrement()), 2000);

    return res;
  },
  (e) => {
    setTimeout(() => store.dispatch(decrement()), 2000);

    return e;
  },
);
