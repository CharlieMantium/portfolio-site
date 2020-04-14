import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  DiCss3,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiReact,
} from 'react-icons/di';

import {
  SectionWrapper,
  SectionHeader,
  SectionItemWrapper,
  Icon,
  IconWrapper,
} from 'components/Section/styled';
import { breakPoints } from 'styles/base';

const TechStackIconWrapper = styled(IconWrapper)`
  width: 50%;
  padding: ${rem(10)} ${rem(40)};

  @media (min-width: ${breakPoints.desktop}) {
    width: 30%;
    padding: ${rem(20)} ${rem(20)};
  }
`;

const TechStackSection = () => (
  <SectionWrapper justifyContent="flex-start">
    <SectionHeader>My Tech Stack</SectionHeader>
    <SectionItemWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiHtml5 />
        </Icon>
      </TechStackIconWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiCss3 />
        </Icon>
      </TechStackIconWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiJavascript />
        </Icon>
      </TechStackIconWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiReact />
        </Icon>
      </TechStackIconWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiGit />
        </Icon>
      </TechStackIconWrapper>
      <TechStackIconWrapper>
        <Icon>
          <DiGithub />
        </Icon>
      </TechStackIconWrapper>
    </SectionItemWrapper>
  </SectionWrapper>
);

export default TechStackSection;
