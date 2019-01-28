import React from 'react';
import Up from '../Up';
import { List, Item } from './Footer.styles';

const links = [
  // {
  //   title: 'Email',
  //   url: 'mailto:ben@abdullahceylan.com',
  // },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdullahceylan',
    extra: true,
  },
  {
    title: 'Github',
    url: 'https://www.github.com/abdullahceylan',
    extra: true,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/ceylanabdullah',
    extra: true,
  },
  {
    title: 'codecanyon',
    url: 'https://codecanyon.net/user/abdullahceylan',
    extra: true,
  },
];

const Footer = props => (
  <List>
    <Item>
      {links.map(l => {
        const extraProps = l.extra
          ? {
              rel: 'noopener noreferrer',
              target: '_blank',
            }
          : null;
        return (
          <a key={l.url} href={l.url} {...extraProps}>
            {l.title}
          </a>
        );
      })}
    </Item>
    {props.up && (
      <Item>
        <Up />
      </Item>
    )}
  </List>
);

export default Footer;
