import { Building2, Shield, Truck, Droplet, Zap, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Construction & Infrastructure',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expert construction services for residential, commercial, and industrial projects.',
      details: [
        'Building renovations and modernization',
        'Property maintenance and repairs',
        'Road construction and resurfacing',
        'Bridge construction and infrastructure',
        'Site preparation and groundwork',
        'Project management and consultation',
      ],
    },
    {
      icon: Shield,
      title: 'Digital & IT Solutions',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive IT solutions to protect and optimize your digital infrastructure.',
      details: [
        'Advanced cybersecurity services',
        'Network security assessments',
        'Cloud computing solutions',
        'Cloud migration and management',
        'Data backup and disaster recovery',
        'IT consultation and support',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Reliable logistics solutions for efficient supply chain management.',
      details: [
        'Last-mile delivery services',
        'Express and same-day delivery',
        'Cold chain logistics',
        'Temperature-controlled transport',
        'Freight management',
        'Route optimization and tracking',
      ],
    },
    {
      icon: Droplet,
      title: 'Cleaning & Sanitation',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional cleaning services for all industrial and commercial needs.',
      details: [
        'Industrial facility cleaning',
        'Factory floor maintenance',
        'Waste collection and management',
        'Recycling services',
        'Sanitation and disinfection',
        'Environmental compliance support',
      ],
    },
    {
      icon: Zap,
      title: 'Renewable Energy & Electrical',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable energy solutions for a greener future.',
      details: [
        'Solar panel installation',
        'Solar system design and consultation',
        'Battery storage solutions',
        'Energy management systems',
        'Electrical installations and repairs',
        'Energy efficiency audits',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries, delivered with expertise and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`mb-20 last:mb-0 ${index !== 0 ? 'animate-fade-in' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center mb-6">
                      <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business grow.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
