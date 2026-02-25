import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '../assets/image/Three minimalist .jpg';

const Blog = () => {
    const posts = [
        {
            title: "The Impact of AI on Real Estate Valuation",
            date: "Feb 24, 2026",
            category: "Technology",
            excerpt: "How machine learning models are providing unprecedented accuracy in market predictions."
        },
        {
            title: "Top 5 Immersive Sales Techniques",
            date: "Feb 18, 2026",
            category: "Sales",
            excerpt: "Leveraging VR and digital twins to close high-end property deals faster."
        },
        {
            title: "Sustainable Architecture in the Digital Age",
            date: "Feb 10, 2026",
            category: "Design",
            excerpt: "Using digital simulations to optimize energy efficiency before a single brick is laid."
        }
    ];

    return (
        <section id="blog" style={{ background: '#f5f5f7' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
                    <div>
                        <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Insights & Innovation.</h2>
                        <p style={{ fontSize: '18px' }}>The latest trends in proptech and digital real estate.</p>
                    </div>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#0066cc',
                        fontSize: '17px',
                        fontWeight: 500,
                        cursor: 'pointer'
                    }}>
                        View all articles &gt;
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            style={{
                                background: '#ffffff',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid #d2d2d7',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img src={blogImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0066cc', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                                    {post.category}
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px', lineHeight: '1.3' }}>{post.title}</h3>
                                <p style={{ fontSize: '15px', color: '#86868b', marginBottom: '24px' }}>{post.excerpt}</p>
                                <div style={{ fontSize: '14px', color: '#86868b' }}>{post.date}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
