import React from 'react';

const CTASection = () => {
    return (
        <section style={{
            background: '#1d1d1f',
            color: 'white',
            textAlign: 'center',
            padding: '120px 0'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '48px', marginBottom: '24px', color: 'white' }}>
                    Ready to lead the market?
                </h2>
                <p style={{ color: '#86868b', fontSize: '21px', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                    Join the most innovative proptech platform and redefine how you sell property.
                </p>
                <button className="btn-primary" style={{ background: 'white', color: '#1d1d1f', padding: '16px 40px', fontSize: '18px' }}>
                    Start Your Free Trial
                </button>
                <div style={{ marginTop: '32px' }}>
                    <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '17px' }}>Contact Sales &gt;</a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
