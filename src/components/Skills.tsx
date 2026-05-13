'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  {
    title: "FRONTEND",
    bgClass: styles.bgGreen,
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/white" },
      { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/white" },
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/white" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/white" }
    ]
  },
  {
    title: "BACKEND",
    bgClass: styles.bgBlue,
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/white" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/white" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/white" },
      { name: "MariaDB", icon: "https://cdn.simpleicons.org/mariadb/white" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/white" }
    ]
  },
  {
    title: "DEVOPS & TOOLS",
    bgClass: styles.bgPurple,
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/white" },
      { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/white" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/white" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/white" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" }
    ]
  }
];

export default function Skills() {
  const container = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;
    
    const panels = gsap.utils.toArray<HTMLElement>(".skill-panel");
    
    // Layered pinning
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

  }, { scope: container, dependencies: [mounted] });

  return (
    <div ref={container} className={styles.skillsWrapper}>
      <section className={`${styles.introPanel} snap-section`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <p className={styles.subtitle}>Layered architecture</p>
          <div className={styles.scrollIndicator}>↓ Scroll to explore</div>
        </div>
      </section>

      {SKILL_CATEGORIES.map((category, i) => (
        <section 
          key={category.title} 
          className={`${styles.panel} ${category.bgClass} skill-panel`}
          style={{ zIndex: i + 1 }}
        >
          <div className={styles.panelContent}>
            <h3 className={styles.panelTitle}>{category.title}</h3>
            <ul className={styles.skillList}>
              {category.skills.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
