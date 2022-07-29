/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import { categories } from '../../../data/categories';
import { IoPhonePortraitOutline, IoShirtOutline } from "react-icons/io5";
import { GiPlasticDuck } from "react-icons/gi";
import { TbMug } from "react-icons/tb";
import anime from 'animejs';
import { checkInView } from '../../../helper/checkInView';

const _ = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 100px 0;
    background-color: #f5f5f5;
    * {
      font-family: 'Roboto Flex', sans-serif;
    }

    @media screen and (max-width: 500px) {
      padding: 30px 0;
    }
  `,
  InnerWrapper: styled.div`
    width: 95%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
  `,
  TitleWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 15px;
    margin-right: 25px;
    padding-bottom: 5px;
    border-bottom: 4px solid #fa741a;
    cursor: default;
  `,
  Title: styled.span`
    font-size: 25px;
    font-weight: bold;
  `,
  CardsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 1320px) {
      flex-direction: column;
    }
  `,
  Card: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 100%;
    margin: 10px;
    padding: 70px 20px;
    cursor: pointer;
    transition: 400ms ease;
    background: linear-gradient(to right, #ffeae0 50%, #FFF5F0 50%);
    background-size: 200% 200%;
    background-position: right bottom;

    opacity: 0;
    position: relative;
    top: 100px;

    color: black;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-position: left bottom;

      h4 {
        color: #fa741a;
      }
      span {
        color: #fa741a;
      }
      h5 {
        left: 3px;
      }
    }

    @media screen and (max-width: 1320px) {
      width: 90%;
    }

    @media screen and (max-width: 500px) {
        opacity: 1;
        position: relative;
        top: 0;
        margin: 10px 0;
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CardTitle: styled.h3`
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  `,
  SubWrapper: styled.h4`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  `,
  SubText: styled.span`
    font-size: 16px;
    transition: 500ms ease;
  `,
  SubArrow: styled.h5`
    position: relative;
    margin: 5px 0 0 5px;
    position: relative;
    transition: 300ms ease;
    left: 0;
  `,
  Icon: styled.span`
    font-size: 40px;
    margin: 5px 20px 0 5px;
    transition: 500ms ease;
  `
}

const Categories = () => {
  const [isInView, setIsInView] = useState<boolean>(false);

  const animateIn = (selectors) => {
    var tl = anime.timeline({ easing: 'easeInOutElastic(1, .6)', duration: 500 });

    tl
      .add({
        targets: selectors[0],
        translateY: -100,
        opacity: 1,
      })
      .add({
        targets: selectors[1],
        translateY: -100,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[2],
        translateY: -100,
        opacity: 1,
      }, '-=400')
      .add({
        targets: selectors[3],
        translateY: -100,
        opacity: 1,
      }, '-=400');
  }

  const scrollHandler = () => {
    if (!isInView) checkInView('#category-title', setIsInView);
  };

  useEffect(() => {
    if (isInView) animateIn(['#category-card-0', '#category-card-1', '#category-card-2', '#category-card-3']);
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

  const icons = [
    <IoPhonePortraitOutline key='cases' />,
    <IoShirtOutline key='clothing' />,
    <GiPlasticDuck key='toys' />,
    <TbMug key='accessories' />
  ]
  return (
    <_.Wrapper>
      <_.InnerWrapper>
        <_.CardsWrapper>
          <_.TitleWrapper id="category-title"><_.Title>Featured Categories</_.Title></_.TitleWrapper>
          {categories.slice(0, 4).map((category, i) => {
            return (
              <Link key={category + 'component'} href={`/products/${category.toLowerCase()}`} >
                <_.Card id={`category-card-${i}`}>
                  <_.Icon>{icons[i]}</_.Icon>
                  <_.TextWrapper>
                    <_.CardTitle>{category}</_.CardTitle>
                    <_.SubWrapper>
                      <_.SubText>Shop category</_.SubText>
                      <_.SubArrow><FaLongArrowAltRight /></_.SubArrow>
                    </_.SubWrapper>
                  </_.TextWrapper>
                </_.Card>
              </Link>
            )
          })}
        </_.CardsWrapper>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default Categories;