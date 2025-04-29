import React from 'react';
import './style.css';

const Footer = () => {
  return (
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
          Revolutionizing DeFi on the Avalanche Network
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <a
            href="https://x.com/DefiNexusHQ"
            style={{ color: '#da0505', fontSize: '1.5rem' }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://t.me/BlockoverseHQ"
            style={{ color: '#da0505', fontSize: '1.5rem' }}
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href="https://discord.gg/WCrt4uAT"
            style={{ color: '#da0505', fontSize: '1.5rem' }}
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <p style={{ color: '#555', fontSize: '0.9rem' }}>
          &copy; 2025 DefiNexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;