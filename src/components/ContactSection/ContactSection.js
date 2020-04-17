import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FaLinkedin, FaRegEnvelope, FaPhone } from 'react-icons/fa';

import {
  Icon,
  IconWrapper,
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
        <IconWrapper>
          <Icon>
            <FaLinkedin />
          </Icon>
        </IconWrapper>
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
      <IconWrapper>
        <Icon>
          <FaRegEnvelope />
        </Icon>
      </IconWrapper>
      <p>karol.zieniewicz@gmail.com</p>
    </ContactSectionItemWrapper>
    <ContactSectionItemWrapper>
      <IconWrapper>
        <Icon>
          <FaPhone />
        </Icon>
      </IconWrapper>
      <p>+48 697 333 486</p>
    </ContactSectionItemWrapper>
  </SectionWrapper>
);

export default ContactSection;
