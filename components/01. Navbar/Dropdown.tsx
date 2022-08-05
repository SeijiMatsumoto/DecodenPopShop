import React from 'react';
import { categories } from '../../data/categories';
import { collections } from '../../data/collections';
import styled from 'styled-components';
import Link from 'next/link';

const _ = {
  DropdownWrapper: styled.div`
    transition: 400ms ease;
    margin-top: 28px;
    margin-left: 0;
    width: 335px;
    padding: 10px 15px 20px 10px;
    display: flex;
    flex-direction: row;
  `,
  DropdownTitle: styled.span`
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-weight: bold;
    padding: 0 16px 0 10px;
    position: relative;
    cursor: default;
  `,
}

const Dropdown = () => {
  return (
    <_.DropdownWrapper className="mdc-menu mdc-menu-surface" id="menu-dropdown">
      <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="horizontal" tabIndex={1}>
        <span style={{ position: 'relative', top: '5px', width: '200px' }}>
          <_.DropdownTitle className=".no-select">Categories</_.DropdownTitle>
          {categories.map(category => {
            return (
              <li key={category + '-dropdown'} className="mdc-list-item" role="menuitem">
                <span className="mdc-list-item__ripple"></span>
                <Link href="/products"><span className="mdc-list-item__text">{category}</span></Link>
              </li>
            )
          })}
        </span>
      </ul>
      <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="horizontal" tabIndex={1}>
        <span style={{ position: 'relative', top: '5px', width: '200px' }}>
          <_.DropdownTitle className=".no-select">Collections</_.DropdownTitle>
          {collections.map(collection => {
            return (
              <li key={collection + '-dropdown'} className="mdc-list-item" role="menuitem">
                <span className="mdc-list-item__ripple"></span>
                <span className="mdc-list-item__text">{collection}</span>
              </li>
            )
          })}
        </span>
      </ul>

    </_.DropdownWrapper>
  );
};

export default Dropdown;