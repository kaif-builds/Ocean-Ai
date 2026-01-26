
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type SolutionCategory = 'researchers' | 'policymakers' | 'industry';

const SolutionCard: React.FC<{ title: string; description: string;}> = ({ title, description }) => (
    <div className="bg-ocean-light p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-ocean-cyan mb-3">{title}</h3>
        <p className="text-slate-dark">{description}</p>
    </div>
);

const SolutionsPage = () => {
    const [activeTab, setActiveTab] = useState<SolutionCategory>('researchers');
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Tailored Solutions</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Actionable insights for every stakeholder in the future of our oceans.
                    </p>
                </div>
            </div>
        </div>
    );

    const solutions = {
        researchers: [
            { title: "Cross-Disciplinary Analysis", description: "Integrate oceanographic, genomic, and fisheries data to uncover novel ecosystem interactions and publish groundbreaking research." },
            { title: "Large-Scale Modeling", description: "Leverage our cloud-computing infrastructure to run complex climate and biodiversity models without needing local supercomputers." },
            { title: "eDNA Biodiversity Mapping", description: "Utilize our specialized toolkit to rapidly map marine biodiversity, track species distribution, and identify previously unknown organisms." },
        ],
        policymakers: [
            { title: "Dynamic MPA Monitoring", description: "Design and monitor Marine Protected Areas with dynamic, real-time biodiversity and human activity data to ensure effectiveness." },
            { title: "Climate Change Adaptation", description: "Model the local impacts of sea-level rise and ocean warming to develop robust coastal adaptation strategies." },
            { title: "Sustainable Fishery Quotas", description: "Set science-based fishing quotas using AI-powered stock assessments that account for environmental changes." },
        ],
        industry: [
            { title: "Aquaculture Site Selection", description: "De-risk investments by using predictive models to identify optimal locations based on environmental stability and disease risk." },
            { title: "Bioprospecting", description: "Accelerate the discovery of valuable marine genetic resources for biotechnology and pharmaceutical applications." },
            { title: "Maritime Route Optimization", description: "Optimize shipping routes for fuel efficiency and safety by using real-time and forecasted ocean current data." },
        ]
    };

    const renderTabs = () => (
        <div className="mb-12 flex justify-center border-b border-gray-700">
            <button onClick={() => setActiveTab('researchers')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'researchers' ? 'text-ocean-cyan border-b-2 border-ocean-cyan' : 'text-slate-dark'}`}>For Researchers</button>
            <button onClick={() => setActiveTab('policymakers')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'policymakers' ? 'text-ocean-cyan border-b-2 border-ocean-cyan' : 'text-slate-dark'}`}>For Policymakers</button>
            <button onClick={() => setActiveTab('industry')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'industry' ? 'text-ocean-cyan border-b-2 border-ocean-cyan' : 'text-slate-dark'}`}>For Industry</button>
        </div>
    );

    return (
        <div className="bg-ocean-deep">
            <PageHeader />
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {renderTabs()}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions[activeTab].map((solution, index) => (
                            <SolutionCard key={index} title={solution.title} description={solution.description} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;
