import React from 'react';
import { Activity, Code, Cpu, Pocket, LogOut, UploadCloud, Save } from 'react-feather';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import {SidebarData} from './SidebarData';
import "./Navbar.css";
import {logout, useAuth} from "../Firebase";

function Navbar() {

    const currentUser = useAuth();
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleLogout(){
        setLoading(true);
        try {
            console.log(currentUser.displayName);
            await logout();
            navigate("/Login")

        }catch {
            alert("error!");
        }
        setLoading(false);
    }
    
  return (
      
    <>
     
        <nav className={'nav-menu'}>

            <div>
            <h1>Aurora AI</h1>
            <h4 style={{color: "purple"}}>{currentUser?.displayName}</h4>
            </div>
            <li className='nav-menu-items' >

            <li key={5} className ='nav-text'>
                            <Link to='/'>
                                <UploadCloud />
                                <p style={{marginLeft:"5px"}}>Process Image</p>
                            </Link>
            </li>

            <li key={5} className ='nav-text'>
                            <Link to='/'>
                                <Save />
                                <p style={{marginLeft:"5px"}}>Saved</p>
                            </Link>
            </li>
                
                {/* {SidebarData.map((item, index) => {
                    
                    return(
                        
                        <li key={index} className ={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })} */}
            </li>
            
            <div style = {{display: "flex", justifyContent: "center", alignItems:"center", marginBottom: "20px" }}>
                <div style = {{width: "50px",height: "50px", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems:"center", borderRadius:"30px"}}>
                
                
                    <LogOut onClick= {handleLogout} style ={{color: "white", cursor: "pointer"}} />
                

                </div>
            
                <div style={{marginLeft:"5px"}}><h3>Logout</h3></div>
            </div>
            

        </nav>
      
    </>
  )
}

export default Navbar
