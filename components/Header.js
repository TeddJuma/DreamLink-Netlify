function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
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

    const handleNavClick = () => {
        setIsOpen(false);
        setIsResourcesOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header data-name="site-header" className={`fixed w-full z-50 px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="nav-glass container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img 
                            src="images\logo - tp bg.png" 
                            alt="TechCraft Logo" 
                            className="company-logo"
                        />
                        <div data-name="logo" className="text-2xl font-bold text-white">
                            DreamLink Netlify Solutions
                        </div>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8 ">
                        <a 
                            data-name="home-link" 
                            href="#/" 
                            className="nav-link nav-text"
                            onClick={handleNavClick}
                        >
                            Home
                        </a>
                        <a 
                            data-name="services-link" 
                            href="#/services" 
                            className="nav-link nav-text"
                            onClick={handleNavClick}
                        >
                            Services
                        </a>
                        <a 
                            data-name="portfolio-link" 
                            href="#/portfolio" 
                            className="nav-link nav-text"
                            onClick={handleNavClick}
                        >
                            Portfolio
                        </a>
                        
                        <div className="relative">
                            <button 
                                className="nav-link nav-text flex items-center"
                                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                            >
                                Resources
                                <i className={`fas fa-chevron-down ml-2 text-sm transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}></i>
                            </button>
                            
                            {isResourcesOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 theme-card rounded-lg shadow-lg py-2">
                                    <a 
                                        href="#/privacy" 
                                        className="block px-4 py-2 text-white hover:text-primary-light"
                                        onClick={handleNavClick}
                                    >
                                        Privacy Policy
                                    </a>
                                    <a 
                                        href="#/terms" 
                                        className="block px-4 py-2 text-white hover:text-primary-light"
                                        onClick={handleNavClick}
                                    >
                                        Terms of Service
                                    </a>
                                </div>
                            )}
                        </div>
                        
                        <a 
                            href="#/contact" 
                            className="theme-bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300"
                            onClick={handleNavClick}
                        >
                            Contact Us
                        </a>
                    </div>
                    
                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
                
                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden mt-4">
                        <a 
                            href="#/" 
                            className="block py-2 nav-text"
                            onClick={handleNavClick}
                        >
                            Home
                        </a>
                        <a 
                            href="#/services" 
                            className="block py-2 nav-text"
                            onClick={handleNavClick}
                        >
                            Services
                        </a>
                        <a 
                            href="#/portfolio" 
                            className="block py-2 nav-text"
                            onClick={handleNavClick}
                        >
                            Portfolio
                        </a>
                        <button 
                            className="w-full text-left py-2 nav-text flex items-center justify-between"
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        >
                            Resources
                            <i className={`fas fa-chevron-down ml-2 text-sm transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        {isResourcesOpen && (
                            <div className="pl-4">
                                <a 
                                    href="#/privacy" 
                                    className="block py-2 nav-text"
                                    onClick={handleNavClick}
                                >
                                    Privacy Policy
                                </a>
                                <a 
                                    href="#/terms" 
                                    className="block py-2 nav-text"
                                    onClick={handleNavClick}
                                >
                                    Terms of Service
                                </a>
                            </div>
                        )}
                        <a 
                            href="#/contact" 
                            className="block py-2 nav-text"
                            onClick={handleNavClick}
                        >
                            Contact Us
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
