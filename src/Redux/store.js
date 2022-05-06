// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
// const SEND_UPDATE_NEW_MESSAGE_TEXT = "SEND_UPDATE_NEW_MESSAGE_TEXT"
import PostReducer from './PostReducer'
import MessageReducer from './MessageReducer'
import personsReduser from './PersonsReduser'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let store = {
  _Fullbaza: {
    BazaPersons: [
      { name: 'Ali Ametov', id: 1 },
      { name: 'Alken Asim', id: 2 },
      { name: 'Ai Aman', id: 3 },
      { name: 'Karabaliev Erlan', id: 4 },
    ],
    BazaMessages: {
      messages: [
        { xat: 'Hello,I am from in Korea !', id: 1 },
        { xat: 'Now i am a student of iitu', id: 2 },
        { xat: 'And i like jyour country !', id: 3 },
      ],
      messageInput: 'Empty',
    },
    BazaPosts: {
      posts: [
        { MyOwnPost: 'Today i finished 32 videos', id: 1 },
        { MyOwnPost: 'Tomorrow i will be visit my friend', id: 2 },
        { MyOwnPost: 'Oh my God,atmosphere is so beautifull', id: 3 },
      ],
      textValue: 'yereke never give up ponel',
    },
  },
  _renderAll() {
    console.log('state is changed')
  },

  getFullbaza() {
    return this._Fullbaza
  },
  subscriber(observer) {
    this._renderAll = observer
  },

  dispatch(action) {
    debugger
    this._Fullbaza.BazaPosts = PostReducer(this._Fullbaza.BazaPosts, action)
    this._Fullbaza.BazaMessages = MessageReducer(this._Fullbaza.BazaMessages,action)
    this._Fullbaza.BazaPersons= personsReduser(this._Fullbaza.BazaPersons,action)
    
    
    this._renderAll(this._Fullbaza)
  }
}
window.store = store
// export const sendMessageCreator=()=>({type:"SEND_UPDATE_NEW_MESSAGE_TEXT",body:body})
export default store
