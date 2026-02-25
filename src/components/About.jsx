import React from 'react';
import { motion } from 'framer-motion';
import tabletImage from '../assets/image/high‑end tablet.jpg';

const About = () => {
    return (
        <section id="about" style={{ background: '#ffffff', padding: '120px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '40px', marginBottom: '32px' }}>We believe the future of property is digital.</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
                            PropTech was founded on a simple premise: real estate should be as liquid, transparent, and accessible as any other asset class. Our journey started in 2024 with a vision to eliminate the friction in property sales.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            Today, we empower thousands of developers and agencies worldwide to showcase their visions using the most advanced AI and visualization technology available. We aren't just building software; we're building the infrastructure for the next century of real estate.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{
                            height: '500px',
                            borderRadius: '32px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img
                            src={tabletImage}
                            alt="PropTech Platform on Tablet"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '24px',
                            background: 'rgba(255, 255, 255, 0.9)',
                            padding: '12px 24px',
                            borderRadius: '980px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#1d1d1f'
                        }}>
                            Immersive Control
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
