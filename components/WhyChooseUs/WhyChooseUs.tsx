'use client'
import React, { use } from 'react';
import { features } from './features';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mt-6 mb-12 px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why <span className="text-primary">Choose Us</span>
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white dark:bg-background dark:border-2 sm:border dark:border-white rounded-2xl shadow-lg dark:shadow-custom"
            variants={itemVariants}
          >
            <div className='hidden dark:block'>{feature.icon_dark}</div>
            <div className='dark:hidden'>{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-white/80">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
