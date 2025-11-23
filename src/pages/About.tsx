import { Target, Eye, Heart, Leaf, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving and adapting to provide cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical business practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, suppliers, and communities.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering superior quality in every project and service we undertake.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and green solutions.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Four Eyes Group</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A New Perspective on Multi-Sector Excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Four Eyes Group is a dynamic, multi-sector enterprise committed to delivering innovative and reliable solutions across key industries. With our motto, "A New Perspective," we approach every project with fresh insights, cutting-edge expertise, and a dedication to excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our diversified service portfolio ensures comprehensive support for businesses and communities, driving sustainable growth and operational efficiency. We pride ourselves on being more than just a service provider—we're a trusted partner in your success.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver innovative, reliable, and sustainable solutions across diverse industries, empowering businesses and communities to achieve their goals through excellence, integrity, and a fresh perspective on every challenge we tackle.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading multi-sector enterprise recognized for transforming industries through innovation, sustainability, and exceptional service delivery, while building lasting partnerships that drive growth and positive impact in every community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable practices"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Sustainability Focus</h2>
              </div>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Four Eyes Group, sustainability isn't just a buzzword—it's a core commitment. We integrate eco-friendly practices across all our operations, from renewable energy solutions to waste management and green construction methods.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Green Energy Solutions</h4>
                    <p className="text-gray-700">Promoting solar power and renewable energy adoption</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Waste Reduction</h4>
                    <p className="text-gray-700">Implementing comprehensive recycling and waste management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Eco-Friendly Practices</h4>
                    <p className="text-gray-700">Using sustainable materials and methods in all projects</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
