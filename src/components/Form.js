import React, { useContext } from 'react';
import { Wrapper } from './Wrapper';

const Form = () => {
    const[user, setUser] = useContext(Wrapper);
    const onChangeHandler = (event) => {
        setUser ({
            ...user,
            name: event.target.value
        })
    }
    return (
        <div>
            <label>Your Name:</label>
            <input type="text" value={user.name} onChange={onChangeHandler}/>
        </div>
    );
}

export default Form;