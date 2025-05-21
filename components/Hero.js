function Hero() {
    return (
        <section data-name="hero-section" className="hero-gradient text-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div data-name="hero-content" className="fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Transforming Ideas Into Digital Reality
                        </h1>
                        <p className="text-xl mb-8">
                            We craft innovative solutions that empower businesses to thrive in the digital age.
                        </p>
                        <a 
                            href="#/services" 
                            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
                        >
                            Explore Our Services
                        </a>
                    </div>
                    
                    <div data-name="hero-image" className="floating">
                        <div className="relative">
                        <div className="w-full h-96 bg-blue-600 rounded-lg opacity-40 absolute transform -rotate-3"> </div>
                            <div className="w-full h-96 bg-blue-600 rounded-lg opacity-40 absolute transform rotate-3"></div>

                            <div className="w-full h-96 bg-white rounded-lg relative">
                                <div className="p-8">
                                    <img src="https://www.clcmn.edu/wp-content/uploads/2019/06/techsupport.jpg" />
                                    <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
