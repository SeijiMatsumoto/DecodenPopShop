import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  InnerWrapper: styled.div`
    width: 100%;
    /* height: 80px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  MainSection: styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 200ms;
    background-color: #c3a1f0;
    cursor: pointer;
    padding: 10px 0;
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      > span {
        top: 5px;
      }
    }
  `,
  SectionTitle: styled.div`
    font-size: 30px;
    font-weight: bold;
  `,
  ArrowDown: styled.span`
    transition: all 500ms;
    font-weight: bold;
    position: relative;
    top: 0;
  `
}
const DropdownBar = () => {
  return (
    <_.Wrapper>
      <_.InnerWrapper>
        <_.MainSection className="schoolbell-font">
          <_.SectionTitle>Categories</_.SectionTitle>
          <_.ArrowDown>V</_.ArrowDown>
        </_.MainSection>
        <_.MainSection className="schoolbell-font">
          <_.SectionTitle>Collections</_.SectionTitle>
          <_.ArrowDown>V</_.ArrowDown>
        </_.MainSection>
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default DropdownBar;