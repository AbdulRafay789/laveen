import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { categories } from '../data/mock';

const Categories = ({ language }) => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">أقسام المتجر</span>
            ) : (
              'Shop Categories'
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">صممت عبايات لاڤين لتناسب أناقتك</span>
            ) : (
              'Laveen abayas designed to match your elegance'
            )}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <CardContent className="p-0 relative">
                {/* Category Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={language === 'ar' ? category.nameAr : category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  
                  {/* Product count badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {category.productCount} {language === 'ar' ? 'منتج' : 'items'}
                  </div>
                </div>

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'ar' ? category.nameAr : category.name}
                  </h3>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white hover:text-black hover:bg-white p-0 h-auto font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                    {language === 'ar' ? (
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            {language === 'ar' ? (
              <ArrowLeft className="mr-2 h-5 w-5" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;