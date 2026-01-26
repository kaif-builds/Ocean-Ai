
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataIcon, AiIcon, GlobeIcon } from '../components/Icons';

const CascadeStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean }> = ({ icon, title, description, isLast = false }) => (
    <div className="flex items-start md:items-center md:flex-col md:flex-1 text-center">
        <div className="flex flex-col items-center w-full">
            <div className="bg-ocean-deep p-4 rounded-full border-2 border-ocean-cyan mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-light">{title}</h3>
            <p className="text-slate-dark mt-2">{description}</p>
        </div>
        {!isLast && <div className="hidden md:block w-full h-px bg-gray-600 mt-8"></div>}
    </div>
);

const PlatformPage = () => {
  const navigate = useNavigate();

  const PageHeader = () => (
    <div className="bg-ocean-light py-16">
        <div className="container mx-auto px-6">
             <div className="mb-8 text-left">
                <button 
                  onClick={() => navigate(-1)} 
                  className="inline-flex items-center text-slate-dark hover:text-ocean-cyan transition-colors duration-300 group"
                  aria-label="Go back to previous page"
                >
                  <svg className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </button>
            </div>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">The OceanAI Platform</h1>
                <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                    From fragmented data to actionable intelligence. Our platform is built on collaboration, open science, and a vision for a thriving planet.
                </p>
            </div>
        </div>
    </div>
  );

  return (
    <div className="bg-ocean-deep">
      <PageHeader />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-light mb-4">The Challenge: A Sea of Siloed Data</h2>
            <p className="text-lg text-slate-dark">
              For decades, vital ocean data—from satellite imagery to genetic sequences—has been collected and stored in isolation. This fragmentation makes it nearly impossible to see the big picture, hindering scientific progress and effective policymaking. We built OceanAI to bridge these gaps.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ocean-light">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-light">Our Solution: A Unified Digital Ocean</h2>
                  <p className="text-lg text-slate-dark mt-4 max-w-3xl mx-auto">
                      We're creating a 'digital twin' of the ocean, a dynamic, interconnected data ecosystem that powers research, policy, and sustainable development worldwide.
                  </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-8">
                  <CascadeStep 
                      icon={<DataIcon className="h-10 w-10 text-ocean-cyan" />}
                      title="1. Data Integration"
                      description="Our platform connects disparate global datasets, creating a virtual, queryable ocean."
                  />
                  <div className="h-12 w-px md:h-px md:w-20 bg-gray-600"></div>
                   <CascadeStep 
                      icon={<AiIcon className="h-10 w-10 text-ocean-cyan" />}
                      title="2. AI-Powered Insights"
                      description="Advanced algorithms analyze and model complex systems, revealing patterns and making predictions."
                  />
                  <div className="h-12 w-px md:h-px md:w-20 bg-gray-600"></div>
                  <CascadeStep 
                      icon={<GlobeIcon className="h-10 w-10 text-ocean-cyan" />}
                      title="3. Global Benefit"
                      description="Insights are transformed into tools and solutions for researchers, governments, and industry."
                      isLast={true}
                  />
              </div>
          </div>
      </section>
      
      <section className="py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                   <img src="https://picsum.photos/800/600?random=2" alt="Team collaborating" className="rounded-lg shadow-2xl"/>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-slate-light">Our Vision & Ethos</h2>
                <p className="text-slate-dark mb-4">
                    Our vision is a world where ocean data is a shared resource, accessible to all who wish to study, protect, and sustainably use our marine ecosystems.
                </p>
                <ul className="space-y-3 text-slate-dark">
                    <li className="flex items-start"><span className="text-ocean-cyan mr-2 mt-1">&#10148;</span><strong>Open Science:</strong> We are committed to open-source tools, open data principles, and fostering a global collaborative community.</li>
                    <li className="flex items-start"><span className="text-ocean-cyan mr-2 mt-1">&#10148;</span><strong>Interdisciplinary Collaboration:</strong> We bring together experts in marine biology, data science, AI, and policy to tackle complex problems.</li>
                    <li className="flex items-start"><span className="text-ocean-cyan mr-2 mt-1">&#10148;</span><strong>Actionable Intelligence:</strong> Our goal is not just to provide data, but to deliver insights that drive meaningful action and positive change.</li>
                </ul>
              </div>
          </div>
      </section>

    </div>
  );
};

export default PlatformPage;
