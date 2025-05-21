const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {}
});

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'light'
    );

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
