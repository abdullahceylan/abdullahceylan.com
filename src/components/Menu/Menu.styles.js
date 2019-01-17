import styled from 'styled-components';

export const Nav = styled.nav`
  transition: 0.3s all;
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  height: 4rem;
  line-height: 4rem;
  padding: 0 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
  a {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    border-bottom: 2px solid transparent;
    transition: 0.3s all;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    display: inline-block;
    margin: 0 0 0 1.5rem;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 75%;
    }
  }
`;
