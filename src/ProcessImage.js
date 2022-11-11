import './App.css';
import React, { useState } from "react";
import {Container, BoxUpload, ImagePreview } from "./style";
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import {HelpCircle, Save} from "react-feather";
import {SpinnerDotted} from "spinners-react";
import $ from "jquery";
import Results from "./Results.json";
import { PieChart } from 'react-minimal-pie-chart';


function detectFromImage(){
  var pine = 0;
  var fir = 0;
  var spruce = 0;
  
  var Object = Results[0].detections;
  var newObject = [{ "detections": [], "total": []}];

  for(let i = 0; i < Object.length; i++){
    
    if(Object[i].label == "pine"){
      pine += 1;
     
    }
    if(Object[i].label == "fir"){
      fir += 1;
     
    }
    if(Object[i].label == "spruce"){
      spruce += 1;
     
    }
    
    
  }

 var total = pine + spruce + fir;

  newObject[0].detections[0] = {"id": 1, "label": "fir", "total": fir};
  newObject[0].detections[1] = {"id": 2, "label": "spruce", "total": spruce};
  newObject[0].detections[2] = {"id": 3, "label": "pine", "total": pine};
  newObject[0].total[0] = {"total": total};

  return newObject;
}


const newResults = detectFromImage();

console.log("NEW RESULTS: " + Results[0].detections[0].label);

console.log("NEW : " + newResults[0].total[0].total);

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

 
  return (
    

    

<div style = {{ width: "100%", marginBottom: "20px"}}>
      
      <div style ={{width: "95%", margin: "auto"}}>

      <h2 style={{textAlign:"left", color: "black"}}>Process Image</h2>
      <p style ={{textAlign: "left", color: "grey"}}>Drop your files in the box below for processing</p>
      
      <div style={{width:"100%",height:"500px", display:"flex",flexDirection:"row", boxShadow: "rgba(50, 50, 93, 0.5) 0px 25px 25px -5px, rgba(0, 0, 0, 0.5) 0px 7.5px 15px -7.5px", borderRadius: "30px"}}>
                <div style={{height:"100%",width:"50%", backgroundColor:"black",borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px", display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <div>
                        <h1 style={{color:"white", fontWeight:"lighter"}}>Tree Detection</h1>
                        <p style ={{color: "white", fontWeight:"lighter"}}>extract forestry data from raw imagery at 75% precision</p>
                       
                        </div>
                </div>
                <div style = {{width: "50%", height: "100%", background: "linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2)", display:"flex",alignItems:"center", borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}}>
                <Container style={{backdropFilter: "blur(7px)", borderLeft: "solid 0.5px rgba(255, 255, 255, 0.3)",  borderTop: "solid 0.5px rgba(255, 255, 255, 0.3)", margin: "auto"}}>
                    <h3>Upload image of Tree or Forest Area</h3>

                    <BoxUpload style={{backdropFilter: "blur(1px)"}}>
                    <div className="image-upload">
                        {!isUploaded ? (
                        <>
                            <label htmlFor="upload-input">
                            <img
                                src={FolderIcon}
                                draggable={"true"}
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
                </div>
      </div>

                <h2 style={{textAlign:"left", color: "black"}}>Results</h2>
                <p style ={{textAlign: "left", color: "grey"}}>Finish processing files to view results</p>
                

        


      <div id="Analytics" style={{display :"none", textAlign: "left", display: "flex"}}>
      
        
        {
          newResults[0].detections && newResults[0].detections.map( (result) => {
            return <div key={result.id} style ={{width:"250px", backgroundColor: "white", border : "2.5px solid lightgrey", borderRadius: "10px", display:"flex", justifyContent:"center", alignItems:"center", marginRight: "30px"}}>
                
                <div style={{width:"98%", height:"98%",display:"flex", flexDirection:"column", alignSelf:"center"}}>
                <div style={{width: "100%", height:"50px",backgroundColor: "#d0c5ef", borderTopRightRadius: "7px",borderTopLeftRadius: "7px", display:"flex", alignItems:"center", justifyContent:"center"}}><h4>Detection_{result.id}</h4></div>
                  
                  <div style={{width:"90%", alignSelf:"center"}}>
                    <div style={{display:"flex", justifyContent:"space-between"}}><p><b>id</b></p><p style={{color:"grey"}}>{result.id}</p></div>
                    <div style={{display:"flex", justifyContent:"space-between"}}><p><b>species</b></p><p style={{color:"grey"}}>{result.label}</p></div>
                    <div style={{display:"flex", justifyContent:"space-between"}}><p><b>total_trees</b></p><p style={{color:"grey"}}>{result.total}</p></div>
                    <div style={{display:"flex", justifyContent:"space-between"}}><p><b>confidence_level</b></p><p style={{color:"grey"}}>78%</p></div>
                    <div style={{display:"flex", justifyContent:"space-between"}}><p><b>value</b></p><p style={{color:"grey"}}>$1500</p></div>
                  </div>

                </div>
                </div>
             
              
            
          })
        }
        {/* <div>Total trees: {newResults[0].total[0].total}</div> */}
        
        
      </div>

      </div>
      </div> 
    
  );
}

export default App;

