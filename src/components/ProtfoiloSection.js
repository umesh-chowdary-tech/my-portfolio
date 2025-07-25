import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = ['all', 'graphic', 'web', 'photography'];

  return (
    <div className="space-y-8" data-test-id="portfolio-section-root">
      <div data-test-id="portfolio-section">
        <h2 className="text-3xl font-bold border-b pb-2">PORTFOLIO</h2>
        <div data-test-id="portfolio-section-tabs-and-grid">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6" data-test-id="portfolio-section-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-[#FDB813] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
                data-test-id={`portfolio-section-tab-${tab}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4" data-test-id="portfolio-section-grid">
            {[1, 2, 3, 4].map((item) => (
              <img
                key={item}
                src={`/placeholder.svg?text=Portfolio+${item}`}
                alt={`Portfolio item ${item}`}
                className="w-full h-48 object-cover rounded-lg"
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '12rem' }}
                data-test-id={`portfolio-section-image-${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;