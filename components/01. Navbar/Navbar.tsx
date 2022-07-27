import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UILibrary';
import MiniNav from './MiniNav';
import Link from 'next/link';
import Menu from './Menu';
import { FaShoppingCart } from 'react-icons/fa';
import CategoryBar from './CategoryBar';
import anime from 'animejs';
const inView = require('in-view');

const Wrapper = styled.nav`
  z-index: 5;
  width: 100%;
  position: fixed;
`;

const NavWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms ease;
`;

const NavInnerWrapper = styled.div`
  padding: 0 20px;
  width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1320px) {
    width: 90%;
  }
`;

const LogoLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  margin: 20px 10px;
  cursor: pointer;
  object-fit: contain;
  transition: 400ms ease;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 30px;
	padding: 0;
  overflow: hidden;

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const LinkText = styled.span`
  margin: 5px 25px 0 0;
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
	position: relative;
  color: #5a5a5a;
  opacity: 0;
  bottom: 0px;

  font-family: 'Mali', cursive;

  text-transform: uppercase;
  letter-spacing: -1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1px;
    width: 100%;
    height: 0.1em;
    background-color: #fa741a;
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
}

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    margin-left: 10px;
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const HamburgerMenu = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 875px) {
    display: block;
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 875px) {
    display: block;
  }
`;

const Cart = styled(FaShoppingCart)`
  margin-left:20px;
  font-size: 20px;
`;


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const clickHandler = () => {
    console.log("Action");
  }

  const handleScroll = (e) => {
    setScrollTop(e.path[0].scrollTop);
  };

  useEffect(() => {
    if (document) {
      document.body.addEventListener('scroll', handleScroll);
      const links = document.querySelectorAll('.navLink');
      console.log('hello', links)

      links.forEach(link => {
        setTimeout(() => {
          link.classList.add('fade-in');
        }, 1000)
      });

      return () => document.body.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (document) {
      const menu = document.getElementById('menuWrapper') || undefined;
      if (openMenu) {
        if (menu) menu.style.left = "0px";
      } else {
        if (menu) menu.style.left = "100vw";
      }
    }
  }, [openMenu]);


  useEffect(() => {
    if (document) {
      const logo = document.getElementById('logo') || undefined;
      const nav = document.getElementById('navwrapper') || undefined;
      const catNav = document.getElementById('catNav') || undefined;

      if (scrollTop > 100) {
        if (logo) logo.style.height = '40px';
        if (nav) nav.style.backgroundColor = 'white';
        if (catNav) catNav.style.display = 'flex';
      } else if (scrollTop < 101) {
        if (logo) logo.style.height = '50px';
        if (nav) nav.style.backgroundColor = 'transparent';
        if (catNav) catNav.style.display = 'none';
      }
    }

  }, [scrollTop])

  return (
    <div>
      <Wrapper id="navbar">
        <MiniNav />
        <NavWrapper id="navwrapper">
          <NavInnerWrapper>
            <LogoLinkWrapper>
              <Link href="/"><Logo id='logo' src="/Logos/QuackGoods-logos_transparent.png" alt='Logo' /></Link>
              <LinksWrapper>
                <Link href="/"><LinkText className="navLink">Home</LinkText></Link>
                <Link href="/products/all-products"><LinkText className="navLink">Shop All</LinkText></Link>
                <Link href="/about"><LinkText className="navLink">About</LinkText></Link>
                <Link href="/contact"><LinkText className="navLink">Contact</LinkText></Link>
              </LinksWrapper>
            </LogoLinkWrapper>
            <ButtonsWrapper>
              <Button action={clickHandler} buttonText={'My Account'} />
              <Cart />
            </ButtonsWrapper>
            <HamburgerMenu src="https://cdn-icons.flaticon.com/png/512/4889/premium/4889159.png?token=exp=1658543209~hmac=10015bef171b4cf8294d6124e9fe4f37" onClick={() => setOpenMenu(!openMenu)} />
          </NavInnerWrapper>
        </NavWrapper>
        <CategoryBar />
      </Wrapper>
      <MenuWrapper><Menu setOpenMenu={setOpenMenu} /></MenuWrapper>
    </div>
  );
};

export default Navbar;