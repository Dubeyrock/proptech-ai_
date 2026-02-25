import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '64px 0',
            borderTop: '1px solid #d2d2d7',
            background: '#f5f5f7'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                    <div style={{ minWidth: '200px' }}>
                        <div style={{ fontWeight: 600, fontSize: '18px', marginBottom: '24px' }}>PropTech</div>
                        <p style={{ fontSize: '14px' }}>Redefining real estate through digital innovation.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform</div>
                            <ul style={{ listStyle: 'none', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>Solutions</li>
                                <li>Digital Twins</li>
                                <li>AI Engine</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</div>
                            <ul style={{ listStyle: 'none', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid #e3e3e8', fontSize: '12px', color: '#86868b' }}>
                    Copyright © 2026 PropTech Inc. All rights reserved.
                    <span style={{ marginLeft: '24px' }}>Privacy Policy</span>
                    <span style={{ marginLeft: '16px' }}>Terms of Use</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
