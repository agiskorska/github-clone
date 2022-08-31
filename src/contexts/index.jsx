import React, { useState, useContext, createContext } from "react";

const ReposContext = createContext();

export const ReposProvider = ({ children }) => {
    const [ repos, setRepos ] = useState();
    
    return (
        <ReposContext.Provider value={{ repos, setRepos }}>
            {children}
        </ReposContext.Provider>
    );
};

export const useRepos = () => useContext(ReposContext);
