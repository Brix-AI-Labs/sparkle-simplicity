import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Presence</h2>
          <p className="text-muted max-w-3xl mx-auto">
            In recent years, MegaLight India has expanded its presence across international markets, 
            establishing strong partnerships and distribution networks throughout South Asia and beyond.
          </p>
        </div>

        <div className="relative">
          {/* World Map Image */}
          <div className="relative w-full h-[400px] md:h-[600px] mb-8">
            <img 
              src="/lovable-uploads/a478cc2f-dda0-491d-b166-2bf9e79e8cb3.png" 
              alt="Global Presence Map" 
              className="w-full h-full object-contain"
            />
            
            {/* Map Markers */}
            <div className="absolute top-[45%] left-[70%] animate-bounce">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-[43%] left-[71%] animate-bounce animation-delay-200">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div className="absolute top-[44%] left-[69%] animate-bounce animation-delay-400">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
          </div>

          {/* Country List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-2">
              <span className="inline-flex items-center text-[#FF9933] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                India
              </span>
            </div>
            <div className="p-2">
              <span className="inline-flex items-center text-[#128807] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Nepal
              </span>
            </div>
            <div className="p-2">
              <span className="inline-flex items-center text-[#0099CC] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Bhutan
              </span>
            </div>
            <div className="p-2">
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