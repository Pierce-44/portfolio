import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import CoverPage from './components/CoverPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundAnimation />
      <CoverPage />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
