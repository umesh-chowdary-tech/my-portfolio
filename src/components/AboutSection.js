import React from 'react';
import { Layout, Camera, Target } from 'react-feather';

const StatCard = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <div className="text-3xl font-bold text-[#FDB813]">{value}</div>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const AboutSection = () => {
  const curntDate=new Date();
  const startDate=new Date('2023-09-19');
  
let yrsOfExperience = curntDate.getFullYear() - startDate.getFullYear();

// Adjust if the month/day of curntDate is earlier in the year than startDate
if (
  curntDate.getMonth() < startDate.getMonth() ||
  (curntDate.getMonth() === startDate.getMonth() && curntDate.getDate() < startDate.getDate())
) {
  yrsOfExperience--;
}
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">ABOUT ME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What I Do?</h3>
          <div className="grid gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
              <Layout className="h-6 w-6 text-[#FDB813]" />
              <div>
                <h4 className="font-semibold">WEBSITE DESIGN</h4>
                <p className="text-sm text-gray-600">
                  Creating Useful and functional websites
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
              <Target className="h-6 w-6 text-[#FDB813]" />
              <div>
                <h4 className="font-semibold">STARTUPS</h4>
                <p className="text-sm text-gray-600">
                  Bringing Innovative Ideas to Real Life 
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
              <Camera className="h-6 w-6 text-[#FDB813]" />
              <div>
                <h4 className="font-semibold">COOKING</h4>
                <p className="text-sm text-gray-600">
                  Exploring the World of Spices
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard value={`${yrsOfExperience}+`} label="YEARS EXPERIENCE" />
          <StatCard value="3+" label="Client PROJECTS DONE" />
          <StatCard value="5+" label="PERSONAL PROJECTS" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;