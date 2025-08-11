import Image from "next/image";

import './styles/globals.css';
import './styles/button.css';
import './styles/linkedin.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Arrow from './components/Arrow';


export default function Home() {
  return (
  
    <main className="bg-custom">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Arrow/>
      <Footer/>
    </main>
  );
}
