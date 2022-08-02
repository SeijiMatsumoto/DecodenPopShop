import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  InnerWrapper: styled.div`
    width: 1320px;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  FiltersBtn: styled.button`
    border-radius: 5px;
    border: 1px solid #7a7a7aed;
    padding: 10px;
    font-size: 16px;
  `,
  SortDropdown: styled.select`
    border-radius: 5px;
    border: 1px solid #7a7a7aed;
    padding: 10px;
    font-size: 16px;
  `,
  DropdownOptions: styled.option``
}

const SortBar = () => {
  return (
    <_.Wrapper>
      <_.InnerWrapper>
        <_.FiltersBtn>Filters</_.FiltersBtn>
        <_.SortDropdown>
          <_.DropdownOptions value="" disabled selected>Sort by</_.DropdownOptions>
          <_.DropdownOptions>Price Ascending</_.DropdownOptions>
          <_.DropdownOptions>Price Descending</_.DropdownOptions>
        </_.SortDropdown>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default SortBar;