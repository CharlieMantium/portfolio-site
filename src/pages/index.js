import React from 'react';

import Layout from 'components/Layout/Layout';
import LandingSection from 'components/LandingSection/LandingSection';
import AboutMeSection from 'components/AboutMeSection/AboutMeSection';
import ProjectsSection from 'components/ProjectsSection/ProjectsSection';
import ContactSection from 'components/ContactSection/ContactSection';

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
