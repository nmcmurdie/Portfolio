import { useEffect } from 'react'
import Header from './layouts/Header'
import Section from './layouts/Section'
import TitleSection from './layouts/sections/TitleSection'
import AboutSection from './layouts/sections/AboutSection'
import { Themes } from './Constants'
import './App.css';


function App() {
  useEffect(() => {
    let theme = Themes[Math.floor(Math.random() * Themes.length)];
    document.documentElement.style.setProperty('--accent-primary', theme.primary);
    document.documentElement.style.setProperty('--accent-secondary', theme.secondary);
  }, []);
  
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
