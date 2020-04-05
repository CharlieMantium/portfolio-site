import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rem } from 'polished';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { breakPoints } from 'styles/base';
import { SectionWrapper, SectionHeader } from '../Section/styled';

const StyledImg = styled(Img)`
  width: 90%;
  border-radius: ${rem(5)};

  @media (min-width: ${breakPoints.desktop}) {
    width: 40%;
    border-radius: ${rem(10)};
  }
`;

const SectionText = styled.p`
  width: 90%;
  text-align: center;

  @media (min-width: ${breakPoints.desktop}) {
    width: 40%;
  }
`;

const AboutMeSection = () => {
  const photo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "photos/photo1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <SectionWrapper>
      <SectionHeader>
        <FormattedMessage id="header.aboutMeSection" />
      </SectionHeader>
      <StyledImg fluid={photo.file.childImageSharp.fluid} alt="Author" />
      <SectionText>
        <FormattedMessage id="description.aboutMeSection" />
      </SectionText>
    </SectionWrapper>
  );
};

export default AboutMeSection;
