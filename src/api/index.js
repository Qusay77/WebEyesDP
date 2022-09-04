import axios from 'axios';
import store from '../redux/configureStore';
import { decrement, increment } from '../redux/counterSlice';
// export const baseURL = 'http://localhost:8000';
export const baseURL = 'https://prp.webeyez.com';
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
    store.dispatch(decrement());

    return res;
  },
  (e) => {
    store.dispatch(decrement());

    return e;
  },
);
