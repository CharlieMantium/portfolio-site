import React, { useState } from 'react';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

import { fonts, spacing } from 'src/styles/base';
import SectionWrapper from 'src/styles/elements/SectionWrapper';

import HamburgerMenu from '../HamburgerMenu';
import NavBar from '../NavBar';

const LandingSectionWrapper = styled(SectionWrapper)`
  align-items: center;
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
    isNavActive ? 'none' : 'translateX(120px)'};
  transition: transform 0.5s ease-in-out;
`;

const ChangeLocaleButton = styled.button`
  margin-right: ${spacing.mSize};
  background: inherit;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const LandingSection = () => {
  const intl = useIntl();
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
        {intl.formatMessage({ id: 'header.landingSection' })}
      </LandingHeader>
    </LandingSectionWrapper>
  );
};

export default LandingSection;
