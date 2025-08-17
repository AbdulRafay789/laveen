import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Categories = ({ language }) => {
  const categories = [
    {
      id: 1,
      name: "Summer Abayas",
      nameAr: "عبايات صيفية",
      image: "https://images.unsplash.com/photo-1728487235101-664d87965931?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 2,
      name: "Winter Abayas",
      nameAr: "عبايات شتوية",
      image: "https://images.unsplash.com/photo-1752794966299-1fd0ccade152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 3,
      name: "Colored Abayas",
      nameAr: "عبايات ملونة",
      image: "https://images.pexels.com/photos/33476063/pexels-photo-33476063.jpeg",
    },
    {
      id: 4,
      name: "Black Abayas",
      nameAr: "عبايات سوداء",
      image: "https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 5,
      name: "Inner Dresses",
      nameAr: "فساتين داخلية",
      image: "https://images.pexels.com/photos/33476054/pexels-photo-33476054.jpeg",
    },
    {
      id: 6,
      name: "Work Abayas",
      nameAr: "عبايات دوام",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header - exact match */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">أقسام المتجر</span>
            ) : (
              'Shop Categories'
            )}
          </h2>
          <p className="text-gray-600 text-lg">
            {language === 'ar' ? (
              <span className="font-arabic">صممت عبايات لاڤين لتناسب أناقتك</span>
            ) : (
              'Laveen abayas designed to match your elegance'
            )}
          </p>
        </div>

        {/* Categories Grid - mimicking original layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={language === 'ar' ? category.nameAr : category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Category Info */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language === 'ar' ? category.nameAr : category.name}
                </h3>
                
                <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center justify-center w-full">
                  {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                  {language === 'ar' ? (
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
            {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            {language === 'ar' ? (
              <ArrowLeft className="mr-2 h-5 w-5 inline" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;