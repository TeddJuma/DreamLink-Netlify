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
                        {portfolioProjects.map(project => (
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
