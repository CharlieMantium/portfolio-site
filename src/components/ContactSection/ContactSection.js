import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import SectionHeader from 'src/styles/elements/SectionHeader';
import SectionWrapper from 'src/styles/elements/SectionWrapper';

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionHeader>
      <FormattedMessage id="header.contactSection" />
    </SectionHeader>
  </SectionWrapper>
);

export default ContactSection;
