import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { categories } from '../../../data/categories';
import { collections } from '../../../data/collections';
import { SettingsContext } from '../../Contexts/SettingsContext';
import Router, { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';

interface FontProps {
  readonly bold: boolean;
}

const _ = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    width: 100%;
    margin: 50px 0 30px;

    @media (max-width: 1850px) {
      min-width: 220px;
    }

    @media (max-width: 850px) {
      width: 45%;
    }

    @media screen and (max-width: 550px) {
      display: none;
    }
  `,
  InnerWrapper: styled.div`
    width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `,
  FilterWrapper: styled.div`
    position: relative;
    top: -4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  FilterTitle: styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
  Arrow: styled(KeyboardArrowDownIcon)`
    transform: scale(0.8);
  `,
  MenuWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    * {
      font-family: "Roboto", sans-serif;
    }
  `,
  SubMenu: styled.div`
    display: flex;
    flex-direction: column;
  `,
  AllProducts: styled.span`
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
    transition: all 500ms;
    cursor: pointer;
    &:hover {
      background-color: #eeecec;
    }
  `,
  MenuTitle: styled.span`
    font-size: 20px;
    padding: 10px;
    font-weight: bold;
    width: 48%;
  `,
  MenuItem: styled.span<FontProps>`
    padding: 8px 15px;
    transition: all 400ms;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      font-weight: bold;
      background-color: #eeecec;
    }

    font-weight: ${(props) => props.bold === true ? "bold" : "normal"};
    background-color: ${(props) => props.bold === true ? "#eeecec" : "white"};
  `,
  SectionWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  `,
  SectionTitle: styled.span`
    font-size: 20px;
    margin-right: 10px;
  `,
  Form: styled.form``,
  Select: styled.select`
    border: none;
    font-size: 16px;
    padding: 2px;
  `,
  Option: styled.option`
    padding: 5px;
  `,
};

const FilterBar = () => {
  const { query } = useRouter();
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const { setSelectedCategory, selectedSort, setSelectedSort } = useContext(SettingsContext);

  const handleChange = (event) => {
    setSelectedSort(event.target.value as string);
  };

  const handleClose = () => {
    setAnchor(null);
  }

  const redirectCollection = (page: string) => {
    setSelectedCategory(page);
    Router.push('/products?collection=' + page);
    setAnchor(null);
  }

  return (
    <_.Wrapper>
      <_.InnerWrapper>
        <_.SectionWrapper>
          <_.FilterWrapper id="filter-wrapper">
            <_.SectionTitle>Filter:</_.SectionTitle>
            <_.FilterTitle onClick={(e: any) => handleClick(e)}>Category / Collection <_.Arrow /></_.FilterTitle>
          </_.FilterWrapper>
          {open && <Menu
            id="basic-menu"
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <_.MenuWrapper>
              <_.SubMenu>
                <_.AllProducts onClick={() => {
                  setSelectedCategory("");
                  Router.push('/products/all');
                  setAnchor(null);
                }}>All Products</_.AllProducts>
              </_.SubMenu>
              <_.SubMenu>
                <_.MenuTitle>Categories</_.MenuTitle>

                {categories.map((cat) => {
                  return (
                    <_.MenuItem
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        Router.push('/products?category=' + cat.name);
                        setAnchor(null);
                      }}
                      bold={cat.name === query.category}
                      key={cat.name + '-filter-dropdown-item'}>
                      {cat.name}
                    </_.MenuItem>
                  )
                })}
              </_.SubMenu>
              <_.SubMenu>
                <_.MenuTitle>Collections</_.MenuTitle>
                {collections.map((col) => {
                  return (
                    <_.MenuItem onClick={() => {
                      setSelectedCategory(col.name);
                      Router.push('/products?collection=' + col.name);
                      setAnchor(null);
                    }} key={col.name + '-filter-dropdown-item'}
                      bold={col.name === query.collection}
                    >{col.name}</_.MenuItem>
                  )
                })}
              </_.SubMenu>
            </_.MenuWrapper>

          </Menu>
          }
        </_.SectionWrapper>
        <_.SectionWrapper>
          <_.SectionTitle>Sort By:</_.SectionTitle>
          <_.Form>
            <_.Select
              value={selectedSort}
              onChange={handleChange}
            >
              <_.Option id="select-text" value='Relevance'>Relevance</_.Option>
              <_.Option id="select-text" value='Price Low to High'>Price Low to High</_.Option>
              <_.Option id="select-text" value='Price High to Low'>Price High to Low</_.Option>
              <_.Option id="select-text" value='A to Z'>A to Z</_.Option>
              <_.Option id="select-text" value='Z to A'>Z to A</_.Option>
            </_.Select>
          </_.Form>
        </_.SectionWrapper>
      </_.InnerWrapper>
    </_.Wrapper >
  );
};

export default FilterBar;