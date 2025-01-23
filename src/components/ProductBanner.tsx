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
    <div className="relative w-full h-[500px] bg-highlight rounded-xl overflow-hidden mb-12 group">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ 
          backgroundImage: `url(${backgrounds[productId as keyof typeof backgrounds]})`,
          opacity: 0.25
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-between px-12">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-2">
              Mega Light Products
            </div>
            <h1 className="text-6xl font-bold uppercase tracking-tight text-accent">
              {productId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-xl font-light leading-relaxed text-accent/80 max-w-xl">
              {slogans[productId as keyof typeof slogans]}
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                Learn More
              </button>
              <button className="px-6 py-3 border border-accent/20 text-accent rounded-lg hover:bg-accent/10 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center animate-fade-in">
          <div className="relative w-full h-[400px]">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl" />
            <img 
              src={backgrounds[productId as keyof typeof backgrounds]}
              alt={`${productId} poster`}
              className="absolute inset-0 w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;