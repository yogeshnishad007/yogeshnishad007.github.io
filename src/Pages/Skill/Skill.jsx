import React from 'react'
import "./Skill.css"
import Scriptjava from "./icon/javascript.png";
import Nextjs from "./icon/nextjs.png"
import redux from "./icon/redux.png"
import npm from "./icon/npm.png"
import vue from "./icon/vue.png"
import postman from "./icon/postman.png"


const Skill = () => {
  return (
    <div className='return-div'>
        
        <h1 className='skill-head'>TECH SKILLS</h1> 

<div className='skill-container'>

        
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/50/000000/html-5--v1.png" alt='html'/>
                </div>
                <h4>HTML</h4>
              </div>
            
       
            
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/50/000000/css3.png" alt='css'/>
                </div>
                <h4>CSS</h4>
              </div>
          
          
             
              <div class="service-item-inner">
                <div class="">
                  <img src={Scriptjava} alt='javascript'   width="48px" height="48px"/>
                </div>
                <h4>JavaScript</h4>
              </div>
          

            
              <div class="service-item-inner">
                <div class="">
                  <img src={Nextjs} alt='nextjs'   width="70px" height="38px"/>
                </div>
                <h4>NextJs</h4>
              </div>
        
            
             
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/50/000000/react-native.png" alt='react'/>
                </div>
                <h4>REACT</h4>
              </div>
            

            
              <div class="service-item-inner">
                <div class="">
                  <img src={vue} alt='vue'  width="48px"/>
                </div>
                <h4>VUE</h4>
              </div>
            
         
            
        
             
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/48/000000/express.png" alt='express'/>
                </div>
                <h4>EXPRESS</h4>
              </div>
          
           
             
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt='nodejs'/>
                </div>
                <h4>Nodejs</h4>
              </div>
      
            
             
              <div class="service-item-inner">
                <div class="">
                  <img src={redux} width="48px"
                   alt='redux'/>
                </div>
                <h4>Redux</h4>
              </div>
            
           
             
              <div class="service-item-inner">
                <div class="">
                  <img src={postman} 
                  width="48px" alt='postman'/>
                </div>
                <h4>Postman</h4>
              </div>
          
          
             
              <div class="service-item-inner">
                <div class="">
                  <img src={npm} 
                  width="88px" height="48px" alt='npm'/>
                </div>
                <h4>Npm</h4>
              </div>
      
           
             
          
            <div class="service-item padd-15">
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/48/000000/heroku.png"
                  height="48px" alt='heroku'/>
                </div>
                <h4>Heroku</h4>
              </div>
            </div>
            
            
              <div class="service-item-inner">
                <div class="">
                  <img src="https://img.icons8.com/color/50/000000/material-ui.png" alt='material'/>
                </div>
                <h4>Material-UI</h4>
              </div>
            
           
              
                <div class="service-item-inner">
                  <div class="">
                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png"
                    height="48px" alt="Boootdtrap"/>
                  </div>
                  <h4>Bootstrap</h4>
                </div>
        
             
       </div>   


    </div>
  )
}

export default Skill