import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Image } from '@styled-icons/boxicons-regular/Image';

import { breakPoints } from 'styles/base';
import SectionHeader from 'styles/elements/SectionHeader';
import SectionWrapper from 'styles/elements/SectionWrapper';
import SectionItemWrapper from 'styles/elements/SectionItemWrapper';
import SectionItemIcon from 'styles/elements/SectionItemIcon';

const ProjectsSectionItemWrapper = styled(SectionItemWrapper)`
  flex-direction: column;
  height: 43%;
  width: 90%;

  @media (min-width: ${breakPoints.desktop}) {
    flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
    width: 60%;
  }
`;

const ProjectsSectionItemIcon = styled(SectionItemIcon)`
  width: 50%;
  max-width: 150px;

  @media (min-width: ${breakPoints.desktop}) {
    width: 30%;
    max-width: unset;
    height: unset;
  }
`;

const ProjectsSectionItemText = styled.p`
  @media (min-width: ${breakPoints.desktop}) {
    width: 70%;
    text-align: ${({ reversed }) => (reversed ? 'right' : 'left')};
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
        Hangman - well known and fun game
      </ProjectsSectionItemText>
    </ProjectsSectionItemWrapper>
    <ProjectsSectionItemWrapper reversed>
      <ProjectsSectionItemIcon>
        <Image />
      </ProjectsSectionItemIcon>
      <ProjectsSectionItemText reversed>
        SchoolApp - colorful and convenient app to store your weekly classes
        plan
      </ProjectsSectionItemText>
    </ProjectsSectionItemWrapper>
  </SectionWrapper>
);

export default ProjectsSection;
