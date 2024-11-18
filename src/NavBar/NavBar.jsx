import {React} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () =>{
    return (
        <div className="navContainer">
            <NavLink to ={"/Todolist"}>TodoList</NavLink>
            <NavLink to = {"/History"}>History</NavLink>
        </div>
    )
}

export default NavBar; 