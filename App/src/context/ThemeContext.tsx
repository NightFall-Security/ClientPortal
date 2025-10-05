import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Récupère le thème système (préférence utilisateur)
    const getSystemTheme = (): Theme => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    // Initialise le thème depuis localStorage ou système
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || saved === 'light' ? (saved as Theme) : getSystemTheme();
    });

    // Applique la classe CSS au document
    const applyTheme = (theme: Theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Toggle entre light et dark
    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            applyTheme(next);
            return next;
        });
    };

    // Applique le thème à chaque changement
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
