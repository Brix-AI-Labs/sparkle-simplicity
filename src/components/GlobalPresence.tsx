import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const GlobalPresence = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 3,
      center: [78.9629, 20.5937], // India center coordinates
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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
            {!mapboxToken && (
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-white/90">
                <div className="max-w-md w-full">
                  <p className="text-sm text-muted mb-2">Please enter your Mapbox public token to view the map. You can get one at mapbox.com</p>
                  <input
                    type="text"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    placeholder="Enter Mapbox token"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            )}
            <div ref={mapContainer} className="absolute inset-0" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-flex items-center text-[#FF9933] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                India
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-flex items-center text-[#128807] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Nepal
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-flex items-center text-[#0099CC] font-semibold">
                <MapPin className="h-4 w-4 mr-1" />
                Bhutan
              </span>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
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