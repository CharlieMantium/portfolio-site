import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { colors, spacing, breakPoints } from 'src/styles/base';

const NavBarWrapper = styled.nav`
  position: ${({ isNavActive }) => (isNavActive ? 'fixed' : 'absolute')};
  top: 0;
  padding: ${spacing.xsSize} ${spacing.xxxlSize} 0 ${spacing.mSize};
  width: 100%;
  box-shadow: 0px 1px 5px 0px ${colors.epsilon};
  background-color: ${colors.alpha};
  opacity: ${({ isNavActive }) => (isNavActive ? '1' : '0')};
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;

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
  transform: ${({ isNavActive }) =>
    isNavActive ? 'translateY(50px)' : 'none'};
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
  const intl = useIntl();
  return (
    <NavBarWrapper isNavActive={isNavActive}>
      <NavList>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#landing')}>
            {intl.formatMessage({ id: 'navTo.landingSection' })}
          </NavListLink>
        </NavListItem>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#projects')}>
            {intl.formatMessage({ id: 'navTo.projectsSection' })}
          </NavListLink>
        </NavListItem>
        <NavListItem isNavActive={isNavActive}>
          <NavListLink onClick={() => scrollTo('#contact')}>
            {intl.formatMessage({ id: 'navTo.contactSection' })}
          </NavListLink>
        </NavListItem>
      </NavList>
    </NavBarWrapper>
  );
};

export default NavBar;
