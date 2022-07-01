import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './about.css';

const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const aboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    };

    useEffect(() => {
        aboutPage();
    }, []);

    return (
        <>
            <div className="emp-profile">
                <form method="GET">
                    <h4>
                        Hi {userData.name}
                    </h4>
                    <h6>
                        Profile Details
                    </h6>
                    <div className='emp-div'>
                        <div className="mainDiv mt-2">
                            <div className='firstDiv'>
                                <p>
                                    Name:
                                </p>
                                <p>
                                    Email:
                                </p>
                                <p>
                                    Phone:
                                </p>
                                <p>
                                    Profession:
                                </p>
                            </div>
                            <div className='secondDiv'>
                                <p>
                                    {userData.name}
                                </p>
                                <p>
                                    {userData.email}
                                </p>
                                <p>
                                    {userData.phone}
                                </p>
                                <p>
                                    {userData.work}
                                </p>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/">
                        Back To Homepage
                    </NavLink>
                </form>
            </div>
        </>
    );
};

export default About;