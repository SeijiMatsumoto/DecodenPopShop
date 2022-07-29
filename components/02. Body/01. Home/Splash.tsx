import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router'
import anime from 'animejs';
const inView = require('in-view');

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
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1000' preserveAspectRatio='none' viewBox='0 0 1440 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1047%26quot%3b)' fill='none'%3e%3crect width='1440' height='1000' x='0' y='0' fill='rgba(255%2c 246%2c 240%2c 1)'%3e%3c/rect%3e%3cpath d='M609.51 422.65 a233.11 233.11 0 1 0 466.22 0 a233.11 233.11 0 1 0 -466.22 0z' fill='rgba(33%2c 141%2c 219%2c 0.35)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M531.632%2c976.983C587.55%2c979.329%2c645.513%2c959.754%2c673.972%2c911.563C702.833%2c862.693%2c695.069%2c800.448%2c663.894%2c753.021C635.552%2c709.905%2c583.155%2c692.266%2c531.632%2c695.02C484.981%2c697.513%2c445.793%2c725.885%2c421.784%2c765.962C396.977%2c807.371%2c386.289%2c857.611%2c408.578%2c900.428C432.485%2c946.354%2c479.902%2c974.813%2c531.632%2c976.983' fill='rgba(33%2c 141%2c 219%2c 0.35)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1302.396%2c232.967C1343.396%2c232.565%2c1377.955%2c208.357%2c1401.201%2c174.581C1428.988%2c134.207%2c1458.536%2c83.981%2c1434.219%2c41.427C1409.813%2c-1.283%2c1351.581%2c0.886%2c1302.396%2c1.674C1255.173%2c2.43%2c1201.522%2c4.761%2c1177.688%2c45.535C1153.722%2c86.536%2c1173.865%2c137.013%2c1200.173%2c176.553C1223.28%2c211.281%2c1260.685%2c233.376%2c1302.396%2c232.967' fill='rgba(33%2c 141%2c 219%2c 0.35)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-109.31 614.94 a202.94 202.94 0 1 0 405.88 0 a202.94 202.94 0 1 0 -405.88 0z' fill='rgba(33%2c 141%2c 219%2c 0.35)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1047'%3e%3crect width='1440' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover;

    * {
    font-family: 'Roboto', sans-serif;
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
    top: 250px;

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
    color: #fa741a;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  BigText: styled.span`
    font-size: 6vw;
    * {
    font-family: 'Titillium Web', sans-serif;
    }
    font-weight: bold;
    opacity: 0;
    @media screen and (max-width: 500px) {
      font-size: 12vw;
      opacity: 1;
    }
  `,
  SubText: styled.span`
    font-size: 20px;
    color: black;
    opacity: 0;

    @media screen and (max-width: 700px) {
      font-size: 4vw;
    }

    @media screen and (max-width: 500px) {
      opacity: 1;
    }
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }

    @media screen and (max-width: 500px) {
      opacity: 1;
    }

  `,
  Button: styled.button`
    width: 35%;
    font-size: 20px;
    color: white;
    background-color: #fa741a;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
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
  bottom: -5px;
  right: -30px;
  height: 10vh;
  animation-name: ${Walk};
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Splash = () => {
  const router = useRouter()
  const clickHandler = () => {
    router.push('/products/all-products');
  }

  const animateIn = (selectors) => {
    var tl = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 500,
    });

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

  const checkInView = () => {
    inView('#splash1')
      .on('enter', el => {
        animateIn(['#splash1', '#splash2', '#splash3']);
      });
  };

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 500) {
      if (document) {
        checkInView();
        document.body.addEventListener("scroll", checkInView);
        return () => document.body.removeEventListener('scroll', checkInView);
      }
    }
  }, [])

  return (
    <Styles.SplashWrapper >
      <Styles.InnerWrapper>
        <Styles.Column>
          <Styles.TextWrapper>
            <Styles.BigText id="splash1">Quack Goods</Styles.BigText>
            <Styles.SubText id="splash2">One-stop shop for your duck obession</Styles.SubText>
          </Styles.TextWrapper>
          <Styles.ButtonsWrapper id="splash3">
            <Styles.Button onClick={clickHandler}>Shop All Products</Styles.Button>
          </Styles.ButtonsWrapper>
        </Styles.Column>
      </Styles.InnerWrapper>
      <WalkingDuck src="/walkingDuck.gif" />
    </Styles.SplashWrapper>
  );
};

export default Splash;