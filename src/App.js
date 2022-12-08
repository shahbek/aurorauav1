import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Login from "./Login";
import Signup from "./Signup";
import ProcessImage from "./ProcessImage";
import Saved from "./Saved";
import Navbar from './Components/Navbar';
import {Layout} from "./style/index";
import Dashboard from "./Dashboard";

function App() {
    const location = useLocation();

    return (
        
        <>
         
        
        <Layout>
        {location.pathname === '/Signup' || location.pathname === '/Login' ? null : <Navbar />}
        <Routes>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<ProcessImage />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path = "/Dashboard" element ={<Dashboard />} />
        </Routes>
        </Layout>
        
        </>
       
    )

}

export default App;