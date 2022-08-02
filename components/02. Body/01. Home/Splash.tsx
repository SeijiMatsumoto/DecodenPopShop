import React, { useEffect, useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router'
import anime from 'animejs';
import { checkInView } from '../../../helper/checkInView';
import { SettingsContext } from '../../Contexts/SettingsContext';
import Link from 'next/link';
import { CloudButton } from '../../UILibrary';

const Styles = {
  SplashWrapper: styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    position: relative;
    background-image: url("/WATERCOLOR2.jpg");
    background-size: cover;

    @media screen and (max-width: 500px) {
      height: 75vh;
    }
  `,
  InnerWrapper: styled.div`
    width: 1320px;
    display: flex;
    align-items: flex-start;
    position: relative;

    @media screen and (max-width: 1320px) {
      width: 90%;
    }
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 200px;

    @media screen and (max-width: 1000px) {
      margin: 15px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      margin: 0;
      top: 0;
      &:nth-child(2) {
        margin: 0px;
        width: 0;
      }
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    `,
  BigText: styled.span`
    color: #A19DCA;
    font-size: 8vw;
    text-shadow: 1px 1px #000000;
    font-weight: bold;
    opacity: 0;
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
    opacity: 0;
    font-family: 'Mali', cursive;

    @media screen and (max-width: 700px) {
      font-size: 4vw;
    }

    @media screen and (max-width: 500px) {
      opacity: 1;
    }
  `,
  ButtonsWrapper: styled.div`
    display: flex;
  `,
  Button: styled.button`
    font-size: 20px;
    color: black;
    background-color: #E6BABE;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 50px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;

    &:hover {
      background-color: #ff8432;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 1100px) {
      margin-bottom: 10px;
      width: 50%;
    }

    @media screen and (max-width: 500px) {
      font-size: 4vw;
      padding: 10px;
    }
  `
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
      <Styles.InnerWrapper>
        <Styles.Column>
          <Styles.TextWrapper>
            <Styles.BigText id="splash1" className="schoolbell-font">Decoden By Shu</Styles.BigText>
            <Styles.SubText id="splash2">Handmade cases created by Shu</Styles.SubText>
          </Styles.TextWrapper>
          <Styles.ButtonsWrapper id="splash3">
            <CloudButton text="Shop All Products" src="/products" callback={() => { }} target="_self" size="l" />
          </Styles.ButtonsWrapper>
        </Styles.Column>
      </Styles.InnerWrapper>
      <WalkingDuck src="/walkingDuck.gif" />
    </Styles.SplashWrapper>
  );
};

export default Splash;