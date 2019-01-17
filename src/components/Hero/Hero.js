import React from 'react';
import { Wrapper, BgImg, Overflow, Title } from './Hero.styles';

const Hero = props => (
  <Wrapper>
    <BgImg
      fluid={props.image.fluid}
      height={props.height}
      position={props.position}
      alt={props.image.title}
      title={props.image.title}
      backgroundColor={'#272727'}
    />
    {props.title && (
      <Overflow>
        <Title>{props.title}</Title>
      </Overflow>
    )}
  </Wrapper>
);

export default Hero;
