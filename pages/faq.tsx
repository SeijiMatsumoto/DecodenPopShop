import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import FaqMain from '../components/02. Body/03. FAQ/FaqMain';
import { SettingsContext } from '../components/Contexts/SettingsContext'
import { scrollToTop } from '../helper/scrollToTop';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FAQ = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('faq');
    scrollToTop();
  }, [])

  return (
    <Wrapper>
      <FaqMain />
    </Wrapper>
  )
};

export default FAQ;
