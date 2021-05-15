import Header from './layouts/Header'
import TitleSection from './layouts/sections/TitleSection'
import AboutSection from './layouts/sections/AboutSection'
import ProjectsSection from './layouts/sections/ProjectsSection';
import FooterSection from './layouts/sections/FooterSection';
import './App.css';


function App() {  
  return (
    <>
      <Header />
      <main>
        <TitleSection />
        <AboutSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
