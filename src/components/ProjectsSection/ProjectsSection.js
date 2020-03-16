import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SectionHeader from 'src/styles/elements/SectionHeader';
import SectionWrapper from 'src/styles/elements/SectionWrapper';

const ProjectsSection = () => {
  const intl = useIntl();
  return (
    <SectionWrapper id="projects">
      <SectionHeader>
        {intl.formatMessage({ id: 'header.projectsSection' })}
      </SectionHeader>
    </SectionWrapper>
  );
};

export default ProjectsSection;
