function Home() {
    return (
        <div data-name="home-page">
            <Hero />
            
            <section className="py-20 theme-section">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 theme-heading">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon="fas fa-laptop-code"
                            title="Web Development"
                            description="Custom web solutions built with cutting-edge technologies."
                        />
                        <ServiceCard 
                            icon="fas fa-mobile-alt"
                            title="Mobile Apps"
                            description="Native and cross-platform mobile applications."
                        />
                        <ServiceCard 
                            icon="fas fa-shield-alt"
                            title="Cybersecurity"
                            description="Protecting your digital assets with advanced security measures."
                        />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 theme-heading">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="https://ecommerce-demo.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/800/600"
                                title="E-Commerce Platform"
                                description="A modern e-commerce solution with advanced features."
                                tags={["React", "Node.js", "MongoDB"]}
                            />
                        </a>
                        <a href="https://healthcare-app.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/801/600"
                                title="Healthcare App"
                                description="Mobile application for healthcare management."
                                tags={["React Native", "Firebase"]}
                            />
                        </a>
                        <a href="https://fintech-dashboard.dreamlink.dev" className="block transition-transform hover:scale-105">
                            <PortfolioCard 
                                image="https://picsum.photos/802/600"
                                title="FinTech Dashboard"
                                description="Complex financial data visualization platform."
                                tags={["Vue.js", "Python", "D3.js"]}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
