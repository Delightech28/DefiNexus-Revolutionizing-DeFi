import React from 'react';
import Navbar from './Navbar';
import './style.css';

const Welcome = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="maincontent">
        <div className="welcome-info">
          <h3>
            <i className="fas fa-scroll"></i> Welcome to{' '}
            <span style={{ color: '#f51414' }}>DefiNexus</span>
          </h3>
          <br />
          <p>What is DefiNexus?</p>
          <br />
          <p>
          DefiNexus is an upcoming DeFi project building on the Base blockchain, designed to unlock multiple earning opportunities for users in the decentralized world. Users will be able to complete simple tasks, mine free $DNX points, claim exclusive NFTs, and stake assets to unlock advanced features.
          </p>
          <br />
          <p>
          With a strong focus on community engagement and passive income, DefiNexus is building a reward-driven ecosystem where users can earn, trade, and participate in DeFi activities with ease. Whether you're a crypto native or just starting out, DefiNexus offers a seamless way to explore decentralized finance — while getting rewarded for being part of the journey.
          </p>
        </div>

        <div className="problem-solving">
          <h3>What problem do we solve?</h3>
          <br />
          <p>
          Despite the growth of DeFi, many platforms still struggle with key issues:
          </p>
          <ul style={{ marginLeft: '1.3rem', listStyleType: 'disc' }}>
            <li style={{ fontWeight: 500 }}>
              High Transaction Fee:{' '}
              <span style={{ fontWeight: 300 }}>
              Many blockchains suffer from congestion and high gas fees. This makes interacting with DeFi protocols expensive — especially for newcomers.
              </span>
            </li>
            <li style={{ fontWeight: 500 }}>
              Lack of Interoperability between protocols:{' '}
              <span style={{ fontWeight: 300 }}>
                Different blockchains use varying protocols and consensus
                mechanisms, making it difficult for them to communicate and
                exchange data.
              </span>
            </li>
            <li style={{ fontWeight: 500 }}>
              Limited access to non-technical users:{' '}
              <span style={{ fontWeight: 300 }}>
                Limited access to non-technical users in blockchain is
                facilitated through permissioned blockchains, which require
                participants to identify themselves and assign defined roles to
                perform only permitted activities.
              </span>
            </li>
            <li style={{ fontWeight: 500 }}>
              Security Vulnerabilities:{' '}
              <span style={{ fontWeight: 300 }}>
                Blockchain technology, while innovative and secure, faces
                several security vulnerabilities. Smart contracts, which
                automate agreements on the blockchain, can be exploited through
                vulnerabilities like reentrancy and Denial of Service (DoS)
                attacks, potentially leading to financial losses.
              </span>
            </li>
          </ul>
          <br />
          <p>DefiNexus on Base solves these problems through:</p>
          <ul style={{ marginLeft: '1.3rem', listStyleType: 'disc' }}>
            <li style={{ fontWeight: 500 }}>
            User-Centric Interface:{' '}
              <span style={{ fontWeight: 300 }}>
              Our clean and easy-to-use dashboard simplifies DeFi for everyone. Whether you're new to crypto or already active in Web3, DefiNexus breaks down barriers with guided flows and helpful in-app education.
              </span>
            </li>
            <li style={{ fontWeight: 500 }}>
            Smart, Efficient Contracts:{' '}
              <span style={{ fontWeight: 300 }}>
              Leveraging Base’s low-cost, scalable infrastructure, we’ve built contracts that support auto-yield compounding, dynamic lending, meta-transactions (no gas for users), and more — all with security in mind.
              </span>
            </li>
            <li style={{ fontWeight: 500 }}>
            Inclusive, Reward-Driven Ecosystem:{' '}
              <span style={{ fontWeight: 300 }}>
              DefiNexus enables users to mine $DNX, stake, and earn — without the complexity or high costs seen elsewhere.
              </span>
            </li>
          </ul>
        </div>
        <p>
          Experience the power of DefiNexus and enjoy a smoother, more effective
          free token mining experience. We're here to simplify the complex world
          of crypto transactions and empower you to earn, trade, and participate
          in DeFi activities with confidence!
        </p>

        {/*   <a href="/howitworks">
          <div className="buttons">
            <p>How it does work</p>
          </div>
        </a> */}
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default Welcome;
