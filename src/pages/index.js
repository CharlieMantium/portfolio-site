import React from 'react';

import Layout from 'components/Layout/Layout';
import LandingSection from 'components/LandingSection/LandingSection';
import AboutMeSection from 'components/AboutMeSection/AboutMeSection';
import TechStackSection from 'components/TechStackSection/TechStackSection';
import ProjectsSection from 'components/ProjectsSection/ProjectsSection';
import ContactSection from 'components/ContactSection/ContactSection';
import Footer from 'components/Footer/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <AboutMeSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
