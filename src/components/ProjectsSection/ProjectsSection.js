import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import SectionHeader from 'styles/elements/SectionHeader';
import SectionWrapper from 'styles/elements/SectionWrapper';

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeader>
      <FormattedMessage id="header.projectsSection" />
    </SectionHeader>
  </SectionWrapper>
);

export default ProjectsSection;
