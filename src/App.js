import Header from './layouts/Header'
import Section from './layouts/Section'
import TitleSection from './layouts/sections/TitleSection'
import AboutSection from './layouts/sections/AboutSection'
import './App.css';


function App() {  
  return (
    <>
      <Header />
      <TitleSection />
      <AboutSection />
      <Section type="projects" title="Projects"></Section>
      <Section type="footer" title="Footer"></Section>
    </>
  );
}

export default App;
