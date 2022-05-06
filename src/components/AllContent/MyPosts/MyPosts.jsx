import React from 'react'
import s from './MyPosts.module.css'
import { updatePostTextActionCreator,addPostActionCreator } from '../../../Redux/PostReducer'
const Posts = (props) => {
  return (
    <div className={s.itemMyPosts}>
      <div className={s.post}>
        <p>{props.MyOwnPost}</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}
const MyPosts = (props) => {
  const { posts } = props.BazaPosts
  const { textValue } = props.BazaPosts
  const {dispatch}=props

  const updateaPost = posts.map((props) => (
    <Posts MyOwnPost={props.MyOwnPost} id={props.id} />
  ))
  let newPost = React.createRef()

  
  let addPostBtn = () => {
    // let text = newPost.current.value
    // props.addPost()
    dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = newPost.current.value
    // props.addPost(text)
    let action = updatePostTextActionCreator(text)
    dispatch(action)
    newPost.current.value = ''
  }

  return (
    <div className={s.MyPosts}>
      <div className={s.FlexMyPosts}>
        <div className="butto">
          <textarea
            value={textValue}
            type="text"
            placeholder="Enter your post..."
            ref={newPost}
            onChange={onPostChange}
          />
          <button onClick={addPostBtn}>Add</button>
        </div>
        <div className={s.itemMyPosts}>{updateaPost}</div>
      </div>
    </div>
  )
}

export default MyPosts
