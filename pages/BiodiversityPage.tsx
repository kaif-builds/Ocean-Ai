
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';

const DataSearch = () => (
    <section className="py-16 bg-ocean-deep">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-slate-light mb-4">Explore Biodiversity Data</h2>
                 <p className="text-slate-dark mb-8">Search for genetic sequences, specific taxa, eDNA sample locations, or biodiversity indices.</p>
                 <form className="flex items-center bg-ocean-light border-2 border-gray-700 rounded-lg p-2 shadow-lg">
                    <input 
                        type="search"
                        placeholder="e.g., 'Find eDNA samples for Cetacea in the Pacific'"
                        className="w-full bg-transparent text-lg text-slate-light placeholder-slate-dark focus:outline-none px-4 py-2"
                    />
                    <button
                        type="submit"
                        className="flex items-center px-6 py-3 bg-ocean-cyan text-ocean-deep font-bold rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105"
                    >
                        <SearchIcon className="h-6 w-6 mr-2" />
                        Search
                    </button>
                 </form>
            </div>
        </div>
    </section>
);

const DataStreamCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-ocean-deep p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-bold text-ocean-cyan mb-3">{title}</h3>
        <p className="text-slate-dark">{description}</p>
    </div>
);

const BiodiversityPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Molecular Biodiversity Hub</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Unlocking the secrets of marine life through DNA. Explore genomic and environmental DNA (eDNA) data to map life in our oceans.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-ocean-deep">
            <PageHeader />
            <DataSearch />

            <section className="py-20 bg-ocean-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-slate-light">Key Data Streams</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <DataStreamCard title="eDNA Sequence Database" description="Access a global repository of environmental DNA sequences from water samples, allowing for non-invasive species detection." />
                        <DataStreamCard title="Genomic Reference Libraries" description="Compare your findings against curated genomic libraries for thousands of marine species for accurate identification." />
                        <DataStreamCard title="Species Distribution Maps" description="Visualize biodiversity hotspots and track the movement of invasive or endangered species based on molecular data." />
                        <DataStreamCard title="Metabarcoding Results" description="Analyze community composition data from bulk environmental samples to assess overall ecosystem health." />
                        <DataStreamCard title="Bioprospecting Data" description="Explore genetic data for novel compounds and genes with potential applications in medicine and biotechnology." />
                        <DataStreamCard title="Long-term Monitoring Sites" description="Query time-series molecular data from established ocean observatories to track biodiversity changes over time." />
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-slate-light">A New Lens on Marine Life</h2>
                        <p className="text-slate-dark mb-4">
                           Molecular tools like environmental DNA (eDNA) are revolutionizing our ability to monitor marine biodiversity. By analyzing trace amounts of DNA in the water, we can detect the presence of species—from microscopic plankton to giant whales—without ever seeing or capturing them.
                        </p>
                        <p className="text-slate-dark">
                           OceanAI provides the computational power and analytical pipelines to process this flood of genetic data. We empower scientists to create comprehensive, near real-time maps of life in the ocean, providing an unprecedented tool for conservation, biosecurity, and discovery.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1585934065476-8a8342a72151?q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="DNA helix visualization" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BiodiversityPage;
