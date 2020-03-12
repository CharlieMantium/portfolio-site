import React, { useState } from 'react';
import styled from 'styled-components';

import { colors, spacing } from '../../styles/base';

const hamburgerLineMixin = (top, transition) => `
  position: absolute;
  width: 100%;
  height: ${spacing.xsSize};
  background-color: ${colors.beta};
  left: 0;
  top: ${top};
  transition: ${transition};
`;

const HamburgerButton = styled.button`
  margin: ${spacing.lSize};
  padding: ${spacing.lSize};
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

  @media (min-width: ${spacing.desktopBreakpoint}) {
    margin: ${spacing.lSize};
  }
`;

const HamburgerBox = styled.span`
  width: ${spacing.xxlSize};
  height: ${spacing.xlSize};
`;

const HamburgerLine = styled.span`
  ${hamburgerLineMixin('50%', 'background-color 0.1s 0.1s ease-in-out')};

  transform: translateY(-50%);
  background-color: ${props => (props.clicked ? 'transparent' : colors.beta)};

  &::before {
    ${hamburgerLineMixin('-10px', 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${props => props.clicked && 'translateY(10px) rotate(45deg)'};
  }

  &::after {
    ${hamburgerLineMixin('10px', 'transform 0.2s ease-in-out')};

    content: '';
    transform: ${props => props.clicked && 'translateY(-10px) rotate(-45deg)'};
  }
`;

const HamburgerMenu = ({ navActiveToggle }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    navActiveToggle();
  };
  return (
    <HamburgerButton onClick={handleClick}>
      <HamburgerBox>
        <HamburgerLine clicked={clicked}></HamburgerLine>
      </HamburgerBox>
    </HamburgerButton>
  );
};

export default HamburgerMenu;
