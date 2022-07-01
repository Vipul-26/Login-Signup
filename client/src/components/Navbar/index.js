import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import './navbar.css';
import ApplicationContext from '../Context/ApplicationContext';

const Navbar = () => {

    const { userState } = useContext(ApplicationContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="mern-logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {userState ?
                            <>
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/about">
                                        AboutMe
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/logout">
                                        Logout
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item active">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/about">
                                        AboutMe
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active-page" className="nav-link" to="/signup">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;