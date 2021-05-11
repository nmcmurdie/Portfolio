import './App.css';
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <Section type="title" title="Nick McMurdie"></Section>
      <Section type="about" title="About Me"></Section>
      <Section type="projects" title="Projects"></Section>
      <Section type="footer" title="Footer"></Section>
    </>
  );
}

export default App;
