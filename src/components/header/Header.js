import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>FoodMart</h1>
                <p>Your lifestyle Partner</p>
            </div>
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/foods">Foods</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <input type="text" placeholder='Search your Favourite Food' />
            </div>
        </div>
    );
};

export default Header;