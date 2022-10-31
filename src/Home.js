import './App.css';
import React, { useState } from "react";
import { Layout, Container, BoxUpload, ImagePreview } from "./style";
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import {HelpCircle} from "react-feather";
import {SpinnerDotted} from "spinners-react";
import $ from "jquery";
import Results from "./Results.json";
import { PieChart } from 'react-minimal-pie-chart';
import Navbar from "./Components/Navbar";



function spinnerToggle(){
 document.getElementById("process").style.display ="none";
 $("#spinner").show();
 $("#Analytics").show();
 
}

function App() {

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");




  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function printResults(result){
      
      for(let i = 0; i <= result.detections.length; i++){
       return <h1>Species: {result.detections[i].label}</h1>;
       
      }
    
  }

  return (
    <div className="App">
   
      

      <Layout>
      <Navbar /> 
      <div style = {{ width: "100%"}}>
      <h2>Process Image</h2>
      
      <div style = {{display: "flex", justifyContent: "space-evenly"}}>
      <Container style={{backdropFilter: "blur(7px)", borderLeft: "solid 0.5px rgba(255, 255, 255, 0.3)",  borderTop: "solid 0.5px rgba(255, 255, 255, 0.3)"}}>
        <h2>Upload image of Tree or Forest Area</h2>

        <BoxUpload style={{backdropFilter: "blur(1px)"}}>
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FolderIcon}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 100, height: 100 }}
                  />
                  <p style={{ color: "#444" }}>Click to upload image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </BoxUpload>

      

        

      
      <div style={{marginTop: "20px"}}>

      <div onClick={spinnerToggle} id="process" style={{backgroundColor:"white", width:"50%", margin:"0 auto", borderRadius:"20px", display:"block", cursor:"pointer"}}>
          <p style={{color:"black", padding:"5px", fontWeight:"bold"}}>Process</p>
      </div>
      
      <div id="spinner" style={{display:"none"}}>    
          <SpinnerDotted enabled={true} color={"white"} size={"35px"} thickness={150}/>
      </div>


      
      </div>
      <div><a style={{marginTop:"10px",color:"white", fontSize: "13px", fontWeight: "lighter"}}><HelpCircle size={15}/>Please only upload images of trees</a></div>
      
      

      </Container>
      <Container id="Analytics" style={{backdropFilter: "blur(7px)", borderLeft: "solid 0.5px rgba(255, 255, 255, 0.3)",  borderTop: "solid 0.5px rgba(255, 255, 255, 0.3)", display :"none"}}>
        <h1>Analytics</h1>
        {
          Results[0].detections && Results[0].detections.map( (result) => {
            return <div key={result.id}>
              <h3 key={result.id}>Species: {result.label}</h3>
              <h4>    Confidence: {((result.score)*100).toFixed(2)}%</h4>
                
              </div>

              
            
          })
        }
        {
        Results[0].numDetections && Results[0].numDetections.map( (result) => {
        
          return <h4>Total trees: {result}</h4>
        }
        )}
<Container style={{width: "90%", alignSelf: "center", background: "rgba(255,255,255,0.7)"}}>
<PieChart
  style={{width: "200px"}}
  lineWidth={15}
  paddingAngle = {15}
  rounded = {true}
  radius = {40}
 
  viewBoxSize = {[100,100]}
  center = {[50,50]}
 
  data={[
    { title: 'Pine', value: 10, color: '#14ccc0' },
    { title: 'Fir', value: 15, color: '#bcdc84' },
    { title: 'Spruce', value: 20, color: '#74bc24' },
    { title: 'Three', value: 20, color: '#04bcb4' },
  ]}
/>
        </Container>
      </Container>
      </div>


      </div> 
    </Layout>
    
   
  
      
    
    </div>

    

    
  );
}

export default App;
