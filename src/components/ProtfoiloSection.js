import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = ['all', 'graphic', 'web', 'photography'];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">PORTFOLIO</h2>
      <div>
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-[#FDB813] text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <img
              key={item}
              src={`/placeholder.svg?text=Portfolio+${item}`}
              alt={`Portfolio item ${item}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;