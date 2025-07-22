import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import './styles/button.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from "./components/About";
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";
import FadeInEffect from "./components/FadeInEffect";


export default function Home() {
  return (
  
    <>
      <FadeInEffect/>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Arrow/>
      <Footer/>

    </>
    
    
  );
}
