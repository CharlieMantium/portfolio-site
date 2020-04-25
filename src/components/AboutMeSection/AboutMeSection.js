import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { breakPoints } from 'styles/base';
import SectionHeader from 'components/Section/SectionHeader';

import { SectionWrapper } from '../Section/styled';

const StyledImg = styled(Img)`
  width: 100%;
  border-radius: ${rem(5)};

  @media (min-width: ${breakPoints.desktop}) {
    border-radius: ${rem(10)};
  }
`;

const SectionText = styled.p`
  text-align: center;
`;

const AboutMeSection = () => {
  const photo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "photos/photo-author.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper id="aboutMe">
      <SectionHeader>
        <FormattedMessage id="header.aboutMeSection" />
      </SectionHeader>
      <FormattedMessage id="alternativeDescription.authorsPhoto">
        {formattedValue => (
          <StyledImg
            fluid={photo.file.childImageSharp.fluid}
            alt={formattedValue}
          />
        )}
      </FormattedMessage>
      <SectionText>
        <FormattedMessage id="description.aboutMeSection" />
      </SectionText>
    </SectionWrapper>
  );
};

export default AboutMeSection;
