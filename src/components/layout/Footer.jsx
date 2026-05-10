import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  About: [
    { label: 'Our Story', path: '/about' },
    { label: 'Our Team', path: '/about' },
    { label: 'Why Choose Us', path: '/about' },
  ],
  Services: [
    { label: 'Buying & Selling', path: '/services' },
    { label: 'Short Term Rentals', path: '/services' },
    { label: 'Long Term Rentals', path: '/services' },
    { label: 'Holiday Home Management', path: '/services' },
  ],
  Developments: [
    { label: 'Tel Aviv', path: '/developments' },
    { label: 'Jerusalem', path: '/developments' },
    { label: 'Sharon Area', path: '/developments' },
  ],
  Contact: [
    { label: '+972 52 777 1715', path: 'tel:+972527771715', external: true },
    { label: 'info@theagencytlv.com', path: 'mailto:info@theagencytlv.com', external: true },
    { label: 'Tel Aviv, Israel', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-playfair text-2xl text-white font-semibold">
              The Agency <span className="text-gold">TLV</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 font-inter">
              Tel Aviv's most trusted boutique property management and real estate firm since 2009.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-montserrat text-xs uppercase tracking-widest text-gold mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        className="text-sm text-white/50 hover:text-white transition-colors font-inter"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-white/50 hover:text-white transition-colors font-inter"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-inter">
            © 2026 The Agency TLV. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors font-inter">
              Privacy Policy
            </Link>
            <div className="flex items-center gap-4 text-white/30">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                <span className="text-xs">+972 52 777 1715</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3" />
                <span className="text-xs">info@theagencytlv.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}