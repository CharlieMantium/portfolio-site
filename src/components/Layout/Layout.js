import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { colors, fonts } from 'styles/base';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.gamma};
    text-decoration: none;

    &:visited {
      color: ${colors.delta};
    }
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
