import s from './Messages.module.css'
import React from 'react'
import { updateMessageInput,addMessageActionCreator } from '../../../../Redux/MessageReducer'
const Mess = (props) => {
  return (
    <div className={s.person1}>
      <div>{props.xat}</div>
    </div>
  )
}

const Messages = (props) => {
debugger

  const { messages } = props.BazaMessages
  const { messageInput } = props.BazaMessages
  const {dispatch}=props

  const ElementsMes = messages.map((props) => (
    <Mess xat={props.xat} id={props.id} />
  ))

  let newMess = React.createRef()
  
  const changeInputMessage = (e) => {  
    let inputMessage = newMess.current.value
    let action = updateMessageInput(inputMessage)
    dispatch(action)

  }

  const SendNewMess=()=>{
    dispatch(addMessageActionCreator())

  }
  return (
    <div className={s.Messages}>
      <div className={s.FlexMessages}>
        <div className={s.itemMessages}>
          <div>{ElementsMes}</div>
          <div>
            <div>
              <textarea
                placeholder="enter something..."
                value={messageInput}
                onChange={changeInputMessage}
                ref={newMess}
              ></textarea>
            </div>
            <div>
              <button onClick={SendNewMess}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Messages
