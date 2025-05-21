function PortfolioCard({ image, title, description, tags }) {
    return (
        <div data-name="portfolio-card" className="portfolio-card rounded-lg overflow-hidden shadow-lg card-hover">
            <img 
                src={image} 
                alt={title} 
                className="portfolio-image w-full"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="bg-primary-dark text-white text-sm px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
