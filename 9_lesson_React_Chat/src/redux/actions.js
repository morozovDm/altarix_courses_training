export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const GET_MESSAGES = "GET_MESSAGES";

export function logIn(username) {
  return {
    type: LOG_IN,
    username
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}

export function getMessages(messages) {
  return {
    type: GET_MESSAGES,
    messages
  };
}
