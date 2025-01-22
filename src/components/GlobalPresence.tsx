import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Presence</h2>
          <p className="text-muted max-w-3xl mx-auto">
            With 22 years of industry expertise, MegaLight India has expanded its presence across international markets, 
            establishing strong partnerships throughout South Asia.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-full h-[400px] md:h-[600px] mb-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cool opacity-50"></div>
            <img 
              src="/lovable-uploads/cf965368-4d90-4acb-9d4f-53264d8ebecd.png"
              alt="World Map"
              className="w-full h-full object-contain mix-blend-overlay opacity-90"
              loading="lazy"
              decoding="async"
            />
            
            {/* Base Marker (India) */}
            <div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-8 w-8 text-[#FF9933] drop-shadow-lg" />
            </div>

            {/* Animated Arrows and Markers */}
            <div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
              {/* Nepal Arrow */}
              <div className="absolute h-0.5 w-16 bg-gradient-to-r from-[#FF9933] to-[#128807] -rotate-45 origin-left animate-to-nepal" />
              <div className="absolute h-3 w-3 bg-[#128807] rounded-full transform translate-x-[60px] -translate-y-[60px] animate-to-nepal" />
              
              {/* Bhutan Arrow */}
              <div className="absolute h-0.5 w-16 bg-gradient-to-r from-[#FF9933] to-[#0099CC] rotate-0 origin-left animate-to-bhutan" />
              <div className="absolute h-3 w-3 bg-[#0099CC] rounded-full transform translate-x-[60px] -translate-y-[20px] animate-to-bhutan" />
              
              {/* Bangladesh Arrow */}
              <div className="absolute h-0.5 w-16 bg-gradient-to-r from-[#FF9933] to-[#006A4E] rotate-45 origin-left animate-to-bangladesh" />
              <div className="absolute h-3 w-3 bg-[#006A4E] rounded-full transform translate-x-[60px] translate-y-[20px] animate-to-bangladesh" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <span className="inline-flex items-center text-[#FF9933] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                India
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <span className="inline-flex items-center text-[#128807] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Nepal
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <span className="inline-flex items-center text-[#0099CC] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Bhutan
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
              <span className="inline-flex items-center text-[#006A4E] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Bangladesh
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted italic">
            We are continuously expanding our presence and seeking new distributors and channel partners worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;