import React from 'react';

import Layout from '../components/Layout/Layout';
import LandingSection from '../components/LandingSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

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

// TODO: add gatsby-plugin-intl
// TODO: add gatsby-plugin-eslint
// TODO: absolute paths
