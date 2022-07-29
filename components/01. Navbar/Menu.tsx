import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ExpandList } from '../UILibrary';

const _ = {
  MenuWrapper: styled.div`
    width: 300px;
    height: 100vh;
    transition: 0.3s ease-in-out;
    position: absolute;
    left: 100vw;
    background-color: #d6ecff;
    z-index: 100;
    @media screen and (max-width: 875px) {
      width: 100vw;
    }
  `,
  InnerWrapper: styled.div`
    margin: 50px;
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
  return (
    <_.MenuWrapper id="menuWrapper">
      <_.InnerWrapper>
        <_.Title>Menu Title</_.Title>
        <_.LinksWrapper>
          <Link href="/"><_.LinkText onClick={() => setOpenMenu(false)}>Link1</_.LinkText></Link>
          <ExpandList mainItem='Link2' subItems={[{ title: 'Sublink1', url: '/' }, { title: 'Sublink2', url: '/' }]} callback={() => setOpenMenu(false)} />
          <Link href="/"><_.LinkText onClick={() => setOpenMenu(false)}>Link3</_.LinkText></Link>
        </_.LinksWrapper>
      </_.InnerWrapper>
    </_.MenuWrapper>
  );
};

export default Menu;