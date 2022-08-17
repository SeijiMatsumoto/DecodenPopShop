import React, { useContext } from 'react';
import styled from 'styled-components';
import { SwipeableDrawer } from '@mui/material';
import { categories } from '../../../data/categories';
import { collections } from '../../../data/collections';
import { SectionTitle } from '../../UILibrary';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SettingsContext } from '../../Contexts/SettingsContext';
import Router from 'next/router';

interface FontProps {
  readonly bold: boolean;
}

const _ = {
  Wrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Roboto", sans-serif;
    padding: 10px 60px 0 40px;
  `,
  InnerWrapper: styled.div`
    padding-top: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
  `,
  SectionWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 30px;
  `,
  DropdownOptions: styled.option``,
  Item: styled.span<FontProps>`
    font-size: 20px;
    cursor: pointer;
    margin: 5px 0;
    transition: 200ms ease;
    font-weight: ${(props) => props.bold === true ? "bold" : "normal"};
    &:hover {
      color: #A19DCA;
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0);
    }
  `,
};

const SideBarMenu = ({ isOpen, setOpenMenu, query }) => {
  const { setSelectedCategory, setAnchorEl, selectedSort, setSelectedSort } = useContext(SettingsContext);

  const handleChange = (event: SelectChangeEvent) => {
    setOpenMenu(false);
    setSelectedSort(event.target.value as string);
  };

  const redirectCategory = (page: string) => {
    setOpenMenu(false);
    setSelectedCategory(page);
    setAnchorEl(null);
    Router.push('/products?category=' + page);
  }

  const redirectCollection = (page: string) => {
    setOpenMenu(false);
    setSelectedCategory(page);
    setAnchorEl(null);
    Router.push('/products?collection=' + page);
  }

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenMenu(open);
    };

  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <_.Wrapper>
          <_.InnerWrapper>
            <_.SectionWrapper>
              <SectionTitle text='Sort By' />
              <FormControl sx={{ m: 0, minWidth: 100 }}>
                <Select
                  id="simple-select"
                  value={selectedSort}
                  onChange={handleChange}
                >
                  <MenuItem id="select-text" value='Relevance'>Relevance</MenuItem>
                  <MenuItem id="select-text" value='Price Low to High'>Price Low to High</MenuItem>
                  <MenuItem id="select-text" value='Price High to Low'>Price High to Low</MenuItem>
                  <MenuItem id="select-text" value='A to Z'>A to Z</MenuItem>
                  <MenuItem id="select-text" value='Z to A'>Z to A</MenuItem>
                </Select>
              </FormControl>
            </_.SectionWrapper>
            <_.SectionWrapper>
              <SectionTitle text='Categories' />
              {categories.map(category => {
                return (
                  <_.Item key={category.name + '-sidebar-link-menu'} bold={category.name === query.category} onClick={() => redirectCategory(category.name)}>{category.name}</_.Item>
                )
              })}
            </_.SectionWrapper>
            <_.SectionWrapper>
              <SectionTitle text='Collections' />
              {collections.map(collection => {
                return (
                  <_.Item key={collection.name + '-sidebar-link-menu'} bold={collection.name === query.collection} onClick={() => redirectCollection(collection.name)}>{collection.name}</_.Item>
                )
              })}
            </_.SectionWrapper>
          </_.InnerWrapper>
        </_.Wrapper>
      </SwipeableDrawer>
    </div>
  );
};

export default SideBarMenu;