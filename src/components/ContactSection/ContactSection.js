import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import SectionHeader from 'styles/elements/SectionHeader';
import SectionWrapper from 'styles/elements/SectionWrapper';

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionHeader>
      <FormattedMessage id="header.contactSection" />
    </SectionHeader>
  </SectionWrapper>
);

export default ContactSection;
