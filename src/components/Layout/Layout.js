import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
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

    &:hover {
      color: ${colors.omega};
    }
  }

  a, button {
    transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;

    &:focus {
      outline: solid ${rem(1)} ${colors.beta};
      outline-offset: ${rem(1)};
      background: ${colors.delta};
      color: ${colors.epsilon};
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
