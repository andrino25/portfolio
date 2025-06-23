import { useState, useEffect } from 'react'
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/NavBar";
import About from './pages/ABout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.title = "Average Portfolio";

    setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setLoading(false); 
      }, 500); 
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
