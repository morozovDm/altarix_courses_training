import { LOG_IN, LOG_OUT, GET_MESSAGES } from "./actions";

function reducer(prevState, action) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, prevState, {
        isLogin: true,
        username: action.username
      });
    case LOG_OUT:
      return Object.assign({}, prevState, {
        isLogin: false,
        username: ""
      });
    case GET_MESSAGES:
      return Object.assign({}, prevState, {
        messages: action.messages
      });
    default:
      return prevState;
  }
}

export default reducer;
