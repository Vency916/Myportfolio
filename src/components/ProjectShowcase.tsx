'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './ProjectShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "RAVEGATE EVENTS",
    category: "WEB DEVELOPMENT",
    image: "/ravegate-ss.png",
    link: "https://ravegate.shop/"
  },
  {
    id: 2,
    title: "Tg-mining-bot",
    category: "BOT DEVELOPMENT",
    image: "/tg.png",
    link: "#"
  },
  {
    id: 3,
    title: "DEION FOOD APP",
    category: "MOBILE DEVELOPMENT",
    image: "/ss-deion.jpg",
    link: "https://deionapp.live"
  },
  {
    id: 4,
    title: "SHAMBHOST",
    category: "COLLABORATION",
    image: "/profile.jpg",
    link: "https://shambhost-pearl.vercel.app/"
  }
];

export default function ProjectShowcase() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section id="projects" ref={container} className={`section-padding ${styles.projectShowcase} snap-section`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Selected works from my portfolio</p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={`${styles.card} project-card`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <span>VIEW PROJECT ↗</span>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Interested in working together?</p>
          <a href="https://wa.me/2347062640049" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            CONTACT ME ON WHATSAPP ↗
          </a>
        </div>
      </div>
    </section>
  );
}
