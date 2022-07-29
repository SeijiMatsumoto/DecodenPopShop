import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UILibrary';
import MiniNav from './MiniNav';
import Link from 'next/link';
import Menu from './Menu';
import { FaShoppingCart } from 'react-icons/fa';
import CategoryBar from './CategoryBar';
import { BiMenu } from "react-icons/bi";
import anime from 'animejs';
const inView = require('in-view');

const Wrapper = styled.nav`
  z-index: 5;
  width: 100%;
  position: fixed;

  @media screen and (max-width: 500px) {
    background-color: white;
  }
`;

const NavWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms ease;

  @media screen and (max-width: 500px) {
    background-color: white;
  }
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
  position: relative;
  top: -200px;
  opacity: 0;
  height: 50px;
  margin: 20px 10px;
  cursor: pointer;
  object-fit: contain;
  transition: 400ms ease;

  @media screen and (max-width: 500px) {
      opacity: 1;
      position: relative;
      top: 0;
    }
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
  top: -200px;
  opacity: 0;
  color: #5a5a5a;
  bottom: 0px;

  font-family: 'Mali', cursive;

  text-transform: uppercase;
  letter-spacing: -1px;
  @media screen and (max-width: 500px) {
      opacity: 1;
      position: relative;
      top: 0;
  }

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
  div {
    opacity: 0;
    position: relative;
    top: -200px;

    @media screen and (max-width: 500px) {
      opacity: 1;
      position: relative;
      top: 0;
    }

  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const HamburgerMenu = styled.span`
  font-size: 30px;
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
  opacity: 0;
  position: relative;
  top: -200px;
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

  const animateIn = (selectors) => {
    var tl = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 500,
    });

    tl
      .add({
        targets: selectors[0],
        translateY: 200,
        opacity: 1,
        duration: 200
      })
      .add({
        targets: selectors[1],
        translateY: 200,
        opacity: 1,
        delay: 200
      }, '-=400')
      .add({
        targets: selectors[2],
        translateY: 200,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[3],
        translateY: 200,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[4],
        translateY: 200,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[5],
        translateY: 200,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[6],
        translateY: 200,
        opacity: 1,
      }, '-=400');
  }

  const checkInView = () => {
    inView('#navbar')
      .on('enter', el => {
        animateIn(['#navLogo', '#nav1', '#nav2', '#nav3', '#nav4', "#nav5", '#nav6']);
      });
  };

  const actions = (e) => {
    handleScroll(e);
    checkInView();
  }

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 500) {
      if (document) {
        checkInView();
        console.log('Width over 500');
        document.body.addEventListener('scroll', actions);
        return () => document.body.removeEventListener('scroll', actions);
      }
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
      const logo = document.getElementById('navLogo') || undefined;
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
              <Link href="/"><Logo id='navLogo' src="/Logos/QuackGoods-logos_transparent.png" alt='Logo' /></Link>
              <LinksWrapper>
                <Link href="/"><LinkText id="nav1" className="navLink">Home</LinkText></Link>
                <Link href="/products/all-products"><LinkText id="nav2" className="navLink">Shop All</LinkText></Link>
                <Link href="/about"><LinkText id="nav3" className="navLink">About</LinkText></Link>
                <Link href="/contact"><LinkText id="nav4" className="navLink">Contact</LinkText></Link>
              </LinksWrapper>
            </LogoLinkWrapper>
            <ButtonsWrapper>
              <div id="nav5"><Button action={clickHandler} buttonText={'My Account'} /></div>
              <Cart id="nav6" />
            </ButtonsWrapper>
            <HamburgerMenu onClick={() => { }}><BiMenu /></HamburgerMenu>
          </NavInnerWrapper>
        </NavWrapper>
        <CategoryBar />
      </Wrapper>
      <MenuWrapper><Menu setOpenMenu={setOpenMenu} /></MenuWrapper>
    </div>
  );
};

export default Navbar;