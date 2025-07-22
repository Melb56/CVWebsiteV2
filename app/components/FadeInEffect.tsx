'use client'

import { useEffect } from 'react';

const FadeInEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.fade-in')

    const fadeInOnScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          section.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', fadeInOnScroll)

    
    fadeInOnScroll()


    return () => {
      window.removeEventListener('scroll', fadeInOnScroll)
    }
  }, [])

  return null 
}

export default FadeInEffect
