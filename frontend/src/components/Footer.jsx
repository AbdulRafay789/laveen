import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';

const Footer = ({ language }) => {
  const quickLinks = [
    { name: 'About Us', nameAr: 'عنا', href: '#about' },
    { name: 'Size Guide', nameAr: 'دليل المقاسات', href: '#sizes' },
    { name: 'Shipping Info', nameAr: 'معلومات الشحن', href: '#shipping' },
    { name: 'Return Policy', nameAr: 'سياسة الإرجاع', href: '#returns' },
    { name: 'Contact', nameAr: 'تواصل معنا', href: '#contact' }
  ];

  const categories = [
    { name: 'Summer Abayas', nameAr: 'عبايات صيفية' },
    { name: 'Winter Abayas', nameAr: 'عبايات شتوية' },
    { name: 'Colored Abayas', nameAr: 'عبايات ملونة' },
    { name: 'Black Abayas', nameAr: 'عبايات سوداء' },
    { name: 'Work Abayas', nameAr: 'عبايات دوام' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                LA
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Laveen Abaya</h3>
                <p className="text-sm text-gray-400 font-arabic">لاڤين عباية</p>
              </div>
            </div>
            <p className={`text-gray-300 leading-relaxed ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
              {language === 'ar' ? 
                'علامة تجارية سعودية مختصة بتصميم ونسج عصري للعبايات والبليزرات. نقدم أجود أنواع الأقمشة والتصاميم العصرية.' :
                'A Saudi brand specialized in modern design and weaving of abayas and blazers. We offer the finest fabrics and contemporary designs.'
              }
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/966510573606" 
                className="bg-green-600 p-2 rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {language === 'ar' ? link.nameAr : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'الأقسام' : 'Categories'}
            </h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {language === 'ar' ? category.nameAr : category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className={`text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'المملكة العربية السعودية، الرياض' : 'Saudi Arabia, Riyadh'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 direction-ltr">+966 51 057 3606</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">info@laveenabaya.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className={`font-semibold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'اشتركي في النشرة' : 'Subscribe to Newsletter'}
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-gray-900 px-4 py-2 rounded-r-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                  {language === 'ar' ? 'اشتراك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-gray-400 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 
                '© 2025 لاڤين عباية. جميع الحقوق محفوظة.' :
                '© 2025 Laveen Abaya. All rights reserved.'
              }
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                {language === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;