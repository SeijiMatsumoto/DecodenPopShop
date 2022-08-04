import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SettingsContext } from '../components/Contexts/SettingsContext'
import ContactMain from '../components/02. Body/04. Contact/ContactMain';
import { scrollToTop } from '../helper/scrollToTop';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Contact = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('contact');
    scrollToTop();
  }, [])

  return (
    <Wrapper>
      <ContactMain />
    </Wrapper>
  );
};

export default Contact;