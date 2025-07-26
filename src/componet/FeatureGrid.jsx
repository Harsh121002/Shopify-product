import React from "react";
import {
  Truck,
  RotateCcw,
  Lock,
  Percent,
} from "lucide-react"; // using Lucide icons, install with: npm install lucide-react

const features = [
  {
    icon: <Truck className="w-6 h-6 text-pink-500" />,
    title: "Worldwide shipping",
    description: "The point of using is that has",
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-pink-500" />,
    title: "7 Days return policy",
    description: "The point of using is that has",
  },
  {
    icon: <Lock className="w-6 h-6 text-pink-500" />,
    title: "30 Days secure payment",
    description: "The point of using is that has",
  },
  {
    icon: <Percent className="w-6 h-6 text-pink-500" />,
    title: "100% Organic cosmetic",
    description: "The point of using is that has",
  },
];

const FeatureGrid = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-pink-50 rounded-full p-5 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
