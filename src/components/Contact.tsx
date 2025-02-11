
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      // Send email using email service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_default',
          template_id: 'template_default',
          user_id: 'YOUR_USER_ID',
          template_params: {
            to_email: 'ashirwadcool321@gmail.com',
            from_name: name,
            from_email: email,
            message: message,
          },
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We will get back to you soon!",
          duration: 5000,
        });
        
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Address</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-accent/80">
                    Nehru Road, Khalpara, Siliguri
                    <br />
                    District: Darjeeling
                    <br />
                    Pin Code: 734005
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-accent/80">+91 98324-74849</p>
                    <p className="text-accent/80">+91 82506-08939</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <p className="text-accent/80">nirmalachemicalsindia1@gmail.com</p>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <Link 
                    to="https://www.facebook.com/profile.php?id=100086503906009" 
                    className="text-primary hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link 
                    to="https://www.instagram.com/megalight27" 
                    className="text-primary hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Opening Hours Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-accent/80">Mon - Sat</span>
                    <span className="text-accent/80">10:00 am – 7:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-accent/80">Sunday</span>
                    <span className="text-accent/80">CLOSED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-highlight p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Map */}
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0661325657244!2d88.4314!3d26.7205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44180ab5ee00d%3A0x5f3d29e9b0d61fbc!2sKhalpara%2C%20Siliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710835138175!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
