'use client'

import { createContext, useContext, useState, type ReactNode } from "react";
import type React from "react";

interface INavContextProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const NavContext = createContext<INavContextProps | undefined>(undefined);

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <NavContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNav = (): INavContextProps => {
  const context = useContext(NavContext);

  if(!context) {
    throw new Error('useNav must be used within a NavProvider');
  }

  return context;
}