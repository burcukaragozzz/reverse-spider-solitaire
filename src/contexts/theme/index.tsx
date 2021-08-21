import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { light, dark } from 'definitions/styled-components';
import { ExtendedTheme, ThemeState } from './types';

export const ThemeContext = createContext({} as ThemeState);

export const StyledThemeProvider: React.FC = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleCurrentTheme = () => {
        setCurrentTheme((theme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    const themeObject = currentTheme === 'light' ? light : dark;

    const extendedTheme: ExtendedTheme = {
        ...themeObject,
        name: currentTheme,
    };

    const contextValues = { theme: extendedTheme, toggle: toggleCurrentTheme };

    return (
        <ThemeContext.Provider value={contextValues}>
            <ThemeProvider theme={extendedTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
