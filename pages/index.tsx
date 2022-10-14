import type { NextPage } from 'next';
import Head from 'next/head';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';
import FrontPage from '../components/FrontPage';
import Header from '../components/Header';
import ProjectsPage from '../components/ProjectsPage';
import SkillsPage from '../components/SkillsPage';

const Home: NextPage = () => {
  return (
    <div className="scrollbar text-[#e7e7e7] max-w-[2000px] mx-auto">
      <Head>
        <title>Portfolio - Pierce Hahn</title>
        <meta name="description" content="Portfolio - Pierce Hahn" />
        <link rel="icon" href="/images/tabImg.png" />
      </Head>
      <Header />
      <FrontPage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Home;
