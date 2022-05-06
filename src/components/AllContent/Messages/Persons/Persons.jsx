import { NavLink } from 'react-router-dom'
import Messages from '../Message/Messages'
import s from './Persons.module.css'
const NameSurname = (props) => {
    return (
        <div className={s.person1}>
            <div className={s.namesurname}><NavLink to={'/messages/' + props.id}>{props.name}</NavLink></div>
            <img src="" alt="" />
        </div>
    )
}

const Persons = (props) => {
    const { BazaPersons } = props;
    //vot zdes avtomaticheski obnovlyaet spisok pri dobavlenie ludei,i vazhni moment .teg <NameSurname sozdaet linki na eti novye polzovateli
    const Elements = BazaPersons.map(props => <NameSurname name={props.name} id={props.id} />)
    return (
        <div className={s.messages}>
            <div className={s.flexMessages}>
                <div className={s.itemMess}>
                    {Elements}
                </div>
            </div>
        </div>
    )
}
export default Persons