import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 50px;
  * {
    font-family: 'Roboto Flex', sans-serif;
  }
`;

const InnerWrapper = styled.div`
  width: 80%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 25px;
  margin: 15px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: underline;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  margin: 30px;
  overflow: hidden;
`;

const CardImageWrapper = styled.div`
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.5s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Categories = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Categories</Title>
        <CardsWrapper>
          <Card>
            <CardImageWrapper><CardImage src="https://helios-i.mashable.com/imagery/articles/048dzEVk1D9pERrbtV3HyCb/hero-image.fill.size_1200x1200.v1614273991.png" alt="cases" /></CardImageWrapper>
            <CardTitle>Cases</CardTitle>
          </Card>
          <Card>
            <CardImageWrapper><CardImage src="https://t4.ftcdn.net/jpg/00/53/91/69/360_F_53916978_qItbOtWpD4VYA3t5RKPuEs09Ev7jXNzE.jpg" alt="cases" /></CardImageWrapper>
            <CardTitle>Clothing</CardTitle>
          </Card>
          <Card>
            <CardImageWrapper><CardImage src="https://m.media-amazon.com/images/I/71IQNKHeT8L._AC_SL1200_.jpg" alt="cases" /></CardImageWrapper>
            <CardTitle>Other</CardTitle>
          </Card>
          <Card>
            <CardImageWrapper><CardImage src="https://ih1.redbubble.net/image.1629387948.4585/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="cases" /></CardImageWrapper>
            <CardTitle>Sale</CardTitle>
          </Card>
        </CardsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Categories;