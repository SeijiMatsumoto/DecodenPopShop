import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  justify-content: center;
  background-color: white;
  margin-top: auto;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 800px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 5px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 100px;
`;

const ColHeader = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  margin: 5px 0 0 -40px;
`;

const ListItem = styled.li``;

const ListLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  object-fit: contain;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <Column>
          <ColHeader>Header1</ColHeader>
          <List>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
          </List>
        </Column>
        <Column>
          <ColHeader>Header2</ColHeader>
          <List>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>List Link Item</ListLink></Link></ListItem>
          </List>
        </Column>
        <Column>
          <Logo src="https://seeklogo.com/images/D/duck-logo-9E556EEECA-seeklogo.com.png" alt='Logo' onClick={() => window.open("/", "_self")} />
          <SocialIcons>
            <Icon src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="icon" />
            <Icon src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter2_colored_svg-512.png" alt="icon" />
            <Icon src="https://cdn0.iconfinder.com/data/icons/education-127/128/92-256.png" alt="icon" />
          </SocialIcons>
        </Column>
      </InnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;