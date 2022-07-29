import React, { useState } from 'react';
import styled from 'styled-components';
import { text } from '../../data/miniNav';

const _ = {
  NavWrapper: styled.nav`
    background-color: #fa741a;
    position: relative;
    font-family: 'Mali', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
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
  `,
  Close: styled.span`
    cursor: pointer;
    transition: 0.2s ease-in;
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