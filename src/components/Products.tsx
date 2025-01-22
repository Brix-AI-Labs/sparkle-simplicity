import { ArrowRight, Droplet, Leaf, PawPrint, SprayCanIcon, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  const products = [
    {
      id: "floor-cleaner",
      name: "Floor Cleaner",
      description: "Premium floor cleaner that leaves your floors sparkling clean with a long-lasting fragrance. Available in Citrus Fresh and Hygienic Fresh variants.",
      image: "/lovable-uploads/27c54fb4-d57f-47bd-aa74-526a660110ae.png",
      features: [
        { icon: Droplet, text: "Deep cleaning action" },
        { icon: Leaf, text: "Eco-friendly ingredients" },
        { icon: PawPrint, text: "Pet & child friendly" },
        { icon: Check, text: "Anti-slip formula" }
      ],
      variants: [
        {
          name: "Citrus Fresh",
          description: "Natural citrus aroma with powerful cleaning action",
          sizes: ["500ml", "1L", "5L"]
        },
        {
          name: "Hygienic Fresh",
          description: "Kills 99.9% of germs with long-lasting freshness",
          sizes: ["500ml", "1L", "5L"]
        }
      ],
      keyBenefits: [
        "Effective on all floor types",
        "Long-lasting fragrance",
        "No harmful residue",
        "Concentrated formula"
      ]
    },
    {
      id: "liquid-blue",
      name: "Liquid Blue",
      description: "Advanced whitening solution that enhances fabric brightness and restores natural whiteness while being gentle on clothes.",
      image: "/lovable-uploads/9f3e17cc-b117-4015-8ef0-4325c497b4aa.png",
      features: [
        { icon: Droplet, text: "Enhanced brightness" },
        { icon: Leaf, text: "Gentle on fabrics" },
        { icon: Check, text: "Universal compatibility" },
        { icon: SprayCanIcon, text: "Easy mix formula" }
      ],
      variants: [
        {
          name: "Regular",
          description: "Perfect for both machine and hand wash",
          sizes: ["100ml", "200ml", "500ml"]
        }
      ],
      keyBenefits: [
        "Restores fabric whiteness",
        "Boosts color vibrancy",
        "Economical usage",
        "Works with all detergents"
      ]
    },
    {
      id: "detergent-powder",
      name: "Detergent Powder",
      description: "High-performance washing powder with color granules, white particles, and high foam technology for superior cleaning results.",
      image: "/lovable-uploads/be4ba8ee-4ecb-4673-b35d-5602a3aa3640.png",
      features: [
        { icon: Droplet, text: "High foam technology" },
        { icon: Leaf, text: "Color granules" },
        { icon: Check, text: "White particles" },
        { icon: SprayCanIcon, text: "22 years expertise" }
      ],
      variants: [
        {
          name: "Power Wash",
          description: "Advanced stain removal with fabric protection",
          sizes: ["400g"]
        }
      ],
      keyBenefits: [
        "Superior cleaning power",
        "High foam technology",
        "Color protection",
        "Fabric care formula"
      ]
    },
    {
      id: "bleaching-powder",
      name: "Bleaching Powder",
      description: "Professional-grade bleaching powder for powerful disinfection and whitening, ideal for multiple applications.",
      image: "/lovable-uploads/cf965368-4d90-4acb-9d4f-53264d8ebecd.png",
      features: [
        { icon: Droplet, text: "Powerful disinfectant" },
        { icon: Check, text: "Multi-purpose use" },
        { icon: SprayCanIcon, text: "Fast dissolving" },
        { icon: Leaf, text: "Eco-conscious" }
      ],
      variants: [
        {
          name: "Regular",
          description: "Professional strength disinfectant & whitener",
          sizes: ["500g", "1kg", "10kg"]
        }
      ],
      keyBenefits: [
        "Kills 99.9% germs",
        "Removes tough stains",
        "Multiple applications",
        "Industrial strength"
      ]
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
              onClick={() => handleProductClick(product.id)}
              className="block cursor-pointer group relative overflow-hidden rounded-xl bg-highlight p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-accent/80 mb-4 text-sm">{product.description}</p>
              
              <div className="space-y-4 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-accent/70">
                      <feature.icon className="w-4 h-4 mr-2 text-primary" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Available Variants:</h4>
                  {product.variants.map((variant, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="font-medium text-primary">{variant.name}</span>
                      <div className="text-accent/60 text-xs mt-1">
                        Sizes: {variant.sizes.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="inline-flex items-center text-primary group-hover:text-primary/80 transition-colors text-sm font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
