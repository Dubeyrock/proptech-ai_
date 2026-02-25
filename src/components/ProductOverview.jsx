import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Eye, Zap } from 'lucide-react';
import handImage from '../assets/image/person’s hand.jpg';

const ProductOverview = () => {
    const features = [
        {
            icon: <Layout size={32} color="#0066cc" />,
            title: "Interactive Sales Tools",
            desc: "Empower your sales team with dynamic digital brochures and live inventory management."
        },
        {
            icon: <Eye size={32} color="#0066cc" />,
            title: "Immersive Experiences",
            desc: "Offer 3D walkthroughs and VR property tours that bring spaces to life from anywhere."
        },
        {
            icon: <Zap size={32} color="#0066cc" />,
            title: "AI-Powered Visualization",
            desc: "Instantly visualize furniture, finishes, and layout variations with our proprietary AI engine."
        }
    ];

    return (
        <section id="overview" style={{ background: '#ffffff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
                    <div>
                        <h2 style={{ marginBottom: '32px', fontSize: '40px' }}>
                            Designed for the future of sales.
                        </h2>
                        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                            Our platform combines human intuition with machine precision to create closing experiences that were previously impossible.
                        </p>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        }}>
                            {features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ flexShrink: 0 }}>{f.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: 600 }}>{f.title}</h3>
                                        <p style={{ fontSize: '16px', color: '#86868b' }}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '32px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                    }}>
                        <img src={handImage} alt="Interaction" style={{ width: '100%', display: 'block' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
