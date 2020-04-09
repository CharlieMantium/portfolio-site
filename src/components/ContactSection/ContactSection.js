import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Envelope } from '@styled-icons/boxicons-regular/Envelope';
import { Phone } from '@styled-icons/boxicons-regular/Phone';

import {
  SectionItemIcon,
  SectionItemWrapper,
  SectionHeader,
  SectionWrapper,
} from 'components/Section/styled';

const ContactSectionItemWrapper = styled(SectionItemWrapper)`
  justify-content: center;
`;

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionHeader>
      <FormattedMessage id="header.contactSection" />
    </SectionHeader>
    <ContactSectionItemWrapper>
      <a
        href="https://www.linkedin.com/in/karol-zieniewicz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SectionItemIcon>
          <LinkedinSquare />
        </SectionItemIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/karol-zieniewicz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <FormattedMessage id="linkTo.linkedIn" />
        </p>
      </a>
    </ContactSectionItemWrapper>
    <ContactSectionItemWrapper isReversed>
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
