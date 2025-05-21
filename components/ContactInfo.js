function ContactInfo() {
    const phoneNumber = "+1 (555) 123-4567";
    const emailAddress = "contact@techcraft.com";

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div data-name="contact-info" className="space-y-8">
            <div className="text-center p-6 bg-gray-400 rounded-lg">
                <i className="fas fa-phone text-4xl text-blue-900 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-black">Call Us</h3>
                <p className="text-gray-600 mb-4">{phoneNumber}</p>
                <button
                    onClick={handlePhoneClick}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                >
                    Call Now
                </button>
            </div>

            <div className="text-center p-6 bg-gray-400 rounded-lg">
                <i className="fas fa-envelope text-4xl text-blue-900 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-black">Email Us</h3>
                <p className="text-gray-600 mb-4">{emailAddress}</p>
                <button
                    onClick={handleEmailClick}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                >
                    Send Email
                </button>
            </div>
        </div>
    );
}
