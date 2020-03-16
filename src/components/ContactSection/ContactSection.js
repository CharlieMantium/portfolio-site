import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SectionHeader from 'src/styles/elements/SectionHeader';
import SectionWrapper from 'src/styles/elements/SectionWrapper';

const ContactSection = () => {
  const intl = useIntl();
  return (
    <SectionWrapper id="contact">
      <SectionHeader>
        {intl.formatMessage({ id: 'header.contactSection' })}
      </SectionHeader>
    </SectionWrapper>
  );
};

export default ContactSection;
