import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const Projects = () => {
  const projectsRef = useRef(null);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);

        // Animasi muncul
        anime({
          targets: ".projects h2",
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: "easeOutCubic",
          duration: 1000,
        });

        anime({
          targets: ".project-card",
          translateY: [50, 0],
          opacity: [0, 1],
          scale: [0.95, 1],
          delay: anime.stagger(200),
          easing: "easeOutCubic",
          duration: 800,
        });
      } else {
        setIsVisible(false);

        // Animasi hilang
        anime({
          targets: ".projects h2",
          translateY: [0, -30],
          opacity: [1, 0],
          easing: "easeInCubic",
          duration: 500,
        });

        anime({
          targets: ".project-card",
          translateY: [0, 50],
          opacity: [1, 0],
          delay: anime.stagger(100),
          easing: "easeInCubic",
          duration: 400,
        });
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleScroll, {
      threshold: 0.3,
    });

    if (projectsRef.current) {
      observerRef.current.observe(projectsRef.current);
    }

    return () => {
      if (observerRef.current && projectsRef.current) {
        observerRef.current.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2 style={{ opacity: 0 }}>📁 Projects</h2>
      <div className="projects-list">
        {[
          { title: "Nightfall Portfolio", desc: "A personal portfolio built with elegance using React and CSS." },
          { title: "Chill To-Do App", desc: "A minimalist to-do app with a chill UI and smooth animations." },
          { title: "Portfolio V2", desc: "Second version of my portfolio with added scroll animation." },
          { title: "Trading Dashboard", desc: "Dashboard for tracking trading data with clean and responsive design." },
        ].map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
