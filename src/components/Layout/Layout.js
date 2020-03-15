import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { colors, fonts } from 'src/styles/base';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.alpha};
  color: ${colors.beta};
  font-family: ${fonts.families.basicFont};
`;

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
