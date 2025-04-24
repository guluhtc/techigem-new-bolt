import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Techigem's Instagram tools have been a game-changer for my content strategy. The photo downloader and caption generator save me hours every week!",
      author: "Emma Rodriguez",
      role: "Fashion Influencer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quote: "I've tried many Instagram tools, but Techigem provides the most comprehensive suite for free. Their analytics tools have helped me grow my following substantially.",
      author: "Alex Chen",
      role: "Travel Blogger",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quote: "The story downloader is perfect for saving inspiration from other creators. I also love how fast and reliable all the tools are compared to other sites.",
      author: "Sophie Williams",
      role: "Digital Creator",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Loved by Instagram Creators
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of satisfied users who use our tools to enhance their Instagram presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <img 
            src="https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Instagram feed" 
            className="w-24 h-24 object-cover rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
          />
          <img 
            src="https://images.pexels.com/photos/4126684/pexels-photo-4126684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Instagram feed" 
            className="w-24 h-24 object-cover rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
          />
          <img 
            src="https://images.pexels.com/photos/5083216/pexels-photo-5083216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Instagram feed" 
            className="w-24 h-24 object-cover rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
          />
          <img 
            src="https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Instagram feed" 
            className="w-24 h-24 object-cover rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
          />
          <img 
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Instagram feed" 
            className="w-24 h-24 object-cover rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;