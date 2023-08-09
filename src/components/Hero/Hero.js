import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
		<LeftSection>
			<SectionTitle main center >
				Welcome To <br />
				My Portfolio
			</SectionTitle>
			<SectionText>
			Wed-dev life-long student eager to learn and work with brilliant minds. Currently looking for Junior front-end positions to gain experience in the tech field.
			</SectionText>
			<Button onClick={() => window.location = '#about'}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;