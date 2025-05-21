function Contact() {
    return (
        <div data-name="contact-page" className="pt-20">
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl">Get in touch with our team of experts</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <ContactInfo />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
