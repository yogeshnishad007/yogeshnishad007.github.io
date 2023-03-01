import React from "react";
import { FaGithub, FaLink ,FaNode} from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import {SiNextdotjs } from "react-icons/si";
 

import BabyBliss from "../Images/BabyBliss.png"
import NatureBasket from "../Images/Basket.png"
import Time from "../Images/TimeTracking.png"
import Tata from "../Images/Tata 1mg.png"


import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "BabyBliss",
      image:BabyBliss,
      project_desc:
        "FirstCry is an online brand providing a wide range of products for babies, kids, and moms like cloths,shoes etc.",
      deploy_link: "https://baby-bliss.vercel.app/",
      repo_link: "https://github.com/RationalPrabal/milky-plantation-958",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs/>]
    },
    {
      id: 2,
      project_name: "Nature Basket",
      image:NatureBasket,
      project_desc:
        "Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application.",
      deploy_link: "https://rct101project-yogeshnishad007.vercel.app/",
      repo_link: "https://github.com/yogeshnishad007/rabid-veil-7608",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />]
    },
    {
      id: 3,
      project_name: "Time Tracking App",
      image:Time,
      project_desc:
        "Time-Tracking is record time spent on tasks or projects. The software is used in many industries.",
      deploy_link: "https://delicate-lily-d956cc.netlify.app",
      repo_link: "https://github.com/Alexfp05405/eminent-art-8078",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />
      ]
    },

    {
      id: 4,
      project_name: "Tata 1mg",
      image:Tata,
      project_desc:
        "1mg.com brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you.",
      deploy_link: "https://project-medicare-fp24844q1-fullstackcrud.vercel.app",
      repo_link: "https://github.com/Prakashkumarjena700/Project_Medicare",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact /> ,<FaNode/>]
    },


  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={uuidv4()}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div key={uuidv4()} className="iconsTechStack">
                        {item}
                      </div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />  Github
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink />  Live
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
