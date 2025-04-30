import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import How from './components/How';
import Contact from './components/Contact';
import Utility from './components/Utility';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Welcome />} />
        <Route path="/howitworks" element={<How />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/utility" element={<Utility />} />
      </Routes>
    </Router>
  );
};

export default App;