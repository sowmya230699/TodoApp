import { React,useState ,useEffect} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import RouteComponent from './Routes';
import NavBar from './NavBar/NavBar';
import { TodoProvider } from './Context';


function App() {

  return (
    <div>
      <TodoProvider>
        <BrowserRouter>
          <NavBar />
          <RouteComponent />
        </BrowserRouter>
      </TodoProvider>
    </div>
  ) 
}

export default App
