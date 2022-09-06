import React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const _ = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* justify-content: space-between; */
    align-items: center;
    height: 50px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: none;
    cursor: default;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-right: 15px;
  `,
}

const Options = ({ title, choices, callback, selected }) => {

  return (
    <_.Wrapper>
      <_.Title>{title}</_.Title>
      <FormControl sx={{ m: 0, minWidth: 50 }} size="small">
        <Select
          value={selected}
          onChange={(e) => callback(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {choices.map((choice, i) => {
            return (
              <MenuItem key={choice + i} value={choice}>{choice}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </_.Wrapper>
  );
};

export default Options;