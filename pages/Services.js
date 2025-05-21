function Services() {
    return (
        <div data-name="services-page" className="pt-20">
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl">Comprehensive digital solutions for modern businesses</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon="fas fa-laptop-code"
                            title="Web Development"
                            description="Custom websites and web applications built with modern technologies and best practices."
                        />
                        <ServiceCard 
                            icon="fas fa-robot"
                            title="AI Integration"
                            description="Artificial Intelligence and Machine Learning solutions for business automation."
                        />
                        <ServiceCard 
                            icon="fas fa-mobile-alt"
                            title="Mobile Apps"
                            description="Native and cross-platform mobile applications for iOS and Android."
                        />
                        <ServiceCard 
                            icon="fas fa-shield-alt"
                            title="Cybersecurity"
                            description="Comprehensive security solutions to protect your digital assets."
                        />
                        <ServiceCard 
                            icon="fas fa-cloud"
                            title="Cloud Solutions"
                            description="Cloud infrastructure and migration services for scalable operations."
                        />
                        <ServiceCard 
                            icon="fas fa-chart-line"
                            title="IT Consultancy"
                            description="Strategic technology consulting to optimize your business processes."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
