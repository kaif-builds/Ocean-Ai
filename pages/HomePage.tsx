import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataIcon, AiIcon, GlobeIcon } from '../components/Icons';

const HeroSection = () => (
  <div className="relative h-screen flex items-center justify-center text-center text-white bg-ocean-deep overflow-hidden">
    {/* High-quality background image */}
    <img
      src="https://images.unsplash.com/photo-1450045439515-ff27c2f2e6b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoYWxlfGVufDB8fDB8fHww"
      className="absolute inset-0 w-full h-full object-cover z-0"
      alt="Deep ocean with sunlight filtering through"
    />
    {/* Gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-deep/50 to-ocean-deep z-10"></div>
    
    <div className="relative z-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
        <span className="text-ocean-cyan">Unifying Ocean Data.</span> Empowering a Sustainable Future.
      </h1>
      <p className="text-lg md:text-xl text-slate-light mb-8 max-w-2xl mx-auto [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)]">
        OceanAI integrates oceanography, fisheries, and molecular biodiversity to tackle marine challenges.
      </p>
      <Link
        to="/technology"
        className="px-8 py-3 bg-ocean-cyan text-ocean-deep font-bold rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105 shadow-lg"
      >
        See the Technology in Action
      </Link>
    </div>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-ocean-light p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-light mb-2">{title}</h3>
        <p className="text-slate-dark">{description}</p>
    </div>
);

type DataTab = 'oceanography' | 'fisheries' | 'biodiversity';

const InteractiveDataSection = () => {
    const [activeTab, setActiveTab] = useState<DataTab>('oceanography');

    const tabData = {
        oceanography: {
            title: 'Physical & Chemical Oceanography',
            description: 'Integrate real-time data on currents, temperature, salinity, and chemical composition from satellites, buoys, and autonomous vehicles. Our platform models the physical dynamics of the ocean to understand climate patterns and marine heatwaves.',
            image: 'https://www.pontorh.com.br/y/8476/oceanografia-e1654781249183.jpg',
            path: '/oceanography',
        },
        fisheries: {
            title: 'Global Fisheries & Aquaculture',
            description: 'Access and analyze comprehensive datasets on fish stocks, catch data, vessel tracking, and aquaculture production. We use predictive AI to model population dynamics, combat illegal fishing, and promote sustainable harvesting practices.',
            image: 'https://www.marinebiodiversity.ca/wp-content/uploads/2025/05/smart-fishing-tech-marine-conservation.jpeg',
            path: '/fisheries',
        },
        biodiversity: {
            title: 'Molecular & Genomic Biodiversity',
            description: 'Unlock insights from environmental DNA (eDNA) and genomic sequencing to map marine biodiversity with incredible detail. Track elusive species, monitor ecosystem health, and discover novel genetic resources for biotechnology.',
            image: 'https://www.marinebiodiversity.ca/wp-content/uploads/2025/06/marine-genomics-dna-insights.jpeg',
            path: '/biodiversity',
        },
    };

    const TabButton: React.FC<{ tab: DataTab; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`w-full md:w-auto text-center px-6 py-3 font-semibold text-lg transition-all duration-300 rounded-t-lg ${
                activeTab === tab 
                ? 'bg-ocean-light text-ocean-cyan border-b-2 border-ocean-cyan' 
                : 'bg-transparent text-slate-dark hover:bg-ocean-deep hover:text-slate-light'
            }`}
        >
            {label}
        </button>
    );
    
    const currentData = tabData[activeTab];

    return (
        <section className="py-20 bg-ocean-deep">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl font-bold text-slate-light">Explore Our Unified Data Streams</h2>
                     <p className="text-slate-dark mt-4">Click through the tabs to discover how OceanAI integrates diverse datasets to create a holistic view of our marine world.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center border-b border-gray-700 mb-8">
                    <TabButton tab="oceanography" label="Oceanography" />
                    <TabButton tab="fisheries" label="Fisheries" />
                    <TabButton tab="biodiversity" label="Molecular Biodiversity" />
                </div>

                <div className="bg-ocean-light p-8 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-slate-light mb-4">{currentData.title}</h3>
                            <p className="text-slate-dark mb-6">{currentData.description}</p>
                            <Link 
                                to={currentData.path}
                                className="inline-block px-6 py-3 bg-ocean-cyan text-ocean-deep font-bold rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105"
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src={currentData.image} alt={currentData.title} className="rounded-lg shadow-lg w-full h-64 object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <InteractiveDataSection />
      
      <section className="py-20 bg-ocean-deep">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-light">The Global Challenge</h2>
            <p className="text-slate-dark max-w-3xl mx-auto mb-12">Our oceans face unprecedented threats from climate change, pollution, and over-exploitation. Critical data remains fragmented and inaccessible, hindering our ability to respond effectively.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<DataIcon className="h-12 w-12 text-ocean-cyan"/>}
                    title="Data Fragmentation"
                    description="Siloed datasets across institutions and nations prevent a holistic understanding of marine ecosystems."
                />
                <FeatureCard 
                    icon={<GlobeIcon className="h-12 w-12 text-ocean-coral"/>}
                    title="Climate Risks"
                    description="Rising sea levels, ocean acidification, and changing currents threaten coastal communities and biodiversity."
                />
                <FeatureCard 
                    icon={<AiIcon className="h-12 w-12 text-ocean-cyan"/>}
                    title="Biodiversity Loss"
                    description="Lack of comprehensive monitoring makes it difficult to protect endangered species and critical habitats."
                />
            </div>
        </div>
      </section>

      <section className="py-20 bg-ocean-light">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-slate-light">One Platform, Limitless Insight</h2>
                <p className="text-slate-dark mb-6">OceanAI breaks down data barriers, applying cutting-edge AI to create the world's most comprehensive picture of our marine world. We empower scientists, policymakers, and innovators to work together for a healthier ocean.</p>
                 <Link 
                    to="/platform" 
                    className="px-6 py-3 bg-ocean-coral text-white font-bold rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105"
                  >
                    Learn About Our Mission
                  </Link>
              </div>
              <div className="md:w-1/2">
                  <img src="https://w0.peakpx.com/wallpaper/614/308/HD-wallpaper-ocean-water-sea-waves-blue-high-resolution.jpg" alt="Data visualization" className="rounded-lg shadow-2xl"/>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;