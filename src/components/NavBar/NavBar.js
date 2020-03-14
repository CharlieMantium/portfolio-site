import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { colors, spacing, breakPoints } from '../../styles/base';

const NavBarWrapper = styled.nav`
  position: ${props => (props.isNavActive ? 'fixed' : 'absolute')};
  top: 0;
  background-color: ${colors.alpha};
  box-shadow: ${props =>
    props.isNavActive ? `0px 1px 5px 0px ${colors.epsilon}` : 'none'};
  padding: ${spacing.xsSize} ${spacing.xxxlSize} 0 ${spacing.mSize};
  width: 100%;
  overflow: hidden;

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${spacing.xsSize} 0 0 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-around;
  list-style: none;
`;

const NavListItem = styled.li`
  position: relative;
  top: -50px;
  transform: ${props => (props.isNavActive ? 'translateY(50px)' : 'none')};
  transition: transform 0.5s ease-in-out;
`;

const NavListLink = styled.button`
  color: ${colors.beta};
  background: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colors.gamma};
  }

  &:focus {
    outline: none;
  }
`;

const NavBar = ({ isNavActive }) => {
  return (
    <NavBarWrapper isNavActive={isNavActive}>
      <NavList>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#landing')}>Home</NavListLink>
        </NavListItem>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#projects')}>
            Projects
          </NavListLink>
        </NavListItem>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#contact')}>
            Contact me
          </NavListLink>
        </NavListItem>
      </NavList>
    </NavBarWrapper>
  );
};

export default NavBar;
