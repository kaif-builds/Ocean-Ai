
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
    <div className="bg-ocean-light p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center mb-4">
            <div className="bg-ocean-deep p-3 rounded-md mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-light">{title}</h3>
        </div>
        <p className="text-slate-dark">{description}</p>
    </div>
);

const TechnologyPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Technology Stack</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Built for scale, speed, and discovery. Explore the core components that power OceanAI.
                    </p>
                </div>
            </div>
        </div>
    );

    const features = [
        {
            title: 'Unified Data Fabric',
            description: 'Connects disparate global datasets without moving them, creating a virtual, queryable ocean with standardized access.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
        },
        {
            title: 'AI & Predictive Analytics',
            description: 'From forecasting fish stock migration to modeling climate change impact, our AI engine uncovers future trends.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M12 21v-1m0-16a9 9 0 110 18 9 9 0 010-18z" /></svg>,
        },
        {
            title: 'Geospatial Visualizations',
            description: 'Map, analyze, and visualize complex marine data in real-time with our interactive, multi-layered mapping tools.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        },
        {
            title: 'eDNA Analysis Toolkit',
            description: 'Process and interpret environmental DNA data to map biodiversity hotspots and track invasive species with unprecedented accuracy.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
        },
        {
            title: 'Fisheries Stock Assessment',
            description: 'Utilize AI-driven models to assess fish populations, predict catch yields, and support sustainable fishery management.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
        },
        {
            title: 'Ocean Current Modeling',
            description: 'Simulate and forecast ocean currents to understand larval dispersal, predict contaminant spread, and optimize shipping routes.',
            icon: <svg className="w-6 h-6 text-ocean-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
        },
    ];

    return (
        <div className="bg-ocean-deep">
            <PageHeader />
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnologyPage;
