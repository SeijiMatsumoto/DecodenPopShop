import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { questions } from '../../../data/questions';
import { Button } from '../../UILibrary';

const _ = {
  Wrapper: styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    @media (max-width: 1100px) {
      width: 90vw;
    }
    @media (max-width: 550px) {
      padding: 15px;
    }

    * {
      font-family: 'Roboto', sans-serif;
    }
  `,
  QAWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 0;
    @media (max-width: 550px) {
      padding: 25px;
      margin: 15px 0;
    }

    span {
      cursor: default;
    }
  `,
  Question: styled.span`
    font-size: 22px;
    color: #817acb;
    @media (max-width: 550px) {
      font-size: 18px;
    }
    border-bottom: 3px solid #b8d4d794;
  `,
  Answer: styled.span`
    margin-top: 5px;
    font-size: 18px;
    @media (max-width: 550px) {
      font-size: 16px;
    }

  `,
  OtherWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin: 10px;
    width: 40%;

  `,
  OtherText: styled.span`
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  `,
}

const Body = () => {
  return (
    <_.Wrapper>
      {questions.map(question => {
        return (
          <_.QAWrapper key={question.q.slice(0, 20)}>
            <_.Question>{question.q}</_.Question>
            <_.Answer>{question.a}</_.Answer>
          </_.QAWrapper>
        )
      })}
      <_.OtherWrapper>
        <_.OtherText>Have a different question? Contact us directly.</_.OtherText>
        <Button action={() => Router.push("/contact")} buttonText={'Contact'} />
      </_.OtherWrapper>
    </_.Wrapper>
  );
};

export default Body;