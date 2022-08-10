import React, { useContext, ChangeEvent } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { SettingsContext } from '../Contexts/SettingsContext';
import Router from 'next/router';

const _ = {
  SearchBox: styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
  `,
  SearchButton: styled.button`
    width: 50px;
    height: 40px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: black;
    background-color: transparent;
    pointer-events: painted;

    &:focus ~ .input-form {
      .input-search {
        width: 300px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);

        &::placeholder {
          color: black;
        }
      }
    }
  `,
  SearchIcon: styled(SearchIcon)`
    color: rgb(227, 227, 227);
  `,
  SearchForm: styled.form``,
  SearchInput: styled.input`
   height: 20px;
    width: 0;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: #ff7b86;
    padding-right: 40px;
    color: black;

    &::placeholder {
      color: #ff7b86;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 100;
    }

    &:focus {
      width: 300px;
      border-radius: 0px;
      background-color: transparent;
      border-bottom: 1px solid rgb(230, 153, 153);
      transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);

      &::placeholder {
        color: black;
      }
    }
  `
}

const SearchBar = () => {
  const { searchQuery, setQuery } = useContext(SettingsContext);

  const submitQuery = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (searchQuery.length) {
      Router.push('/products/?results=' + searchQuery);
    }
  }

  const focusOnInput = () => {
    const input = document.getElementById('search-input');
    if (input) input.focus();
  }

  return (
    <_.SearchBox>
      <_.SearchButton onClick={focusOnInput}><_.SearchIcon /></_.SearchButton>
      <_.SearchForm className="input-form" onSubmit={(e) => submitQuery(e)}>
        <_.SearchInput className="input-search" id="search-input" type="text" placeholder="Type to Search..." autoComplete="off" onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
      </_.SearchForm>
    </_.SearchBox>
  );
};

export default SearchBar;