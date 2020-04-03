import React from 'react';

import Layout from 'components/Layout/Layout';
import LandingSection from 'components/LandingSection/LandingSection';
import ProjectsSection from 'components/ProjectsSection/ProjectsSection';
import ContactSection from 'components/ContactSection/ContactSection';

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
