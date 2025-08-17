import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { featuredProducts } from '../data/mock';

const Hero = ({ language }) => {
  const heroProduct = featuredProducts[0];

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6" fill-opacity="0.3"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'} space-y-8`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white text-sm rounded-full">
                <span className="mr-2">✨</span>
                {language === 'ar' ? 'مجموعة صيف 2025 الجديدة' : 'New Summer 2025 Collection'}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {language === 'ar' ? (
                  <span className="font-arabic">
                    عبايات <span className="text-transparent bg-gradient-to-r from-gray-700 to-black bg-clip-text">لاڤين</span>
                    <br />
                    تناسب أناقتك
                  </span>
                ) : (
                  <>
                    Elegant <span className="text-transparent bg-gradient-to-r from-gray-700 to-black bg-clip-text">Abayas</span>
                    <br />
                    For Your Style
                  </>
                )}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                {language === 'ar' ? (
                  <span className="font-arabic">
                    صممت عبايات لاڤين بعناية ودقة لتناسب مكانة جمالك وأناقتك. علامة تجارية سعودية مختصة بتصميم ونسج عصري للعبايات والبليزرات
                  </span>
                ) : (
                  'Designed with care and precision to suit your beauty and elegance. A Saudi brand specialized in modern design and weaving of abayas and blazers.'
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {language === 'ar' ? 'تسوقي الآن' : 'Shop Now'}
                {language === 'ar' ? <ArrowLeft className="ml-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                {language === 'ar' ? 'اكتشفي المجموعة' : 'Discover Collection'}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">
                  {language === 'ar' ? 'عميلة راضية' : 'Happy Customers'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">
                  {language === 'ar' ? 'تقييم متوسط' : 'Average Rating'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">
                  {language === 'ar' ? 'تصميم فريد' : 'Unique Designs'}
                </div>
              </div>
            </div>
          </div>

          {/* Image content */}
          <div className="relative">
            {/* Main product image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={heroProduct.image}
                  alt={language === 'ar' ? heroProduct.nameAr : heroProduct.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Product info overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900">
                    {language === 'ar' ? heroProduct.nameAr : heroProduct.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">${heroProduct.price}</span>
                      {heroProduct.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${heroProduct.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">{heroProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {language === 'ar' ? 'جديد' : 'NEW'}
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {language === 'ar' ? 'خصم 25%' : '25% OFF'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;