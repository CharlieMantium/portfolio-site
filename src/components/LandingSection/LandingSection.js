import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

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
`;

const LandingSection = () => {
  const [isNavActive, setNavActive] = useState(false);
  const navActiveToggle = () => setNavActive(!isNavActive);
  return (
    <LandingSectionWrapper id="landing">
      <HamburgerMenu navActiveToggle={navActiveToggle} />
      <NavBar isNavActive={isNavActive} />
      <LandingHeader>
        <FormattedMessage id="header.landingSection" />
      </LandingHeader>
    </LandingSectionWrapper>
  );
};

export default LandingSection;
