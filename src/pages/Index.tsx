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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-hero">
        <Hero />
      </div>
      <div className="bg-gradient-warm">
        <Features />
      </div>
      <div className="bg-gradient-cool">
        <Products />
      </div>
      <WhyChooseUs />
      <About />
      <div className="bg-gradient-warm">
        <GroupCompanies />
      </div>
      <Blog />
      <div className="bg-gradient-cool">
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
};

export default Index;