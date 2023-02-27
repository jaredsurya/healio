//import {useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <Feed/>
      <RightBar/>
    </div>
  );
}

export default App;
