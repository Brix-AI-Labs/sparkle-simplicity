import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma Sherpa",
      role: "Distributor, Sikkim",
      content: "MegaLight products have transformed our cleaning operations in Sikkim. The quality and performance are exceptional.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Hotel Manager, Silvasa",
      content: "We've been using MegaLight products for years. They consistently deliver excellent results and are cost-effective.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-accent/80 max-w-2xl mx-auto">
            Join our network of 150+ happy distributors and satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-accent/80 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-accent/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;