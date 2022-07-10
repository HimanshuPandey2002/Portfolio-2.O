import Link from "next/link";
import React from "react";
// import leetcode from "../leetcode.svg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Himanshu</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/himanshupandey2002" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/himanshu_295" target="blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/himanshupandey29/"
        target="blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://leetcode.com/schafermike960/" target="blank">
        <AiFillGithub size="3rem" />
        {/* <img src={leetcode} alt="leetcode" /> */}
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
