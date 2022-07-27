import React, { useState } from 'react';
import styled from 'styled-components';
import { text } from '../../data/miniNav';

const NavWrapper = styled.nav`
  background-color: #fa741a;
  position: relative;
  font-family: 'Mali', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }
`;

const Text = styled.span`
  color: white;
  font-size: 13px;
  padding: 5px;
  cursor: default;
`;

const Close = styled.span`
  cursor: pointer;
  transition: 0.2s ease-in;
  margin-right: 10px;
  &:hover {
    color: white;
  }
`;

const MiniNav = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      {show && <NavWrapper>
        <InnerWrapper>
          <Text></Text>
          <Text>{text}</Text>
          <Close onClick={() => setShow(false)}>X</Close>
        </InnerWrapper>
      </NavWrapper>}
    </>
  );
};

export default MiniNav;