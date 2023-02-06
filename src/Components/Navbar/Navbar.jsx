import React from "react";
import { Toggle } from "./Toggle";
import { NavBarDiv, NavItems, NavItem, Logo } from "./Styles";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import {HeaderButtons,A} from "../Header/Styles"



const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Projects", css: "projects" },
  { id: 4, name: "Contact", css: "contact" },
];


function Navbar({ themeToggler }) {
 
  return (
    <NavBarDiv>
      <Logo onClick={() => scroll.scrollToTop()}>
        <span class="grey-color"> &lt;</span>
        <span class="logo-name">Yogesh Nishad</span>
        <span class="grey-color">/&gt;</span>
      </Logo>

      <NavItems>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavItem key={item.id}>{item.name}</NavItem>
          </Link>
        ))}
        
      </NavItems>
     
      {/* <HeaderButtons>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Kn0iGcxuQb-Fe8ZyWxbqb9UP33vyNutV/view?usp=share_link"
            >
              Resume
            </a>
            </HeaderButtons> */}
      <Toggle themeToggler={themeToggler} />
    </NavBarDiv>
  );
}

export default Navbar;
