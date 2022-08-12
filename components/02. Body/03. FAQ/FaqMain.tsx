import React from 'react';
import styled from 'styled-components';
import { Banner } from '../../UILibrary';
import Body from './Body';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}

const Faq = () => {
  return (
    <_.Wrapper>
      <Banner text="Q&A" />
      <Body />
    </_.Wrapper>
  );
};

export default Faq;