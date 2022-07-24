import React from 'react';
import styled from 'styled-components';

const SplashWrapper = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='800' preserveAspectRatio='none' viewBox='0 0 2560 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1051%26quot%3b)' fill='none'%3e%3crect width='2560' height='800' x='0' y='0' fill='url(%23SvgjsLinearGradient1052)'%3e%3c/rect%3e%3cpath d='M2773.3333333333335 800L0 800 L0 420.24Q140.76 347.66%2c 213.33333333333331 488.42Q259.34 406.43%2c 341.3333333333333 452.44Q473.59 371.36%2c 554.6666666666666 503.61Q609.62 345.23%2c 768 400.19Q848.55 352.74%2c 896 433.29Q1012.31 336.27%2c 1109.3333333333333 452.58Q1194.88 324.79%2c 1322.6666666666665 410.33Q1461.21 335.54%2c 1535.9999999999998 474.09Q1590.34 400.43%2c 1663.9999999999998 454.78Q1753.89 331.33%2c 1877.333333333333 421.22Q1993.34 323.89%2c 2090.6666666666665 439.9Q2183.66 404.89%2c 2218.6666666666665 497.89Q2239.38 390.6%2c 2346.6666666666665 411.31Q2475.1 326.41%2c 2560 454.84Q2673.88 355.38%2c 2773.3333333333335 469.26z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M2602.6666666666665 800L0 800 L0 639.16Q45.78 471.6%2c 213.33333333333331 517.38Q285.28 461.33%2c 341.3333333333333 533.27Q488.62 467.22%2c 554.6666666666666 614.51Q631.11 477.62%2c 768 554.07Q892.09 464.83%2c 981.3333333333333 588.92Q1055.15 449.4%2c 1194.6666666666665 523.21Q1351.32 466.53%2c 1407.9999999999998 623.19Q1451.06 538.25%2c 1535.9999999999998 581.31Q1671.02 503%2c 1749.333333333333 638.02Q1751.47 512.15%2c 1877.333333333333 514.29Q1935.4 444.36%2c 2005.333333333333 502.42Q2127.07 496.16%2c 2133.333333333333 617.9Q2183.79 540.36%2c 2261.333333333333 590.81Q2340.29 456.43%2c 2474.6666666666665 535.38Q2526.13 458.85%2c 2602.6666666666665 510.31z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M2730.6666666666665 800L0 800 L0 696.15Q118.77 601.59%2c 213.33333333333331 720.36Q263.52 557.21%2c 426.66666666666663 607.4Q507.13 559.87%2c 554.6666666666666 640.33Q686.3 558.63%2c 768 690.26Q881.5 590.42%2c 981.3333333333333 703.92Q1045.51 554.77%2c 1194.6666666666665 618.95Q1294.98 505.93%2c 1407.9999999999998 606.24Q1527.26 512.16%2c 1621.333333333333 631.42Q1733.02 529.77%2c 1834.6666666666663 641.46Q1957.41 550.87%2c 2047.9999999999995 673.62Q2130.32 542.6%2c 2261.333333333333 624.92Q2362.75 598.34%2c 2389.333333333333 699.76Q2466.49 648.91%2c 2517.333333333333 726.07Q2589.11 584.51%2c 2730.6666666666665 656.28z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M2602.6666666666665 800L0 800 L0 754.09Q42.43 668.52%2c 128 710.95Q229.72 684.67%2c 256 786.4Q335.4 737.8%2c 384 817.19Q412.68 717.88%2c 512 746.56Q599.11 620.34%2c 725.3333333333333 707.45Q833.74 687.86%2c 853.3333333333333 796.26Q954.18 683.77%2c 1066.6666666666665 784.62Q1098.39 688.35%2c 1194.6666666666665 720.07Q1338.91 650.98%2c 1407.9999999999998 795.22Q1524.94 698.82%2c 1621.333333333333 815.76Q1697.39 678.49%2c 1834.6666666666663 754.55Q1934.8 726.68%2c 1962.6666666666663 826.82Q2043 693.82%2c 2175.9999999999995 774.16Q2288.7 673.53%2c 2389.333333333333 786.23Q2473.58 657.14%2c 2602.6666666666665 741.39z' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1051'%3e%3crect width='2560' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='17.19%25' y1='-55%25' x2='82.81%25' y2='155%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1052'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
`;

const InnerWrapper = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 30px;
  position: relative;
  /* top: -50px; */

  &:first-child {
    margin-top: -5vh;
  }
  @media screen and (max-width: 1000px) {
    margin: 15px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
    &:nth-child(2) {
      margin: 0px;
      width: 0;
    }
  }
`;

const TextWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BigText = styled.span`
  font-size: 75px;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    font-size: 12vw;
  }
`;

const SubText = styled.span`
  font-size: 20px;
  @media screen and (max-width: 700px) {
    font-size: 4vw;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

`;

const Button = styled.button`
  width: 48%;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  @media screen and (max-width: 1100px) {
    margin-bottom: 10px;
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    font-size: 4vw;
    padding: 5px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 35vh;
  display: block;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Splash = () => {

  const clickHandler = () => {
    window.alert('Click button 1');
  }

  const clickHandler2 = () => {
    window.alert('Click button 2');
  }

  return (
    <SplashWrapper>
      <InnerWrapper>
        <Column>
          <TextWrapper>
            <BigText>Catch phrase!</BigText>
            <SubText>Perhaps a little description of the site?</SubText>
          </TextWrapper>
          <ButtonsWrapper>
            <Button onClick={clickHandler}>Button one</Button>
            <Button onClick={clickHandler2}>Button two</Button>
          </ButtonsWrapper>
        </Column>
        <Column>
          <Image src="https://i.imgur.com/iqrmXmz.png" alt="splash" />
        </Column>
      </InnerWrapper>
    </SplashWrapper>
  );
};

export default Splash;