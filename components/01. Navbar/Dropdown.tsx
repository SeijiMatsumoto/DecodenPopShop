import React, { useEffect, useState, useContext } from 'react';
import { categories } from '../../data/categories';
import { collections } from '../../data/collections';
import styled from 'styled-components';
import { Menu } from '@mui/material';
import Router from 'next/router';
import { SettingsContext } from '../Contexts/SettingsContext';

const _ = {
  DropdownWrapper: styled.div``,
  InnerWrapper: styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Mali', cursive;
  `,
  InnerInnerWrapper: styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0 30px;
    transform: scale(1.05);
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  `,
  ChoicesWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  Choice: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 37px;
    width: 180px;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  `,
  ChoiceText: styled.span`
    font-size: 20px;
  `,
  Items: styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 200px;
    padding: 20px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  `,
  ItemImg: styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
  `,
  ItemTitle: styled.span`
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
  `
}

const Dropdown = ({ anchorEl, setAnchorEl }) => {
  const [selected, setSelected] = useState<number>();
  const { setSelectedCategory } = useContext(SettingsContext);
  const open = Boolean(anchorEl);

  const changeView = (num: number) => {
    const navCat = document.getElementById('nav-cat');
    const navCol = document.getElementById('nav-col');
    if (num === 1) {
      if (navCat) navCat.classList.add('selected-choice');
      if (navCol) navCol.classList.remove('selected-choice');
    } else {
      if (navCat) navCat.classList.remove('selected-choice');
      if (navCol) navCol.classList.add('selected-choice');
    }
  }

  useEffect(() => {
    if (selected) {
      changeView(selected);
    }
  }, [selected])

  useEffect(() => {
    setSelected(1);
  }, [])

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectProducts = () => {
    setSelectedCategory('');
    setAnchorEl(null);
    Router.push('/products/all');
  }

  const redirectCategory = (page: string) => {
    setSelectedCategory(page);
    setAnchorEl(null);
    Router.push('/products?category=' + page);
  }

  const redirectCollection = (page: string) => {
    setSelectedCategory(page);
    setAnchorEl(null);
    Router.push('/products?collection=' + page);
  }

  return (
    <_.DropdownWrapper>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
        <_.InnerWrapper>
          <_.InnerInnerWrapper>
            <_.ChoicesWrapper>
              <_.Choice onClick={redirectProducts}>
                <_.ChoiceText>All Products</_.ChoiceText>
              </_.Choice>
              <_.Choice id="nav-cat" className="selected-choice" onClick={() => setSelected(1)}>
                <_.ChoiceText >Categories</_.ChoiceText>
              </_.Choice>
              <_.Choice id="nav-col" onClick={() => setSelected(2)}>
                <_.ChoiceText >Collections</_.ChoiceText>
              </_.Choice>
            </_.ChoicesWrapper>
            <_.Items>
              {selected === 1 && categories.map(category => {
                return (
                  <_.Item key={category.name + '-link'} onClick={() => redirectCategory(category.name)}>
                    <_.ItemImg src={category.img} />
                    <_.ItemTitle>{category.name}</_.ItemTitle>
                  </_.Item>
                )
              })}
              {selected === 2 && collections.map(collection => {
                return (
                  <_.Item key={collection.name + '-link'} onClick={() => redirectCollection(collection.name)}>
                    <_.ItemImg src={collection.img} />
                    <_.ItemTitle>{collection.name}</_.ItemTitle>
                  </_.Item>
                )
              })}
            </_.Items>
          </_.InnerInnerWrapper>
        </_.InnerWrapper>
      </Menu>
    </_.DropdownWrapper >
  );
};

export default Dropdown;