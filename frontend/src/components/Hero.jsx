import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
      alt: "Green Abaya"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1752794966299-1fd0ccade152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
      alt: "Navy Abaya"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1724396641537-8909ef098187?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwYWJheWElMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE1N3ww&ixlib=rb-4.1.0&q=85",
      alt: "Pink Abaya"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtb2Rlc3QlMjBmYXNoaW9ufGVufDB8fHx8MTc1NTQzMzE2M3ww&ixlib=rb-4.1.0&q=85",
      alt: "Teal Abaya"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/33476063/pexels-photo-33476063.jpeg",
      alt: "Purple Abaya"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Main hero carousel */}
      <div className="relative h-full flex">
        {/* Hero image slides */}
        {heroImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-1/5 h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'scale-105 z-10' : 'scale-100'
            }`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Center overlay banner - exact match from original */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-green-600 text-white px-8 py-4 transform -skew-x-12">
            <div className="transform skew-x-12">
              <h1 className="text-3xl font-bold text-center">
                {language === 'ar' ? 'عزز بطولنا' : 'Support Our Heroes'}
              </h1>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* WhatsApp floating button - exact match */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/966510573606"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;