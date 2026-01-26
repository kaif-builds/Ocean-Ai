
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';

const ImpactListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-ocean-cyan flex-shrink-0 mr-3 mt-1" />
        <span className="text-slate-dark">{children}</span>
    </li>
);

const ImpactPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Global Impact</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        From accelerating scientific discovery to driving a sustainable blue economy, OceanAI is creating waves of change.
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img src="https://picsum.photos/800/600?random=3" alt="Marine Research" className="rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-light mb-6">Transforming Marine Science & Governance</h2>
                            <ul className="space-y-4">
                                <ImpactListItem>
                                    <strong>Accelerating Research:</strong> Provide a global community of scientists with unified access to data, reducing discovery time from years to months.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>Informing Policy:</strong> Empower governments and NGOs to design effective Marine Protected Areas (MPAs) with dynamic, real-time biodiversity data.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>Enhancing Climate Models:</strong> Improve the accuracy of global climate projections by integrating complex ocean-atmosphere interaction data.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>Global Collaboration:</strong> Foster international cooperation on ocean conservation by providing a shared, trusted data infrastructure.
                                </ImpactListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-ocean-light">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-light mb-6">Driving a Sustainable Blue Economy</h2>
                            <ul className="space-y-4">
                                <ImpactListItem>
                                    <strong>Sustainable Fisheries:</strong> Enable data-driven fishery management to prevent overfishing and secure coastal livelihoods.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>De-risking Aquaculture:</strong> Identify optimal locations for sustainable aquaculture by modeling environmental stability and disease risk.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>Marine Biotechnology:</strong> Accelerate the discovery of novel marine compounds for pharmaceuticals and biomaterials through genomic data analysis.
                                </ImpactListItem>
                                <ImpactListItem>
                                    <strong>Supporting Renewable Energy:</strong> Inform the optimal placement of offshore wind and tidal energy installations by modeling ocean conditions.
                                </ImpactListItem>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                             <img src="https://picsum.photos/800/600?random=4" alt="Sustainable Industry" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImpactPage;
