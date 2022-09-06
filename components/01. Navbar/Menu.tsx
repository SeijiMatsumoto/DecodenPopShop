import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SwipeableDrawer, List, ListItemIcon, ListItemText, ListItemButton, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import OutboxIcon from '@mui/icons-material/Outbox';
import CategoryIcon from '@mui/icons-material/Category';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StoreIcon from '@mui/icons-material/Store';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { categories } from '../../data/categories';
import { collections } from '../../data/collections';

const _ = {
  MenuWrapper: styled(SwipeableDrawer)``,
  Arrow: styled(ArrowRightIcon)`
    margin-right: 10px;
  `,
}

const Menu = ({ setOpenMenu, isOpen }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [cat, setCat] = useState<boolean>(false);
  const [col, setCol] = useState<boolean>(false);

  const checkClick = (e) => {
    const menu = document.getElementById('menuWrapper');
    if (e.target != document.querySelector("#menuLink")) {
      if (menu) setOpenMenu(false);
    }
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

  useEffect(() => {
    if (!isOpen) {
      setCat(false);
      setCol(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('mouseup', checkClick);
    return () => document.body.removeEventListener('scroll', checkClick);
  }, [])

  const getIcon = (type) => {
    if (type === "Home") return <HomeIcon />
    if (type === "Products") return <StoreIcon />
    if (type === "Q&A") return <QuestionAnswerIcon />
    if (type === "Contact") return <OutboxIcon />
  }

  const getHref = (type) => {
    if (type === "Home") return "/"
    if (type === "Q&A") return "/faq"
    if (type === "Contact") return "/contact"
  }

  return (
    <>
      <_.MenuWrapper
        anchor={'bottom'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>
          {['Home', 'Products', 'Q&A', 'Contact'].map((text, index) => {
            if (text === "Products") {
              return (
                <div key={text}>
                  <ListItemButton onClick={() => setExpand(!expand)}>
                    <ListItemIcon>
                      {getIcon(text)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {expand ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={expand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link href='/products'>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <InventoryIcon />
                          </ListItemIcon>
                          <ListItemText primary="All Products" />
                        </ListItemButton>
                      </Link>

                      <ListItemButton sx={{ pl: 4 }} onClick={() => setCat(!cat)}>
                        <ListItemIcon>
                          <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categories" />
                        {cat ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={cat} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {categories.map(category => (
                            <Link key={category + 'menu-link'} href={`/products?categories=${category.name}`}>
                              <ListItemButton sx={{ pl: 8 }}>
                                <_.Arrow />
                                <ListItemText primary={category.name} />
                              </ListItemButton>
                            </Link>
                          ))}
                        </List>
                      </Collapse>

                      <ListItemButton sx={{ pl: 4 }} onClick={() => setCol(!col)}>
                        <ListItemIcon>
                          <AppsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Collections" />
                        {col ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={col} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {collections.map(collection => (
                            <Link key={collection + 'menu-link'} href={`/products?collections=${collection.name}`}>
                              <ListItemButton sx={{ pl: 8 }}>
                                <_.Arrow />
                                <ListItemText primary={collection.name} />
                              </ListItemButton>
                            </Link>
                          ))}
                        </List>
                      </Collapse>
                    </List>
                  </Collapse>
                </div>
              )
            }

            const link = getHref(text) || "/";
            return (
              <Link key={text} href={link}>
                <ListItemButton >
                  <ListItemIcon>
                    {getIcon(text)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            )
          })}
        </List>
      </_.MenuWrapper>
    </>
  );
};

export default Menu;