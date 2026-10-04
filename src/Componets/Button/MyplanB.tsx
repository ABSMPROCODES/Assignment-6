"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Icards } from "@/types/cardstype";

export interface WorkContextType {
  myplan: Icards[];
  mysaved: Icards[];
  setMyplan: React.Dispatch<React.SetStateAction<Icards[]>>;
  setMysaved: React.Dispatch<React.SetStateAction<Icards[]>>;
}

export const Workcontext = createContext<WorkContextType>({
  myplan: [],
  mysaved: [],
  setMyplan: () => {},
  setMysaved: () => {},
});

export const WorkContextProvider = ({ children }: { children: ReactNode }) => {
  const [myplan, setMyplan] = useState<Icards[]>([]);
  const [mysaved, setMysaved] = useState<Icards[]>([]);

  return (
    <Workcontext.Provider
      value={{
        myplan,
        mysaved,
        setMyplan,
        setMysaved,
      }}
    >
      {children}
    </Workcontext.Provider>
  );
};

export default WorkContextProvider;