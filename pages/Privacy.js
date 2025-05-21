function Privacy() {
    return (
        <div data-name="privacy-page" className="pt-20">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose max-w-none">
                    <p className="mb-6">Last updated: January 2024</p>
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Name and contact information</li>
                            <li>Account credentials</li>
                            <li>Payment information</li>
                            <li>Communication preferences</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Provide and maintain our services</li>
                            <li>Process your transactions</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Communicate with you about products, services, and events</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                        <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Service providers</li>
                            <li>Business partners</li>
                            <li>Law enforcement when required</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
