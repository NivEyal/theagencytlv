import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-navy">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-playfair font-light text-gold/30">404</h1>
        <div className="h-px w-16 bg-gold/20 mx-auto" />
        <h2 className="text-2xl font-playfair font-medium text-white">Page Not Found</h2>
        <p className="text-white/50 font-inter leading-relaxed">
          The page <span className="text-white/70">"{pageName}"</span> could not be found.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 inline-flex items-center px-6 py-3 text-xs font-montserrat uppercase tracking-wider text-navy bg-gold hover:bg-gold/90 rounded-sm transition-colors duration-300"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
