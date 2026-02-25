import React from 'react';

const Navbar = () => {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            height: '52px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <div style={{ fontWeight: 600, fontSize: '18px' }}>PropTech</div>
                <div style={{ display: 'flex', gap: '32px', fontSize: '12px', color: '#515154' }}>
                    <a href="#overview" style={{ textDecoration: 'none', color: 'inherit' }}>Solutions</a>
                    <a href="#benefits" style={{ textDecoration: 'none', color: 'inherit' }}>Benefits</a>
                    <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                    <a href="#blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a>
                    <a href="#visual" style={{ textDecoration: 'none', color: 'inherit' }}>Platform</a>
                </div>
                <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }}>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
