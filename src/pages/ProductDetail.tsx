import { useParams } from 'react-router-dom';
import { ArrowLeft, Check, Package, Info, Scale, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductBanner from '../components/ProductBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMediaQuery } from '@/hooks/use-mobile';

const productData = {
  "floor-cleaner": {
    name: "Floor Cleaner",
    description: "Premium floor cleaner that leaves your floors sparkling clean with a long-lasting fragrance. Effective on all types of floors.",
    longDescription: "Our premium floor cleaner is specially formulated to provide deep cleaning while being gentle on all types of floors. The unique formula ensures a streak-free finish and long-lasting fragrance that keeps your space fresh for hours.",
    specifications: {
      composition: "Active surfactants, Essential oils, Fragrance",
      pH: "7.0 - 8.0 (Neutral)",
      appearance: "Clear liquid",
      fragrance: "Long-lasting fresh scent"
    },
    applications: [
      "Marble floors",
      "Ceramic tiles",
      "Wooden surfaces",
      "Vinyl flooring",
      "Concrete surfaces"
    ],
    variants: [
      {
        name: "Citrus Fresh",
        description: "Surface Disinfectant and Mosquito Repellent",
        benefits: [
          "Natural citrus extracts",
          "Mosquito repellent properties",
          "Anti-bacterial action",
          "Safe for pets and children"
        ],
        sizes: [
          { 
            size: "500 ML", 
            image: "/lovable-uploads/25755005-e955-4773-8290-321778a8e6b0.png",
            description: "Perfect for small households",
            coverage: "Up to 500 sq. ft.",
            dilutionRatio: "1:20"
          },
          { 
            size: "1 LITER", 
            image: "/lovable-uploads/39f533b4-ef01-43a8-a40c-206b6826bb81.png",
            description: "Most popular size",
            coverage: "Up to 1000 sq. ft.",
            dilutionRatio: "1:20"
          },
          { 
            size: "5 LITER", 
            image: "/lovable-uploads/7ddfaff7-b031-45e5-9867-8f90bc4898a0.png",
            description: "Economical pack for large spaces",
            coverage: "Up to 5000 sq. ft.",
            dilutionRatio: "1:20"
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
    specifications: {
      composition: "Optical brighteners, Stabilizers, Color-safe formula",
      pH: "6.5 - 7.5 (Neutral)",
      appearance: "Blue liquid",
      fragrance: "Fresh laundry scent"
    },
    applications: [
      "White cotton fabrics",
      "Mixed colored clothes",
      "Machine wash",
      "Hand wash",
      "All types of fabrics"
    ],
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
    description: "High-performance washing powder with color granules, white particles, and high foam technology for superior cleaning results.",
    longDescription: "Our premium detergent powder is formulated with advanced cleaning technology that removes even the toughest stains while being gentle on your clothes. Suitable for both machine and hand wash, it leaves your clothes fresh and clean.",
    specifications: {
      composition: "Active enzymes, Surfactants, Optical brighteners",
      pH: "8.0 - 9.0 (Alkaline)",
      appearance: "Blue granules with white particles",
      fragrance: "Fresh floral scent"
    },
    applications: [
      "Daily laundry",
      "Heavy-duty washing",
      "Machine wash",
      "Hand wash",
      "All fabric types"
    ],
    variants: [
      {
        name: "Power Wash",
        description: "2X More Power for Deep Cleaning",
        sizes: [
          { 
            size: "900g", 
            image: "/lovable-uploads/4612cec1-0fb5-4726-bf74-261c5b477462.png",
            description: "Trial pack"
          },
          { 
            size: "2kg", 
            image: "/lovable-uploads/a1ba60a6-2af8-4350-853c-5d5be200856b.png",
            description: "Regular family pack"
          },
          { 
            size: "3kg", 
            image: "/lovable-uploads/a1ba60a6-2af8-4350-853c-5d5be200856b.png",
            description: "Economy pack"
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
    description: "Professional-grade bleaching powder for powerful disinfection and whitening, ideal for multiple applications.",
    longDescription: "Our professional-grade bleaching powder provides powerful disinfection and cleaning for both commercial and household applications. It effectively sanitizes surfaces while removing tough stains and dirt.",
    specifications: {
      composition: "Calcium hypochlorite, Stabilizers",
      pH: "11.0 - 12.0 (Strong alkaline)",
      appearance: "White powder",
      fragrance: "Characteristic chlorine odor"
    },
    applications: [
      "Surface disinfection",
      "Water treatment",
      "Industrial cleaning",
      "Bathroom sanitization",
      "Commercial spaces"
    ],
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
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-20 pb-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 text-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Products
        </Link>
      </div>

      {/* Product Banner - only shown on desktop */}
      {isDesktop && (
        <div className="container mx-auto px-4">
          <ProductBanner productId={productId as string} />
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Specifications Section */}
          <Card id="specifications-section" className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                <Info className="h-6 w-6 text-primary" />
                Product Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-highlight p-4 rounded-lg">
                    <dt className="font-medium text-accent mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                    <dd className="text-accent/80">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Card id="features-section" className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                <List className="h-6 w-6 text-primary" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 bg-highlight p-4 rounded-lg">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-accent/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Variants Section - improved mobile layout */}
        <div className="mt-8">
          {product.variants.map((variant, index) => (
            <Card key={index} className="mb-6">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                  <Package className="h-6 w-6 text-primary" />
                  {variant.name}
                </CardTitle>
                <p className="text-accent/80 mt-2">{variant.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {variant.sizes.map((size, sizeIndex) => (
                    <div 
                      key={sizeIndex} 
                      className="bg-highlight rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md"
                    >
                      <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-white p-4">
                        <img 
                          src={size.image} 
                          alt={`${product.name} ${variant.name} ${size.size}`}
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{size.size}</h4>
                      <p className="text-sm text-accent/70 mb-2">{size.description}</p>
                      {size.coverage && (
                        <div className="flex items-center justify-center text-xs text-accent/60 gap-1">
                          <Scale className="h-3 w-3" />
                          Coverage: {size.coverage}
                        </div>
                      )}
                      {size.dilutionRatio && (
                        <div className="text-xs text-accent/60 mt-1">
                          Dilution Ratio: {size.dilutionRatio}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
