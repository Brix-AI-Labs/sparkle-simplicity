import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Natural Cleaning Solutions",
    description: "Discover how our eco-friendly cleaning products can transform your home while protecting the environment.",
    date: "2024-03-15",
    author: "Megalight Team",
    image: "/lovable-uploads/27c54fb4-d57f-47bd-aa74-526a660110ae.png",
  },
  {
    id: 2,
    title: "Professional Cleaning Tips for Your Home",
    description: "Learn expert cleaning techniques and get the most out of your cleaning products.",
    date: "2024-03-10",
    author: "Cleaning Experts",
    image: "/lovable-uploads/89aef022-140e-4bac-ba01-02bb566d04c1.png",
  },
  {
    id: 3,
    title: "Sustainable Cleaning Practices",
    description: "Explore how to maintain a clean home while minimizing environmental impact.",
    date: "2024-03-05",
    author: "Environmental Team",
    image: "/lovable-uploads/95e6e5bd-b034-4a80-9a71-dd0cc4a20887.png",
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