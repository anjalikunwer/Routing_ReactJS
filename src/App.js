import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import {Navigate} from "react-router-dom";

const App = ()=>
{
  const [input, setInput] = useState('');
  const userID = (e) => {
    console.log("Text => ",e.nativeEvent.target.value);
    setInput(e.nativeEvent.target.value); 
  }
  const userPassword = (e) => {
    console.log("Text => ",e.nativeEvent.target.value);
    setInput(e.nativeEvent.target.value);
  }
  const getemail = sessionStorage.getItem("userID");
  if(getemail == null)
  {
    return <Navigate replace to="/login" />;
  }
  else
  {
    return(
      <h1>Welcome : {getemail}</h1>
    );
  }
}

export default App;
