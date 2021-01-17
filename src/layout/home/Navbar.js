import React, { Children } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = ({titulo, Children}) => {
    return (
        <nav className="navbar navbar-expand-sm p-2 mb-3 navbar-dark bg-primary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    {titulo}
                </Link>

                {Children}

                {/* <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/addcart"
                    >
                        <i class="fas fa-shopping-cart"></i>
                    </NavLink>
                </div> */}
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    titulo: PropTypes.string.isRequired
}