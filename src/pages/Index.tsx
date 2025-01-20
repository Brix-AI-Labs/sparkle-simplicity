import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import WhyChooseUs from '../components/WhyChooseUs';
import GroupCompanies from '../components/GroupCompanies';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <WhyChooseUs />
      <About />
      <GroupCompanies />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;