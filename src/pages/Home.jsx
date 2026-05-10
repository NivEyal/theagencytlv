import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DevelopmentsTeaser from '../components/home/DevelopmentsTeaser';
import AboutTeaser from '../components/home/AboutTeaser';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <DevelopmentsTeaser />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}