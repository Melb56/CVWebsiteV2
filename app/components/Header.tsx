'use client'

import React, { useEffect, useRef } from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      if (window.scrollY < 50) {
        navbar.style.height = '70px';
      } else {
        navbar.style.height = '40px';
      }
    };

    window.addEventListener('scroll', handleScroll);

        return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav ref={navbarRef} id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <div className="logo">Mélanie Bruzac</div>

        {/* Bouton pour le menu responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* navbar */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#about">À propos</a>
            <a className="nav-link" href="#skills">Compétences</a>
            <a className="nav-link" href="#experience">Scolarité & Expériences professionnelles</a>
            <a className="nav-link" href="#portfolio">Projets</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
