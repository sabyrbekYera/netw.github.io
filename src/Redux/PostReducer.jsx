const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialFullbaza = {
  posts: [
    { MyOwnPost: 'Today i finished 32 videos', id: 1 },
    { MyOwnPost: 'Tomorrow i will be visit my friend', id: 2 },
    { MyOwnPost: 'Oh my God,atmosphere is so beautifull', id: 3 },
  ],
  textValue: 'yereke never give up ponel',
}

const postReducer = (Fullbaza = initialFullbaza, action) => {

  switch (action.type) {
    case ADD_POST:
      let newMyPosts = {
        MyOwnPost: Fullbaza.textValue,
        id: 6,
      }
      Fullbaza.posts.push(newMyPosts)
      Fullbaza.textValue = ''
      return Fullbaza
      
    case UPDATE_POST_TEXT:
      Fullbaza.textValue = action.newText
      return Fullbaza
    default:
      return Fullbaza
  }
}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}
export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text
  }
}

export default postReducer
