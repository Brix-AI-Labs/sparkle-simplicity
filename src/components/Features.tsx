import { ShieldCheck, Truck, Award, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description: "High-grade cleaning solutions that deliver exceptional results"
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      description: "Fast and reliable shipping across all Indian states"
    },
    {
      icon: Award,
      title: "Certified Products",
      description: "ISO certified manufacturing processes and products"
    },
    {
      icon: HeartHandshake,
      title: "Customer Support",
      description: "24/7 dedicated support for all your cleaning needs"
    }
  ];

  return (
    <section className="py-16 bg-highlight">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-accent/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;