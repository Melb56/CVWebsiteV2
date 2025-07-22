'use client'

import Image from 'next/image';
import Link from 'next/link';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about fade-in" id="about">
      <div className="card-about">
        <div className="card-img">
          <div className="about-img">
            <Image
              src="/img/About/About.jpg"
              alt="Photo de profil"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
          <div className="about-text">
            <p>Mélanie Bruzac</p>
            <p>Développeuse front-end</p>
            <p>Bretagne</p>
            <p>Permis B</p>
            <p>Hobbies : lecture, cuisiner, voyager</p>
          </div>
        </div>
      </div>

      <div className="container-about">
        <h1>À propos</h1>
        <p>
          Titulaire d’un titre professionnel de Développeur Web Full Stack, je suis à la
          recherche de ma première expérience professionnelle dans le développement web
          front-end. Je souhaite intégrer une entreprise où je pourrai non seulement mettre à
          profit mes compétences, mais aussi continuer à en développer de nouvelles. <br />
          Autonome, créative et dotée d’une grande capacité d’adaptation, je m’épanouis dans
          des environnements variés et apprécie de relever des défis. Ma motivation et ma
          curiosité me poussent à constamment apprendre et à contribuer activement aux
          projets qui me sont confiés.
        </p>
        <div className="btnAbout">
          <a
            className="btn"
            href="/img/CV-DevWebFE_MelanieBruzac.pdf"
            download="CV-DevWeb_MelanieBruzac.pdf"
          >
            Télécharger mon CV
          </a>
          <Link className="btn" href="#contact">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
