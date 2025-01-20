import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    title: "The Power of Natural Cleaning Solutions",
    description: "Discover how our eco-friendly cleaning products can transform your home while protecting the environment.",
    date: "2024-03-15",
    author: "Megalight Team",
    image: "/lovable-uploads/27c54fb4-d57f-47bd-aa74-526a660110ae.png",
    content: `
      At MegaLight India, we believe in the power of natural cleaning solutions. Our products are carefully formulated to be both effective and environmentally responsible.

      Key Benefits of Natural Cleaning:
      • Safe for your family and pets
      • Biodegradable ingredients
      • No harsh chemicals
      • Effective cleaning power
      
      Our commitment to sustainability extends beyond our products to our manufacturing processes and packaging choices. We continuously strive to minimize our environmental impact while maximizing cleaning effectiveness.
    `
  },
  {
    id: 2,
    title: "Celebrating Our Growth Journey",
    description: "From humble beginnings to becoming a trusted name in cleaning solutions - our journey of innovation and excellence.",
    date: "2024-03-10",
    author: "MegaLight Marketing",
    image: "/lovable-uploads/89aef022-140e-4bac-ba01-02bb566d04c1.png",
    content: `
      We're proud to share our journey of growth and innovation in the cleaning industry. Starting as a small enterprise, we've grown into a trusted manufacturer of premium cleaning solutions.

      Our Milestones:
      • Establishment of state-of-the-art manufacturing facility
      • Development of innovative product formulations
      • Growing network of satisfied distributors
      • Expanding presence across India

      We thank our customers and partners for being part of this incredible journey.
    `
  },
  {
    id: 3,
    title: "Sustainable Cleaning Practices",
    description: "Learn how to maintain a clean home while minimizing environmental impact with our eco-friendly products.",
    date: "2024-03-05",
    author: "Environmental Team",
    image: "/lovable-uploads/95e6e5bd-b034-4a80-9a71-dd0cc4a20887.png",
    content: `
      Sustainable cleaning is more than just using eco-friendly products - it's about adopting practices that protect our environment for future generations.

      Best Practices for Sustainable Cleaning:
      • Use concentrated products to reduce packaging waste
      • Follow proper dilution ratios
      • Choose reusable cleaning tools
      • Opt for biodegradable solutions

      Our products are designed to support these sustainable practices while delivering exceptional cleaning results.
    `
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Latest Updates</h2>
          <p className="text-center text-accent/80 mb-12">Stay informed with our latest news and cleaning tips</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-accent/60 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;