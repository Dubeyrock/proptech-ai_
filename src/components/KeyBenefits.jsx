import React from 'react';

const KeyBenefits = () => {
    const benefits = [
        {
            title: "Higher Conversion",
            value: "35%",
            desc: "Increase in lead-to-sale conversion rates with immersive tooling."
        },
        {
            title: "Faster Sales",
            value: "2x",
            desc: "Accelerate the sales cycle by providing instant answers and visualizations."
        },
        {
            title: "Global Reach",
            value: "24/7",
            desc: "Enable international buyers to experience property without traveling."
        }
    ];

    return (
        <section id="benefits" style={{ background: '#f5f5f7' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {benefits.map((b, i) => (
                        <div key={i} style={{
                            background: '#ffffff',
                            padding: '48px',
                            borderRadius: '24px',
                            border: '1px solid #d2d2d7',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '48px', fontWeight: 700, color: '#0066cc', marginBottom: '12px' }}>
                                {b.value}
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>{b.title}</h3>
                            <p style={{ fontSize: '16px' }}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;
