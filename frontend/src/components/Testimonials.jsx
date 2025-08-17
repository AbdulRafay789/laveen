import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { testimonials } from '../data/mock';

const Testimonials = ({ language }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">آراء العملاء</span>
            ) : (
              'Customer Reviews'
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">ماذا يقول عملاؤنا عن منتجاتنا وخدماتنا</span>
            ) : (
              'What our customers say about our products and services'
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className={`text-gray-700 mb-6 line-clamp-4 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
                  "{language === 'ar' ? testimonial.reviewAr : testimonial.review}"
                </p>

                {/* Customer info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {(language === 'ar' ? testimonial.nameAr : testimonial.name).charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'ar' ? testimonial.nameAr : testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'ar' ? 'عميل معتمد' : 'Verified Customer'}
                    </p>
                  </div>
                </div>

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">
            {language === 'ar' ? 'عرض المزيد من التقييمات' : 'View More Reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;