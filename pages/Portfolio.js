function Portfolio() {
    return (
        <div data-name="portfolio-page" className="pt-20">
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
                    <p className="text-xl">Showcasing our best work and success stories</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="https://ecommerce-demo.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/800/600"
                                title="E-Commerce Platform"
                                description="A modern e-commerce solution with advanced features and seamless user experience."
                                tags={["React", "Node.js", "MongoDB"]}
                            />
                        </a>
                        <a href="https://healthcare-app.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/801/600"
                                title="Healthcare App"
                                description="Comprehensive healthcare management system with real-time monitoring."
                                tags={["React Native", "Firebase"]}
                            />
                        </a>
                        <a href="https://fintech-dashboard.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/802/600"
                                title="FinTech Dashboard"
                                description="Advanced financial data visualization and analysis platform."
                                tags={["Vue.js", "Python", "D3.js"]}
                            />
                        </a>
                        <a href="https://iot-platform.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/803/600"
                                title="IoT Platform"
                                description="Smart home automation system with AI-powered controls."
                                tags={["IoT", "Python", "TensorFlow"]}
                            />
                        </a>
                        <a href="https://lms.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/804/600"
                                title="Learning Management"
                                description="Online education platform with interactive learning features."
                                tags={["React", "Django", "PostgreSQL"]}
                            />
                        </a>
                        <a href="https://supply-chain.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/805/600"
                                title="Supply Chain System"
                                description="Blockchain-based supply chain management solution."
                                tags={["Ethereum", "Node.js", "Web3"]}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
