import React from 'react';

import Layout from 'src/components/Layout/Layout';
import LandingSection from 'src/components/LandingSection';
import ProjectsSection from 'src/components/ProjectsSection';
import ContactSection from 'src/components/ContactSection';

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

// TODO: add gatsby-plugin-eslint
// TODO: babel configuration
// TODO: change favicon
