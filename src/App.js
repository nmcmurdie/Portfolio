import './App.css';
import Header from './layouts/Header'
import Section from './layouts/Section'
import TitleSection from './layouts/TitleSection'

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <Section type="about" title="About Me"></Section>
      <Section type="projects" title="Projects"></Section>
      <Section type="footer" title="Footer"></Section>
    </>
  );
}

export default App;
