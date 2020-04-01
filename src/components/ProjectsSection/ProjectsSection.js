import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Image } from '@styled-icons/boxicons-regular/Image';

import { breakPoints } from 'styles/base';

import {
  SectionItemIcon,
  SectionItemWrapper,
  SectionHeader,
  SectionWrapper,
} from 'components/styled/styled';

const ProjectsSectionItemWrapper = styled(SectionItemWrapper)`
  flex-direction: column;
  height: 43%;
  width: 90%;

  @media (min-width: ${breakPoints.desktop}) {
    flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
    width: 60%;
  }
`;

const ProjectsSectionItemIcon = styled(SectionItemIcon)`
  width: 50%;
  max-width: ${rem('150px')};

  @media (min-width: ${breakPoints.desktop}) {
    width: 30%;
    max-width: none;
    height: unset;
  }
`;

const ProjectsSectionItemText = styled.p`
  @media (min-width: ${breakPoints.desktop}) {
    width: 70%;
    text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
  }
`;

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeader>
      <FormattedMessage id="header.projectsSection" />
    </SectionHeader>
    <ProjectsSectionItemWrapper>
      <ProjectsSectionItemIcon>
        <Image />
      </ProjectsSectionItemIcon>
      <ProjectsSectionItemText>
        <FormattedMessage id="description.projectsSection.hangman" />
      </ProjectsSectionItemText>
    </ProjectsSectionItemWrapper>
    <ProjectsSectionItemWrapper isReversed>
      <ProjectsSectionItemIcon>
        <Image />
      </ProjectsSectionItemIcon>
      <ProjectsSectionItemText isReversed>
        <FormattedMessage id="description.projectsSection.schoolApp" />
      </ProjectsSectionItemText>
    </ProjectsSectionItemWrapper>
  </SectionWrapper>
);

export default ProjectsSection;
