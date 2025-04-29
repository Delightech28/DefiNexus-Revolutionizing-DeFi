import React from 'react';
import Navbar from './Navbar';
import './how.css';

const How = () => {
  return (
    <div>
      {/* Navbar */}
    
      <Navbar />
      {/* Main Content */}
      <main className="maincontent">
        <div className="welcome-info" data-aos="fade-up" data-aos-duration="800">
          <h3>
            <i className="fas fa-cogs"></i> How{' '}
            <span style={{ color: '#f51414' }}>DefiNexus</span> Works
          </h3>
          <br />
          <p>
          DefiNexus is a forward-thinking decentralized finance (DeFi) platform built on the Base network, designed to simplify digital asset management, maximize yield potential, and foster seamless integration within the Base ecosystem. By leveraging Base’s low-cost, scalable infrastructure, we combine powerful DeFi tools with an intuitive user experience — making decentralized finance more accessible, efficient, and inclusive for all.
          </p>
          <br />
          <p>Below we explain the key mechanisms that power our ecosystem:</p>
        </div>

        {/* Sections */}
        {[
          {
            title: '1. Base-Native Liquidity & Scalability',
            icon: 'fas fa-project-diagram',
            content:
              'DefiNexus is built on the Base network, leveraging its low fees and high throughput to offer seamless trading, staking, farming, and lending. With future multi-chain integration in mind, Base serves as our core layer for speed, efficiency, and accessibility.',
          },
          {
            title: '2. Smart Contract Automation & Security',
            icon: 'fas fa-file-contract',
            content:
              'All transactions on DefiNexus are powered by secure, audited smart contracts that automate processes like staking, farming, and liquidity provision. This ensures trustless operations, transparency, and minimized risk — with no intermediaries involved.',
          },
          {
            title: '3. Optimized Liquidity Aggregation',
            icon: 'fas fa-water',
            content:
              'DefiNexus will aggregate liquidity from top DEXs within the Base ecosystem (like Aerodrome) to provide users with low slippage and the best possible trade execution. Smart routing helps ensure optimal pricing and execution at all times.',
          },
          {
            title: '4. Yield Farming & LP Staking',
            icon: 'fas fa-coins',
            content:
              'Users can stake LP tokens to earn $DNX rewards. Our LP staking pools offer passive income opportunities to liquidity providers — boosting engagement and reinforcing the network’s stability.',
          },
          {
            title: '5. Governance & DAO Participation',
            icon: 'fas fa-shield-alt',
            content:
              'As a community-first protocol, DefiNexus empowers $DNX holders to vote on proposals, platform upgrades, and ecosystem decisions through a decentralized autonomous organization (DAO) structure — enabling true user-led growth.',
          },
          {
            title: '6. Fixed Supply Staking & Farming Rewards',
            icon: 'fas fa-lock',
            content:
              'Staking rewards come from a fixed, pre-allocated pool — no inflation, no endless minting. This ensures a sustainable and fair reward mechanism that maintains long-term token value.',
          },
          {
            title: '7. Cross-Chain Bridging & Token Swaps',
            icon: 'fas fa-exchange-alt',
            content:
              'While Base is our primary chain, we’re planning future bridges to other ecosystems (e.g., Avalanche, BNB) for $DNX interoperability. Our architecture will support secure bridging and value preservation across chains.',
          },
          {
            title: '8. Future Integrations & Growth',
            icon: 'fas fa-rocket',
            content:
              'DefiNexus is just getting started. We aim to integrate additional DEXs, explore CEX listings (like Coinbase, Binance, and MEXC), introduce NFT utilities, and partner with lending protocols to expand utility and adoption.',
          },
        ].map((section, index) => (
          <div
            className="problem-solving"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={`${200 + index * 100}`}
            style={{ padding: '2rem', borderRadius: '10px', marginTop: '2rem' }}
            key={index}
          >
            <h3>
              <i className={section.icon}></i> {section.title}
            </h3>
            <br />
            <p>{section.content}</p>
            <br />
          </div>
        ))}

        {/* Buttons */}
        <a href="/">
          <div className="buttons">
            <p>Welcome to DefiNexus</p>
          </div>
        </a>
        <a href="/refferal">
          <div className="buttons">
            <p>Referral System</p>
          </div>
        </a>
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

export default How;