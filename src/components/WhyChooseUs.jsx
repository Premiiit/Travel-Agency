import React from "react";
import { Headset, BadgeDollarSign, Compass, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "24/7 Support",
    description: "We're here for you anytime, anywhere.",
    icon: <Headset className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Best Price Guarantee",
    description: "Get the best rates for your dream vacation.",
    icon: <BadgeDollarSign className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Handpicked Tours",
    description: "Curated experiences by local experts.",
    icon: <Compass className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Secure Payments",
    description: "Your information is safe with us.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
