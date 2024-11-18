import { React } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import Todolist from "../TodoList/Todolist";
import History from "../History/History";

const RouteComponent = () =>{
    return (
        <Routes>
            <Route path="/" element={<Todolist/>} />
            <Route path="/Todolist" element={<Todolist/>} />
            <Route path="/History" element={<History/>} />
            <Route path="*" element={<Navigate to={"/Todolist"}/>} />
        </Routes>
    )
}

export default RouteComponent;
