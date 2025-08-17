import React from 'react';

const Categories = ({ language }) => {
  // Header banners matching the original
  const headerBanners = [
    { color: 'teal', text: 'CARITA' },
    { color: 'purple', text: 'GAZAR' },
    { color: 'coral', text: 'SATEEN' },
    { color: 'green', text: 'LAVEEN' },
    { color: 'burgundy', text: 'MAXI' }
  ];

  // Categories matching original 4x2 grid
  const categories = [
    {
      id: 1,
      name: "Summer Abayas",
      nameAr: "عبايات صيفية", 
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 2,
      name: "Winter Abayas",
      nameAr: "عبايات شتوية",
      image: "https://images.unsplash.com/photo-1752794966299-1fd0ccade152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 3,
      name: "Coloured Abayas",
      nameAr: "عبايات ملونة",
      image: "https://images.unsplash.com/photo-1724396641537-8909ef098187?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
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
      name: "Inner Suits",
      nameAr: "بدلات داخلية",
      image: "https://images.pexels.com/photos/33476063/pexels-photo-33476063.jpeg",
    },
    {
      id: 7,
      name: "Work Abayas",
      nameAr: "عبايات دوام",
      image: "https://images.unsplash.com/photo-1626386699888-b8865823b279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 8,
      name: "All Products",
      nameAr: "جميع المنتجات",
      image: "https://images.unsplash.com/photo-1728487235101-664d87965931?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    }
  ];

  const getBannerColor = (color) => {
    const colors = {
      teal: 'bg-teal-500',
      purple: 'bg-purple-500', 
      coral: 'bg-orange-400',
      green: 'bg-green-500',
      burgundy: 'bg-red-900'
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header banners - exact match */}
        <div className="flex justify-center gap-4 mb-8">
          {headerBanners.map((banner, index) => (
            <div 
              key={index}
              className={`${getBannerColor(banner.color)} text-white px-6 py-2 text-sm font-bold transform -skew-x-12`}
            >
              <span className="transform skew-x-12 block">{banner.text}</span>
            </div>
          ))}
        </div>

        {/* Categories Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'ar' ? (
              <span className="font-arabic">أقسام المتجر</span>
            ) : (
              'Categories'
            )}
          </h2>
          <p className="text-gray-600">
            {language === 'ar' ? (
              <span className="font-arabic">صممت عبايات لاڤين لتناسب أناقتك</span>
            ) : (
              "Laveen Abaya's is devoted to fit your elegance"
            )}
          </p>
        </div>

        {/* Categories Grid - exact 4x2 layout like original */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group cursor-pointer relative"
            >
              {/* Category Image */}
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={language === 'ar' ? category.nameAr : category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gold badge - exact match */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-yellow-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Category Name */}
              <div className="text-center mt-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {language === 'ar' ? category.nameAr : category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;