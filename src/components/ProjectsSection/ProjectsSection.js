import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import SectionHeader from 'src/styles/elements/SectionHeader';
import SectionWrapper from 'src/styles/elements/SectionWrapper';

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeader>
      <FormattedMessage id="header.projectsSection" />
    </SectionHeader>
  </SectionWrapper>
);

export default ProjectsSection;
