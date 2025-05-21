function ServiceCard({ icon, title, description }) {
    const handleClick = () => {
        // Store the selected service in localStorage for the contact form
        localStorage.setItem('selectedService', title);
        window.location.href = '#/contact';
    };

    return (
        <div 
            data-name="service-card" 
            className="service-card p-6 rounded-lg shadow-lg"
            onClick={handleClick}
        >
            <div className="text-center mb-4">
                <i className={`${icon} text-primary-light text-4xl`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-white">{title}</h3>
            <p className="text-gray-400 text-center">{description}</p>
        </div>
    );
}
