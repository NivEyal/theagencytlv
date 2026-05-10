import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Developments from './pages/Developments';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<div className="min-h-screen bg-navy flex items-center justify-center"><span className="font-playfair text-2xl text-white">Page not found.</span></div>} />
      </Routes>
    </Router>
  );
}

export default App;
