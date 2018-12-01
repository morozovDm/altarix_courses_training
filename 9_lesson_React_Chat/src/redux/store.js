import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  isLogin: false,
  messages: [],
  username: "",
  currentMessage: ""
};

const store = createStore(reducer, initialState);

export default store;
