import React from "react";
const Services: React.FC = () => {
    const services = [
            {
                title: "Custom Web Development",
                description:
                    "Building responsive and user-friendly websites tailored to your business needs using modern technologies.",
                icon: "💻",
            },
            {
                title: "Chatbot Development",
                description:
                    "Developing intelligent and interactive chatbots to enhance user engagement and automate customer support.",
                icon: "🤖",
            },
            {
                title: "AI-Based Chatbots for Businesses",
                description:
                    "Providing AI-powered chatbot solutions to streamline business processes and improve customer experience.",
                icon: "🌟",
            },
            {
                title: "Electronic Device Circuit Projects",
                description:
                    "Designing and implementing custom electronic circuits for various projects and applications.",
                icon: "🔌",
            },
            {
                title: "Data Structures and Algorithm Projects",
                description:
                    "Developing efficient algorithms and robust data structures for optimized performance in applications.",
                icon: "📊",
            },
            {
                title: "Digital Logic Design Projects",
                description:
                    "Creating logical and reliable digital circuits for various technical and academic projects.",
                icon: "⚙",
            },
            {
                title: "Applied Physics Projects",
                description:
                    "Designing and analyzing innovative projects based on the principles of applied physics.",
                icon: "🧪",
            },
            {
                title: "C Programming Projects",
                description:
                    "Developing foundational and advanced projects using the C programming language.",
                icon: "📘",
            },
            {
                title: "C++ Programming Projects",
                description:
                    "Creating object-oriented solutions and projects using C++ for academic and business applications.",
                icon: "🔧",
            },
            {
                title: "Java Programming Projects",
                description:
                    "Building robust and scalable applications with Java, focusing on performance and flexibility.",
                icon: "☕",
            },
            {
                title: "Python Programming Projects",
                description:
                    "Developing versatile projects using Python for automation, data analysis, and web applications.",
                icon: "🐍",
            },
        ];

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <main className="flex-grow">
                <section className="max-w-6xl mx-auto py-8 px-4">
                    {/* My Services Section */}
                    <h1 className="text-3xl font-bold text-white text-center mb-6">
                        My Services
                        <span className="block w-14 h-1 bg-blue-500 mx-auto mt-2"></span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 shadow-md rounded-lg p-6 text-center space-y-4"
                            >
                                <div className="text-4xl text-white">{service.icon}</div>
                                <h2 className="text-xl font-semibold">
                                    {service.title}
                                </h2>
                                <p className="text-white">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                
            </main>
        </div>
    );
};

export default Services;