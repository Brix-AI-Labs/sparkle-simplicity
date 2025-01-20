import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Floor Cleaner",
      description: "Premium floor cleaner that leaves your floors sparkling clean with a long-lasting fragrance. Effective on all types of floors.",
      image: "/placeholder.svg",
      features: ["All-purpose cleaner", "Long-lasting fragrance", "Kills 99.9% germs"]
    },
    {
      name: "Liquid Blue",
      description: "Advanced whitening solution for brighter and cleaner clothes. Safe on all fabrics and removes tough stains.",
      image: "/placeholder.svg",
      features: ["Brightens whites", "Removes tough stains", "Fabric safe"]
    },
    {
      name: "Detergent Powder",
      description: "High-performance washing powder with superior cleaning power. Perfect for both machine and hand wash.",
      image: "/placeholder.svg",
      features: ["Superior cleaning", "Fresh fragrance", "Machine & hand wash"]
    },
    {
      name: "Bleaching Powder",
      description: "Powerful bleaching powder for effective disinfection and cleaning. Ideal for commercial and household use.",
      image: "/placeholder.svg",
      features: ["Strong disinfectant", "Multi-purpose", "Commercial grade"]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-accent/80 mb-4 text-sm">{product.description}</p>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-accent/70 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
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