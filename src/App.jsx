import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
