import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Greet } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello 👋🏻 <br />I am Himanshu Pandey
      </SectionTitle>
      <SectionText>
        Computer Science Student, Front-end Developer and Blockchain enthusiast
      </SectionText>
      <a
        href="https://drive.google.com/file/d/10FvU_EesJqu35UTcuptxXXfbjo4rDn6h/view?usp=sharing"
        target="blank"
      >
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
