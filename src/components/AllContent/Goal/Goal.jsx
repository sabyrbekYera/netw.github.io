import React, { useEffect, useState } from 'react'
import s from './Goal.module.css'

const Goal = () => {
    const [BazaSomething, setBazaSomething] = useState([{ somethingText: "Hello,How are u !" },
    { somethingText: "Are you sure ?" },
    { somethingText: "I am from in Kazakhstan !!" }]);
    const [value, setValue] = useState('');

    const addToBaza=()=>{
        setBazaSomething(prev => [...prev, {somethingText : String(value)}]);
        setValue('');
    }
   
    return (
        <div className={s.Goal}>
            <div className={s.FlexGoal}>
                <div className={s.BigBon}>
                    <input type="text" placeholder='Write something...' value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                    <button onClick={addToBaza} >Add</button>
                </div>
                <div className={s.itemGoal}>
                    {
                       BazaSomething.map(props => <MyGoalText somethingText={props.somethingText} id={props.id} />)
                    }
                </div>
            </div>
        </div>
    )
}


const MyGoalText = (props) => {
    return (
        <div className={s.person1}>
            <div>
                <p>{props.somethingText}</p>
            </div>
        </div>
        )
}


export default Goal