import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Heart, ArrowRight } from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';
import SectionLabel from '../components/shared/SectionLabel';

const values = [
  { icon: Shield, title: 'Integrity', description: 'We operate with complete transparency. Every decision we make is in our clients\' best interest.' },
  { icon: Users, title: 'Personal Service', description: 'Every client is assigned a dedicated property manager who knows their property inside and out.' },
  { icon: Award, title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we do, from property visits to reporting.' },
  { icon: Heart, title: 'Commitment', description: 'We treat every property as if it were our own. Your investment is our priority.' },
];

const milestones = [
  { year: '1978', text: 'Selwyn makes Aliyah from South Africa to Israel' },
  { year: '2009', text: 'The Agency TLV officially established' },
  { year: '2014', text: 'Expanded into short-term rental management' },
  { year: '2018', text: 'Reached 300+ managed properties milestone' },
  { year: '2022', text: 'Serving clients from 3 continents' },
  { year: '2026', text: '500+ properties under management' },
];

export default function About() {
  return (
    <>
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <SectionLabel light>About Us</SectionLabel>
          <FadeIn>
            <h1 className="mt-6 font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight" style={{ letterSpacing: '-0.022em' }}>
              Built on Trust.<br />Driven by Results.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 font-inter text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              For over 15 years, The Agency TLV has been the trusted partner for international property owners in Israel.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(6rem, 12vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 12rem)', backgroundColor: '#F5F2EC' }}>
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <FadeIn direction="right">
              <img
                src="https://media.base44.com/images/public/6a009dec77ca4aae6dfec005/d1e9f2849_generated_0a14d89b.png"
                alt="The Agency TLV founder"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4', filter: 'contrast(1.06) saturate(0.85)' }}
              />
            </FadeIn>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <FadeIn>
                <h2 className="mt-5 font-playfair text-4xl md:text-5xl text-foreground font-medium leading-tight" style={{ letterSpacing: '-0.018em' }}>
                  From South Africa<br />to Tel Aviv
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-8 space-y-5 font-inter text-base md:text-lg text-foreground/70 leading-relaxed" style={{ maxWidth: '38ch' }}>
                  <p>The Agency TLV was founded by Selwyn, who made Aliyah from South Africa in 1978. What began as helping friends and family manage their Israeli properties evolved into something much larger.</p>
                  <p>Over 15+ years we've built Israel's most trusted boutique property firm. Our clients span the UK, USA, South Africa, France, and beyond — united by the need for a reliable, English-speaking partner on the ground.</p>
                  <p>We understand the unique challenges of managing property from abroad. That's why we offer personal service and transparency that larger agencies simply cannot match.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(6rem, 12vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 12rem)', backgroundColor: '#EDE8DE' }}>
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="mb-16 md:mb-20">
            <SectionLabel>Our Values</SectionLabel>
            <FadeIn>
              <h2 className="mt-5 font-playfair text-4xl md:text-5xl text-foreground font-medium" style={{ letterSpacing: '-0.018em' }}>
                What We Stand For
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="bg-white/60 p-10 lg:p-12" style={{ borderLeft: '1px solid rgba(184,150,90,0.12)' }}>
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center mb-7">
                    <value.icon className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl text-foreground font-medium mb-4">{value.title}</h3>
                  <p className="font-inter text-base text-foreground/65 leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(6rem, 12vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 12rem)' }} className="bg-navy">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <SectionLabel light>Our Journey</SectionLabel>
            <FadeIn>
              <h2 className="mt-5 font-playfair text-4xl md:text-5xl text-white font-medium" style={{ letterSpacing: '-0.018em' }}>
                Key Milestones
              </h2>
            </FadeIn>
          </div>
          <div>
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.07}>
                <div className="flex items-start gap-8 md:gap-14 py-7 border-b border-white/8 last:border-0">
                  <span className="font-playfair text-3xl md:text-4xl text-gold font-medium min-w-[90px]">{m.year}</span>
                  <p className="font-inter text-base md:text-lg text-white/65 pt-2 leading-relaxed">{m.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)', backgroundColor: '#F5F2EC', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-8">
          <FadeIn>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-medium" style={{ letterSpacing: '-0.018em' }}>
              Ready to work with us?
            </h2>
            <p className="mt-5 font-inter text-lg text-foreground/60">We'd love to hear about your property needs.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-navy text-white font-inter text-xs uppercase tracking-wider hover:bg-navy/85 transition-all duration-400"
              style={{ letterSpacing: '0.22em' }}
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
