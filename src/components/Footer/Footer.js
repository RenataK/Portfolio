import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:5039808494'>503-980-8494</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:arkstack101@gmail.com'>arkstack101@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating One Project at a Time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/RenataK' target="_blank">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/renata-kravchenko-54b91a21b/' target="_blank">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href='https://twitter.com' target="_blank">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
  ); 
};

export default Footer;
