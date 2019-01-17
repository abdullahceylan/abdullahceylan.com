import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  min-height: calc(100vh - 8rem);
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 3rem;
  }
`;
