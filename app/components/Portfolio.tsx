'use client'

import React from 'react'
import '../styles/portfolio.css'

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="fade-in">
        <h1>Mes projets</h1> 
        {/* <div className="filter-container">
            <label>
                <input type="checkbox" value="front" className="filter-checkbox" checked />Front
                <span className="custom-checkbox"></span>
            </label>
            <label>
                <input type="checkbox" value="back" className="filter-checkbox" checked />Back
                <span className="custom-checkbox"></span>
            </label>
            <label>
                <input type="checkbox" value="fullstack" className="filter-checkbox" checked />Fullstack
                <span className="custom-checkbox"></span>
            </label>
        </div>  */}
    
        <div className="card-container">
            
            <div className="card" id="Flotti" data-category="front">
                <div className="intro">
                    <h4>Flottibulle</h4>
                    <p>Ecole de natation en Bretagne</p>
                    <ul className="tags">
                        <li>Wordpress</li>
                        <li>CSS</li>
                    </ul>
                    <ul className="tasks">
                        <li>Analyse des besoins</li>
                        <li>Elaboration d'une maquette responsive en fonction des besoins.</li>
                        <li>Personnalisation complète d'un thème sur Wordpress.</li>
                        <li>Développement du front.</li>
                        <li>Mise en ligne.</li>
                        <li>Apprendre au client l'utilisation de l'interface utilisateur.</li>
                    </ul>
                    <a href="https://flottibulle.fr/">Voir le site</a>
                </div>
            </div>
            
            <div className="card" id="dailybooks" data-category="front">
                <div className="intro">
                    <h4>Daily Books</h4>
                    <p>Répértoire de livre EN COURS DE DEVELOPPEMENT</p>
                    <ul className="tags">
                        <li>Next.js</li>
                        <li>SASS</li>
                    </ul>
                    <ul className="tasks">
                        <li>Elaboration d'une maquette responsive</li>
                        <li>Developpement d'une BD avec Prisma (MySQL)</li>
                        <li>Installation d'une authentification avec Nextauth.js</li>
                        <li>Développement du front.</li>
                        <li>Mise en ligne sur Vercel.</li>
                    </ul>
                    <a href="https://daily-books.vercel.app/">Voir le site</a>
                </div>
            </div>

            <div className="card" id="MB" data-category="front"> 
                <div className="intro">
                    <h4>Mon CV en ligne</h4>
                    <ul className="tags">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul className="task">
                        <li>Elaboration d'une maquette responsive.</li>
                        <li>Développement du front</li>
                        <li>Mise en ligne</li>
                    </ul>
                     <a href="https://melanie-bruzac.fr/">Voir le site</a>
                    </div>
            </div>

            <div className="card" id="QA" data-category="front">
                <div className="intro">
                    <h4>Quai Antique</h4>
                    <p>Site vitrine et de réservation pour un restaurant Fictif.</p>
                    <ul className="tags">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                    </ul>
                    <ul className="task">
                        <li>Elaboration d'une maquette responsive.</li>
                        <li>Développement du front</li>
                        <li>Mise en place d’une page de réservation avec la possibilité de choisir une date sur un calendrier.</li>
                    </ul>
                     <a href="https://quai-antique.vercel.app/">Voir le site</a>
                </div>
            </div> 

            <div className="card" id="GVP" data-category="fullstack">
                <div className="intro">
                    <h4>Garage V. Parrot</h4>
                    <p>Projet de fin de formation qui ma permis de voir tous les étapes d'un développement fullstack.</p>
                    <ul className="tags">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Symfony</li>
                    </ul>
                    <ul className="task">
                        <li>Elaboration d'une maquette responsive selon un cahier de charge.</li>
                        <li>Développement du front.</li>
                        <li>Développement du back avec MySQL</li>
                        <li>Création d'une interface administrative pour le compte admin et les comptes des employés</li>
                        <li>Tests</li>
                    </ul>
                     <a href="https://github.com/Melb56/Garage_V_Parrot">Voir le dépôt GitHub </a>
                </div>
            </div>
        </div> 
        

    </section>
  )
}

export default Portfolio
