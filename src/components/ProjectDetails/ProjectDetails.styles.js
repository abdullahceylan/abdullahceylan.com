import styled from 'styled-components';
import posed from 'react-pose';
import { appear, delayChildren } from '../../styles/poses';

export const Wrapper = styled(posed.div(delayChildren))`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
`;

export const Overflow = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
`;

export const Info = posed.div(appear);

export const Description = styled.div`
  padding: 1rem 0 2rem 0;
  max-width: 750px;
  font-size: 1em;
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
    line-height: 1.5;
  }
  a {
    transition: 0.3s;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    &:hover {
      border-color: white;
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }

  p {
    margin: 0 0 20px;
  }
`;

export const Awards = styled.ul`
  margin: 0;
  li {
    list-style: disc;
    list-style-position: inside;
    border: none;
    line-height: 1.5;
    margin: 0 0 0.5rem 0;
  }
`;

export const Resources = styled(posed.div(appear))`
  padding: 1rem 0 2rem 0;
  a {
    transition: 0.2s;
    margin: 0 1rem 0 0;
    &:nth-child(2) {
      margin: 0;
    }
  }
`;
