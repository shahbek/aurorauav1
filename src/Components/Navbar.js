import React from 'react';
import {LogOut, UploadCloud, Save, Box } from 'react-feather';
import {Link, useNavigate, NavLink} from 'react-router-dom';
import {useState, useEffect} from "react";
import {SidebarData} from './SidebarData';
import "./Navbar.css";
import {logout, useAuth, db} from "../Firebase";
import {collection, query, where, doc, getDocs} from "firebase/firestore";
import Logo from "../assets/Logo.png";

function Navbar() {

    const currentUser = useAuth();
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const [loading, setLoading] = useState(false);

    const [users, setUsers] = useState([]);
 
    const fetchUsers = async () => {
       
        await getDocs(collection(db, "users"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setUsers(newData);                
                
            })
       
    }

   
    useEffect(()=>{
        fetchUsers();
    }, [])


    function displayUser(){
        for(var i = 0; i < users.length; i++){
            if(currentUser && users[i].id == currentUser.uid){
                return users[i].username;
            }
        }
    }

   
    var header = document.getElementsByClassName('nav-menu-items');
    var links = document.getElementsByClassName('nav-text');

    for (var i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    async function handleLogout(){
        setLoading(true);
        try {
            
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
            <div style ={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

                <img
                src={Logo}
                alt="placeholder"
                style={{ width: 70, height: 70, marginTop: 10}}
                />

            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center",paddingLeft:"10px",paddingRight:"10px", height:"28px",  backgroundColor:"#d9fcd9", borderRadius: "30px"}}>
                    <div style={{width:"13px", height:"13px", borderRadius:"13px", backgroundColor:"limegreen", marginRight:"3px"}} />
                    <h4 style={{color: "black", fontWeight:"lighter", textAlign:"center"}}>{displayUser()}</h4>
                </div>
            
            </div>

            </div>
            <li className='nav-menu-items' >

            <li key={1} className ='nav-text'>
                            <Link to='/Dashboard'>
                                <Box />
                                <p style={{marginLeft:"5px"}}>Dashboard</p>
                            </Link>
            </li>
            <li key={2} className ='nav-text active'>
                            <Link to='/'>
                                <UploadCloud />
                                <p style={{marginLeft:"5px"}}>Process Image</p>
                            </Link>
            </li>

            <li key={3} className ='nav-text'>
                            <Link to='/Saved'>
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
