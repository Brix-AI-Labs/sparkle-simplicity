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

  return (
    <div className="relative w-full h-[400px] bg-highlight rounded-xl overflow-hidden mb-12">
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