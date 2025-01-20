import { Award, Factory, Users, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Factory,
      value: "25+",
      label: "Years of Excellence"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Happy Distributors"
    },
    {
      icon: Award,
      value: "ISO",
      label: "Certified Quality"
    },
    {
      icon: Leaf,
      value: "100%",
      label: "Eco-Friendly"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About MegaLight India</h2>
          <p className="text-accent/80 text-lg">
            Since our inception, we've been committed to delivering premium cleaning solutions
            that transform homes and businesses across India. Our dedication to quality and
            innovation has made us a trusted name in the industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-accent/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;