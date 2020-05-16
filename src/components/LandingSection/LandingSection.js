import React, { useState } from 'react';
import styled from 'styled-components';

import { SectionWrapper } from 'components/Section/styled';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import NavBar from 'components/NavBar/NavBar';
import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

const LandingSectionWrapper = styled(SectionWrapper)`
  justify-content: center;
`;

const LandingSection = () => {
  const [isNavActive, setNavActive] = useState(false);
  const navActiveToggle = () => setNavActive(!isNavActive);

  return (
    <LandingSectionWrapper id="landing">
      <HamburgerMenu navActiveToggle={navActiveToggle} />
      <NavBar isNavActive={isNavActive} />
      <LandingAnimation />
    </LandingSectionWrapper>
  );
};

export default LandingSection;
