import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Envelope } from '@styled-icons/boxicons-regular/Envelope';
import { Phone } from '@styled-icons/boxicons-regular/Phone';

import { colors, breakPoints } from 'styles/base';
import SectionWrapper from 'styles/elements/SectionWrapper';
import SectionHeader from 'styles/elements/SectionHeader';
import SectionItemWrapper from 'styles/elements/SectionItemWrapper';
import SectionItemIcon from 'styles/elements/SectionItemIcon';

const ContactSectionItemWrapper = styled(SectionItemWrapper)`
  width: 80%;

  @media (min-width: ${breakPoints.desktop}) {
    width: 40%;
  }
`;

const LinkedInLink = styled.a`
  text-decoration: none;

  :visited {
    color: ${colors.delta};
  }
`;

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionHeader>
      <FormattedMessage id="header.contactSection" />
    </SectionHeader>
    <ContactSectionItemWrapper>
      <LinkedInLink
        href="https://www.linkedin.com/in/karol-zieniewicz"
        target="_blank"
      >
        <SectionItemIcon>
          <LinkedinSquare />
        </SectionItemIcon>
      </LinkedInLink>
      <LinkedInLink
        href="https://www.linkedin.com/in/karol-zieniewicz"
        target="_blank"
      >
        <p>Contact me on LinkedIn</p>
      </LinkedInLink>
    </ContactSectionItemWrapper>
    <ContactSectionItemWrapper reversed>
      <SectionItemIcon>
        <Envelope />
      </SectionItemIcon>
      <p>karol.zieniewicz@gmail.com</p>
    </ContactSectionItemWrapper>
    <ContactSectionItemWrapper>
      <SectionItemIcon>
        <Phone />
      </SectionItemIcon>
      <p>+48 697 333 486</p>
    </ContactSectionItemWrapper>
  </SectionWrapper>
);

export default ContactSection;
