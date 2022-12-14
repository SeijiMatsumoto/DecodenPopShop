import React, { useState } from 'react';
import styled from 'styled-components';
import { text } from '../../data/miniNav';

const _ = {
  NavWrapper: styled.nav`
    background-color: #ff7b86;;
    position: relative;
    font-family: 'Mali', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,
  InnerWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2560px;
    @media screen and (max-width: 2560px) {
      width: 90%;
    }
  `,
  Text: styled.span`
    color: white;
    font-size: 13px;
    padding: 5px;
    cursor: default;
    text-align: center;
  `,
  Close: styled.span`
    cursor: pointer;
    transition: 0.1s ease-in;
    position: relative;
    top: -1px;
    &:hover {
      color: white;
    }
  `
}

const MiniNav = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show && <_.NavWrapper>
        <_.InnerWrapper>
          <_.Text></_.Text>
          <_.Text>{text}</_.Text>
          <_.Close onClick={() => setShow(false)}>X</_.Close>
        </_.InnerWrapper>
      </_.NavWrapper>}
    </>
  );
};

export default MiniNav;