import Header from './layouts/Header'
import Section from './layouts/Section'
import TitleSection from './layouts/sections/TitleSection'
import AboutSection from './layouts/sections/AboutSection'
import './App.css';
import ProjectsSection from './layouts/sections/ProjectsSection';


function App() {  
  return (
    <>
      <Header />
      <TitleSection />
      <AboutSection />
      <ProjectsSection />
      <Section type="footer" title="Footer"></Section>
    </>
  );
}

export default App;
