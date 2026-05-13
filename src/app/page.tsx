import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectShowcase from '@/components/ProjectShowcase';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Hero />
        <About />
        <ProjectShowcase />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
