import './App.css';
import Navbar from './components/sections/Navbar'
import Presetation from './components/sections/Presentation'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Presetation/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
