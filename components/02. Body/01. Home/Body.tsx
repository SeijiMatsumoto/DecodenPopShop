import React from 'react';
import styles from '../../../styles/02. Body/00. Home/Body.module.css';
import Categories from './Categories';
import Splash from './Splash';

const Body = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Splash />
      <Categories />
    </div>
  );
};

export default Body;