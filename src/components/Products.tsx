import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Liquid Blue",
      description: "Advanced formula for brighter whites",
      image: "/placeholder.svg"
    },
    {
      name: "Detergent Powder",
      description: "Superior cleaning power for all fabrics",
      image: "/placeholder.svg"
    },
    {
      name: "Floor Cleaner",
      description: "Deep cleaning for sparkling floors",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
          <p className="text-accent/80 max-w-2xl mx-auto">
            Discover our range of high-quality cleaning solutions designed to make your space shine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-highlight p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-accent/80 mb-4">{product.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;