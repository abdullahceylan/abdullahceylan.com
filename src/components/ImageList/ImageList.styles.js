import styled from 'styled-components';

export const List = styled.ul`
  li {
    margin: 0 0 1rem 0;
    padding: 7.5% 10%;
    background: ${props => props.theme.colors.tertiary};
    &:last-child {
      margin: 0;
    }
  }
`;
