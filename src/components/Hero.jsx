import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  useEffect(() => {
    anime
      .timeline({ easing: "easeOutExpo", duration: 1000 })
      .add({
        targets: ".hero h1",
        translateY: [-50, 0],
        opacity: [0, 1],
      })
      .add({
        targets: ".hero .subtitle",
        translateY: [-30, 0],
        opacity: [0, 1],
        offset: "-=600",
      })
      .add({
        targets: ".hero p:not(.subtitle)",
        translateY: [-20, 0],
        opacity: [0, 1],
        offset: "-=500",
      });
  }, []);

  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/Videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Nightfall</span>
          </h1>
          <p className="subtitle">
            A curious and dedicated developer exploring the magic of web
            development and card tricks.
          </p>
          <p>
            From HTML, CSS, JavaScript to React and backend adventures — always
            learning, building, experimenting with passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
