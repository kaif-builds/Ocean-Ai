
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ApiDocsSnippet = () => (
    <div className="bg-black rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
        <div className="bg-gray-800 p-3 flex items-center">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-400">GET /api/v1/biodiversity</span>
        </div>
        <pre className="p-6 text-white overflow-x-auto">
            <code>
                <span className="text-purple-400">fetch</span>(<span className="text-green-400">'https://api.oceanai.org/v1/biodiversity?lat=34.05&lon=-118.25&radius=50'</span>, {'{\n'}
                {'  '}headers: {'{\n'}
                {'    '}<span className="text-blue-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span>{'\n'}
                {'  '}{'}'}{'\n'}
                {'}'}).<span className="text-purple-400">then</span>(res {'=>'} res.<span className="text-purple-400">json</span>()){'\n'}
                {'  '}.<span className="text-purple-400">then</span>(data {'=>'} console.<span className="text-purple-400">log</span>(data));
            </code>
        </pre>
    </div>
);


const DevelopersPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">For Developers & Data Scientists</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        Build with the ocean. Access our powerful APIs, contribute to our open-source tools, and join a global community of innovators.
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
                            <h2 className="text-3xl font-bold text-slate-light mb-4">Open Source, Open Science</h2>
                            <p className="text-slate-dark mb-6">
                                We believe that the greatest challenges require collective action. Our platform is built on open-source principles, inviting the global community to contribute, innovate, and build upon our work. Access raw data, use our analytical models, and integrate our insights into your own applications.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="#" className="px-6 py-3 text-center bg-ocean-cyan text-ocean-deep font-bold rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105">
                                    Explore Our APIs
                                </a>
                                <a href="#" className="px-6 py-3 text-center text-ocean-cyan border border-ocean-cyan rounded-md hover:bg-ocean-cyan hover:text-ocean-deep transition-colors duration-300">
                                    Join Our Developer Community
                                </a>
                            </div>
                        </div>
                        <div>
                            <ApiDocsSnippet />
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-20 bg-ocean-light">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-light mb-6">Getting Started is Easy</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-ocean-deep p-6 rounded-lg">
                           <h3 className="text-xl font-bold text-slate-light mb-2"><span className="text-ocean-cyan mr-2">1.</span> Request Access</h3>
                           <p className="text-slate-dark">Sign up for a developer account and get your API key to start exploring our datasets.</p>
                        </div>
                         <div className="bg-ocean-deep p-6 rounded-lg">
                           <h3 className="text-xl font-bold text-slate-light mb-2"><span className="text-ocean-cyan mr-2">2.</span> Read the Docs</h3>
                           <p className="text-slate-dark">Dive into our comprehensive documentation with tutorials, guides, and endpoint references.</p>
                        </div>
                         <div className="bg-ocean-deep p-6 rounded-lg">
                           <h3 className="text-xl font-bold text-slate-light mb-2"><span className="text-ocean-cyan mr-2">3.</span> Start Building</h3>
                           <p className="text-slate-dark">Create your first application, contribute to a project on GitHub, or join a discussion in our community forum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevelopersPage;
