import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';
import SectionLabel from '../components/shared/SectionLabel';

const developments = [
  {
    title: 'Rothschild Residences',
    location: 'Tel Aviv',
    price: 'From ₪4,500,000',
    bedrooms: '2-5 Bedrooms',
    status: 'Under Construction',
    description: 'A landmark luxury development on one of Tel Aviv\'s most prestigious boulevards. Floor-to-ceiling windows, premium finishes, and breathtaking Mediterranean views from every unit.',
    image: 'https://media.base44.com/images/public/6a009dec77ca4aae6dfec005/4e50c33c8_generated_a2b93c91.png',
    features: ['Concierge service', 'Private parking', 'Rooftop terrace', 'Smart home technology'],
  },
  {
    title: 'Old City Heritage',
    location: 'Jerusalem',
    price: 'From ₪3,200,000',
    bedrooms: '1-4 Bedrooms',
    status: 'Pre-Sale',
    description: 'A sensitive restoration of historic Jerusalem stone buildings, blending centuries of character with modern luxury. Located steps from the Old City walls.',
    image: 'https://media.base44.com/images/public/6a009dec77ca4aae6dfec005/9f72b5365_generated_989134e9.png',
    features: ['Historic preservation', 'Private gardens', 'Underground parking', 'Walking distance to Old City'],
  },
  {
    title: 'Coastal Heights',
    location: 'Sharon Area',
    price: 'From ₪2,800,000',
    bedrooms: '3-6 Bedrooms',
    status: 'Now Selling',
    description: 'Contemporary coastal living at its finest. Spacious villas and penthouses with private gardens, pools, and unobstructed sea views along Israel\'s stunning Sharon coastline.',
    image: 'https://media.base44.com/images/public/6a009dec77ca4aae6dfec005/092d8b542_generated_287a6b27.png',
    features: ['Private pools', 'Sea views', 'Landscaped gardens', 'Community amenities'],
  },
];

export default function Developments() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel light>Developments</SectionLabel>
          <FadeIn>
            <h1 className="mt-4 font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              Premium New Developments in Israel
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Discover handpicked new construction projects across Israel's most sought-after locations. Each development is vetted by our team for quality, value, and potential.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Developments List */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 md:space-y-28">
          {developments.map((dev, i) => (
            <FadeIn key={dev.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                i % 2 === 1 ? '' : ''
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={dev.image}
                    alt={dev.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-navy/80 backdrop-blur-sm text-white text-xs font-montserrat uppercase tracking-wider rounded-sm">
                      {dev.status}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="font-montserrat text-xs uppercase tracking-wider">{dev.location}</span>
                  </div>
                  <h2 className="font-playfair text-2xl md:text-3xl text-foreground font-medium">
                    {dev.title}
                  </h2>
                  <p className="mt-4 font-inter text-base text-muted-foreground leading-relaxed">
                    {dev.description}
                  </p>

                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <p className="font-montserrat text-xs uppercase tracking-wider text-muted-foreground">Starting From</p>
                      <p className="font-playfair text-xl text-foreground font-medium mt-0.5">{dev.price}</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="font-montserrat text-xs uppercase tracking-wider text-muted-foreground">Configuration</p>
                      <p className="font-inter text-sm text-foreground mt-0.5">{dev.bedrooms}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {dev.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 bg-muted text-xs font-inter text-muted-foreground rounded-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-8 text-gold font-montserrat text-xs uppercase tracking-wider hover:gap-3 transition-all duration-300 group"
                  >
                    Enquire About This Development
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <Building2 className="w-8 h-8 text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium">
              Looking for something specific?
            </h2>
            <p className="mt-4 font-inter text-white/50">
              We have access to off-market developments and pre-sale opportunities. Let us know what you're looking for.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-gold text-navy font-montserrat text-xs uppercase tracking-wider hover:bg-gold/90 transition-all duration-300 rounded-sm"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}