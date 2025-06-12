import React from "react";
import { clearCart, increasingQuantity, decreasingQuantity, removeFromCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Shopping.css'
const Shopping = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItem);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const handleIncreasing = (plant) => {
        dispatch(increasingQuantity(plant))
    }
    const handleDecreasing = (plant) => {
        dispatch(decreasingQuantity(plant))
    }
    const handleRemoving = (plant) => {
        dispatch(removeFromCart(plant))
    }
    const handleClearing = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <ul>
                {
                    cartItems.map((item) => (
                        <li key={item.id}>
                            <p>{item.name} - {item.category} - ${item.price}</p>
                            <p><button className="quant" onClick={() => { handleIncreasing(item) }}>+</button><span>{item.quantity}</span><button className="quant" onClick={() => { handleDecreasing(item) }}>-</button></p>
                            <button className="removing" onClick={() => { handleRemoving(item) }}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <div className="totals">
                <button onClick={handleClearing}>Clear Cart</button>
                <p>{totalItems}item</p>
                <p>${totalPrice}</p>
            </div>
            <div className="ending">
                <button className="Underdevelping">Checkout <span className="hiddenMessage">Coming Soon</span></button>
                <button
                    className="starting"
                // onClick={() => navigate('/product')}
                >
                    <Link to="/product">Contiue</Link>
                </button>
            </div>
        </div>
    );
}
export default Shopping;