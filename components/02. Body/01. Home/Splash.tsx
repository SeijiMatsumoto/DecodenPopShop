import React, { useEffect, useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router'
import anime from 'animejs';
import { checkInView } from '../../../helper/checkInView';
import { SettingsContext } from '../../Contexts/SettingsContext';
// import Link from 'next/link';
import { CloudBackground, CloudButton } from '../../UILibrary';

const Styles = {
  SplashWrapper: styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 500px) {
      height: 70vh;
    }
  `,
  Background: styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("/WATERCOLOR2.jpg");
    background-size: cover;
  `,
  InnerWrapper: styled.div`
    top: 10%;
    width: 1320px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 1320px) {
      width: 90%;
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
  `,
  BigText: styled.span`
    color: #A19DCA;
    font-size: 8vw;
    text-shadow: 1px 1px #000000;
    font-weight: bold;
    opacity: 0;
    position: relative;
    top: 300px;
    @media screen and (max-width: 500px) {
      font-size: 12vw;
      opacity: 1;
    }
  `,
  SubText: styled.span`
    position: relative;
    top: -10px;
    font-size: 25px;
    color: black;
    font-family: 'Mali', cursive;
    opacity: 0;
    position: relative;
    top: 300px;

    @media screen and (max-width: 700px) {
      font-size: 4vw;
    }

    @media screen and (max-width: 500px) {
      opacity: 1;
    }
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    opacity: 0;
    position: relative;
    top: 300px;
  `,
}

const Walk = keyframes`
  0% {
    right: -5%;
  }
  100% {
    right: 105%;
  }
`;

const WalkingDuck = styled.img`
  position: absolute;
  bottom: -3px;
  right: -30px;
  height: 10vh;
  animation-name: ${Walk};
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Splash = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const router = useRouter()
  const { currentPage } = useContext(SettingsContext);

  const clickHandler = () => {
    router.push('/products');
  }

  const animateIn = (selectors) => {
    var tl = anime.timeline({ easing: 'easeInOutQuad', duration: 500 });

    tl
      .add({
        targets: selectors[0],
        translateY: -300,
        opacity: 1,
      })
      .add({
        targets: selectors[1],
        translateY: -300,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[2],
        translateY: -300,
        opacity: 1,
      }, '-=400');
  }

  const scrollHandler = () => {
    if (!isInView) checkInView('#splash1', setIsInView);
  };

  useEffect(() => {
    if (isInView) animateIn(['#splash1', '#splash2', '#splash3']);
  }, [isInView])

  useEffect(() => {
    if (currentPage === 'home') animateIn(['#splash1', '#splash2', '#splash3']);
  }, [currentPage])

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 500) {
      if (document) {
        scrollHandler();
        document.body.addEventListener('scroll', scrollHandler);
        return () => document.body.removeEventListener('scroll', scrollHandler);
      }
    }
  }, [])

  return (
    <Styles.SplashWrapper >
      <Styles.Background />
      <CloudBackground />
      <Styles.InnerWrapper>
        <Styles.TextWrapper className='no-select'>
          <Styles.BigText id="splash1" className="schoolbell-font">Decoden By Shu</Styles.BigText>
          <Styles.SubText id="splash2">Handmade cases created by Shu</Styles.SubText>
        </Styles.TextWrapper>
        <Styles.ButtonsWrapper id="splash3">
          <CloudButton text="Shop All Products" src="/products" callback={() => { }} target="_self" size="l" />
        </Styles.ButtonsWrapper>
      </Styles.InnerWrapper>
      <WalkingDuck src="/walkingDuck.gif" />
    </Styles.SplashWrapper>
  );
};

export default Splash;