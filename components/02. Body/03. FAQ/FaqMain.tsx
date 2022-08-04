import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Banner } from '../../UILibrary';

const _ = {
  Wrapper: styled.div`
    width: 100%;
  `,
}

const Faq = () => {
  return (
    <_.Wrapper>
      <Banner text="FAQ" />
    </_.Wrapper>
  );
};

export default Faq;