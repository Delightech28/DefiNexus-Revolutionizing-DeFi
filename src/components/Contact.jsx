import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const navOpenBtn = document.querySelector('.navOpenBtn');
    const navCloseBtn = document.querySelector('.navCloseBtn');
    const navChi = document.querySelectorAll('.navchi');
    const toggle = document.getElementById('toggle');
    const toggleMoon = document.getElementById('toogle-moon');

    navChi.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('openNav');
        navOpenBtn.style.opacity = '1';
      });
    });

    navOpenBtn.addEventListener('click', () => {
      nav.classList.add('openNav');
      navOpenBtn.style.opacity = '0';
    });

    navCloseBtn.addEventListener('click', () => {
      nav.classList.remove('openNav');
      navOpenBtn.style.opacity = '1';
    });

    toggle.addEventListener('click', () => {
      toggleMoon.style.display = 'block';
      toggle.style.display = 'none';
      document.body.classList.toggle('dark-mode');
      document.body.style.transition = '0.4s ease-in';
    });

    toggleMoon.addEventListener('click', () => {
      toggle.style.display = 'block';
      toggleMoon.style.display = 'none';
      document.body.classList.toggle('dark-mode');
    });

    console.log(window.innerHeight, window.innerWidth);
  }, []);

  return (
    <div>
      <nav className="nav">
        <i className="uil uil-bars navOpenBtn"></i>
        <a href="/">
          <img className="logo" src="definexus.jpg" alt="DefiNexus Logo" />
        </a>
        <i className="fas fa-sun" id="toggle"></i>
        <i className="fas fa-moon" id="toogle-moon"></i>
        <ul className="nav-links">
          <i className="uil uil-times navCloseBtn"></i>
          <li>
            <a className="navchi" href="/">
              Welcome to DefiNexus
            </a>
          </li>
          <li>
            <a className="navchi" href="/howitworks">
              How it does work
            </a>
          </li>
          <li>
            <a className="navchi" href="/contactus" style={{ color: '#f51414' }}>
              <i className="fas fa-user"></i> Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <main className="maincontent">
        <div className="welcome-info" data-aos="fade-up" data-aos-duration="800">
          <h3>
            <i className="fas fa-podcast"></i> Contact{' '}
            <span style={{ color: '#da0505' }}>Us</span>
          </h3>
          <br />
          <p>
            If you encountered any problems with DefiNexus, we are here to help
            and ensure you have a seamless experience. Kindly reach out to us
            at any of our email and social media platforms below:
          </p>
        </div>

        <div
          className="problem-solving"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          style={{ marginTop: '2rem' }}
        >
          <h3>Our handles:</h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: '2rem',
              gap: '1.5rem',
            }}
          >
            {/* Telegram */}
            <div
              style={{
                flex: 1,
                minWidth: '300px',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                style={{
                  backgroundColor: '#da0505',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <a href="https://t.me/BlockoverseHQ" target="_blank" rel="noreferrer">
                  <i
                    className="fab fa-telegram"
                    style={{ fontSize: '1.8rem', color: 'black', cursor: 'pointer' }}
                  ></i>
                </a>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Telegram</h3>
            </div>

            {/* X */}
            <div
              style={{
                flex: 1,
                minWidth: '300px',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
              }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                style={{
                  backgroundColor: '#da0505',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <a href="https://x.com/DefiNexusHQ" target="_blank" rel="noreferrer">
                  <i
                    className="fab fa-twitter"
                    style={{ fontSize: '1.8rem', color: 'black', cursor: 'pointer' }}
                  ></i>
                </a>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>X</h3>
            </div>

            {/* Discord */}
            <div
              style={{
                flex: 1,
                minWidth: '300px',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
              }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div
                style={{
                  backgroundColor: '#da0505',
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <a href="https://discord.gg/WCrt4uAT" target="_blank" rel="noreferrer">
                  <i
                    className="fab fa-discord"
                    style={{ fontSize: '1.8rem', color: 'black', cursor: 'pointer' }}
                  ></i>
                </a>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Discord</h3>
            </div>
          </div>
        </div>

        {/*   <a href="/howitworks">
          <div className="buttons">
            <p>How does it work</p>
          </div>
        </a> */}
      </main>

      <footer
        style={{
          backgroundColor: '#111',
          textAlign: 'center',
          padding: '2rem 0',
          marginTop: '3rem',
          borderTop: '1px solid #da0505',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ marginBottom: '1rem', color: 'white' }}>DefiNexus</p>
          <p style={{ marginBottom: '1.5rem', color: '#777' }}>
            Revolutionizing DeFi on the Base Network
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <a href="https://x.com/DefiNexusHQ" style={{ color: '#da0505', fontSize: '1.5rem' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://t.me/BlockoverseHQ" style={{ color: '#da0505', fontSize: '1.5rem' }}>
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://discord.gg/WCrt4uAT" style={{ color: '#da0505', fontSize: '1.5rem' }}>
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <p style={{ color: '#555', fontSize: '0.9rem' }}>
            &copy; 2025 DefiNexus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
