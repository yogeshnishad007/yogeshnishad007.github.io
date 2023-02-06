import React from "react";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode ,} from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/yogesh-nishad-7954ba229/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/yogeshnishad007",
    icon: <FaGithub />,
  }
  
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img
            src="https://avatars.githubusercontent.com/u/108000900?s=400&u=834837e268063efa1ed97508236c1d14a76088d7&v=4"
            alt="my image"
          />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
               I am Yogesh Nishad from Chhattisgarh. I graduated in B.Tech in Computer Sceince Engineering branch in 2020.
              {"   "}
              Currently, I have frontend skills like HTML, CSS, Javascript,
              React, and also in-depth DSA problem-solving ability.Interested in Yoga and Visiting new places.
              
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
