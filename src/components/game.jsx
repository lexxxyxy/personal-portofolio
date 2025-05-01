import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Game = () => {
  const gameRef = useRef(null);
  const observerRef = useRef(null);

  const games = [
    {
      name: 'Assassin’s Creed Ezio Trilogy',
      description:
        'Trilogi Ezio mencakup AC II, Brotherhood, dan Revelations — kisah ikonik seorang Assassin yang penuh aksi, drama, dan sejarah mendalam.',
    },
    {
      name: 'Assassin’s Creed Syndicate',
      description:
        'Berlatar di era Victoria London, game ini menghadirkan pertarungan cepat, geng jalanan, dan dua karakter utama: Jacob dan Evie Frye.',
    },
    {
      name: 'Assassin’s Creed III',
      description:
        'Kisah Connor di era Revolusi Amerika dengan pertarungan brutal dan eksplorasi alam terbuka yang luas.',
    },
    {
      name: 'Detroit: Become Human',
      description:
        'Game interaktif dengan cerita mendalam. Setiap pilihan yang kamu buat akan mempengaruhi jalan cerita dan nasib para karakternya.',
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: '.game-title',
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 500,
          });

          anime({
            targets: '.game-card',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(200),
            easing: 'easeOutQuad',
            duration: 350,
          });
        } else {
          anime({
            targets: '.game-title',
            translateY: [0, -50],
            opacity: [1, 0],
            easing: 'easeOutQuad',
            duration: 300,
          });

          anime({
            targets: '.game-card',
            opacity: [1, 0],
            translateY: [0, 50],
            delay: anime.stagger(100),
            easing: 'easeOutQuad',
            duration: 300,
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (gameRef.current) {
      observer.observe(gameRef.current);
    }

    return () => {
      if (gameRef.current) {
        observer.unobserve(gameRef.current);
      }
    };
  }, []);

  return (
    <section id="game" className="game-section" ref={gameRef}>
      <h2 className="game-title">🎮 Game Favorit</h2>
      <div className="game-container">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <h3 className="game-name">{game.name}</h3>
            <p className="game-desc">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Game;
