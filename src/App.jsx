import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
//import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}
