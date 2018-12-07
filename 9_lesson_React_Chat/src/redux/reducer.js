import {
  LOG_IN,
  LOG_OUT,
  GET_MESSAGES,
  SET_USERNAME,
  PUT_MESSAGE
} from "./actions";

function reducer(prevState, action) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, prevState, {
        isLogin: true
      });
    case LOG_OUT:
      return Object.assign({}, prevState, {
        isLogin: false,
        username: ""
      });
    case SET_USERNAME:
      return Object.assign({}, prevState, {
        username: action.username
      });
    case GET_MESSAGES:
      return Object.assign({}, prevState, {
        messages: action.messages
      });
    case PUT_MESSAGE:
      return Object.assign({}, prevState, {
        currentMessage: action.currentMessage
      });
    default:
      return prevState;
  }
}

export default reducer;
