import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VisualInteraction = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);

    const hotspots = [
        { id: 1, x: '30%', y: '40%', label: 'Smart Lighting Control', detail: 'Adjust intensity and color temp via AI.' },
        { id: 2, x: '60%', y: '25%', label: 'Virtual Furniture', detail: 'Swap styles instantly with one click.' },
        { id: 3, x: '75%', y: '65%', label: 'Dynamic Materials', detail: 'Toggle between marble, oak, or concrete.' }
    ];

    return (
        <section id="visual" style={{ background: '#ffffff', overflow: 'hidden' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Experience the difference.</h2>
                <p style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
                    Interactive property explorers allow buyers to customize their future home in real-time.
                </p>

                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    background: 'linear-gradient(135deg, #e3e3e8 0%, #f5f5f7 100%)',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #d2d2d7'
                }}>
                    <div style={{ fontSize: '120px', opacity: 0.1, fontWeight: 800 }}>VIRTUAL TOUR</div>

                    {hotspots.map((spot) => (
                        <div key={spot.id} style={{
                            position: 'absolute',
                            left: spot.x,
                            top: spot.y,
                            zIndex: 10
                        }}>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: '#0066cc',
                                    border: '4px solid white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    cursor: 'pointer'
                                }}
                            />
                            <AnimatePresence>
                                {activeHotspot === spot.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                        style={{
                                            position: 'absolute',
                                            top: '35px',
                                            left: '-100px',
                                            width: '200px',
                                            background: 'white',
                                            padding: '16px',
                                            borderRadius: '12px',
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{spot.label}</div>
                                        <div style={{ fontSize: '12px', color: '#86868b' }}>{spot.detail}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    <div style={{ position: 'absolute', bottom: '24px', left: '24px', color: '#86868b', fontSize: '12px' }}>
                        Click the pulse points to interact
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualInteraction;
