import React, { useState } from 'react';
import Navbar from './Navbar';
import './faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'General Questions',
      icon: 'fas fa-info-circle',
      faqs: [
        {
          question: 'What makes DefiNexus different from other DeFi platforms?',
          answer: (
            <>
              <p>
                DefiNexus stands out by being natively built on both Avalanche and BNB Chain, giving users the power to interact with multi-chain liquidity, stake, farm, and bridge assets—all from a single platform.
              </p>
              <p>
                Unlike most DeFi protocols that limit users to one ecosystem, DefiNexus delivers true cross-chain interoperability, allowing seamless swaps, staking, and bridging of $DNX tokens across AVAX and BNB without needing third-party tools.
              </p>
              <p>We prioritize:</p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Simplicity:</strong> A smooth, unified interface for new and expert users alike.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Security:</strong> Smart contract audits, risk controls, and liquidity protection mechanisms.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Sustainability:</strong> Fixed reward pools and transparent tokenomics.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Decentralization:</strong> Community-led governance where $DNX holders shape the future of the protocol.
                </li>
              </ul>
              <p>
                With DefiNexus, you don't just use DeFi—you experience a next-gen ecosystem built for interoperability, flexibility, and real growth.
              </p>
            </>
          ),
        },
        {
          question: 'What are the benefits of using DefiNexus?',
          answer: (
            <>
              <p>DefiNexus offers numerous benefits as a powerful decentralized finance platform:</p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Cross-Chain Interoperability</strong> – Seamlessly connect and transfer assets across multiple blockchain networks.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Enhanced Liquidity Aggregation</strong> – Access the best rates by pulling liquidity from various sources.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Automated Yield Optimization</strong> – Maximize returns with smart contract-powered yield farming strategies.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Secure and Transparent Transactions</strong> – All operations are verifiable on the blockchain.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Passive Income Opportunities</strong> – Generate consistent returns through staking and liquidity provision.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{ color: '#f51414', marginRight: '0.5rem' }}></i>
                  <strong>Low Fees and Fast Transactions</strong> – Built on Avalanche for speed and cost efficiency.
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      category: 'Platform Features',
      icon: 'fas fa-layer-group',
      faqs: [
        {
          question: 'What blockchains does DefiNexus support?',
          answer: (
            <>
              <p>
                DefiNexus is built to operate seamlessly on both the Avalanche and BNB Chain networks, harnessing their speed, scalability, and cost-efficiency. Our platform enables true cross-chain functionality, allowing users to interact with DeFi services across both chains without limitations.
              </p>
              <p>
                We're also exploring integrations with other networks to expand our ecosystem and enhance interoperability in the future.
              </p>
            </>
          ),
        },
        {
          question: 'How does the yield optimization work?',
          answer: (
            <>
              <p>Our yield optimization system uses advanced algorithms to:</p>
              <ol>
                <li>Monitor yield rates across various DeFi platforms in real-time</li>
                <li>Automatically reallocate assets to the highest yielding protocols</li>
                <li>Compound returns periodically to maximize growth</li>
                <li>Minimize transaction costs by batching operations</li>
              </ol>
              <p>
                This dynamic rebalancing ensures your assets are always generating optimal returns without requiring manual monitoring or adjustments.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="maincontent">
        <div className="welcome-info">
          <h3>
            <i className="fas fa-question-circle"></i> Frequently Asked{' '}
            <span style={{ color: '#f51414' }}>Questions</span>
          </h3>
          <p>
            Find answers to common questions about DefiNexus, our features, and how to get the most out of our DeFi platform.
          </p>
        </div>

        {faqData.map((category, categoryIndex) => (
          <div className="faq-category" key={categoryIndex}>
            <h3>
              <i className={category.icon}></i> {category.category}
            </h3>
            <div className="faq-container">
              {category.faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeIndex === `${categoryIndex}-${index}` ? 'active' : ''}`}
                  key={index}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                  >
                    {faq.question}
                    <i className={`fas ${activeIndex === `${categoryIndex}-${index}` ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  {activeIndex === `${categoryIndex}-${index}` && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Faq;