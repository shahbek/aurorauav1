
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {User, Lock, ArrowRight} from "react-feather";
import {signup} from "./Firebase";






 function App() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup(){
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            alert("something went wrong");
        }
        setLoading(false);
    }

  return (
    
    <div style={{height: "100vh", backgroundSize: "cover", display: "flex", flexDirection: "column", backgroundImage: "url('https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg?w=826&t=st=1666545525~exp=1666546125~hmac=0004e28609ee244358f0b52a79285e5c800e06a4375a286465d617b4e6ac0c01')"}}>
        
        
        
         <div style = {{ width: "90%", alignSelf:"center", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <div>
            <h1>Aurora AI</h1>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h3 style={{fontWeight: "normal"}}>Already have an account? <b><Link to={"/Login"}>Sign in</Link></b></h3><ArrowRight/>
            </div>
            
            
        </div>
        
        <div style={{height: "100vh", width: "100%", display: "flex", alignItems:"center", justifyContent:"center"}}>
            <div >
                <h3 style={{fontWeight: "normal", textAlign: "center"}}>Create an account</h3>
                
                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center"}}>
                <User style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref = {emailRef} type="email" class="no-outline" placeholder="Email" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Lock style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input type="password" class="no-outline" placeholder="Password" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Lock style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref ={passwordRef} type="password" class="no-outline" placeholder="Password" style={{paddingLeft: "10px"}}   />
                </div>

                <p style={{color: "#2f80ed", textAlign:"center", fontWeight:"bold"}}></p>
                
                <button disabled = {loading} onClick={handleSignup}  id="Login" style={{backgroundColor:"black", width:"300px", height:"50px", margin:"0 auto", borderRadius:"30px", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
                    <p style={{color:"white", padding:"5px", fontWeight:"bold", fontSize:"18px", textAlign:"center"}}>Sign Up</p>
                </button>
            </div>
        </div>
        
      </div>

    
  );
}

export default App;
