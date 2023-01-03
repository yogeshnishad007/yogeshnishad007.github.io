import React from 'react'
import Typewriter from "typewriter-effect";

const Home = () => {

  return (
    <div className='Summay-div'>


       <h1 className='Name-h1Tag'>Hello, I am <span className='Name-spanTag'>Yogesh Nishad</span> </h1>


   <h3 className='Type'>
       <Typewriter
           options={{
           strings: ["Full Stack Web Developer", "MERN Stack Developer","React Developer",],
           autoStart: true,
           loop: true,
           deleteSpeed: 100
         }}
      />

     </h3>

       <h4 className='Summary'>Passionate Full Stack Web Developer with a specialization in MERN stack. Skilled collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned</h4>

   <div>
    
   </div>
       <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Kn0iGcxuQb-Fe8ZyWxbqb9UP33vyNutV/view?usp=share_link"
            );
          }}
        >
          Resume
        </button>
    </div>
  )
}

export default Home