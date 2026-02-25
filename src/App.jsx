import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import KeyBenefits from './components/KeyBenefits';
import About from './components/About';
import Blog from './components/Blog';
import VisualInteraction from './components/VisualInteraction';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <ProductOverview />
            <KeyBenefits />
            <About />
            <Blog />
            <VisualInteraction />
            <CTASection />
            <Footer />
        </div>
    );
}

export default App;
