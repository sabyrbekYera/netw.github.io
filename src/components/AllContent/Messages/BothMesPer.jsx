import s from './BothMesPer.module.css'
import Messages from './Message/Messages'
import Persons from './Persons/Persons'
const BothMesPer = (props) => {
    const {dispatch}=props
    const {Fullbaza}=props
 
    return (
        <div className={s.BothMesPer}>
            <Persons BazaPersons={Fullbaza.BazaPersons} />
            <Messages BazaMessages={Fullbaza.BazaMessages} dispatch={dispatch} />
        </div>

    )
}
export default BothMesPer