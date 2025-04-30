import React from 'react';
import Navbar from './Navbar';
import './how.css';

const Utility = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="maincontent">
        <div className="welcome-info" data-aos="fade-up" data-aos-duration="800">
          <h3>
            <i className="fas fa-toolbox"></i> Utility &{' '}
            <span style={{ color: '#f51414' }}>Use Case</span>
          </h3>
          <br />
          <p>
            DefiNexus is a Base-native decentralized platform designed to empower users with efficient access to core DeFi utilities—staking, farming, bridging, and swapping—all from one streamlined interface. Built with scalability and simplicity in mind, it makes cross-chain DeFi easy, secure, and accessible.
          </p>
          <br />
          <p>Explore how $DNX drives utility and value across our ecosystem:</p>
        </div>

        {/* New Section: DeFi Fragmentation Solution */}
        <div
          className="problem-solving"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          style={{ padding: '2rem', borderRadius: '10px', marginTop: '2rem' }}
        >
          <h3>
            <i className="fas fa-plug"></i> Solving DeFi Fragmentation on Base
          </h3>
          <br />
          <p>
            DefiNexus addresses a critical gap in the DeFi space: the lack of streamlined, user-friendly
            access to DeFi tools on scalable L2 networks like Base.
            <br /><br />
            Most DeFi platforms require users to jump between dApps, bridges, and wallets—causing friction
            and confusion. DefiNexus simplifies this by offering an all-in-one DeFi dashboard natively built
            on Base, allowing users to:
            <br /><br />
            • Stake tokens and earn yield with minimal fees.<br />
            • Farm liquidity pairs to earn $DNX and partner rewards.<br />
            • Bridge assets from Ethereum to Base instantly.<br />
            • Swap tokens using Base-native liquidity for lower slippage.<br />
            • Participate in governance and shape protocol upgrades.<br /><br />
            This makes DeFi accessible, affordable, and efficient—especially for users seeking speed and
            cost-effectiveness without compromising functionality.
          </p>
        </div>

        {/* Use Case Cards */}
        {[
          {
            title: '1. $DNX Staking & Farming Rewards',
            icon: 'fas fa-coins',
            content:
              '$DNX can be staked or paired in liquidity pools to earn high-yield rewards. Our protocol ensures fair distribution via fixed reward pools, incentivizing long-term engagement and reducing sell pressure.',
          },
          {
            title: '2. Protocol Governance',
            icon: 'fas fa-vote-yea',
            content:
              'Holders of $DNX can propose and vote on major platform decisions. This includes updates to emission schedules, fee structures, and future integrations, creating a decentralized and community-led ecosystem.',
          },
          {
            title: '3. Fee Discounts & Boosted Yields',
            icon: 'fas fa-percentage',
            content:
              'Active $DNX holders enjoy reduced fees on swaps and bridges. Staking more $DNX unlocks higher yield rates and exclusive farming tiers.',
          },
          {
            title: '4. Ecosystem Access & Launchpad Privileges',
            icon: 'fas fa-rocket',
            content:
              '$DNX will be used to access future partner launches, community IDOs, and whitelist spots for curated DeFi/NFT projects directly on Base.',
          },
          {
            title: '5. Multi-Chain Interoperability',
            icon: 'fas fa-link',
            content:
              'Though DefiNexus is natively built on Base, $DNX will be bridgeable to other chains like Avalanche and BNB—maintaining utility across multiple networks while Base remains the hub.',
          },
          {
            title: '6. Real Yield from Protocol Fees',
            icon: 'fas fa-hand-holding-usd',
            content:
              'A portion of protocol-generated fees (swaps, bridges, LP withdrawal) is distributed back to stakers in $DNX or stablecoins—ensuring utility backed by platform usage.',
          },
          {
            title: '7. Community Empowerment',
            icon: 'fas fa-users-cog',
            content:
              'From governance to incentivized referrals and airdrops, $DNX holders help shape and grow DefiNexus while benefiting from every milestone.',
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
        <a href="/contact">
          <div className="buttons">
            <p>Contact Us</p>
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
            Powering the Future of DeFi on Base Network
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

export default Utility;
