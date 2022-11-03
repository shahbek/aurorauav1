import {Link, useNavigate} from "react-router-dom";
import React from "react";
import { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {User, Lock, ArrowRight} from "react-feather";
import {signup, login} from "./Firebase";






 function App() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    
    async function handleLogin(){
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            document.getElementById("errorcredentials").style.display = "block";
        }
        setLoading(false);
    }

   

  return (
    
    <div style={{height: "100vh",width:"100%", backgroundSize: "cover", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom, #cb51e3, #bb77f5, #ffff , #ffff, #ffff, #ffff, #ffff)"}}>
        
        
        
         <div style = {{ width: "90%", alignSelf:"center", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <div>
            <h1>Aurora AI</h1>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h3 style={{fontWeight: "normal"}}>Don't have an account? <b><Link style={{textDecoration: "none"}} to={"/Signup"}>Sign up</Link></b></h3><ArrowRight/>
            </div>
            
            
        </div>
        
        <div style={{height: "100vh", width: "100%", display: "flex", alignItems:"center", justifyContent:"center"}}>
            <div >
                <h3 style={{fontWeight: "normal", textAlign: "center"}}>Log in to your account</h3>
                <p id={"errorcredentials"} style ={{color: "red", display: "none"}} >invalid credentials</p>
                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center"}}>
                <User style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref = {emailRef} type="email" class="no-outline" placeholder="Email" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Lock style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref ={passwordRef} type="password" class="no-outline" placeholder="Password" style={{paddingLeft: "10px"}}   />
                </div>

                <p style={{color: "#2f80ed", textAlign:"center", fontWeight:"bold"}}>Forgot your password?</p>
                
                <button disabled = {loading} onClick={handleLogin}  id="Login" style={{backgroundColor:"black", width:"300px", height:"50px", margin:"0 auto", borderRadius:"30px", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
                    <p style={{color:"white", padding:"5px", fontWeight:"bold", fontSize:"18px", textAlign:"center"}}>Log In</p>
                </button>
            </div>
        </div>
        
      </div>

    
  );
}

export default App;
