import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className='mainDiv'>
            <div className="textOne">
                <h1>TechNova Solutions</h1>
                <p className="description">
                    TechNova Solutions is a leading software development company specializing
                    in innovative web and mobile applications.
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
