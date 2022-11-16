
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {User, Lock, ArrowRight, Terminal} from "react-feather";
import {signup, db} from "./Firebase";
import {getAuth, updateProfile} from "firebase/auth";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import Spline from '@splinetool/react-spline';



 function App() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const userNameRef = useRef();
    const auth = getAuth();

    
    function confirmPassword(){
        if(confirmPasswordRef.current.value !== passwordRef.current.value)
        {
            document.getElementById("errorcredentials").style.display = "block";
        }
        else{
            handleSignup();
        }
    }
    

    async function handleSignup(){
        setLoading(true);
        try {
            
            const  userCredential  = await signup(emailRef.current.value, passwordRef.current.value);
            
            const user = userCredential.user;
             
            const userData = {
                username: userNameRef.current.value,
                email: emailRef.current.value,
                timestamp: serverTimestamp()
            }
            console.log(userData.username);
            await setDoc(doc(db, 'users', user.uid), userData);

            navigate("/");
        } catch {
            alert("error!");
        }
        setLoading(false);
    }

  return (
    
    <div style={{height: "100vh", width:"100%", backgroundSize: "cover", display: "flex", flexDirection: "column",  background: "linear-gradient(to bottom, #cb51e3, #bb77f5, #ffff , #ffff, #ffff, #ffff, #ffff)"}}>
        
        
        
         <div style = {{ width: "90%", alignSelf:"center", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <div>
            <h1>Aurora AI</h1>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h3 style={{fontWeight: "normal"}}>Already have an account? <b><Link style={{textDecoration: "none"}} to={"/Login"}>Sign in</Link></b></h3><ArrowRight/>
            </div>
            
            
        </div>

        {/* <Spline scene="https://prod.spline.design/XkV7H1cA6y-TIDk3/scene.splinecode" /> */}
        
        <div style={{height: "100vh", width: "100%", display: "flex", alignItems:"center", justifyContent:"center"}}>
            <div >
                <h3 style={{fontWeight: "normal", textAlign: "center"}}>Create an account</h3>
                <p id={"errorcredentials"} style ={{color: "red", display: "none"}} >passwords do not match</p>
                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center"}}>
                <User style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref = {emailRef} type="email" class="no-outline" placeholder="Email" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Terminal style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref = {userNameRef} type="text" class="no-outline" placeholder="Username" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Lock style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref ={passwordRef} type="password" class="no-outline" placeholder="Password" style={{paddingLeft: "10px"}}   />
                </div>

                <div style={{backgroundColor: "#edf2f7", border: "none", height: "50px", width: "300px", borderRadius: "10px", display: "flex", alignItems:"center", marginTop: "10px"}}>
                <Lock style={{paddingLeft: "10px", color: "#505050", width: "20px"}}/>
                <input ref ={confirmPasswordRef} type="password" class="no-outline" placeholder="Confirm password" style={{paddingLeft: "10px"}}   />
                </div>

                <p style={{color: "#2f80ed", textAlign:"center", fontWeight:"bold"}}></p>
                
                <button disabled = {loading} onClick={confirmPassword}  id="Login" style={{backgroundColor:"black", width:"300px", height:"50px", margin:"0 auto", borderRadius:"30px", display:"flex", cursor:"pointer", justifyContent:"center", alignItems:"center"}}>
                    <p style={{color:"white", padding:"5px", fontWeight:"bold", fontSize:"18px", textAlign:"center"}}>Sign Up</p>
                </button>
            </div>
        </div>
        
      </div>

    
  );
}

export default App;
