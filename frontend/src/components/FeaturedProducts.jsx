import React from 'react';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { featuredProducts } from '../data/mock';

const FeaturedProducts = ({ language }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">أحدث الموديلات</span>
            ) : (
              'Latest Models'
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">صممت بعناية ودقة من لاڤين عباية لتناسب مكانة جمالك وأناقتك</span>
            ) : (
              'Designed with care and precision by Laveen Abaya to suit your beauty and elegance'
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={language === 'ar' ? product.nameAr : product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <Badge 
                      className={`absolute top-4 left-4 ${
                        product.badge === 'NEW' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                        product.badge === 'BESTSELLER' ? 'bg-gradient-to-r from-rose-500 to-pink-500' :
                        product.badge === 'LIMITED' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                        'bg-gray-900'
                      } text-white font-semibold`}
                    >
                      {language === 'ar' ? (
                        product.badge === 'NEW' ? 'جديد' :
                        product.badge === 'BESTSELLER' ? 'الأكثر مبيعاً' :
                        product.badge === 'LIMITED' ? 'محدود' :
                        product.badge
                      ) : product.badge}
                    </Badge>
                  )}

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick add to cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      {language === 'ar' ? 'أضف للسلة' : 'Add to Cart'}
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 bg-white">
                  <div className="space-y-3">
                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Product name */}
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                      {language === 'ar' ? product.nameAr : product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {language === 'ar' ? 'عرض المزيد' : 'View More Products'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;