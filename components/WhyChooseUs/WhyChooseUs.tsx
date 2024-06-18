
import React from 'react'
import { features } from './features';





const WhyChooseUs: React.FC = () => {
  
  return (
    <div className="container mt-28 mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 bg-white dark:bg-background dark:border-2 dark:border-white rounded-2xl shadow-lg dark:shadow-custom">
            <div className='hidden dark:block'>{feature.icon_dark}</div> <div className='dark:hidden'>{feature.icon}</div> 
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
