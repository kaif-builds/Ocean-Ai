
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';

const DataSearch = () => (
    <section className="py-16 bg-ocean-deep">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-slate-light mb-4">Explore Fisheries Data</h2>
                 <p className="text-slate-dark mb-8">Search for specific species, fishing regions (FAOs), vessel information, or catch data.</p>
                 <form className="flex items-center bg-ocean-light border-2 border-gray-700 rounded-lg p-2 shadow-lg">
                    <input 
                        type="search"
                        placeholder="e.g., 'Atlantic Cod catch data in FAO 27'"
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

const FisheriesPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Fisheries & Aquaculture Data Hub</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Promoting sustainable seafood for a growing population. Access data on fish stocks, vessel activity, and aquaculture to support responsible management.
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
                        <DataStreamCard title="Vessel Tracking (AIS)" description="Monitor global fishing fleet activity in near real-time to identify fishing patterns and combat illegal, unreported, and unregulated (IUU) fishing." />
                        <DataStreamCard title="Stock Assessment Models" description="Access and run complex population models to evaluate the health of fish stocks and inform sustainable catch limits." />
                        <DataStreamCard title="Global Catch Data" description="Query comprehensive databases of historical and reported fish catches by species, region, and gear type." />
                        <DataStreamCard title="Aquaculture Production" description="Analyze data on aquaculture facility locations, production volumes, and environmental performance." />
                        <DataStreamCard title="Supply Chain & Trade" description="Track seafood products from ocean to plate with integrated trade and market data." />
                        <DataStreamCard title="Socio-Economic Data" description="Understand the human dimension of fisheries with data on employment, coastal community dependence, and economic impact." />
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-4 text-slate-light">Data-Driven Sustainable Harvesting</h2>
                        <p className="text-slate-dark mb-4">
                           Healthy oceans and healthy communities depend on sustainable fisheries and aquaculture. OceanAI provides the critical data infrastructure needed to move beyond reactive management and towards a predictive, ecosystem-based approach.
                        </p>
                        <p className="text-slate-dark">
                           By integrating vessel movements with oceanographic conditions and biodiversity data, our platform helps identify illegal fishing, predict how climate change will shift fish populations, and optimize aquaculture to be more productive and environmentally friendly.
                        </p>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <img src="https://images.unsplash.com/photo-1615219924559-026f82a97123?q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fishing vessel at sea" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FisheriesPage;
