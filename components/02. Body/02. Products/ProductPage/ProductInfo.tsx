import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100px;
    /* border: 1px solid blue; */
    padding: 30px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  `,
  Title: styled.span`
    font-size: 40px;
  `,
  Section: styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  `,
  SectionTitle: styled.span`
    font-weight: bold;
    font-size: 18px;
    margin-right: 10px;
  `,
  SectionName: styled.span`
    font-size: 20px;
  `,
  MoneyWrapper: styled.div``,
}

const ProductInfo = ({ product }) => {

  return (
    <_.Wrapper>
      <_.Title>{product.title}</_.Title>
      <_.Section>
        <_.SectionTitle>Collection: </_.SectionTitle>
        <_.SectionName>{product.collection}</_.SectionName>
      </_.Section>
      <_.Section>
        <_.SectionTitle>Price: </_.SectionTitle>
        <_.SectionName>{product.price}</_.SectionName>
      </_.Section>
    </_.Wrapper>
  );
};

export default ProductInfo;