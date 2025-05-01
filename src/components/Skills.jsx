import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import anime from 'animejs';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animasi saat bagian terdeteksi saat scroll ke bawah
          anime({
            targets: '.skill-card',
            translateY: [30, 0], // Animasi muncul dari bawah
            opacity: [0, 1], // Efek memudar
            delay: anime.stagger(150), // Menunda animasi setiap card
            duration: 800,
            easing: 'easeOutExpo', // Easing animasi
          });
        } else {
          // Animasi saat bagian tidak terlihat (scroll ke atas)
          anime({
            targets: '.skill-card',
            translateY: [0, 30], // Animasi keluar ke bawah
            opacity: [1, 0], // Efek memudar hilang
            delay: anime.stagger(150),
            duration: 800,
            easing: 'easeInExpo', // Easing animasi keluar
          });
        }
      },
      {
        threshold: 0.3, // Menyentuh 30% dari bagian card
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <h2>🛠️ Skills</h2>
      <div className="skills-list">
        <div className="skill-card">
          <FontAwesomeIcon icon={faHtml5} size="2x" color="#e34f26" />
          <p>HTML</p>
          <p>Saya menggunakan HTML untuk membuat struktur dasar website seperti heading, paragraf, gambar, form, dan layout dasar lainnya.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faCss3Alt} size="2x" color="#1572b6" />
          <p>CSS</p>
          <p>Saya memakai CSS untuk menghias website agar lebih menarik, termasuk warna, layout responsif, animasi, dan efek transisi.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faJsSquare} size="2x" color="#f7df1e" />
          <p>JavaScript</p>
          <p>Saya pakai JavaScript untuk membuat website menjadi interaktif, seperti membuat tombol berfungsi, validasi form, dan manipulasi DOM.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} size="2x" color="#61dafb" />
          <p>React</p>
          <p>Saya menggunakan React untuk membangun komponen UI yang dinamis dan efisien, serta mengatur state dan props dalam aplikasi web modern.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
