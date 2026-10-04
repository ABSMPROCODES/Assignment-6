"use client";

import React, { createContext, useState,} from 'react';


 export const Workcontext = createContext({});



  const WorkcontextProvider = ({ children } : { children: React.ReactNode }) => {
    const [myplan, setMyplan] = useState([]);
    const [mysaved, setMysaved] = useState([]);

    const sharedData = {
        myplan,
        setMyplan,
        mysaved,
        setMysaved,
    };

  return <Workcontext.Provider value={sharedData}>{children}</Workcontext.Provider>;
};

export default WorkcontextProvider;