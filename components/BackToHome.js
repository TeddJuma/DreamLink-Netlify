function BackToHome() {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleClick = () => {
        window.location.hash = '#/';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Only show the button if we're not on the home page
    const isHomePage = window.location.hash === '#/' || window.location.hash === '';

    if (isHomePage) return null;

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-6 left-6 z-40 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            aria-label="Back to home"
        >
            <i className="fas fa-home text-xl"></i>
            <span>Home</span>
        </button>
    );
}