import { useState } from 'react';
import './App.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';


const App = () =>{
  
  const [menuOpen, setMenuOpen] = useState(false); /// For Menu Open
  return (
    <div className="app">
      <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
