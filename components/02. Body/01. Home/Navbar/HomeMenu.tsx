import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const _ = {
  MenuWrapper: styled.div`
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease-in-out;
    position: fixed;
    top: 0;
    left: 100vw;
    background-color: #f5f5f5;
    z-index: 4;
    display: flex;
    justify-content: flex-end;
    * {
      font-family: 'Roboto', sans-serif;
    }
    overflow-y: none;
  `,
  InnerWrapper: styled.div`
    margin-top: 150px;
    width: 90%;
  `,
  Title: styled.span`
    font-size: 40px;
    font-weight: bold;
  `,
  LinksWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `,
  LinkText: styled.span`
    font-size: 30px;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 10px;
  `
}

const Menu = ({ setOpenMenu }) => {
  const checkClick = (e) => {
    const menu = document.getElementById('menuWrapper') || undefined;
    if (e.target != document.querySelector("#menuLink")) {
      if (menu) setOpenMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', checkClick);
    return () => document.body.removeEventListener('scroll', checkClick);
  }, [])

  return (
    <_.MenuWrapper id="menuWrapper">
      <_.InnerWrapper>
        <_.LinksWrapper>
          <Link href="/"><_.LinkText id="menuLink" onClick={() => setOpenMenu(false)}>Home</_.LinkText></Link>
          <Link href="/products"><_.LinkText id="menuLink" onClick={() => setOpenMenu(false)}>All Products</_.LinkText></Link>
          <Link href="/about"><_.LinkText id="menuLink" onClick={() => setOpenMenu(false)}>About</_.LinkText></Link>
          <Link href="/contact"><_.LinkText id="menuLink" onClick={() => setOpenMenu(false)}>Contact</_.LinkText></Link>
        </_.LinksWrapper>
      </_.InnerWrapper>
    </_.MenuWrapper>
  );
};

export default Menu;