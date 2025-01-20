import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductBanner from '../components/ProductBanner';

const productData = {
  "floor-cleaner": {
    name: "Floor Cleaner",
    description: "Premium floor cleaner that leaves your floors sparkling clean with a long-lasting fragrance. Effective on all types of floors.",
    longDescription: "Our premium floor cleaner is specially formulated to provide deep cleaning while being gentle on all types of floors. The unique formula ensures a streak-free finish and long-lasting fragrance that keeps your space fresh for hours.",
    variants: [
      {
        name: "Citrus Fresh",
        description: "Surface Disinfectant and Mosquito Repellent",
        sizes: [
          { 
            size: "500 ML", 
            image: "/lovable-uploads/25755005-e955-4773-8290-321778a8e6b0.png",
            description: "Perfect for small households"
          },
          { 
            size: "1 LITER", 
            image: "/lovable-uploads/39f533b4-ef01-43a8-a40c-206b6826bb81.png",
            description: "Most popular size"
          },
          { 
            size: "5 LITER", 
            image: "/lovable-uploads/7ddfaff7-b031-45e5-9867-8f90bc4898a0.png",
            description: "Economical pack for large spaces"
          }
        ]
      },
      {
        name: "Hygienic Fresh",
        description: "White Perfumed Disinfecting Fluid",
        sizes: [
          { 
            size: "500 ML", 
            image: "/lovable-uploads/7891dc5b-50a7-4ce5-aecc-a7aaa7178016.png",
            description: "Perfect for small households"
          },
          { 
            size: "1 LITER", 
            image: "/lovable-uploads/8ab15045-baeb-447c-9f6b-776ec3f7f714.png",
            description: "Most popular size"
          },
          { 
            size: "5 LITER", 
            image: "/lovable-uploads/62618d5b-7d7a-4185-9c15-348023994b17.png",
            description: "Economical pack for large spaces"
          }
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
        description: "Hi-Glo Formula for Sparkling White",
        sizes: [
          { 
            size: "100 ml", 
            image: "/lovable-uploads/3b4e087c-0b89-40c3-bccf-b7cf8fa7accd.png",
            description: "Travel-friendly size"
          },
          { 
            size: "500 ml + 20% Extra", 
            image: "/lovable-uploads/4236d8bc-da2b-40e6-acbf-9a77cd746caf.png",
            description: "Family pack with extra value"
          },
          { 
            size: "1 liter + 10% Extra", 
            image: "/lovable-uploads/682fe596-52c4-4713-af5a-d1028510eb8a.png",
            description: "Bulk pack for regular use"
          }
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
        description: "2X More Power for Deep Cleaning",
        sizes: [
          { 
            size: "500g", 
            image: "/lovable-uploads/4612cec1-0fb5-4726-bf74-261c5b477462.png",
            description: "Trial pack"
          },
          { 
            size: "1kg", 
            image: "/lovable-uploads/a1ba60a6-2af8-4350-853c-5d5be200856b.png",
            description: "Regular family pack"
          }
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
        description: "Pure and Strong Disinfectant",
        sizes: [
          { 
            size: "400g", 
            image: "/lovable-uploads/f64ebcc9-1078-45ea-8699-d3c903346072.png",
            description: "Multi-purpose cleaning powder"
          }
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
        
        <ProductBanner productId={productId as string} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
              <p className="text-lg text-accent/80">{product.longDescription}</p>
            </div>
            
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
          
          <div className="space-y-12">
            {product.variants.map((variant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <h3 className="text-2xl font-semibold mb-2">{variant.name}</h3>
                  <p className="text-accent/80">{variant.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {variant.sizes.map((size, sizeIndex) => (
                      <div 
                        key={sizeIndex} 
                        className="group bg-highlight rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md"
                      >
                        <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-white">
                          <img 
                            src={size.image} 
                            alt={`${product.name} ${variant.name} ${size.size}`}
                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-lg mb-1">{size.size}</h4>
                        <p className="text-sm text-accent/70">{size.description}</p>
                      </div>
                    ))}
                  </div>
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
