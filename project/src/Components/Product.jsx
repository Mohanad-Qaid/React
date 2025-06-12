import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import './Product.css'
import { Link } from 'react-router-dom';
const Product = () => {
    const [disabledones, setDisabledones] = useState([]);
    const dispatch = useDispatch();

    const plants = [
        { id: 1, name: 'Snake Plant', price: 18, category: 'Low-Light' },
        { id: 2, name: 'ZZ Plant', price: 22, category: 'Low-Light' },
        { id: 3, name: 'Fiddle Leaf Fig', price: 30, category: 'Bright-Light' },
        { id: 4, name: 'Monstera Deliciosa', price: 25, category: 'Bright-Light' },
        { id: 5, name: 'Pothos', price: 15, category: 'Easy-Care' },
        { id: 6, name: 'Peace Lily', price: 20, category: 'Easy-Care' },
    ];

    const handleAdding = (plant) => {
        dispatch(addToCart(plant));
        setDisabledones([...disabledones, plant.id]);
    };

    return (
        <div className="productsContainer">
            <h2>Products</h2>
            <ul>
                {plants.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.category} - ${item.price}
                        <button
                            onClick={() => handleAdding(item)}
                            disabled={disabledones.includes(item.id)}
                        >
                            {disabledones.includes(item.id) ? "Added" : "Add to Cart"}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="navigating">
                <Link to="/Shopping">Go To Cart</Link>
                <Link to="/">Landing Page</Link>
            </div>
        </div>
    );
};

export default Product;
