import React from "react";
import {BrowserRouter, Routes, Route, Link, NavLink, Outlet} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Homepage from "./Pages/Homepage/Homepage"

const App = () =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Dashboard/>}>
                {/* <Route path="/News" element = {<Homepage />}/>
                <Route path="/Podacsts"/>
                <Route path="/Resources"/> */}
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App;