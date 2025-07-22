'use client'

import Image from 'next/image';
import React from 'react';
import '../styles/arrow.css'
  
const Arrow: React.FC = () => {
  return (
    <>
        <a href="#" className="scroll-to-top">
            <span>
                <Image 
                    src="/img/chevron-up.svg" 
                    alt="Arrow" 
                    width={50}
                    height={50}
                />
            </span>
        </a>     
    </>
  )
}

export default Arrow

  
  
  