import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const totalItems = useSelector((state) =>
        state.cart.cartItem.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <header className="main-header">
            <div className="logo">Green Haven</div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/shopping">
                    <FaShoppingCart />
                    <span className="cart-count">{totalItems}</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
