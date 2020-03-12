import React, { useContext } from 'react';
import { Wrapper } from './Wrapper';

const Navbar = () => {
    const[user] = useContext(Wrapper);
    return (
        <div>
            <h1>Hi {user.name}</h1>
        </div>
    );
}

export default Navbar;