import React from 'react';
import { Link } from 'gatsby';
import { Nav, List } from './Menu.styles';

const menuList = [
  {
    title: 'Work',
    url: '/',
    className: 'link--work',
  },
  {
    title: 'Open Source',
    url: '/open-source',
    className: 'link--open-source',
  },
  {
    title: 'About',
    url: '/about',
    className: 'link--about',
  },
];

const Menu = () => {
  return (
    <Nav id="nav">
      <List>
        <li>
          <Link to="/">Abdullah Ceylan</Link>
        </li>
        {menuList.map(l => (
          <li key={l.url}>
            <Link to={l.url} className={l.className}>
              {l.title}
            </Link>
          </li>
        ))}
      </List>
    </Nav>
  );
};

export default Menu;
