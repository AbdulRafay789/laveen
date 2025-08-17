import React from 'react';
import { CheckCircle, Scissors, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { storeFeatures } from '../data/mock';

const StoreFeatures = ({ language }) => {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <CheckCircle className="h-12 w-12 text-emerald-500" />;
      case 1: return <Scissors className="h-12 w-12 text-blue-500" />;
      case 2: return <Star className="h-12 w-12 text-yellow-500" />;
      default: return <CheckCircle className="h-12 w-12 text-emerald-500" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">مميزات المتجر</span>
            ) : (
              'Store Features'
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">خدمات إضافية تجعل تجربتك معنا مميزة</span>
            ) : (
              'Additional services that make your experience with us special'
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeFeatures.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? feature.titleAr : feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {language === 'ar' ? feature.descriptionAr : feature.description}
                </p>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreFeatures;