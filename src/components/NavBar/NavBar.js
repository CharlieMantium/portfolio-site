import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import ReactCountryFlag from 'react-country-flag';
import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl';
import { rem } from 'polished';

import { colors, breakPoints } from 'styles/base';

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: ${rem(-100)};
  padding: ${rem(10)};
  background-color: ${colors.alpha};
  opacity: ${({ isNavActive }) => (isNavActive ? '0.9' : '0')};
  transform: ${({ isNavActive }) =>
    isNavActive ? `translateX(${rem(-100)})` : 'translateY(0)'};
  transition: transform 0.5s ease-in-out, opacity 0.4s ease-in-out;
  box-shadow: 0 ${rem(1)} ${rem(5)} 0 ${colors.epsilon};

  @media (min-width: ${breakPoints.largeMobile}) {
    top: ${rem(-65)};
    right: auto;
    width: 100%;
    padding: ${rem(20)} 0;
    transform: ${({ isNavActive }) =>
      isNavActive ? `translateY(${rem(65)})` : 'translateY(0)'};
  }
`;

const ChangeLocaleWrapper = styled.div`
  &:first-child {
    margin-right: ${rem(10)};
  }
`;

const ChangeLocaleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${breakPoints.largeMobile}) {
    flex-direction: row;
    padding: 0 ${rem(70)} 0 ${rem(20)};
    justify-content: space-between;
  }
`;

const NavListItem = styled.li`
  padding: ${rem(8)} 0;

  &:first-child {
    align-self: flex-start;
  }

  @media (min-width: ${breakPoints.largeMobile}) {
    padding: 0;
  }
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
      <NavListItem isNavActive={isNavActive}>
        <ChangeLocaleWrapper>
          <ChangeLocaleButton onClick={() => changeLocale('en')}>
            <ReactCountryFlag countryCode="GB" />
          </ChangeLocaleButton>
          <ChangeLocaleButton onClick={() => changeLocale('pl')}>
            <ReactCountryFlag countryCode="PL" />
          </ChangeLocaleButton>
        </ChangeLocaleWrapper>
      </NavListItem>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#landing')}>
          <FormattedMessage id="navTo.landingSection" />
        </NavListLink>
      </NavListItem>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#aboutMe')}>
          <FormattedMessage id="navTo.aboutMeSection" />
        </NavListLink>
      </NavListItem>
      <NavListItem isNavActive={isNavActive}>
        <NavListLink onClick={() => scrollTo('#techStack')}>
          <FormattedMessage id="navTo.techStackSection" />
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
