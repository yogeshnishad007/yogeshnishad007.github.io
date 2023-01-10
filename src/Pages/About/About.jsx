import "./about.css";
import Award from "../../img/Profile.jpeg";




const About = () => {
  return (
    <>
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src={Award}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <br/>
        <p className="about-sub">
        Hey,My name is Yogesh Nishad. A passionate individual who always thrive to work on end to end products
        </p>

        <br/>

        <p className="about-sub">
           I'm a Tech Enthusiast who enjoys building awesome website that solves real world problemse
        </p>

        <br/>

        <p className="about-sub">
        Innovative, task-driven professional in web-designing, proficent in developing databases, user interfaces, writing & testing Codes, and implementing the featured based on the feedback
        </p>
      

          
        
      </div>
    </div>

    <div class="eduction-div">
                  <h2 className="edu-head">EDUCATION</h2>
                </div>
                <div class="EDUCATION">
                
                   
                    
                    <div class="edu_cont">
                      <h4 class="course">Full-Stack Web Development</h4>
                      <p class="institute">Masai School, Bangalore</p>
                      <p class="duration">April 2022 - Present</p>
                    </div>


                    <div class="edu_cont">
                      <h4 class="course">B.Tech(CSE)</h4>
                      <p class="institute"> Chhattisgarh Swami Vivekanand Technical University Bhilai</p>
                      <p class="duration">July 2015 - July 2020</p>
                    </div>
                  
                   
          
                </div>
   

       </>            

  );
};

export default About;


