'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-text", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: container });

  return (
    <section id="about" className={`section-padding ${styles.about} snap-section`}>
      <div ref={container} className={styles.container}>
        <div className={styles.mainContent}>
          <div className={`${styles.divider} reveal-text`}></div>
          <h2 className={`${styles.headline} reveal-text`}>
            Crafting incredible, impactful, satisfactory designs, <br />
            brand identities and many more...
          </h2>
          <p className={`${styles.subtext} reveal-text`}>
            I'm a passionate full-stack developer with over 4 years of experience creating digital products that users love. My journey in tech started with before I started a Computer Engineering degree and has evolved through various roles at startups and tech companies.
            <a href="/EBEBE-VICTORY-CV.pdf" download className={styles.resumeLink}>Download Resume</a>
          </p>
        </div>

        <div className={styles.statsContainer}>
          <div className={`${styles.statItem} reveal-text`}>
            <span className={styles.statValue}>60+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={`${styles.statItem} reveal-text`}>
            <span className={styles.statValue}>3+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={`${styles.statItem} reveal-text`}>
            <span className={styles.statValue}>24</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={`${styles.statItem} reveal-text`}>
            <span className={styles.statValue}>1</span>
            <span className={styles.statLabel}>Awards Won</span>
          </div>
        </div>
      </div>
    </section>
  );
}
