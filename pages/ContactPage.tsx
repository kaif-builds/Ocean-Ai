
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TwitterIcon, LinkedInIcon } from '../components/Icons';

const ContactPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Get In Touch</h1>
                    <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
                        We're always looking for new partners, collaborators, and contributors. Let's connect.
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
                    <div className="max-w-4xl mx-auto bg-ocean-light p-8 md:p-12 rounded-lg shadow-2xl">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-slate-light mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 bg-ocean-deep text-slate-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-cyan" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-slate-light mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 bg-ocean-deep text-slate-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-cyan" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="inquiry" className="block text-slate-light mb-2">Reason for Inquiry</label>
                                <select id="inquiry" className="w-full px-4 py-2 bg-ocean-deep text-slate-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-cyan">
                                    <option>Research Partnership</option>
                                    <option>Data Contribution</option>
                                    <option>Media Inquiry</option>
                                    <option>General Question</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-slate-light mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-2 bg-ocean-deep text-slate-light border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-cyan"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-6 py-3 bg-ocean-cyan text-ocean-deep font-bold rounded-md hover:bg-opacity-80 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold text-slate-light mb-4">Follow us on social media</h3>
                        <div className="flex justify-center space-x-6">
                           <a href="#" className="text-slate-dark hover:text-ocean-cyan transition-colors"><TwitterIcon className="h-8 w-8" /></a>
                           <a href="#" className="text-slate-dark hover:text-ocean-cyan transition-colors"><LinkedInIcon className="h-8 w-8" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
