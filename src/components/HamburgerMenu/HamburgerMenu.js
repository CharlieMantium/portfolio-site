import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

const hamburgerLineMixin = (top, transition) => `
  position: absolute;
  width: 100%;
  height: ${rem(3)};
  background-color: ${colors.beta};
  left: 0;
  top: ${top};
  transition: ${transition};
`;

const HamburgerButton = styled.button`
  margin: ${rem(15)};
  padding: ${rem(15)};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;
  cursor: pointer;
  background-color: inherit;
  border: 0;

  @media (min-width: ${breakPoints.desktop}) {
    margin: ${rem(15)};
  }
`;

const HamburgerBox = styled.span`
  width: ${rem(35)};
  height: ${rem(20)};
`;

const HamburgerLine = styled.span`
  ${hamburgerLineMixin('50%', 'background-color 0.3s ease-in-out')};

  transform: translateY(-50%);
  background-color: ${({ isNavActive }) =>
    isNavActive ? 'transparent' : colors.beta};

  &::before {
    ${hamburgerLineMixin(`${rem(-10)}`, 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${({ isNavActive }) =>
      isNavActive && `translateY(${rem(10)}) rotate(45deg)`};
  }

  &::after {
    ${hamburgerLineMixin(`${rem(10)}`, 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${({ isNavActive }) =>
      isNavActive && `translateY(${rem(-10)}) rotate(-45deg)`};
  }
`;

const HamburgerMenu = ({ isNavActive, navActiveToggle }) => (
  <HamburgerButton onClick={navActiveToggle}>
    <HamburgerBox>
      <HamburgerLine isNavActive={isNavActive} />
    </HamburgerBox>
  </HamburgerButton>
);

HamburgerMenu.propTypes = {
  isNavActive: PropTypes.bool,
  navActiveToggle: PropTypes.func,
};

HamburgerMenu.defaultProps = {
  isNavActive: false,
  navActiveToggle: () => {},
};

export default HamburgerMenu;
