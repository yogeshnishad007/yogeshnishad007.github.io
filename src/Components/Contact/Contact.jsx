import React from "react";
import {
  ContactContainer,
  Column,
  P,
  LinksCont,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
 
} from "react-icons/fa";
import { SiGmail} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

const footerData = [
  {
    id: 0,
    title: "Mobile",
    display: "+917999959808",
    link: "tel:+917999959808",
    icon: <FaPhone style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 1,
    title: "Email",
    display: "yogiatoy27518@gmail.com",
    link: "mailto:yogiatoy27518@gmail.com",
    icon: <SiGmail style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 2,
    title: "Github",
    display: "Github",
    link: "https://github.com/yogeshnishad007",
    icon: <FaGithub style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/yogesh-nishad-7954ba229/",
    icon: (
      <FaLinkedin style={{ color: "grey" }} className="commonIconsFooter" />
    ),
  }
];

const Contact = () => {

  return (
    <Container className="contact">
      <Common>
        <H1>Contact</H1>
      </Common>
      <ContactContainer>
        <Column>
          <LinksCont>
          
            {footerData.map((item) => (
              <div
                key={uuidv4()}
                title={item.title}
                style={{ display: "flex" ,marginLeft:"400px",marginTop:"30px"}}
              >
                <div>
                  
                  {item.icon}
                
                </div>
                <div style={{ marginTop: "-5px"}}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <P>{item.display}</P>
                  </a>
                </div>
              </div>
            ))}
          
          </LinksCont>
        </Column>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
