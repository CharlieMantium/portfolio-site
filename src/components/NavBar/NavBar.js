import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ReactCountryFlag from 'react-country-flag';
import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

const NavBarWrapper = styled.nav`
  position: ${({ isNavActive }) => (isNavActive ? 'fixed' : 'absolute')};
  top: 0;
  padding: ${rem(3)} ${rem(50)} 0 ${rem(10)};
  width: 100%;
  box-shadow: 0 ${rem(1)} ${rem(5)} 0 ${colors.epsilon};
  background-color: ${colors.alpha};
  opacity: ${({ isNavActive }) => (isNavActive ? '1' : '0')};
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;

  @media (min-width: ${breakPoints.desktop}) {
    padding: ${rem(3)} 0 0 0;
  }
`;

const ChangeLocaleWrapper = styled.div`
  position: fixed;
  top: ${rem(17)};
  left: ${rem(-100)};

  transform: ${({ isNavActive }) =>
    isNavActive ? `translateX(${rem(120)})` : 'translateX(0)'};
  transition: transform 0.5s ease-in-out;
`;

const ChangeLocaleButton = styled.button`
  margin-right: ${rem(10)};
  background: none;
  border: none;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-around;
  list-style: none;
`;

const NavListItem = styled.li`
  position: relative;
  top: ${rem(-50)};
  transform: ${({ isNavActive }) =>
    isNavActive ? `translateY(${rem(50)})` : 'translateY(0)'};
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

const NavBar = ({ isNavActive }) => (
  <NavBarWrapper isNavActive={isNavActive}>
    <NavList>
      <ChangeLocaleWrapper isNavActive={isNavActive}>
        <ChangeLocaleButton onClick={() => changeLocale('en')}>
          <ReactCountryFlag countryCode="GB" />
        </ChangeLocaleButton>
        <ChangeLocaleButton onClick={() => changeLocale('pl')}>
          <ReactCountryFlag countryCode="PL" />
        </ChangeLocaleButton>
      </ChangeLocaleWrapper>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#landing')}>
          <FormattedMessage id="navTo.landingSection" />
        </NavListLink>
      </NavListItem>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#projects')}>
          <FormattedMessage id="navTo.projectsSection" />
        </NavListLink>
      </NavListItem>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#contact')}>
          <FormattedMessage id="navTo.contactSection" />
        </NavListLink>
      </NavListItem>
    </NavList>
  </NavBarWrapper>
);

NavBar.propTypes = {
  isNavActive: PropTypes.bool,
};

NavBar.defaultProps = {
  isNavActive: false,
};

export default NavBar;
