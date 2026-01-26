
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';

const DataSearch = () => (
    <section className="py-16 bg-ocean-deep">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-slate-light mb-4">Explore Oceanography Data</h2>
                 <p className="text-slate-dark mb-8">Search for datasets, geographical locations, specific parameters, or time ranges.</p>
                 <form className="flex items-center bg-ocean-light border-2 border-gray-700 rounded-lg p-2 shadow-lg">
                    <input 
                        type="search"
                        placeholder="e.g., 'Sea surface temperature in the North Atlantic'"
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

const OceanographyPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Oceanography Data Hub</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Explore the physical and chemical dynamics of our oceans. Access real-time and historical data on currents, temperature, salinity, and more.
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
                        <DataStreamCard title="Real-time Buoy Data" description="Live feeds from a global network of oceanic buoys measuring temperature, wave height, and wind speed." />
                        <DataStreamCard title="Satellite Altimetry" description="High-resolution satellite data for monitoring sea level rise and ocean surface topography." />
                        <DataStreamCard title="ARGO Float Profiles" description="Vertical profiles of temperature and salinity from thousands of autonomous floats, revealing deep ocean dynamics." />
                        <DataStreamCard title="Ocean Current Models" description="Access advanced hydrodynamic models like HYCOM and ROMS for current forecasting." />
                        <DataStreamCard title="Chemical Composition" description="Datasets on dissolved oxygen, nitrate, phosphate, and pH levels critical for understanding ocean acidification." />
                        <DataStreamCard title="Historical Climate Records" description="Explore long-term oceanographic data records to analyze climate trends and variability." />
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-slate-light">Understanding the Ocean's Engine</h2>
                        <p className="text-slate-dark mb-4">
                            Physical and chemical oceanography provides the fundamental framework for understanding everything from global climate patterns to local ecosystem health. By unifying these vast and complex datasets, OceanAI empowers researchers to model the intricate workings of our planet's primary life support system.
                        </p>
                        <p className="text-slate-dark">
                            Track marine heatwaves in real-time, predict the path of oil spills, or understand how ocean acidification is impacting coral reefs. Our platform provides the tools to turn raw data into critical environmental intelligence.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1562699893-61azzi-46a4?q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ocean currents visualization" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OceanographyPage;
