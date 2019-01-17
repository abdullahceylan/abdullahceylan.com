import React from 'react';
import { ExternalLink } from './Button.styles';

const Button = props => {
  return (
    <ExternalLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </ExternalLink>
  );
};

export default Button;
