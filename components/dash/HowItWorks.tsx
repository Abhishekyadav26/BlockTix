import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Wallet',
      description: 'Link your crypto wallet to our platform for secure access to your tickets and seamless payments.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      number: '02',
      title: 'Browse & Purchase',
      description: 'Explore upcoming events and purchase tickets directly using cryptocurrency or traditional payment methods.',
      image: 'https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      number: '03',
      title: 'Store Securely',
      description: 'Your tickets are stored as NFTs in your wallet with all verification data securely on the blockchain.',
      image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      number: '04',
      title: 'Attend Event',
      description: 'Present your digital ticket for seamless scanning and entry verification at the venue.',
      image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes buying, selling, and using tickets simple, secure, and transparent.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="bg-blue-100 text-blue-600 text-5xl font-bold absolute -top-6 -left-6 w-16 h-16 flex items-center justify-center rounded-lg">
                    {step.number}
                  </div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-auto rounded-xl shadow-lg" 
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;