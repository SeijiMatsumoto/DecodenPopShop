import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../UILibrary';
import { popular } from '../../../data/popular';
import Link from 'next/link';
import anime from 'animejs';
const inView = require('in-view');

const Wrapper = styled.div`
  width: 100%;
  margin: 100px 0 140px;
  display: flex;
  justify-content: center;
  * {
    font-family: 'Roboto', sans-serif;
  }

  @media screen and (max-width: 500px) {
    margin: 50px 0 30px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1320px;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  text-align: center;
`;

const BarAroundTitle = styled.span`
  width: 30%;
  height: 35%;
  border-bottom: 1px solid #dadada;
  margin: 0 30px;

  @media screen and (max-width: 500px) {
    width: 20%;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 1320px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    width: 95%;
  }
`;

const CardWrapper = styled.div`
  width: 380px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  position: relative;
  top: 300px;
  &:active {
    transform: scale(0.99);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1320px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 500px) {
      opacity: 1;
      position: relative;
      top: 0;
    }
`;

const FlipContainer = styled.div`
  position: relative;

  &:hover {
    section {
      transform: rotateX(-180deg);
      transition-delay: 0.3s;
    }
  }
`;

const Flipper = styled.section`
  transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
  transform-origin: 100% 190px;
`;

const CardFront = styled.div`
  backface-visibility: hidden;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
	transform: rotateX(0deg);
`;

const CardImg = styled.img`
  border-radius: 5px;
  box-shadow: 0 10px 30px -10px rgb(0 0 0 / 10%);
  height: 380px;
  width: 380px;

`;

const CardBack = styled.div`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: rotateX(180deg);
  background-color: #FFF5F0;
  width: 380px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBackInner = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: white;

  &:hover {
    a {
      color: #fa741a;
    }
  }
`;

const ProductTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin: 5px;
  text-align: center;
`;

const ProductPrice = styled.span``;

const ProductLink = styled.a`
  text-decoration: none;
  transition: all 0.3s;
  margin-top: 5px;
`;

const Popular = () => {
  const animateIn = (selectors) => {
    var tl = anime.timeline({
      easing: 'easeInOutElastic',
      duration: 1000,
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
      }, '-=800')
      .add({
        targets: selectors[2],
        translateY: -300,
        opacity: 1,
      }, '-=800')
  }

  const checkInView = () => {
    inView('#popular-title')
      .on('enter', el => {
        console.log('in view')
        animateIn(['#popular-0', '#popular-1', '#popular-2']);
      });
  };

  useEffect(() => {
    if (document) {
      const width = window.innerWidth;
      if (width > 500) {
        console.log('Width:', width);
        document.body.addEventListener('scroll', checkInView);
        return () => document.body.removeEventListener('scroll', checkInView);
      }
    }
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper id="popular-title">
          <BarAroundTitle />
          <SectionTitle text="Popular Products" />
          <BarAroundTitle />
        </TitleWrapper>
        <CardsWrapper>
          {popular.map((product, i) => {
            return (
              <Link href={product.url} key={product.img + '-popular'}>
                <CardWrapper id={`popular-${i}`}>
                  <FlipContainer>
                    <Flipper>
                      <CardFront>
                        <CardImg src={product.img} alt="product" />
                        <ProductTitle>{product.title}</ProductTitle>
                      </CardFront>
                      <CardBack>
                        <CardBackInner>
                          <ProductTitle>{product.title}</ProductTitle>
                          <ProductPrice>{product.price}</ProductPrice>
                          <ProductLink>View Product</ProductLink>
                        </CardBackInner>
                      </CardBack>
                    </Flipper>
                  </FlipContainer>
                </CardWrapper>
              </Link>
            )
          })}

        </CardsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Popular;