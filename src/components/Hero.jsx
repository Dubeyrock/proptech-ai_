import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/image/minimalist photo.jpg';

const Hero = () => {
    return (
        <section style={{
            textAlign: 'center',
            background: 'radial-gradient(circle at top, #f5f5f7 0%, #ffffff 100%)',
            paddingTop: '160px'
        }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ marginBottom: '24px' }}
                >
                    Better experiences,<br />made for property.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    style={{
                        fontSize: '24px',
                        maxWidth: '600px',
                        margin: '0 auto 48px'
                    }}
                >
                    Transform real estate sales with AI-powered visualization and immersive digital tools.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ marginBottom: '64px' }}
                >
                    <button className="btn-primary" style={{ fontSize: '17px', padding: '15px 32px' }}>
                        Book a Demo
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
                    }}
                >
                    <img src={heroImage} alt="Premium Real Estate" style={{ width: '100%', display: 'block' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
