function Router() {
    const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || '/');

    React.useEffect(() => {
        const onHashChange = () => {
            setCurrentPath(window.location.hash.slice(1) || '/');
        };

        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    try {
        switch(currentPath) {
            case '/':
                return React.createElement(Home);
            case '/services':
                return React.createElement(Services);
            case '/portfolio':
                return React.createElement(Portfolio);
            case '/privacy':
                return React.createElement(Privacy);
            case '/terms':
                return React.createElement(Terms);
            case '/contact':
                return React.createElement(Contact);
            default:
                return React.createElement(Home);
        }
    } catch (error) {
        reportError(error);
        return React.createElement('div', null, 'Error loading page');
    }
}
