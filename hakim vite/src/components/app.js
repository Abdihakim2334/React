// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import About from './about';
import Work from './work';
import Contact from './contact';
import Footer from './Footer';


const App = () => {
   return (
       <Router>
           <Header />
           <Routes>
               <Route path="/" element={<About />} />
               <Route path="/work" element={<Work />} />
               <Route path="/contact" element={<Contact />} />
           </Routes>
           <Footer />
       </Router>
   );
};

export default App;
