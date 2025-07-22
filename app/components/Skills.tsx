'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import '../styles/skills.css'

const Skills: React.FC = () => {
    useEffect(() => {
    const toggleButton = document.getElementById('toggle-skills');
    const collapsibleSections = document.querySelectorAll('.collapsible');

    if (!toggleButton) return;

    const handleClick = () => {
      collapsibleSections.forEach((section) => {
        section.classList.toggle('expanded');
      });

      toggleButton.textContent = toggleButton.textContent === '+' ? '-' : '+';
    };

    toggleButton.addEventListener('click', handleClick);

    return () => {
      toggleButton.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <section id="skills" className="fade-in">
      <h1>Mes compétences</h1>

      <div className="skills">
        {/* Développement Web */}
        <div className="container-skills dev">
          <div className="tech-container collapsible">
            <h2>Développement web</h2>

            {/* Front */}
            <div className="stack">
              <h4>FRONT</h4>
              <p>Création et intégration de sites web responsive, modernes et sécurisés.</p>
              <div className="container-img tech">
                {[
                  { src: 'html-5.svg', label: 'HTML' },
                  { src: 'css.svg', label: 'CSS' },
                  { src: 'bootstrap.svg', label: 'Bootstrap' },
                  { src: 'sass.svg', label: 'SASS' },
                  { src: 'tailwind.svg', label: 'Tailwind' },
                  { src: 'javascript.svg', label: 'Javascript' },
                  { src: 'react.svg', label: 'React' },
                ].map(({ src, label }) => (
                  <div className="image" key={label}>
                    <Image src={`/img/Skills/${src}`} alt={label} width={50} height={50} />
                    <div className="overlay"><p>{label}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back */}
            <div className="stack">
              <h4>BACK</h4>
              <p>Création et gestion de données (CRUD).</p>
              <div className="container-img tech">
                {[
                  { src: 'php.svg', label: 'PHP' },
                  { src: 'symfony.svg', label: 'Symfony' },
                  { src: 'mysql.svg', label: 'MySQL' },
                  { src: 'mariadb.svg', label: 'MariaDB' },
                  { src: 'xampp.svg', label: 'Xampp' },
                  { src: 'nodejs.svg', label: 'Nodejs' },
                ].map(({ src, label }) => (
                  <div className="image" key={label}>
                    <Image src={`/img/Skills/${src}`} alt={label} width={50} height={50} />
                    <div className="overlay"><p>{label}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button id="toggle-skills">+</button>
        </div>

        {/* Web Design */}
        <div className="container-skills box">
          <h2>Web design</h2>
          <p>Création de maquettes et de prototypes responsives et centrées utilisateur.</p>
          <div className="container-img">
            {[
              { src: 'figma.svg', label: 'Figma' },
              { src: 'canva.svg', label: 'Canva' },
            ].map(({ src, label }) => (
              <div className="image" key={label}>
                <Image src={`/img/Skills/${src}`} alt={label} width={50} height={50} />
                <div className="overlay"><p>{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills">
        {/* CMS */}
        <div className="container-skills">
          <h2>CMS</h2>
          <p>Création et édition de thèmes Wordpress.</p>
          <div className="container-img CMS">
            <div className="image">
              <Image src="/img/Skills/wordpress.svg" alt="Wordpress" width={50} height={50} />
              <div className="overlay"><p>Wordpress</p></div>
            </div>
          </div>
        </div>

        {/* Environnement de travail */}
        <div className="container-skills">
          <h2>Environnement de travail</h2>
          <div className="container-img">
            {[
              { src: 'git.svg', label: 'Git' },
              { src: 'github.svg', label: 'GitHub' },
              { src: 'xampp.svg', label: 'Xampp' },
              { src: 'icons8-code-studio-visuel-2019.svg', label: 'VSCode' },
            ].map(({ src, label }) => (
              <div className="image" key={label}>
                <Image src={`/img/Skills/${src}`} alt={label} width={50} height={50} />
                <div className="overlay"><p>{label}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Langues */}
        <div className="container-skills">
          <h2>Langues</h2>
          <div className="container-img">
            {[
              { src: 'france.png', label: 'maternelle' },
              { src: 'royaume-uni.png', label: 'intermédiaire<br />TOEIC : 840' },
              { src: 'japon.png', label: 'débutant' },
              { src: 'allemand.png', label: 'débutant' },
            ].map(({ src, label }, idx) => (
              <div className="image" key={idx}>
                <Image src={`/img/Flags/${src}`} alt="Langue" width={50} height={50} />
                <div className="overlay">
                  <p dangerouslySetInnerHTML={{ __html: label }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
