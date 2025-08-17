import React from 'react';

const LatestModels = ({ language }) => {
  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Summer Abaya",
      nameAr: "عباية صيفية أنيقة",
      image: "https://images.unsplash.com/photo-1728487235101-664d87965931?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      id: 2,
      name: "Classic Black Abaya",
      nameAr: "عباية سوداء كلاسيكية",
      image: "https://images.unsplash.com/photo-1752794966299-1fd0ccade152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">أحدث الموديلات</span>
            ) : (
              'Latest Models'
            )}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">صممت بعناية ودقة من لاڤين عباية لتناسب مكانة جمالك وأناقتك</span>
            ) : (
              'Designed with care and precision by Laveen Abaya to suit your beauty and elegance'
            )}
          </p>
        </div>

        {/* Summer 2025 Collection Button */}
        <div className="text-center mb-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
            {language === 'ar' ? 'اكتشف كولكشن صيف 2025' : 'Discover Summer 2025 Collection'}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={language === 'ar' ? product.nameAr : product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {language === 'ar' ? product.nameAr : product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Info */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">كولكشن صيف 2025</span>
            ) : (
              'Summer 2025 Collection'
            )}
          </h3>
          <p className="text-gray-600 text-lg">
            {language === 'ar' ? (
              <span className="font-arabic">الخيار المناسب لأناقتك وإظهار رونق جمال عباتك</span>
            ) : (
              'The perfect choice for your elegance and to show the splendor of your abaya beauty'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestModels;