import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact h2',
              translateY: [-50, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 800,
            });

            anime({
              targets: '.contact p, .contact-form, .notification',
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(200),
              easing: 'easeOutExpo',
              duration: 800,
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2>
        <span role="img" aria-label="Envelope">📬</span> Contact
      </h2>
      <p>Feel free to reach out through the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="form-input"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Send</button>
      </form>

      {/* Notification */}
      {showAlert && <div className="notification">✅ Terima kasih sudah memberikan saran!</div>}
    </section>
  );
};

export default Contact;
