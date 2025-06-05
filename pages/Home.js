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
                        {portfolioProjects.slice(0, 3).map(project => (
                            <a 
                                key={project.id}
                                href={project.url} 
                                className="block transition-transform hover:scale-105"
                            >
                                <PortfolioCard 
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
