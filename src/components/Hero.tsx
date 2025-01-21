import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-light to-accent-light">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-highlight/5 opacity-50" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/6ef0d263-c999-488f-90ad-4d7e302a78a3.png" 
              alt="Megalight Logo" 
              className="h-32 md:h-40 animate-float filter drop-shadow-xl"
            />
          </div>
          
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            Premium Cleaning Solutions
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 leading-tight">
            Transform Your Space with Professional Cleaning Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-accent/80 mb-8 max-w-2xl mx-auto">
            Discover our range of high-quality cleaning products designed to make your space shine. Trusted by professionals and homeowners alike.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-primary bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Become a Distributor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;