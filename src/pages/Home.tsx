import { Building2, Shield, Truck, Droplet, Zap, Award, Target, Leaf, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Building2,
      title: 'Construction & Infrastructure',
      description: 'Renovations & Maintenance\nRoads & Bridge Construction',
    },
    {
      icon: Shield,
      title: 'Digital & IT Solutions',
      description: 'Cybersecurity Services\nCloud Computing Solutions',
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Last-Mile Delivery\nCold Chain Logistics',
    },
    {
      icon: Droplet,
      title: 'Cleaning & Sanitation',
      description: 'Industrial Cleaning\nWaste Management',
    },
    {
      icon: Zap,
      title: 'Renewable Energy & Electrical',
      description: 'Solar Panel Installation\nBattery Storage Solutions',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Innovation & Expertise',
      description: 'Industry knowledge + modern strategies',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Trusted and tailored solutions',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly operational practices',
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'Quality delivered with a fresh perspective',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Four Eyes Group
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 animate-slide-up animation-delay-200">
            A New Perspective
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Services
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Four Eyes Group is a dynamic, multi-sector enterprise committed to delivering innovative and reliable solutions across key industries. With our motto, "A New Perspective," we approach every project with fresh insights, cutting-edge expertise, and a dedication to excellence. Our diversified service portfolio ensures comprehensive support for businesses and communities, driving sustainable growth and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Services</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
