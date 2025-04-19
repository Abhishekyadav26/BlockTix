import React from 'react';
import { ShieldCheck, RotateCw, Wallet, Ticket, BarChart, Users } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Fraud Prevention',
      description: 'Each ticket is secured on the blockchain, making counterfeiting impossible and ensuring ticket authenticity.',
    },
    {
      icon: <RotateCw size={24} />,
      title: 'Transparent Reselling',
      description: 'Set rules for ticket transfers and resales, including price caps to prevent scalping.',
    },
    {
      icon: <Wallet size={24} />,
      title: 'Digital Ownership',
      description: 'Tickets exist as unique digital assets that you truly own in your crypto wallet.',
    },
    {
      icon: <Ticket size={24} />,
      title: 'Smart Ticketing',
      description: 'Smart contracts automate verification, payments, and special access without middlemen.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Analytics Dashboard',
      description: 'Event organizers receive real-time data and insights on ticket sales and attendee behavior.',
    },
    {
      icon: <Users size={24} />,
      title: 'Community Rewards',
      description: 'Loyal fans earn exclusive benefits through our integrated rewards program.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Ticketing Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our decentralized platform is changing how tickets are bought, sold, and owned with these powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;