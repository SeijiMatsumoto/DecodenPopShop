import React, { useEffect, useState } from 'react';
import { duckFacts } from '../../../data/duckFacts';
import styled from 'styled-components';
import { CloudButton, SectionTitle } from '../../UILibrary';
import { GiStaplerHeavyDuty } from 'react-icons/gi';

const _ = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 100px 0;
    position: relative;
    flex-direction: column;

    * {
      font-family: "Roboto", sans-serif;
    }

    @media screen and (max-width: 500px) {
      padding: 30px 0 40px;
    }
  `,
  InnerWrapper: styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 20px;

    @media screen and (max-width: 1320px) {
      width: 90%;
    }
  `,
  DuckImg: styled.img`
    height: 100px;
    transform: scale(1.5);
    margin: 40px;
    position: relative;
    top: -20px;
    @media screen and (max-width: 1320px) {
      height: 100px;
    }
  `,
  Bubble: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 24px;
    width: 500px;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
    text-align: center;
    color: #000;

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 20px 10px 0;
      border-color: transparent #ffffff transparent transparent;
      left: -20px;
      top: 50px;
    }
  `,
  TextWrapper: styled.div`
    margin-bottom: 20px;
  `,
  Title: styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 22px;
`,
  FactWrapper: styled.div`
    width: 90%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  `,
  Header: styled.span`
    font-size: 20px;
    margin-bottom: 5px;
    text-align: left;
  `,
  Subtext: styled.span`
    text-align: left;
    font-size: 18px;
  `,
}

const DuckFacts = () => {
  const [randomFact, setFact] = useState({ heading: '', subtext: '' });

  const getRandomFact = () => {
    const rand = Math.floor(Math.random() * duckFacts.length);
    setFact(duckFacts[rand]);
  }

  useEffect(() => {
    getRandomFact();

  }, [])

  return (
    <_.Wrapper >
      <SectionTitle text="Duck Facts" />
      <_.InnerWrapper>
        <_.DuckImg src="/duck.png" alt="duck" />
        <_.Bubble>
          <_.TextWrapper>
            <_.Title>Did you know?</_.Title>
            {randomFact && <_.FactWrapper>
              <_.Header>{randomFact.heading}!</_.Header>
              <_.Subtext>{randomFact.subtext}</_.Subtext>
            </_.FactWrapper>
            }
          </_.TextWrapper>
          <CloudButton text="New Fact" src="" callback={getRandomFact} target="_self" size="s" />
        </_.Bubble>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default DuckFacts;