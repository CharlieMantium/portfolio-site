import React, { useState } from 'react';
import { FormattedMessage, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

import { fonts, spacing } from 'styles/base';
import SectionWrapper from 'styles/elements/SectionWrapper';
import HamburgerMenu from 'components/HamburgerMenu';
import NavBar from 'components/NavBar';

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
  top: ${spacing.xlSize};
  left: -${spacing.xxxxlSize};

  transform: ${({ isNavActive }) =>
    isNavActive ? 'translateX(0)' : 'translateX(120px)'};
  transition: transform 0.5s ease-in-out;
`;

const ChangeLocaleButton = styled.button`
  margin-right: ${spacing.mSize};
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
