import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../services/AuthContext';

function Navbar() {
  const { isLoggedIn, role, isManager, isCustomer, isAdmin, handleLogout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        {isLoggedIn ? (
            <>
                {isAdmin && (
                <li>
                    <NavLink to="/admin">Admin Dashboard</NavLink>
                </li>
                )}
                <li>
                <button onClick={handleLogout}>Logout</button>
                </li>
            </>
            ) : (
            <>
                <li>
                <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                <NavLink to="/register">Register</NavLink>
                </li>
            </>
        )}
      </ul>
    </nav>
  );
}

export { Navbar };
