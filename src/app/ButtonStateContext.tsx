"use client";
import React, { createContext, useState } from 'react';

type ButtonState = {
    activeButton: string;
    setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

export const ButtonStateContext = createContext<ButtonState>({
    activeButton: '',
    setActiveButton: () => {},
});

export default function ButtonStateProvider({ children } : any) {

    const [activeButton, setActiveButton] = useState<string>('Geração de Leads');

    return (
        <ButtonStateContext.Provider value={{ activeButton, setActiveButton}}>
            {children}
        </ButtonStateContext.Provider>
    );
}

