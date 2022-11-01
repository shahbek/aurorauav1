import './App.css';
import React, { useState } from "react";
import { Layout, Container, BoxUpload, ImagePreview } from "./style";
import Navbar from "./Components/Navbar";
import ProcessImage from "./ProcessImage";




function App() {

  

  return (
    <div className="App">
   
      

      <Layout>
      <Navbar /> 
        <ProcessImage />
      </Layout>
    
   
  
      
    
    </div>

    

    
  );
}

export default App;
