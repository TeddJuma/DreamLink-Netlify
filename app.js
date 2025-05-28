function App() {
    return (
        <ThemeProvider>
            <div data-name="app-root">
                <Header />
                <main>
                    <Router />
                </main>
                <Footer />
                <FloatingContact />
            </div>
        </ThemeProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
