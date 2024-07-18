import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import LangContext from './Context/UserContext';
import { useState } from 'react';
import UserRegistration from './UserRegistration';
import Header from './Header';
import Example from './Example';

function App() {
  const [lan,setlan]= useState('en')
  return (
    <LangContext.Provider value={{lan,setlan}}>

      <Header/>
      <UserRegistration/>
      <Example/>

    </LangContext.Provider>
  );
}

export default App;
