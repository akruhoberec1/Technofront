import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar()  {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };