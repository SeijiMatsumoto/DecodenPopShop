import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    height: 250px;
    background-color: #E6BABE;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  `,
}

const Banner = () => {
  return (
    <_.Wrapper className='schoolbell-font'>
      All Products
    </_.Wrapper>
  );
};

export default Banner;