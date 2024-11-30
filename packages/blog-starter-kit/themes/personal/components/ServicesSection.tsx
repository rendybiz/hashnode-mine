import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-dark-green-light p-8 rounded-xl hover:bg-dark-green-light/80 transition-colors">
    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-6 text-2xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

export const ServicesSection = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'Expert in both backend (PHP, NodeJS, Python) and frontend (Vue.js, Angular, React) development with 10+ years of experience in web applications.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Skilled in creating cross-platform mobile applications using IONIC, Flutter, and native development with Java and Swift.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Experienced with AWS, Google Cloud, Docker, and various deployment strategies. Expert in setting up and managing cloud infrastructure.'
    },
    {
      icon: '🛠️',
      title: 'Technical Leadership',
      description: 'Lead teams of 10+ developers, implement Agile SCRUM methodologies, and guide technical architecture decisions for enterprise solutions.'
    },
    {
      icon: '🔄',
      title: 'API Development',
      description: 'Specialist in creating RESTful APIs, WebSocket services, and integrating various third-party services and databases.'
    },
    {
      icon: '🎯',
      title: 'E-commerce Solutions',
      description: 'Advanced expertise in developing single and multi-store e-commerce platforms, CRM/CMS systems, and SaaS applications.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-green-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With over a decade of experience in software development and technical leadership, 
            I offer comprehensive solutions for your digital needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
