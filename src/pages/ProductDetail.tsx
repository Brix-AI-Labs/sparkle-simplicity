import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const productData = {
  "floor-cleaner": {
    name: "Floor Cleaner",
    description: "Premium floor cleaner that leaves your floors sparkling clean with a long-lasting fragrance. Effective on all types of floors.",
    longDescription: "Our premium floor cleaner is specially formulated to provide deep cleaning while being gentle on all types of floors. The unique formula ensures a streak-free finish and long-lasting fragrance that keeps your space fresh for hours.",
    variants: [
      {
        name: "Citrus Fresh",
        sizes: [
          { size: "500 ML", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" },
          { size: "1 LITER", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" },
          { size: "5 LITER", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" }
        ]
      },
      {
        name: "Hygiene Fresh",
        sizes: [
          { size: "500 ML", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" },
          { size: "1 LITER", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" },
          { size: "5 LITER", image: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png" }
        ]
      }
    ],
    features: [
      "All-purpose cleaner suitable for all floor types",
      "Long-lasting fresh fragrance",
      "Kills 99.9% of germs",
      "No harmful residue",
      "Safe for daily use",
      "Concentrated formula"
    ]
  },
  "liquid-blue": {
    name: "Liquid Blue",
    description: "Advanced whitening solution for brighter and cleaner clothes. Safe on all fabrics and removes tough stains.",
    longDescription: "Our advanced Liquid Blue formula is designed to enhance the whiteness of your clothes while being gentle on fabrics. It effectively removes tough stains and brightens your whites, making them look new for longer.",
    variants: [
      {
        name: "Regular",
        sizes: [
          { size: "100 ml", image: "/lovable-uploads/f2c31937-21d6-419f-9ba7-fa55880ceeb1.png" },
          { size: "500 ml", image: "/lovable-uploads/f2c31937-21d6-419f-9ba7-fa55880ceeb1.png" },
          { size: "1 liter", image: "/lovable-uploads/f2c31937-21d6-419f-9ba7-fa55880ceeb1.png" }
        ]
      }
    ],
    features: [
      "Advanced whitening formula",
      "Safe on all fabrics",
      "Removes tough stains",
      "No fabric damage",
      "Concentrated formula",
      "Fresh laundry scent"
    ]
  },
  "detergent-powder": {
    name: "Detergent Powder",
    description: "High-performance washing powder with superior cleaning power. Perfect for both machine and hand wash.",
    longDescription: "Our premium detergent powder is formulated with advanced cleaning technology that removes even the toughest stains while being gentle on your clothes. Suitable for both machine and hand wash, it leaves your clothes fresh and clean.",
    variants: [
      {
        name: "Power Wash",
        sizes: [
          { size: "2 kg", image: "/lovable-uploads/c5f0b70a-4a5d-4efd-86e3-ad8342fd2994.png" },
          { size: "3 kg", image: "/lovable-uploads/c5f0b70a-4a5d-4efd-86e3-ad8342fd2994.png" }
        ]
      }
    ],
    features: [
      "Superior cleaning power",
      "Suitable for machine & hand wash",
      "Fresh fragrance",
      "Removes tough stains",
      "Protects fabric colors",
      "2X cleaning power"
    ]
  },
  "bleaching-powder": {
    name: "Bleaching Powder",
    description: "Powerful bleaching powder for effective disinfection and cleaning. Ideal for commercial and household use.",
    longDescription: "Our professional-grade bleaching powder provides powerful disinfection and cleaning for both commercial and household applications. It effectively sanitizes surfaces while removing tough stains and dirt.",
    variants: [
      {
        name: "Regular",
        sizes: [
          { size: "400 gram", image: "/lovable-uploads/95e6e5bd-b034-4a80-9a71-dd0cc4a20887.png" }
        ]
      }
    ],
    features: [
      "Strong disinfectant properties",
      "Multi-purpose cleaning",
      "Commercial grade quality",
      "Effective stain removal",
      "Long-lasting effectiveness",
      "Safe when used as directed"
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-lg text-accent/80">{product.longDescription}</p>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-accent/80">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            {product.variants.map((variant, index) => (
              <div key={index} className="bg-highlight rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{variant.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {variant.sizes.map((size, sizeIndex) => (
                    <div key={sizeIndex} className="bg-white rounded-lg p-4 text-center">
                      <img 
                        src={size.image} 
                        alt={`${product.name} ${variant.name} ${size.size}`}
                        className="w-full h-auto object-contain mb-3"
                      />
                      <p className="font-medium">{size.size}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;