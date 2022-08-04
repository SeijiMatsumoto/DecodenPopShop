import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Banner } from '../../UILibrary';

const _ = {
  Wrapper: styled.div`
    width: 100%;
  `,
}

const Contact = () => {
  return (
    <_.Wrapper>
      <Banner text="Contact" />
    </_.Wrapper>
  );
};

export default Contact;