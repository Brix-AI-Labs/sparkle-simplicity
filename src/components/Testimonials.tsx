import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "MegaLight products have transformed our cleaning operations. The quality is unmatched and customer service is exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Distributor",
      content: "Being a MegaLight distributor has been rewarding. Their products are in high demand and the support is outstanding.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Hotel Manager",
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
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
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