import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants'; //seperates logic from content

const Projects = () => (
  <div>
    <Section id='projects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<GridContainer>
				{projects.map(({ id, title, description, image, tags, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
						<br />
						<TitleContent>Stack</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
						</div>
						<UtilityList>
							<ExternalLinks target='_blank' href={visit}>Code</ExternalLinks>
							<ExternalLinks target='_blank' href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				))}
			</GridContainer>
		</Section>
  </div>
);

export default Projects;


//notes: 
//instead of using project.id,title etc, just destructure w/ {}
{/* {projects.map((project) => ( */}
