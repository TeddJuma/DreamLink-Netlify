function FloatingContact() {
    const [isOpen, setIsOpen] = React.useState(false);
    const phoneNumber = "+254701105908";
    const whatsappNumber = "+254712345678";
    
    const handleCall = () => {
        window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
    };
    
    const handleWhatsApp = () => {
        window.location.href = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'mb-4' : 'scale-0 h-0'}`}>
                <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
                    aria-label="Contact on WhatsApp"
                >
                    <i className="fab fa-whatsapp text-2xl"></i>
                </button>
                
                <button
                    onClick={handleCall}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    aria-label="Call us"
                >
                    <i className="fas fa-phone text-2xl"></i>
                </button>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black/80 text-white p-4 rounded-full shadow-lg hover:bg-gray-950 transition-colors duration-300"
                aria-label="Toggle contact options"
            >
                <i className={`fas fa-message text-3xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} text-blue-500`}></i>
            </button>
        </div>
    );
}