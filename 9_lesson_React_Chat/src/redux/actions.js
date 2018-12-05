import { db } from "../components/firebase.js";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const GET_MESSAGES = "GET_MESSAGES";
export const SET_USERNAME = "SET_USERNAME";
export const PUT_MESSAGE = "PUT_MESSAGE";

export function logIn() {
  //action-creator
  return {
    // action
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

export function subscribeToFireBase(dispatch) {
  return function(dispatch) {
    const messagesRef = db.ref("messages");
    messagesRef.on("value", snapshot => {
      dispatch(getMessages(Object.values(snapshot.val())));
    });
  };
}

export function sendMessage(message, username) {
  return dispatch => {
    const now = Date.now();
    const msg = {
      id: now,
      name: username,
      text: message
    };
    db.ref(`/messages/${now}`).set(msg);
  };
}
