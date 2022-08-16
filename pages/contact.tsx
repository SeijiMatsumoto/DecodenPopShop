import React, { useEffect, useContext } from 'react';
import { SettingsContext } from '../components/Contexts/SettingsContext'
import ContactMain from '../components/02. Body/04. Contact/ContactMain';
import { scrollToTop } from '../helper/scrollToTop';


const Contact = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('contact');
    scrollToTop();
  }, [])

  return (
    <ContactMain />
  );
};

export default Contact;