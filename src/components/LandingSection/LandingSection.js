import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl';
import { rem } from 'polished';

import { fonts } from 'styles/base';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import NavBar from 'components/NavBar/NavBar';

import { SectionWrapper } from 'components/Section/styled';

const LandingSectionWrapper = styled(SectionWrapper)`
  justify-content: center;
`;

const LandingHeader = styled.h1`
  font-family: ${fonts.families.headerFont};
  font-weight: ${fonts.weights.regular};
  width: 80%;
`;

const ChangeLocaleWrapper = styled.div`
  position: fixed;
  top: ${rem(20)};
  left: ${rem(-100)};

  transform: ${({ isNavActive }) =>
    isNavActive ? 'translateX(0)' : `translateX(${rem(120)})`};
  transition: transform 0.5s ease-in-out;
`;

const ChangeLocaleButton = styled.button`
  margin-right: ${rem(10)};
  background: none;
  border: none;
  cursor: pointer;
`;

const LandingSection = () => {
  const [isNavActive, setNavActive] = useState(false);
  const navActiveToggle = () => setNavActive(!isNavActive);
  return (
    <LandingSectionWrapper id="landing">
      <HamburgerMenu navActiveToggle={navActiveToggle} />
      <NavBar isNavActive={isNavActive} />
      <ChangeLocaleWrapper isNavActive={isNavActive}>
        <ChangeLocaleButton onClick={() => changeLocale('en')}>
          <ReactCountryFlag countryCode="GB" />
        </ChangeLocaleButton>
        <ChangeLocaleButton onClick={() => changeLocale('pl')}>
          <ReactCountryFlag countryCode="PL" />
        </ChangeLocaleButton>
      </ChangeLocaleWrapper>
      <LandingHeader>
        <FormattedMessage id="header.landingSection" />
      </LandingHeader>
    </LandingSectionWrapper>
  );
};

export default LandingSection;
