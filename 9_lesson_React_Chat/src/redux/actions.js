export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const SET_USERNAME = "SET_USERNAME";
export const PUT_MESSAGE = "PUT_MESSAGE";

export function logIn() {
  return {
    type: LOG_IN
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  };
}

export function getMessages(messages) {
  return {
    type: GET_MESSAGES,
    messages
  };
}

export function putMessage(currentMessage) {
  return {
    type: PUT_MESSAGE,
    currentMessage
  };
}
