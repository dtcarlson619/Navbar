import React, { createContext, useState } from 'react';

export const Wrapper = createContext([{name:"David", age:29}, Function]);

export const WrapperProvider = (props) => {
    const[user, setUser] = useState({name:"David", age:29})
    return (
    <Wrapper.Provider value={[user, setUser]}>
        {props.children}
    </Wrapper.Provider>
    );
}

export default WrapperProvider;