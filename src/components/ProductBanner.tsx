import React from 'react';

interface ProductBannerProps {
  productId: string;
}

const ProductBanner = ({ productId }: ProductBannerProps) => {
  const bannerImages = {
    'floor-cleaner': '/lovable-uploads/87051fa3-1ffa-463f-b381-cd1747d5f396.png',
    'liquid-blue': '/lovable-uploads/efa3cbe7-8b35-41f7-8092-17ae238600ea.png',
    'detergent-powder': '/lovable-uploads/6244fb4d-88fc-4617-8f21-4a04a78c5bab.png',
    'bleaching-powder': '/lovable-uploads/080ac128-bb24-428b-8705-261974276ef8.png'
  };

  const slogans = {
    'floor-cleaner': 'Keep your home and room clean with mega light floor cleaner at all times.',
    'liquid-blue': 'Experience the magic of cleaning with one product that washes, cleans, sparkles, and shines!',
    'detergent-powder': 'Power through dirt, shine through clean!',
    'bleaching-powder': 'Bleach it Bright, Bleach it Right!'
  };

  return (
    <div className="relative w-full h-[300px] bg-highlight rounded-xl overflow-hidden mb-12">
      <img 
        src={bannerImages[productId as keyof typeof bannerImages]} 
        alt={`${productId} banner`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
        <div className="text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 uppercase">
            Mega Light
            <br />
            {productId.split('-').join(' ')}
          </h1>
          <p className="text-lg">
            {slogans[productId as keyof typeof slogans]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;