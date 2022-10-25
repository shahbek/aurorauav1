import React from 'react';
import { Activity, Code } from 'react-feather';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {SidebarData} from './SidebarData';
import "./Navbar.css";

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    
  return (
    <>

        <nav className={'nav-menu'}>

            <li className='nav-menu-items' >
                
                {SidebarData.map((item, index) => {
                    
                    return(
                         
                        <li key={index} className ={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </li>

        </nav>
      
    </>
  )
}

export default Navbar
