function Footer() {
    const handleFooterClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer data-name="site-footer" className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold mb-4">DreamLink Netlify Solutions</h3>
                        <p className="text-gray-400">Empowering businesses through innovative digital solutions.</p>
                    </div>
                    
                    <div data-name="footer-links">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#/" onClick={handleFooterClick} className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#/services" onClick={handleFooterClick} className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#/portfolio" onClick={handleFooterClick} className="text-gray-400 hover:text-white">Portfolio</a></li>
                        </ul>
                    </div>
                    
                    <div data-name="footer-legal">
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#/privacy" onClick={handleFooterClick} className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#/terms" onClick={handleFooterClick} className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    
                    <div data-name="footer-contact">
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p><i className="fas fa-envelope mr-2"></i> contact@techcraft.com</p>
                            <p><i className="fas fa-phone mr-2"></i> +254 701-105-908</p>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 DreamLink Netlify Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
