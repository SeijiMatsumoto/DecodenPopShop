import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { MdAlternateEmail, MdPhone, } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const _ = {
  FooterWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: auto;

    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: #FFF5F0;

    * {
      font-family: 'Mali', cursive;
    }
  `,
  InnerWrapper: styled.div`
    display: flex;
    width: 50%;
    padding-bottom: 20px;
    margin: 20px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    border-bottom: 1px solid #dadada;

    @media screen and (max-width: 868px) {
      width: 90%;
      margin: 5px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    min-width: 100px;
    max-width: 300px;
  `,
  ColHeader: styled.span`
    font-size: 16px;
    font-weight: bold;
    cursor: default;
  `,
  List: styled.ul`
    list-style: none;
    margin: 5px 0 0 -40px;
  `,
  ListItem: styled.li`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.span`
    position: relative;
    top: 3px;
  `,
  ListLink: styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
    margin-left: 5px;
    transition: 200ms ease;

    &:hover {
      color: #A19DCA;
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
  `,
  Logo: styled.img`
    height: 100px;
    cursor: pointer;
    object-fit: contain;
    margin: 0 0 10px -5px;
  `,
  CreatedByWrapper: styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media screen and (max-width: 703px) {
      width: 85%;
    }
  `,
  CreatedByText: styled.span``,
}

const Footer = () => {
  return (
    <_.FooterWrapper>
      <_.InnerWrapper>
        <_.Column>
          <_.Logo src="/Logos/square-logo.png" alt='Logo' onClick={() => window.open("/", "_self")} />
          <_.List>
            <_.ListItem>{"Handmade products by Shu"}</_.ListItem>
          </_.List>
        </_.Column>
        <_.Column>
          <_.ColHeader>Categories</_.ColHeader>
          <_.List>
            <_.ListItem><Link href="/products"><_.ListLink>All Products</_.ListLink></Link></_.ListItem>
            <_.ListItem><Link href="/products/cases"><_.ListLink>Phone Cases</_.ListLink></Link></_.ListItem>
            <_.ListItem><Link href="/products/hair"><_.ListLink>Hair Clips</_.ListLink></Link></_.ListItem>
            <_.ListItem><Link href="/products/car"><_.ListLink>Car Accessories</_.ListLink></Link></_.ListItem>
            <_.ListItem><Link href="/products/custom"><_.ListLink>Custom Items</_.ListLink></Link></_.ListItem>
          </_.List>
        </_.Column>
        <_.Column>
          <_.ColHeader>Contact Us</_.ColHeader>
          <_.List>
            <_.ListItem><_.Icon><MdAlternateEmail /></_.Icon><Link href="/"><_.ListLink>Email: support@decodenbyshu.com</_.ListLink></Link></_.ListItem>
            <_.ListItem><_.Icon><MdPhone /></_.Icon><Link href="/"><_.ListLink>Phone: 999-999-9999</_.ListLink></Link></_.ListItem>
            <_.ListItem><_.Icon><BsInstagram /></_.Icon><Link href="/"><_.ListLink>Instagram: @DecodenByShu</_.ListLink></Link></_.ListItem>
            <_.ListItem><_.Icon><BsTwitter /></_.Icon><Link href="/"><_.ListLink>Twitter: @DecodenByShu</_.ListLink></Link></_.ListItem>
          </_.List>
        </_.Column>
      </_.InnerWrapper>
      <_.CreatedByWrapper>
        <_.CreatedByText>Created by SejStudios</_.CreatedByText>
      </_.CreatedByWrapper>
    </_.FooterWrapper>
  );
};

export default Footer;