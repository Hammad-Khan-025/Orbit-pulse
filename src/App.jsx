import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ITManagedServices from './pages/services/ITManagedServices';
import ITEndUserSupport from './pages/services/ITEndUserSupport';
import ITInfrastructureServices from './pages/services/ITInfrastructureServices';
import WirelessSurvey from './pages/services/WirelessSurvey';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/IT-managed-services" element={<ITManagedServices />} /> 
        <Route path="/services/IT-end-user-support" element={<ITEndUserSupport />} />
        <Route path="/services/IT-infrastructure-management" element={<ITInfrastructureServices />} /> 
        <Route path="/services/wireless-survey" element={<WirelessSurvey />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
