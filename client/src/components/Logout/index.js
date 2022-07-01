import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import ApplicationContext from '../Context/ApplicationContext';
import './logout.css';
import thankyou from '../../images/thankyou.png';
import { NavLink } from 'react-router-dom';

const Logout = () => {

    const { setUserState } = useContext(ApplicationContext);
    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            setUserState(false);
            history.push('/login', { replace: true });
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return (
        <section className="logout">
            <div className="logout-container mt-5">
                <div className="logout-image">
                    <img src={thankyou} alt="thank-you" />
                </div>
                <p>
                    You have be successfully logged out.
                </p>
                <NavLink to="/" className="logout-a">
                    Back To Homepage
                </NavLink>
            </div>
        </section>
    );
};

export default Logout;