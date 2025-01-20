import { Award, Users, Settings, Factory } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Quality",
      description: "Mega light is well-made, reliable, and performs as expected. It is often associated with durability, effectiveness, and customer satisfaction."
    },
    {
      icon: Users,
      title: "Workforce",
      description: "We make sure a group of skilled workers produce a goods in a given amount of time with good quality of work."
    },
    {
      icon: Settings,
      title: "Industry expertise",
      description: "We, Mega light uses a variety of machinery to produce. These machines use less water at lower wash temperatures, thus enabling the use of better enzymes."
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Create a formula that meets industry standards and customer preferences."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-accent">{feature.title}</h3>
              <p className="text-accent/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;