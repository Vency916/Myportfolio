'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { Eye, Briefcase, Calendar } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className={`${styles.hero} snap-section`}>
      {/* Top Header Buttons */}
      <div className={styles.topNav}>
        <a href="#projects" className={styles.pill}>
          <Eye size={16} className={styles.greenIcon} />
          <span>See my work</span>
        </a>
        <a href="#projects" className={styles.pill}>
          <Briefcase size={16} className={styles.greenIcon} />
          <span>My catalog</span>
        </a>
        <a href="#contact" className={styles.pill}>
          <Calendar size={16} className={styles.greenIcon} />
          <span>Book a service</span>
        </a>
      </div>

      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h2 className={styles.roleTitle}>Fullstack / <br /> Creative Developer</h2>
        </div>

        <div className={styles.centerSide}>
          <motion.div style={{ y }} className={styles.imageWrapper}>
            <Image 
              src="/profile.png" 
              alt="Vency" 
              fill 
              style={{ objectFit: 'cover' }} 
              className={styles.profileImg}
            />
          </motion.div>
          <div className={styles.nameContainer}>
            <span className={styles.namePrefix}>CREATIVE</span>
            <h1 className={styles.mainName}>VICTORY VENCY</h1>
          </div>
        </div>

        <div className={styles.rightSide}>
          <p className={styles.introText}>
            Hi, I'm Ebebe Victory, a software developer and tech architect passionate about 
            crafting result-driven digital experiences and giving your products 
            an interesting story and look.
          </p>
        </div>
      </div>

      <div className={styles.softwareIcons}>
        <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" title="Next.js" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/react/white" alt="React" title="React" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/typescript/white" alt="TypeScript" title="TypeScript" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/tailwindcss/white" alt="Tailwind" title="Tailwind" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/laravel/white" alt="Laravel" title="Laravel" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/php/white" alt="PHP" title="PHP" width="28" height="28" />
        <img src="https://cdn.simpleicons.org/mariadb/white" alt="MariaDB" title="MariaDB" width="28" height="28" />
      </div>
    </section>
  );
}
