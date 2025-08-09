import React from 'react';

// Placeholder images - replace with actual blog post images
import blogImg1 from '../assets/img4.jpeg';
import blogImg2 from '../assets/img5.jpeg';
import blogImg3 from '../assets/img6.jpeg';

const BlogSection = () => {
    const blogPosts = [
        {
            image: blogImg1,
            title: 'Top 5 Things to Do in Niagara Falls (Canadian Side)',
            excerpt: 'Planning a trip across the border? Discover the must-see attractions and hidden gems in Niagara Falls, Ontario...',
            link: '#'
        },
        {
            image: blogImg2,
            title: 'Navigating Buffalo Airport: A Traveler\'s Guide',
            excerpt: 'From baggage claims to ground transportation, here\'s everything you need to know for a smooth experience at BUF...',
            link: '#'
        },
        {
            image: blogImg3,
            title: 'Why a Flat-Rate Taxi is Your Best Bet for Airport Transfers',
            excerpt: 'Avoid surge pricing and uncertainty. Learn about the benefits of choosing a flat-rate taxi service for your next trip...',
            link: '#'
        }
    ];

    return (
        <div className="blog-section">
            <div className="container">
                <h2>From Our Blog</h2>
                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <div className="blog-post-card" key={index}>
                            <img src={post.image} alt={post.title} className="blog-post-image" />
                            <div className="blog-post-content">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href={post.link} className="btn-secondary">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection; 