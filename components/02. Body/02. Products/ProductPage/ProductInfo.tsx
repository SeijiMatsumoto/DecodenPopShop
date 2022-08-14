import Link from 'next/link';
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
  Price: styled.span`
    font-size: 30px;
  `,
  DescriptionWrapper: styled.div`
    margin: 20px 0;
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
}

const ProductInfo = ({ product }) => {

  return (
    <_.Wrapper>
      <_.Title>{product.title}</_.Title>
      <_.Section>
        <_.Price>{product.price} USD</_.Price>
      </_.Section>
      <_.Section>
        <_.DescriptionWrapper>
          {product.description}
        </_.DescriptionWrapper>
      </_.Section>
      <_.Section>
        <_.SectionTitle>Category: </_.SectionTitle>
        <Link href={"/products?category=" + product.category} ><_.SectionName>{product.category}</_.SectionName></Link>
      </_.Section>
      <_.Section>
        <_.SectionTitle>Collection: </_.SectionTitle>
        <Link href={"/products?collection=" + product.collection} ><_.SectionName>{product.collection}</_.SectionName></Link>
      </_.Section>
    </_.Wrapper>
  );
};

export default ProductInfo;