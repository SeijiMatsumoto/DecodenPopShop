import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { MdAlternateEmail, MdPhone, } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: #FFF5F0;

  * {
    font-family: 'Mali', cursive;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 20px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #dadada;

  @media screen and (max-width: 703px) {
    width: 90%;
    margin: 5px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  min-width: 100px;
  max-width: 300px;
`;

const ColHeader = styled.span`
  font-size: 16px;
  font-weight: bold;
  cursor: default;
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

  transition: all 200ms;
  &:hover {
    color: #fa741a;
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  object-fit: contain;
  margin: 0 0 10px -5px;
`;

const CreatedByWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: 703px) {
    width: 85%;
  }
`;

const CreatedByText = styled.span``;

const CreatedByButton = styled.button`
  font-size: 14px;
  color: white;
  background-color: #fa741a;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 100px;
  transition: all .2s;

  &:hover {
    background-color: #ff8432;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <Column>
          <Logo src="/Logos/QuackGoods-logos_transparent.png" alt='Logo' onClick={() => window.open("/", "_self")} />
          <List>
            <ListItem>{"You can't buy happiness, but you can buy all things duck-related!"}</ListItem>
          </List>
        </Column>
        <Column>
          <ColHeader>Categories</ColHeader>
          <List>
            <ListItem><Link href="/"><ListLink>All Products</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Cases</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Clothing</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Toys</ListLink></Link></ListItem>
            <ListItem><Link href="/"><ListLink>Kitchenware</ListLink></Link></ListItem>
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
      </InnerWrapper>
      <CreatedByWrapper>
        <CreatedByText>Created by SejStudios</CreatedByText>
        <Link href=""><CreatedByButton>GitHub</CreatedByButton></Link>
      </CreatedByWrapper>
    </FooterWrapper>
  );
};

export default Footer;