import React, { useState } from 'react';
import styled from 'styled-components';

import { fonts } from '../../styles/base';
import SectionWrapper from '../../styles/elements/SectionWrapper';
import HamburgerMenu from '../HamburgerMenu';
import NavBar from '../NavBar';

const LandingSectionWrapper = styled(SectionWrapper)`
  align-items: center;
`;

const LandingHeader = styled.h1`
  font-family: ${fonts.families.headerFont};
  font-weight: ${fonts.weights.regular};
  width: 80%;
  word-break: break-all;
`;

const LandingSection = () => {
  const [isNavActive, setNavActive] = useState(false);
  const navActiveToggle = () => setNavActive(!isNavActive);
  return (
    <LandingSectionWrapper id="landing">
      <HamburgerMenu navActiveToggle={navActiveToggle} />
      <NavBar isNavActive={isNavActive} />
      <LandingHeader>Hi! My name is Karol Zieniewicz</LandingHeader>
    </LandingSectionWrapper>
  );
};

export default LandingSection;
