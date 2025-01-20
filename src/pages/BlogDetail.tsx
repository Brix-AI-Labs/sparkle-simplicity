import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const BlogDetail = () => {
  const { blogId } = useParams();

  const handleBackClick = () => {
    // Navigate to home and scroll to blog section
    window.location.href = '/#blog';
  };

  const blogPosts = [
    {
      id: 'eco-friendly-cleaning',
      title: 'Eco-Friendly Cleaning: A Guide to Sustainable Home Care',
      date: 'March 15, 2024',
      author: 'Sarah Johnson',
      content: `
        <p>In today's world, making environmentally conscious choices has become more important than ever. This comprehensive guide explores how you can maintain a clean home while minimizing your environmental impact.</p>
        
        <h2>Why Choose Eco-Friendly Cleaning?</h2>
        <p>Traditional cleaning products often contain harsh chemicals that can harm both the environment and your health. By switching to eco-friendly alternatives, you can:</p>
        <ul>
          <li>Reduce your carbon footprint</li>
          <li>Protect water systems</li>
          <li>Create a healthier home environment</li>
          <li>Support sustainable practices</li>
        </ul>

        <h2>Natural Cleaning Solutions</h2>
        <p>Many effective cleaning solutions can be made from common household items:</p>
        <ul>
          <li>Vinegar and water for windows and surfaces</li>
          <li>Baking soda for scrubbing</li>
          <li>Lemon juice for natural bleaching</li>
          <li>Essential oils for fragrance</li>
        </ul>
      `
    },
    {
      id: 'spring-cleaning-tips',
      title: 'Spring Cleaning Tips: Refresh Your Space',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      content: `
        <p>As winter fades away, it's time to give your home a fresh start. Our spring cleaning guide will help you tackle every room efficiently and effectively.</p>
        
        <h2>Room-by-Room Checklist</h2>
        <p>Follow this systematic approach to ensure no corner is left untouched:</p>
        <ul>
          <li>Kitchen: Deep clean appliances, organize pantry</li>
          <li>Bathroom: Sanitize surfaces, replace old products</li>
          <li>Bedroom: Rotate mattress, wash all bedding</li>
          <li>Living Room: Clean upholstery, dust electronics</li>
        </ul>

        <h2>Time-Saving Techniques</h2>
        <p>Make your spring cleaning more efficient with these tips:</p>
        <ul>
          <li>Work top to bottom in each room</li>
          <li>Clean windows on cloudy days</li>
          <li>Use the right tools for each task</li>
          <li>Create a cleaning schedule</li>
        </ul>
      `
    }
  ];

  const selectedPost = blogPosts.find(post => post.id === blogId);

  const instagramReels = [
    {
      id: 1,
      title: "Quick Cleaning Tips",
      thumbnail: "/lovable-uploads/reel-1.jpg",
      link: "https://instagram.com/reel/1"
    },
    {
      id: 2,
      title: "Product Demo",
      thumbnail: "/lovable-uploads/reel-2.jpg",
      link: "https://instagram.com/reel/2"
    },
    {
      id: 3,
      title: "Before & After",
      thumbnail: "/lovable-uploads/reel-3.jpg",
      link: "https://instagram.com/reel/3"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {selectedPost && (
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 text-accent/60 mb-8">
                <span>{selectedPost.date}</span>
                <span>By {selectedPost.author}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </article>
          )}

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Instagram Reels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {instagramReels.map(reel => (
                <a
                  key={reel.id}
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="aspect-video rounded-lg overflow-hidden bg-accent/5 mb-2">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {reel.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;