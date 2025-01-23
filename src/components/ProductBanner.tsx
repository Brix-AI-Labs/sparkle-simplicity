import React from 'react';

interface ProductBannerProps {
  productId: string;
}

const ProductBanner = ({ productId }: ProductBannerProps) => {
  const slogans = {
    'floor-cleaner': 'Keep your home and room clean with mega light floor cleaner at all times.',
    'liquid-blue': 'Experience the magic of cleaning with one product that washes, cleans, sparkles, and shines!',
    'detergent-powder': 'Power through dirt, shine through clean!',
    'bleaching-powder': 'Bleach it Bright, Bleach it Right!'
  };

  const backgrounds = {
    'floor-cleaner': '/lovable-uploads/6244fb4d-88fc-4617-8f21-4a04a78c5bab.png',
    'liquid-blue': '/lovable-uploads/89aef022-140e-4bac-ba01-02bb566d04c1.png',
    'detergent-powder': '/lovable-uploads/95e6e5bd-b034-4a80-9a71-dd0cc4a20887.png',
    'bleaching-powder': '/lovable-uploads/6ef7d9cb-8186-4651-b8f9-875eea0dd64e.png'
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-cool rounded-xl overflow-hidden mb-12 group">
      <div className="absolute inset-0 flex">
        {/* Left Content Section */}
        <div className="w-3/5 p-16 flex flex-col justify-center relative z-10">
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-center space-x-3">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Mega Light Products
              </span>
            </div>
            
            <h1 className="text-7xl font-bold text-accent space-y-2">
              <span className="block gradient-text">
                {productId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            </h1>
            
            <p className="text-2xl font-light leading-relaxed text-muted max-w-xl">
              {slogans[productId as keyof typeof slogans]}
            </p>
            
            <div className="flex gap-6 pt-4">
              <button className="button-primary flex items-center gap-2 group">
                <span>Explore Features</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="button-secondary">
                View Specifications
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="absolute right-0 top-0 w-2/5 h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-warm opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <img 
                  src={backgrounds[productId as keyof typeof backgrounds]}
                  alt={`${productId} product`}
                  className="w-full h-full object-contain p-8 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;