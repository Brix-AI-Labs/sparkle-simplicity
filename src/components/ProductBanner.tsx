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
    <div className="relative w-full h-[400px] bg-highlight rounded-xl overflow-hidden mb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgrounds[productId as keyof typeof backgrounds]})`,
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="p-8 max-w-2xl">
          <div className="space-y-4 animate-fade-up">
            <h1 className="text-5xl font-bold uppercase tracking-tight text-accent">
              Mega Light
              <br />
              {productId.split('-').join(' ')}
            </h1>
            <p className="text-xl font-light leading-relaxed text-accent/80">
              {slogans[productId as keyof typeof slogans]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;