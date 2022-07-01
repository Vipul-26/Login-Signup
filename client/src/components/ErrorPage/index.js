import React from 'react';
import { NavLink } from 'react-router-dom';
import './errorpage.css';

const Errorpage = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>
                            404
                        </h1>
                    </div>
                    <h2>
                        We are sorry, page not found!
                    </h2>
                    <p className="mb-4">
                        The page you are looking is temporarily unavailable.
                    </p>
                    <NavLink to="/">
                        Back To Homepage
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Errorpage;