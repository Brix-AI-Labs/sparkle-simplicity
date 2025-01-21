import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';
import GroupCompanies from '../components/GroupCompanies';
import Blog from '../components/Blog';
import GlobalPresence from '../components/GlobalPresence';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-hero">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-secondary/20 to-white">
        <Features />
      </div>
      <div className="bg-gradient-to-b from-white to-primary/5">
        <Products />
      </div>
      <div className="bg-gradient-to-b from-primary/5 to-white">
        <WhyChooseUs />
      </div>
      <div className="bg-gradient-to-b from-white to-secondary/20">
        <About />
      </div>
      <div className="bg-gradient-to-b from-secondary/20 to-white">
        <GlobalPresence />
      </div>
      <div className="bg-gradient-to-b from-white to-primary/5">
        <GroupCompanies />
      </div>
      <div className="bg-gradient-to-b from-primary/5 to-white">
        <Blog />
      </div>
      <div className="bg-gradient-to-b from-white to-secondary/20">
        <Testimonials />
      </div>
      <div className="bg-gradient-warm">
        <Contact />
      </div>
    </div>
  );
};

export default Index;