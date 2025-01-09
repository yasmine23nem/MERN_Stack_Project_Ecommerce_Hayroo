import React from 'react';
import './styles/index.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Store</h1>
            <p>Discover our featured products below:</p>
            <div className="featured-products">
                {/* Placeholder for featured products */}
            </div>
            <nav>
                <ul>
                    <li><a href="/products">View Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;