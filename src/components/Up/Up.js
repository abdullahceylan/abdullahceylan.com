import React from 'react';
import { Arrow } from './Up.styles';

if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

const scrollUp = () => {
  scroll({ top: 0, left: 0, behavior: 'smooth' });
};

const Up = () => <Arrow onClick={scrollUp}>&uarr;</Arrow>;

export default Up;
