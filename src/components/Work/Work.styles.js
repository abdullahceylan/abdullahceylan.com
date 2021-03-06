import Link from 'gatsby-link';
import styled from 'styled-components';
import posed from 'react-pose';
import { appear, slideUp, staggerChildren } from '../../styles/poses';

export const List = styled(posed.ul(staggerChildren))`
  width: 100%;
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 0 -1.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
    flex-flow: column;
    justify-content: center;
    width: 50%;
    min-height: calc(100vh - 8rem);
  }
`;

export const Overflow = styled.span`
  display: inline-block;
  padding: 0.25em 0;
  overflow: hidden;
  position: relative;
`;

export const Item = styled.li`
  width: 100%;
  margin: 0 0 1.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 49%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0 0 0.75rem 0;
    &:last-child {
      margin: 0;
    }
  }
`;

export const Title = styled(posed.h2(slideUp))`
  z-index: 99;
  font-size: 1em;
  margin: 0.5rem 0 0 0;
  display: inline-block;
  transition: all 0.3s, border-color 0.3s;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    border: none;
    font-weight: bold;
    font-size: 2em;
    color: ${props => props.theme.colors.secondary};
    margin: 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    font-size: 2em;
  }
  @media (hover: none) {
    border-color: ${props => props.theme.colors.secondary} !important;
  }

  &:hover {
    font-size: 2.1em;
  }
`;

export const Cover = styled(posed.div(appear))`
  position: relative;
  transition: none;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    position: fixed !important;
    pointer-events: none;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -99;
    div {
      height: 100% !important;
      object-fit: cover !important;
    }
    .gatsby-image-wrapper {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }
  }
`;

export const ProjectLink = styled(Link)`
  &:hover h2 {
    border-color: white;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      color: white;
      opacity: 1;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    }
  }
  &:hover .gatsby-image-wrapper {
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      @supports (object-fit: cover) {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
