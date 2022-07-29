import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    position: absolute;
    top: 115px;
    padding: 20px;
    border: 1px solid red;
    * {
      font-family: 'Roboto Flex', sans-serif;
    }
    display: flex;
    justify-content: center;
  `,
  InnerWrapper: styled.div`
    width: 95%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
  `
}

export default function index() {
  return (
    <_.Wrapper>
      <_.InnerWrapper>
        Products
      </_.InnerWrapper>
    </_.Wrapper>
  );
};