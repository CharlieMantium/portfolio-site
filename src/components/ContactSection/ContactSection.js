import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FaLinkedin, FaRegEnvelope, FaPhoneSquare } from 'react-icons/fa';
import { rem } from 'polished';

import { breakPoints } from 'styles/base';
import SectionHeader from 'components/Section/SectionHeader';

import {
  Icon,
  IconWrapper,
  SectionItemWrapper,
  SectionWrapper,
} from 'components/Section/styled';

const ContactSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${rem(30)};

  @media (min-width: ${breakPoints.largeMobile}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 ${rem(250)} 0;
  }
`;

const ContactSectionItemWrapper = styled(SectionItemWrapper)`
  justify-content: flex-start;
  padding: ${rem(50)} 0;

  @media (min-width: ${breakPoints.largeMobile}) {
    flex-direction: column;
  }
`;

const ContactIconWrapper = styled(IconWrapper)`
  margin-right: ${rem(10)};
`;

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionHeader>
      <FormattedMessage id="header.contactSection" />
    </SectionHeader>
    <ContactSectionContentWrapper>
      <ContactSectionItemWrapper>
        <a
          href="https://www.linkedin.com/in/karol-zieniewicz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIconWrapper>
            <Icon>
              <FaLinkedin />
            </Icon>
          </ContactIconWrapper>
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
      <ContactSectionItemWrapper>
        <ContactIconWrapper>
          <Icon>
            <FaRegEnvelope />
          </Icon>
        </ContactIconWrapper>
        <p>karol.zieniewicz@gmail.com</p>
      </ContactSectionItemWrapper>
      <ContactSectionItemWrapper>
        <ContactIconWrapper>
          <Icon>
            <FaPhoneSquare />
          </Icon>
        </ContactIconWrapper>
        <p>+48 697 333 486</p>
      </ContactSectionItemWrapper>
    </ContactSectionContentWrapper>
  </SectionWrapper>
);

export default ContactSection;
