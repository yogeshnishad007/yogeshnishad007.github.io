
// import Fade from 'react-reveal/Fade';
// import Tilt from 'react-tilt'
import React from 'react';
import "./Project.css"
import nature from "./image/Basket.png"

const Project = () => {
    return <div className="fluid-container">

      

        <div className="left">
            <div className="col-lg-6 project-t ">
                
                    <div>
                        <h2>Online Food Shopping</h2>
                                               
                        <p className="p"><b>REACT HTML CSS MATEIAL UI</b></p>

                        
                        <button ><span> <a id="a" target="_blank" href="https://github.com/yogeshnishad007/rabid-veil-7608">Source Code </a></span></button>
                        <button ><span> <a id="b" target="_blank" href="https://rct101project-yogeshnishad007.vercel.app/">Deploy link </a></span></button>
                    </div>
                
            </div>

            <div className="right">
                <a target="_blank" href="https://rct101project-yogeshnishad007.vercel.app/" alt="nature">

                  <img src={nature} alt="Nature" width="820px" />
                    
                </a>
            </div>
        </div>
    </div >
}

export default Project