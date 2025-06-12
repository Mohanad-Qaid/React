import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className='mainDiv'>
            <div className="textOne">
                <h1>Plants Store</h1>
                <p className="description">
                    Welcome to Plants Store — your one-stop shop for beautiful, healthy plants and gardening essentials.
                    Explore our wide selection of indoor and outdoor plants to brighten your home and garden.
                </p>
            </div>
            <button
                className="starting"
                onClick={() => navigate('/product')}
            >
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;
