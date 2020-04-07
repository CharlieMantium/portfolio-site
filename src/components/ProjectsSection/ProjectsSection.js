import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { rem } from 'polished';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { breakPoints } from 'styles/base';
import {
  SectionItemWrapper,
  SectionHeader,
  SectionWrapper,
} from 'components/Section/styled';

const ProjectsSectionItemWrapper = styled(SectionItemWrapper)`
  flex-direction: column;
  max-height: 43%;
  width: 90%;

  @media (min-width: ${breakPoints.desktop}) {
    flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
    width: 60%;
  }
`;

const StyledImg = styled(Img)`
  width: 90%;

  @media (min-width: ${breakPoints.largeMobile}) {
    width: 60%;
  }

  @media (min-width: ${breakPoints.desktop}) {
    width: 40%;
  }
`;

const ProjectsSectionItemText = styled.p`
  text-align: center;

  @media (min-width: ${breakPoints.desktop}) {
    width: 60%;
    padding: 0 ${rem(20)};
    text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
  }
`;

const ProjectsSection = () => {
  const images = useStaticQuery(graphql`
    query {
      hangman: file(relativePath: { eq: "screenshots/hangman-desktop-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schoolApp: file(
        relativePath: { eq: "screenshots/schoolapp-desktop-0.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <SectionWrapper id="projects">
      <SectionHeader>
        <FormattedMessage id="header.projectsSection" />
      </SectionHeader>
      <ProjectsSectionItemWrapper>
        <StyledImg fluid={images.hangman.childImageSharp.fluid} />

        <ProjectsSectionItemText>
          <a
            href="https://charliemantium.github.io/hangman/"
            target="_blank"
            rel="noopener noreferrer"
            display="block"
          >
            Hangman
          </a>
          <FormattedMessage id="description.projectsSection.hangman" />
        </ProjectsSectionItemText>
      </ProjectsSectionItemWrapper>
      <ProjectsSectionItemWrapper isReversed>
        <StyledImg fluid={images.schoolApp.childImageSharp.fluid} />
        <ProjectsSectionItemText isReversed>
          <a
            href="https://charliemantium.github.io/hangman/"
            target="_blank"
            rel="noopener noreferrer"
            display="block"
          >
            SchoolApp
          </a>
          <FormattedMessage id="description.projectsSection.schoolApp" />
        </ProjectsSectionItemText>
      </ProjectsSectionItemWrapper>
    </SectionWrapper>
  );
};

export default ProjectsSection;
