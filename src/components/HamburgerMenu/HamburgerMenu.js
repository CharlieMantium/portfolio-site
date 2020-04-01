import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

const hamburgerLineMixin = (top, transition) => `
  position: absolute;
  width: 100%;
  height: ${rem('3px')};
  background-color: ${colors.beta};
  left: 0;
  top: ${top};
  transition: ${transition};
`;

const HamburgerButton = styled.button`
  margin: ${rem('15px')};
  padding: ${rem('15px')};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
  background-color: inherit;
  border: 0;

  &:focus {
    outline: none;
  }

  @media (min-width: ${breakPoints.desktop}) {
    margin: ${rem('15px')};
  }
`;

const HamburgerBox = styled.span`
  width: ${rem('35px')};
  height: ${rem('20px')};
`;

const HamburgerLine = styled.span`
  ${hamburgerLineMixin('50%', 'background-color 0.3s ease-in-out')};

  transform: translateY(-50%);
  background-color: ${({ isClicked }) =>
    isClicked ? 'transparent' : colors.beta};

  &::before {
    ${hamburgerLineMixin(`${rem('-10px')}`, 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${({ isClicked }) =>
      isClicked && `translateY(${rem('10px')}) rotate(45deg)`};
  }

  &::after {
    ${hamburgerLineMixin(`${rem('10px')}`, 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${({ isClicked }) =>
      isClicked && `translateY(${rem('-10px')}) rotate(-45deg)`};
  }
`;

const HamburgerMenu = ({ navActiveToggle }) => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!isClicked);
    navActiveToggle();
  };
  return (
    <HamburgerButton onClick={handleClick}>
      <HamburgerBox>
        <HamburgerLine isClicked={isClicked} />
      </HamburgerBox>
    </HamburgerButton>
  );
};

HamburgerMenu.propTypes = {
  navActiveToggle: PropTypes.func.isRequired,
};

export default HamburgerMenu;
