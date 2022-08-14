import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const _ = {
  QuantityWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    margin-right: 20px;
    border: 1px solid black;
  `,
  QuantityBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    border: 1px solid black;
    border-right: none;
    cursor: default;
  `,
  QuantityArrows: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 1px solid black;
    flex-direction: column;
  `,
  QuantityArrow: styled.div`
    position: relative;
    top: 2px;

    &:first-child {
      border-bottom: 1px solid black;
    }

    svg {
      /* border: 1px solid red; */
      margin: 0;
      height: 20px;
    }
  `,
}

const Quantity = () => {
  return (
    <_.QuantityWrapper>
      <_.QuantityBox>QTY</_.QuantityBox>
      <_.QuantityBox>1</_.QuantityBox>
      <_.QuantityArrows>
        <_.QuantityArrow><KeyboardArrowUpIcon /></_.QuantityArrow>
        <_.QuantityArrow><KeyboardArrowDownIcon /></_.QuantityArrow>
      </_.QuantityArrows>
    </_.QuantityWrapper>
  );
};

export default Quantity;