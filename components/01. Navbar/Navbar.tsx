import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import MiniNav from './MiniNav';
import Link from 'next/link';
import Menu from './Menu';
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import anime from 'animejs';
import { checkInView } from '../../helper/checkInView';
import Dropdown from './Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SettingsContext } from '../Contexts/SettingsContext';
import SearchBar from './SearchBar';

const _ = {
  Wrapper: styled.nav`
    z-index: 5;
    width: 100vw;
    position: relative;
    @media screen and (max-width: 500px) {
      background-color: white;
    }
  `,
  NavWrapper: styled.div`
    background-color: white;
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

    @media screen and (max-width: 2560px) {
      width: 90%;
    }
    @media screen and (max-width: 500px) {
        padding: 0;
        width: 95%;
    }
    `,
  ThirdsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    justify-content: space-between;
  `,
  LogoWrapper: styled.div`
    /* width: 20%; */
    display: flex;
    justify-content: center;
  `,
  Logo: styled.img`
    position: relative;
    top: -200px;
    opacity: 0;
    width: 200px;
    cursor: pointer;
    object-fit: contain;
    transition: 400ms ease;
    @media screen and (max-width: 1300px) {
      padding: 20px;
    }

    @media screen and (max-width: 500px) {
        opacity: 1;
        position: relative;
        top: 0;
        width: 100px;
        padding: 20px 5px;
    }
  `,
  LinksWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 40%;

    @media screen and (max-width: 1300px) {
      display: none;
    }
  `,
  LinkText: styled.span`
    margin: 0 15px;
    font-size: 22px;
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
  `,
  ProductsWrapper: styled.div`
    color: #5a5a5a;
    padding: 20px 0;
    margin-left: 10px;
    font-size: 22px;
    position: relative;
    top: -200px;
    opacity: 0;
    font-family: 'Mali', cursive;
    text-transform: uppercase;
    letter-spacing: -1px;
    cursor: pointer;
    &:hover {
      svg {
        top: 6px;
      }
    }
  `,
  ProductLinkText: styled.span`
    margin-right: 5px;
  `,
  DownArrow: styled(KeyboardArrowDownIcon)`
    position: relative;
    left: -3px;
    top: 3px;
    transition: 500ms ease;
  `,
  UpArrow: styled(KeyboardArrowUpIcon)`
    position: relative;
    left: -3px;
    top: 3px;
    transition: 500ms ease;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 40%;

    > button {
      margin-left: 10px;
    }

    @media screen and (max-width: 1300px) {
      width: auto;
    }
  `,
  HamburgerMenu: styled.span`
    font-size: 35px;
    position: relative;
    top: 5px;
    margin-left: 10px;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 1300px) {
      display: block;
    }
  `,
  MenuWrapper: styled.div`
    display: none;
    @media screen and (max-width: 1300px) {
      display: block;
    }
  `
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const { anchorEl, setAnchorEl, isMobile } = useContext(SettingsContext);

  const openDropdown = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  }

  const animateIn = (selectors) => {
    var tl = anime.timeline({ easing: 'easeInOutQuad', duration: 500 });

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

  useEffect(() => {
    if (isInView && !isMobile) { animateIn(['#nav1', '#nav2', '#nav3', '#nav4', '#navLogo', "#nav5", '#nav6']); }
  }, [isInView])

  useEffect(() => {
    checkInView('#navbar', setIsInView);
  }, []);

  return (
    <div>
      <_.Wrapper id="navbar">
        <MiniNav />
        <_.NavWrapper id="navwrapper">
          <_.NavInnerWrapper>
            <_.ThirdsWrapper>
              <_.LinksWrapper>
                <Link href="/"><_.LinkText id="nav1">Home</_.LinkText></Link>
                <_.ProductsWrapper id="nav2" onClick={openDropdown}>
                  <_.ProductLinkText id="nav2-text" >Products</_.ProductLinkText>
                  {!anchorEl ? <_.DownArrow /> : <_.UpArrow />}
                  <Dropdown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                </_.ProductsWrapper>
                <Link href="/faq"><_.LinkText id="nav3">Q&A</_.LinkText></Link>
                <Link href="/contact"><_.LinkText id="nav4">Contact Us</_.LinkText></Link>
              </_.LinksWrapper>
              <_.LogoWrapper>
                <Link href="/"><_.Logo id='navLogo' src="/Logos/nav-logo.png" alt='Logo' /></Link>
              </_.LogoWrapper>
              <_.ButtonsWrapper>
                <SearchBar />
                {!openMenu ? <_.HamburgerMenu onClick={() => { setOpenMenu(true) }}><BiMenu /></_.HamburgerMenu> : <_.HamburgerMenu onClick={() => { setOpenMenu(false) }}><GrClose /></_.HamburgerMenu>}
              </_.ButtonsWrapper>
            </_.ThirdsWrapper>
          </_.NavInnerWrapper>
        </_.NavWrapper>
      </_.Wrapper>
      <_.MenuWrapper><Menu setOpenMenu={setOpenMenu} isOpen={openMenu} /></_.MenuWrapper>
    </div>
  );
};

export default Navbar;