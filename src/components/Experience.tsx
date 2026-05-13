'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: "2021",
    title: "FREELANCE BEGINNINGS",
    desc: "Started the journey as a solo creator, delivering high-end UI solutions.",
    award: "Best Newcomer - DesignAwards"
  },
  {
    year: "2022",
    title: "SCALING UP",
    desc: "Collaborated with international brands to architect scalable web systems.",
    award: "Top Talent - FreelanceHub"
  },
  {
    year: "2023",
    title: "PRODUCT INNOVATION",
    desc: "Launched several AI-driven products that reached 50k+ users.",
    award: "Innovation Award - TechSummit"
  },
  {
    year: "2024",
    title: "CREATIVE LEAD",
    desc: "Directing high-end digital experiences and mentoring future talents.",
    award: "Awwwards SOTD (Candidate)"
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // Animate the "snake" path
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      }
    });

    // Animate items reveal
    gsap.from(".milestone-item", {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -50 : 50),
      stagger: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`${styles.experienceContainer} snap-section`}>
      <div className={styles.header}>
        <h2 className={styles.title}>The Journey</h2>
        <p className={styles.subtitle}>Milestones & Recognition</p>
      </div>

      <div className={styles.timelineWrapper}>
        <svg className={styles.snakeLine} viewBox="0 0 100 800" preserveAspectRatio="none">
          <path 
            ref={pathRef}
            d="M 50 0 Q 80 100 50 200 Q 20 300 50 400 Q 80 500 50 600 Q 20 700 50 800" 
            fill="none" 
            stroke="var(--accent)" 
            strokeWidth="2"
          />
        </svg>

        <div className={styles.milestones}>
          {MILESTONES.map((m, i) => (
            <div key={i} className={`${styles.item} milestone-item ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.content}>
                <span className={styles.year}>{m.year}</span>
                <h3 className={styles.mTitle}>{m.title}</h3>
                <p className={styles.mDesc}>{m.desc}</p>
                {m.award && <div className={styles.award}>🏆 {m.award}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
