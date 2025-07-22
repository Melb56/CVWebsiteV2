'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import '../styles/hero.css';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Développeuse front-end junior',
        'Créative',
        'Motivée',
        'Bienvenue !',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div id="hero-area" className="fade-in">
      <div className="hero-content">
        <p>Bonjour, je suis</p>
        <p className="title-hero">Mélanie Bruzac</p>

        <div id="typed-output" ref={typedRef}></div>

        <a
          href="https://fr.linkedin.com/in/m%C3%A9lanie-bruzac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="img/linkedin-full.svg"
            alt="LogoLinkedin"
            width={50}
            height={50}
          />
        </a>

        <a
          className="btn"
          href="public\img\CV-DevWebFE_MelanieBruzac.pdf"
          download="CV-DevWeb_MelanieBruzac.pdf"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  )
}

export default Hero
