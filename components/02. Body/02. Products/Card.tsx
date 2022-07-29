import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const Card = () => {
  return (
    <_.Wrapper>
      Card
    </_.Wrapper>
  );
};

export default Card;