import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsBanner from '../components/NewsBanner';
import ClientLogos from '../components/ClientLogos';
import ValueProposition from '../components/ValueProposition';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Vision from '../components/Vision';
import Compliance from '../components/Compliance';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsBanner />
      <Hero />
      <ClientLogos />
      <ValueProposition />
      <Features />
      <Solutions />
      <Vision />
      <Compliance />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;