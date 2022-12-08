import React, { Suspense } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useRef, useState } from "react";
import {Container} from './style';
import './App.css';
import {User, Lock, ArrowRight, Terminal} from "react-feather";
import {signup, db} from "./Firebase";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import Spline from'@splinetool/react-spline';
import { Checkbox } from 'react-input-checkbox';
import { motion, AnimatePresence } from "framer-motion";


 function App() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const userNameRef = useRef();
    const [showModal, setShowModal] = useState(false);

    function handleMouseDown(e) {
        if (e.target.id === 'a7aba06d-5b9c-4f54-9adc-9b811153b4d0') {
         
            // if(document.getElementById("signup").style.display === "block"){
            //     document.getElementById("signup").style.display = "none";
            // }
            // else {
            //     document.getElementById("signup").style.display = "block";
            // }
           setShowModal(current => !current);
            

        }
      }

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

    <div style={{width:"100%",height:"100vh", backgroundSize: "cover", display: "flex", flexDirection: "column",  background: "linear-gradient(to bottom, #9800a2, #c71c87, #fe3a62, #fe5552,#ff9f37,#ffce19,#cdf5c8 , #C8E7F5, #C8E7F5, #C8E7F5, #C8E7F5, #C8E7F5, #C8E7F5)"}}>
        
        
        
         <div style = {{ width: "90%", alignSelf:"center", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            
            <div>
            <h1 style = {{color:"white"}}>Aurora AI</h1>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h3 style={{fontWeight: "lighter", color:"white"}}>Already have an account? <b><Link style={{textDecoration: "none",color:"white"}} to={"/Login"}>Sign in</Link></b></h3><ArrowRight style={{color:"white"}}/>
            </div>
            
            
        </div>
        
       <div style={{alignSelf:"center", position:"absolute",bottom: "0", margin:"auto 0"}}>
       <Suspense fallback={<div>Loading...</div>}>
        <Spline onKeyDown={handleMouseDown} renderOnDemand = {true} style={{width:"100%", height:"100%"}} scene="https://prod.spline.design/2ZLF-K9zdWKaT9EU/scene.splinecode" />
       </Suspense>
       </div>
        
       
        <motion.div id="signup" style={{zIndex: "1000"}}>
        
        <AnimatePresence>
        {showModal && (
        <motion.Container 
        
            initial={{ opacity: 0,  y: 60, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } }}
            exit={{ opacity: 0, y:0, scale: 1, transition: { duration: 0 } }} 
            style={{width: "360px", borderRadius: "25px", padding:"10px", backdropFilter: "blur(10px)",backgroundColor: "rgba(255, 255, 255, 1)", borderLeft: "solid 0.5px rgba(255, 255, 255, 0.3)",  borderTop: "solid 0.5px rgba(255, 255, 255, 0.3)", margin: "auto", display: "flex", alignItems:"center", justifyContent:"center"}}>
            
            <div>
                <h3 style={{fontWeight: "normal", textAlign: "center"}}>Create an account</h3>
                <div style={{width:"100%", borderTop: "1px solid lightgrey", marginBottom: "20px"}} />
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

                <div style ={{width:"300px", display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{width: "50px"}}>
                        <Checkbox />
                    </div>
                    <p style={{marginTop:"10px", color:"#3A3B3C", textAlign: "left"}}>I agree to Aurora's Services Agreement and acknowledge Aurora's Privacy Policy.</p>
                </div>
                
                <button disabled = {loading} onClick={confirmPassword}  id="Login" style={{backgroundColor:"black", width:"300px", height:"50px", borderRadius:"30px", cursor:"pointer", marginBottom:"20px"}}>
                   <div style={{width: "100%", height: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h4 style={{color:"white", fontWeight: "normal", fontSize:"18px"}}>Sign Up</h4>
                   </div>
                </button>
            </div>
        </motion.Container>
        )}
        </AnimatePresence>
        </motion.div>
        
      </div>

    
  );
}

export default App;