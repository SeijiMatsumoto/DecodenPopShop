import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SettingsContext } from '../components/Contexts/SettingsContext'

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Contact = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('contact');
  }, [])

  return (
    <Wrapper>
      Contact
    </Wrapper>
  );
};

export default Contact;