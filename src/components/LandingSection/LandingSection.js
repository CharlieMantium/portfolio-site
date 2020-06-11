import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { StyledSectionWrapper } from 'components/Section/styled';
import NavWrapper from 'components/NavWrapper/NavWrapper';
import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

const LandingSectionWrapper = styled(StyledSectionWrapper)`
  padding: ${rem(50)} ${rem(5)};
  justify-content: center;
`;

const LandingSection = () => (
  <LandingSectionWrapper id="landing">
    <NavWrapper />
    <LandingAnimation />
  </LandingSectionWrapper>
);

export default LandingSection;
