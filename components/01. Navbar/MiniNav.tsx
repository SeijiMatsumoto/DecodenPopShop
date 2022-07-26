import React, { useState } from 'react';
import styled from 'styled-components';
import { text } from '../../data/miniNav';

const NavWrapper = styled.nav`
  background-color: #fa741a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  position: relative;
  font-family: 'Mali', cursive;
`;

const Text = styled.span`
  color: white;
  font-size: 13px;
`;

const Close = styled.span`
  position: absolute;
  right: 20px;
  bottom: 3px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    color: white;
  }
`;

const MiniNav = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show && <NavWrapper>
        <Text>{text}</Text>
        <Close onClick={() => setShow(false)}>X</Close>
      </NavWrapper>}
    </>
  );
};

export default MiniNav;