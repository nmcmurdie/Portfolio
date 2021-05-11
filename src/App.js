import './App.css';
import Header from './layouts/Header'
import Section from './layouts/Section'

function App() {
  return (
    <>
      <Header />
      <Section type="title" title="Nicholas McMurdie"></Section>
      <Section type="about" title="About Me"></Section>
      <Section type="projects" title="Projects"></Section>
      <Section type="footer" title="Footer"></Section>
    </>
  );
}

export default App;
