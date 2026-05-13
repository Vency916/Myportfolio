'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pinning the footer and scaling the branding
    const pin = gsap.to(brandingRef.current, {
      scale: 1.5,
      opacity: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=1000",
      }
    });

    return () => {
      pin.kill();
    };
  }, { scope: sectionRef });

  return (
    <div>
      <footer ref={sectionRef} id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.bio}>
            <p>Ebebe Victory is independent creative developer and system architect</p>
          </div>

          <div className={styles.column}>
            <h4>Follow me</h4>
            <div className={styles.socialRow}>
              <a href="https://github.com/Vency916" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="GitHub">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" width="24" height="24" />
              </a>
              <a href="https://x.com/victory_vency" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Twitter">
                <img src="https://cdn.simpleicons.org/x/white" alt="Twitter" width="24" height="24" />
              </a>
              <a href="https://instagram.com/v3vency" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">
                <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://wa.me/2347062640049" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="WhatsApp">
                <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" width="24" height="24" />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <small>Email</small>
                <a href="mailto:ebebevictory1@gmail.com">ebebevictory1@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <small>Phone</small>
                <a href="tel:+2347062640049">+234 706 264 0049</a>
              </div>
            </div>
          </div>
        </div>

        <div ref={brandingRef} className={styles.hugeBranding}>
          VENCY
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} VENCY. ARCHITECTING_THE_FUTURE.</p>
        </div>
      </footer>
    </div>
  );
}
