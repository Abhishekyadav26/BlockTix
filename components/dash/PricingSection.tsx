import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Attendee',
      price: 'Free',
      description: 'For event-goers looking to purchase secure tickets',
      features: [
        'Access to all public events',
        'Secure ticket storage',
        'Ticket transfer capabilities',
        'Email notifications',
        'Mobile ticket scanning',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Organizer',
      price: '$49',
      period: '/month',
      description: 'For event creators and venue owners',
      features: [
        'Create unlimited events',
        'Custom ticket designs',
        'Analytics dashboard',
        'Set resale rules & royalties',
        'Priority support',
        'Marketing tools & promotion',
        'Integration with event websites',
      ],
      cta: 'Start Creating',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large venues and event management companies',
      features: [
        'All Organizer features',
        'Custom contract development',
        'White-labeled solution',
        'Advanced security features',
        'Dedicated account manager',
        'API access',
        'Custom reporting',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-600 relative transform hover:-translate-y-2' 
                  : 'border-gray-200 hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-medium py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="px-8 pb-8">
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="font-medium text-gray-700 mb-4">Features include:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;