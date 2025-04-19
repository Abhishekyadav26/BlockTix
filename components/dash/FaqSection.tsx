import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is a decentralized ticketing system?',
      answer:
        'A decentralized ticketing system uses blockchain technology to create, distribute, and verify event tickets. Unlike traditional ticketing systems, it doesn\'t rely on a central authority but instead uses smart contracts and distributed ledger technology to ensure transparency, security, and ownership verification.',
    },
    {
      question: 'Do I need cryptocurrency to buy tickets?',
      answer:
        'No, our platform supports both traditional payment methods (credit cards, PayPal) and cryptocurrency payments. You can choose whichever option is most convenient for you.',
    },
    {
      question: 'How does BlockTix prevent ticket scalping?',
      answer:
        'BlockTix allows event organizers to set resale rules and price caps directly in the smart contract. This means tickets can only be resold according to these predefined rules, preventing scalpers from charging excessive prices.',
    },
    {
      question: 'What happens if I lose access to my crypto wallet?',
      answer:
        'We recommend keeping backup recovery phrases for your wallet in a secure location. Additionally, our customer support team can help verify your identity and restore access to your tickets in case you lose access to your wallet.',
    },
    {
      question: 'Can I transfer my ticket to someone else?',
      answer:
        'Yes, you can transfer your ticket to another person\'s wallet address, subject to any transfer restrictions set by the event organizer. The transfer is recorded on the blockchain, ensuring transparency and authenticity.',
    },
    {
      question: 'How do event organizers benefit from BlockTix?',
      answer:
        'Event organizers benefit from reduced fraud, automated royalties on secondary sales, detailed analytics, lower fees compared to traditional ticketing platforms, and direct connection with attendees without intermediaries.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our decentralized ticketing platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;