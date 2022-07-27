import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { MdAlternateEmail, MdPhone, } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  justify-content: center;
  background-color: #FFF5F0;
  margin-top: auto;
  * {
    font-family: 'Mali', cursive;
  }
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

  @media screen and (max-width: 570px) {
    width: 100%;
    margin: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 100px;

  &:nth-child(3) {
    justify-content: center;

    @media screen and (max-width: 1000px) {
      justify-content: flex-start;
    }
  }

`;

const ColHeader = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  margin: 5px 0 0 -40px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.span`
  position: relative;
  top: 3px;
`;

const ListLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-left: 5px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  object-fit: contain;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <Column>
          <ColHeader>Products</ColHeader>
          <List>
            <ListItem><Link href="/"><ListLink>All Products</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Cases</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Clothing</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Toys</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Other</ListLink></Link></ListItem>
          </List>
        </Column>
        <Column>
          <ColHeader>Contact Us</ColHeader>
          <List>
            <ListItem><Icon><MdAlternateEmail /></Icon><Link href="/"><ListLink>Email: support@quackgoods.com</ListLink></Link></ListItem>
            <ListItem><Icon><MdPhone /></Icon><Link href="/"><ListLink>Phone: 999-999-9999</ListLink></Link></ListItem>
            <ListItem><Icon><BsInstagram /></Icon><Link href="/"><ListLink>Instagram: @QuackGoods</ListLink></Link></ListItem>
            <ListItem><Icon><BsTwitter /></Icon><Link href="/"><ListLink>Twitter: @QuackGoods</ListLink></Link></ListItem>
          </List>
        </Column>
        <Column>
          <Logo src="/Logos/QuackGoods-logos_transparent.png" alt='Logo' onClick={() => window.open("/", "_self")} />
        </Column>
      </InnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;