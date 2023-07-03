"use client";
import React, { createContext, useState } from 'react';

export const ButtonStateContext = createContext('');

export default function ButtonStateProvider({ children } : any) {

    const [activeButton, setActiveButton] = useState<string>('Geração de Leads');

    return (
        <ButtonStateContext.Provider value={{ activeButton, setActiveButton}}>
            {children}
        </ButtonStateContext.Provider>
    );
}

