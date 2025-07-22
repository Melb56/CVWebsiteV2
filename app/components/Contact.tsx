'use client'

import React from 'react';
import '../styles/contact.css'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="fade-in">
        <h1>Contactez-moi !</h1>
        <p> N'hésiter pas à me contacter pour qu'on puisse parler de mon parcours et de mes motivations.</p>
        <div className="info">
            <div className="contact-info">
                <img src="img/Contact/email.svg" alt="LogoEmail"/>
                <a href="mailto:melanie.bruzac@gmail.com">melanie.bruzac@gmail.com</a>
            </div>
            <div className="contact-info">
                <a href="https://fr.linkedin.com/in/m%C3%A9lanie-bruzac-4409371b7"><img src="img/Contact/linkedin.svg" alt="LogoLinkedin"/></a>
            </div>
        </div>
       
    </section>
  )
}

export default Contact
