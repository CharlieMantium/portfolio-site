import React, { createRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { rem } from 'polished';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { breakPoints } from 'styles/base';
import { SectionItemWrapper } from 'components/Section/styled';
import Wrapper from 'components/Section/SectionWrapper';
import SectionHeader from 'components/Section/SectionHeader';

const ProjectsSectionItemWrapper = styled(SectionItemWrapper)`
  flex-direction: column;
  margin: ${rem(30)} 0;

  @media (min-width: ${breakPoints.desktop}) {
    flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  }
`;

const StyledLink = styled.a`
  width: 100%;
  border-radius: ${rem(10)};

  @media (min-width: ${breakPoints.desktop}) {
    width: 40%;
  }
`;

const StyledImg = styled(Img)`
  border-radius: ${rem(10)};
`;

const ProjectsSectionItemText = styled.p`
  text-align: center;

  @media (min-width: ${breakPoints.desktop}) {
    width: 60%;
    padding: 0 ${rem(50)};
    text-align: ${({ isReversed }) => (isReversed ? 'right' : 'left')};
  }
`;

const ProjectsSection = () => {
  const images = useStaticQuery(graphql`
    query {
      hangman: file(relativePath: { eq: "screenshots/hangman-desktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schoolApp: file(
        relativePath: { eq: "screenshots/schoolapp-desktop.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sectionWrapperRef = createRef();

  return (
    <Wrapper id="projects" ref={sectionWrapperRef}>
      <SectionHeader>
        <FormattedMessage id="header.projectsSection" />
      </SectionHeader>
      <ProjectsSectionItemWrapper>
        <FormattedMessage id="alternativeDescription.hangman">
          {formattedValue => (
            <StyledLink
              href="https://charliemantium.github.io/hangman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                fluid={images.hangman.childImageSharp.fluid}
                alt={formattedValue}
              />
            </StyledLink>
          )}
        </FormattedMessage>
        <ProjectsSectionItemText>
          <FormattedMessage
            id="linkTo.hangman"
            values={{
              a: (...chunks) => (
                <a
                  href="https://charliemantium.github.io/hangman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              appName: 'Hangman',
            }}
          />
        </ProjectsSectionItemText>
      </ProjectsSectionItemWrapper>
      <ProjectsSectionItemWrapper isReversed>
        <FormattedMessage id="alternativeDescription.schoolApp">
          {formattedValue => (
            <StyledLink
              href="https://mantium-school-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                fluid={images.schoolApp.childImageSharp.fluid}
                alt={formattedValue}
              />
            </StyledLink>
          )}
        </FormattedMessage>
        <ProjectsSectionItemText isReversed>
          <FormattedMessage
            id="linkTo.schoolApp"
            values={{
              a: (...chunks) => (
                <a
                  href="https://mantium-school-app.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
              appName: 'SchoolApp',
            }}
          />
        </ProjectsSectionItemText>
      </ProjectsSectionItemWrapper>
    </Wrapper>
  );
};

export default ProjectsSection;
