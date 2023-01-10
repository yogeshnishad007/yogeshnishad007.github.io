
import { Route,Routes,Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Skill from "../Pages/Skill/Skill";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact";

import "./Navbar.css"

const Navbar =()=>{

   return (
       <>

       <div className="Navbar-Div">

        <div>

          <Link className="links">Yogesh Nishad</Link>
        </div>


        <div className="level-2">

           <div>

                 <Link className="links" to="/">Home</Link>
          </div>

            <div>
                  <Link  className="links" to="/about">About</Link>
            </div>

            <div>
                  <Link  className="links" to="/skill">Skill</Link>
            </div>

            <div>
                  <Link  className="links" to="/project">Project</Link>

            </div>

            <div>
                  <Link  className="links" to="/contact">Contact</Link>
            </div>

         </div> 
            
      </div>
           
        <Routes>

               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/skill" element={<Skill/>}/>
               <Route path="/project" element={<Project/>}/>
               <Route path="/contact" element={<Contact/>}/>
        </Routes>

        
       </>
   )
}
export default Navbar;