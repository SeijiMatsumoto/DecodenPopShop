import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../UILibrary';
import { popular } from '../../../data/popular';
import Link from 'next/link';
import anime from 'animejs';
import { checkInView } from '../../../helper/checkInView';

const _ = {
  Wrapper: styled.div`
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
  `,
  InnerWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 1320px;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 15px;
    text-align: center;
    @media screen and (max-width: 500px) {
      margin: 0;
    }
  `,
  BarAroundTitle: styled.span`
    display: block;
    width: 30%;
    height: 35%;
    border-bottom: 1px solid #dadada;
    margin: 0 30px;

    @media screen and (max-width: 500px) {
      width: 20%;
     display: none;
    }
  `,
  CardsWrapper: styled.div`
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
  `,
  CardWrapper: styled.div`
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
        width: 95%;
      }
  `,
  FlipContainer: styled.div`
    position: relative;
    width: 100%;

    &:hover {
      section {
        transform: rotateX(-180deg);
        transition-delay: 0.3s;
      }
    }
  `,
  Flipper: styled.section`
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    transform-origin: 100% 190px;
    width: 100%;
  `,
  CardFront: styled.div`
    backface-visibility: hidden;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: rotateX(0deg);
  `,
  CardImg: styled.img`
    border-radius: 5px;
    box-shadow: 0 10px 30px -10px rgb(0 0 0 / 10%);
    height: 380px;
    width: 100%;
    object-fit: cover;
  `,
  CardBack: styled.div`
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: rotateX(180deg);
    background-color: #FFF5F0;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  CardBackInner: styled.div`
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

    @media screen and (max-width: 500px) {
      width: 90%;
      height: 90%;
    }
  `,
  ProductTitle: styled.span`
    font-weight: bold;
    font-size: 18px;
    margin: 5px;
    text-align: center;
  `,
  ProductPrice: styled.span``,
  ProductLink: styled.a`
    text-decoration: none;
    transition: all 0.3s;
    margin-top: 5px;
  `
}

const Popular = () => {
  const [isInView, setIsInView] = useState<boolean>(false);

  const animateIn = (selectors) => {
    var tl = anime.timeline({ easing: 'easeInOutElastic(1, .6)', duration: 500 });
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
      }, '-=400')
  }

  const scrollHandler = () => {
    if (!isInView) checkInView('#popular-title', setIsInView);
  };

  useEffect(() => {
    if (isInView) animateIn(['#popular-0', '#popular-1', '#popular-2']);
  }, [isInView])

  useEffect(() => {
    if (document) {
      const width = window.innerWidth;
      if (width > 500) {
        document.body.addEventListener('scroll', scrollHandler);
        return () => document.body.removeEventListener('scroll', scrollHandler);
      }
    }
  }, []);

  return (
    <_.Wrapper>
      <_.InnerWrapper>
        <_.TitleWrapper>
          <_.BarAroundTitle id="popular-title" />
          <SectionTitle text="Popular Products" />
          <_.BarAroundTitle />
        </_.TitleWrapper>
        <_.CardsWrapper>
          {popular.map((product, i) => {
            return (
              <Link href={product.url} key={product.img + '-popular'}>
                <_.CardWrapper id={`popular-${i}`}>
                  <_.FlipContainer>
                    <_.Flipper>
                      <_.CardFront>
                        <_.CardImg src={product.img} alt="product" />
                        <_.ProductTitle>{product.title}</_.ProductTitle>
                      </_.CardFront>
                      <_.CardBack>
                        <_.CardBackInner>
                          <_.ProductTitle>{product.title}</_.ProductTitle>
                          <_.ProductPrice>{product.price}</_.ProductPrice>
                          <_.ProductLink>View Product</_.ProductLink>
                        </_.CardBackInner>
                      </_.CardBack>
                    </_.Flipper>
                  </_.FlipContainer>
                </_.CardWrapper>
              </Link>
            )
          })}
        </_.CardsWrapper>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default Popular;