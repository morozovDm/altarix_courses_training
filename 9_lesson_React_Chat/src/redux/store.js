import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  isLogin: false,
  messages: [],
  username: ""
};

const store = createStore(reducer, initialState);

export default store;
