import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../UILibrary';
import Link from 'next/link';
import Menu from './Menu';

const NavWrapper = styled.nav`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const NavInnerWrapper = styled.div`
  padding: 20px;
  width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1320px) {
    width: 100%;
  }
`;

const LogoLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
  object-fit: contain;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 30px;
	padding: 0;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LinkText = styled.span`
  margin-right: 30px;
  font-size: 20px;
  cursor: pointer;
  overflow: hidden;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HamburgerMenu = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const clickHandler = () => {
    window.alert("Action");
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    const menu = document.getElementById('menuWrapper') || undefined;
    if (openMenu) {
      if (menu) menu.style.left = "0px";
    } else {
      if (menu) menu.style.left = "100vw";
    }
  }, [openMenu]);
  return (
    <div>
      <NavWrapper>
        <NavInnerWrapper>
          <LogoLinkWrapper>
            <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApl5VEAGK3p1A3FB5D11ek5Gx2tYUzOIkOQ&usqp=CAU" alt='Logo' onClick={() => window.open("/", "_self")} />
            <LinksWrapper>
              <Link href="/"><LinkText>Link1</LinkText></Link>
              <Link href="/Page2"><LinkText>Link2</LinkText></Link>
              <Link href="/Page3"><LinkText>Link3</LinkText></Link>
            </LinksWrapper>
          </LogoLinkWrapper>
          <ButtonsWrapper>
            <Button action={clickHandler} buttonText={'Button'} />
            <Button action={clickHandler} buttonText={'Button'} />
          </ButtonsWrapper>
          <HamburgerMenu src="https://cdn-icons.flaticon.com/png/512/4889/premium/4889159.png?token=exp=1658543209~hmac=10015bef171b4cf8294d6124e9fe4f37" onClick={toggleMenu} />
        </NavInnerWrapper>
      </NavWrapper>
      <MenuWrapper><Menu setOpenMenu={setOpenMenu} /></MenuWrapper>
    </div>
  );
};

export default Navbar;