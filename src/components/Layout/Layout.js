import React, { useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const handleTheme = () => setIsDark(!isDark);
    const ThemeColor = isDark ? 'light' : 'dark';

    const theme = {
        isDark,
        handleTheme,
        ThemeColor
    }

    return (
        <ThemeContext.Provider value={theme}>
            { children }
        </ThemeContext.Provider>
    );
};

export default Layout;