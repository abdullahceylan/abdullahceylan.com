import React from 'react';
import Img from 'gatsby-image';
import Reveal from 'react-reveal/Reveal';
import { List } from './ImageList.styles';

const ImageList = props => (
  <List>
    {props.images &&
      props.images.map((image, index) => (
        <li key={index}>
          <Reveal>
            <Img
              fluid={image.fluid}
              alt={image.title}
              title={image.title}
              backgroundColor={'#414141'}
            />
          </Reveal>
        </li>
      ))}
  </List>
);

export default ImageList;
