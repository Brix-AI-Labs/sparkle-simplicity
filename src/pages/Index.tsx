import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Index;