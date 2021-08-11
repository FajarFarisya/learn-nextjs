import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Halo<br />
        I'm Fajar
      </SectionTitle>
      <SectionText>
        Medioker level experience in web development.
      </SectionText>
      <a href="#projects"><Button>Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;