const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialFullbaza = {
  messages: [
    { xat: 'Hello,I am from in Korea !', id: 1 },
    { xat: 'Now i am a student of iitu', id: 2 },
    { xat: 'And i like jyour country !', id: 3 },
  ],
  messageInput: 'Empty',
}
const messageReducer = (Fullbaza = initialFullbaza, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 6,
      xat: Fullbaza.messageInput,
    }
    Fullbaza.messages.push(newMessage)
  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    Fullbaza.messageInput = action.inputMessage
  }

  return Fullbaza
}
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
}

export const updateMessageInput = (inputMessage) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    inputMessage: inputMessage,
  }
}
export default messageReducer
