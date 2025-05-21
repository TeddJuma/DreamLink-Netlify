function App() {
    return (
        <ThemeProvider>
            <div data-name="app-root">
                <Header />
                <main>
                    <Router />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
} catch (error) {
    reportError(error);
}
