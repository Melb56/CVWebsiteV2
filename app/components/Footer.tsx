'use client'

import React from 'react';
import '../styles/footer.css';
import Linkedin from './Linkedin';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer'>
         <Linkedin/>
        <p>
           &copy; Mélanie Bruzac 2025
        </p>
      </div>
       
            
    </footer>
             
  )
}

export default Footer