import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 115px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const ProductPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Wrapper>
      <span>{category}</span>
    </Wrapper>
  );
};

export default ProductPage;