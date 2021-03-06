import React, { createRef } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { rem } from 'polished';
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact } from 'react-icons/di';

import {
  SectionItemWrapper,
  Icon,
  IconWrapper,
} from 'components/Section/styled';
import Wrapper from 'components/Section/SectionWrapper';
import { breakPoints } from 'styles/base';
import SectionHeader from 'components/Section/SectionHeader';

import { ReactComponent as ReduxLogo } from '../../../static/ReduxLogo.svg';
import { ReactComponent as WebpackLogo } from '../../../static/WebpackLogo.svg';
import { ReactComponent as GatsbyLogo } from '../../../static/GatsbyLogo.svg';

const TechStackSectionWrapper = styled(Wrapper)`
  justify-content: flex-start;
`;

const TechStackSectionItemWrapper = styled(SectionItemWrapper)`
  justify-content: space-around;
`;

const TechStackIconWrapper = styled(IconWrapper)`
  width: 50%;
  padding: ${rem(10)} ${rem(40)};

  @media (min-width: ${breakPoints.desktop}) {
    width: 30%;
    padding: ${rem(20)} ${rem(20)};
  }
`;

const TechStackText = styled.p`
  margin-top: 0;
  text-align: center;
`;

const TechStackSection = () => {
  const sectionWrapperRef = createRef();

  return (
    <TechStackSectionWrapper id="techStack" ref={sectionWrapperRef}>
      <SectionHeader>
        <FormattedMessage id="header.techStackSection" />
      </SectionHeader>
      <TechStackSectionItemWrapper>
        <TechStackIconWrapper>
          <Icon>
            <DiHtml5 />
          </Icon>
          <TechStackText>HTML 5</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <DiCss3 />
          </Icon>
          <TechStackText>CSS 3</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <DiJavascript />
          </Icon>
          <TechStackText>JavaScript</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <DiReact />
          </Icon>
          <TechStackText>React</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <DiGit />
          </Icon>
          <TechStackText>Git</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <ReduxLogo />
          </Icon>
          <TechStackText>Redux</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <WebpackLogo />
          </Icon>
          <TechStackText>Webpack</TechStackText>
        </TechStackIconWrapper>
        <TechStackIconWrapper>
          <Icon>
            <GatsbyLogo />
          </Icon>
          <TechStackText>Gatsby</TechStackText>
        </TechStackIconWrapper>
      </TechStackSectionItemWrapper>
    </TechStackSectionWrapper>
  );
};

export default TechStackSection;
