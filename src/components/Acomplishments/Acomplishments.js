import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', },
// ];

const data = [
  { skill: 'HTML' },
  { skill: 'CSS' },
	{ skill: 'JavaScript' },
	{ skill: 'Git/GitHub' },
	{ skill: 'OOP' },
	{ skill: 'Node.js' },
	{ skill: 'Express' },
	{ skill: 'Pug' },
	{ skill: 'jQuery' },
	{ skill: 'AJAX' },
	{ skill: 'Next.js' },
	{ skill: 'Tailwind' },
	{ skill: 'Bootstrap' },
	{ skill: 'SQL' },
	{ skill: 'Typescript' },
	{ skill: 'REST APIs' },
	{ skill: 'And More...' },
];

const Acomplishments = () => (
  <Section>
		<SectionTitle>Skills</SectionTitle>
		<Boxes>
		{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.skill}</BoxNum>
					{/* <BoxText>{card.text}</BoxText> */}
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
