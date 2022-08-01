import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UILibrary';
import MiniNav from './MiniNav';
import Link from 'next/link';
import Menu from './Menu';
import { FaShoppingCart } from 'react-icons/fa';
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import CategoryBar from './CategoryBar';

const _ = {
  Wrapper: styled.nav`
    z-index: 5;
    width: 100%;
    @media screen and (max-width: 500px) {
      background-color: white;
    }
  `,
  NavWrapper: styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 100ms ease;
    @media screen and (max-width: 500px) {
      background-color: white;
    }
  `,
  NavInnerWrapper: styled.div`
    padding: 0 40px;
    width: 2560px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @media screen and (max-width: 2560px) {
      width: 90%;
    }
  `,
  LogoLinkWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.img`
    height: 50px;
    margin: 20px 10px 20px 0;
    cursor: pointer;
    object-fit: contain;
    transition: 400ms ease;
  `,
  LinksWrapper: styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 30px;
    padding: 0;
    overflow: hidden;

    @media screen and (max-width: 875px) {
      display: none;
    }
  `,
  LinkText: styled.span`
    margin: 5px 25px 0 0;
    font-size: 18px;
    cursor: pointer;
    overflow: hidden;
    color: #5a5a5a;
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
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > button {
      margin-left: 10px;
    }

    @media screen and (max-width: 875px) {
      display: none;
    }
  `,
  HamburgerMenu: styled.span`
    font-size: 35px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 875px) {
      display: block;
    }
  `,
  MenuWrapper: styled.div`
    display: none;

    @media screen and (max-width: 875px) {
      display: block;
    }
  `,
  Cart: styled(FaShoppingCart)`
    margin-left:20px;
    font-size: 20px;
  `,
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const clickHandler = () => {
    console.log("Action");
  }

  useEffect(() => {
    if (document) {
      const menu = document.getElementById('menuWrapper') || undefined;
      if (openMenu) {
        document.body.classList.add('stop-scrolling');
        if (menu) menu.style.left = "10vw";
      } else {
        document.body.classList.remove('stop-scrolling');
        if (menu) menu.style.left = "100vw";
      }
    }
  }, [openMenu]);

  return (
    <div>
      <_.Wrapper id="navbar">
        <MiniNav />
        <_.NavWrapper id="navwrapper">
          <_.NavInnerWrapper>
            <_.LogoLinkWrapper>
              <Link href="/"><_.Logo id='navLogo' src="/Logos/QuackGoods-logos_transparent.png" alt='Logo' /></Link>
              <_.LinksWrapper>
                <Link href="/"><_.LinkText id="nav1" className="navLink">Home</_.LinkText></Link>
                <Link href="/products"><_.LinkText id="nav2" className="navLink">Shop All</_.LinkText></Link>
                <Link href="/about"><_.LinkText id="nav3" className="navLink">About</_.LinkText></Link>
                <Link href="/contact"><_.LinkText id="nav4" className="navLink">Contact</_.LinkText></Link>
              </_.LinksWrapper>
            </_.LogoLinkWrapper>
            <_.ButtonsWrapper>
              <div id="nav5"><Button action={clickHandler} buttonText={'My Account'} /></div>
              <_.Cart id="nav6" />
            </_.ButtonsWrapper>
            {!openMenu ? <_.HamburgerMenu onClick={() => { setOpenMenu(true) }}><BiMenu /></_.HamburgerMenu> : <_.HamburgerMenu onClick={() => { setOpenMenu(false) }}><GrClose /></_.HamburgerMenu>}
          </_.NavInnerWrapper>
        </_.NavWrapper>
        <CategoryBar />
      </_.Wrapper>
      <_.MenuWrapper><Menu setOpenMenu={setOpenMenu} /></_.MenuWrapper>
    </div>
  );
};

export default Navbar;