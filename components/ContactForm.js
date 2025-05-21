function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: localStorage.getItem('selectedService') || '',
        description: ''
    });

    const services = [
        'Web Development',
        'Mobile Apps',
        'Cybersecurity',
        'Cloud Solutions',
        'IT Consultancy',
        'AI Integration'
    ];

    React.useEffect(() => {
        // Clear the selected service from localStorage after loading
        localStorage.removeItem('selectedService');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('YOUR_EMAIL_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
            }

            alert('Thank you for your inquiry. We will get back to you soon!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                description: ''
            });
        } catch (error) {
            reportError(error);
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary-light focus:border-primary-light"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary-light focus:border-primary-light"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary-light focus:border-primary-light"
                />
            </div>

            <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-white">Service Interested In</label>
                <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary-light focus:border-primary-light"
                >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-white">Project Description</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary-light focus:border-primary-light"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full theme-bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
            >
                Submit Inquiry
            </button>
        </form>
    );
}
