import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import How from './components/How';
import FAQ from './components/Faq';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Welcome />} />
        <Route path="/howitworks" element={<How />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;