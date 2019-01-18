import styled from 'styled-components';
import posed from 'react-pose';
import { fade, delayChildren } from '../../styles/poses';

export const Wrapper = styled(posed.div(delayChildren))`
  margin: 0 0 2rem 0;
  span {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    margin: 0 1rem 0 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      border: none;
      position: fixed;
      top: 50%;
      color: white;
      transform-origin: center;
    }
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`;

export const Previous = styled(posed.span(fade))`
  transform: rotate(-90deg) !important;
  left: 0.25rem;
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    left: 1.25rem;
  }
`;

export const Next = styled(posed.span(fade))`
  transform: rotate(90deg) !important;
  right: -0.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    right: 0.5rem;
  }
`;
