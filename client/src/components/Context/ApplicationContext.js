import React, { useState, createContext } from 'react';

const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children, initialState }) => {

    const [userState, setUserState] = useState();

    return (
        <ApplicationContext.Provider value={{ ...initialState, userState, setUserState }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export default ApplicationContext;