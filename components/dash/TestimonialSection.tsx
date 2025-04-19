import React from 'react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "BlockTix has completely transformed how we handle ticket sales. No more worries about counterfeits or scalping issues. Our fans love it too!",
      author: "Emma Rodriguez",
      role: "Festival Organizer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Knowing my tickets are secured on the blockchain gives me peace of mind. The transparency around reselling is fantastic — no more paying 5x the price!",
      author: "David Chen",
      role: "Concert Attendee",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Our venue has seen a 30% reduction in ticket-related issues since switching to BlockTix. The analytics tools have helped us understand our audience better.",
      author: "Sarah Johnson",
      role: "Venue Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from event organizers and attendees who have experienced the BlockTix difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="mb-6">
                <svg 
                  className="w-10 h-10 text-blue-200 absolute top-6 left-6 opacity-60" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8v6a6 6 0 01-6 6H2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2zm20 0v6a6 6 0 01-6 6h-2v2c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-2z" />
                </svg>
                <p className="text-gray-700 relative z-10 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;