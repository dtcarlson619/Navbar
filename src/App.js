import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';

function App() {
  return (
    <Wrapper>
        <Navbar/>
        <FormWrapper/>
    </Wrapper>
  );
}

export default App;
