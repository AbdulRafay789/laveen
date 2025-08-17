import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, User, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', nameAr: 'الرئيسية', href: '#home' },
    { name: 'Categories', nameAr: 'الأقسام', href: '#categories' },
    { name: 'Collections', nameAr: 'المجموعات', href: '#collections' },
    { name: 'About', nameAr: 'عنا', href: '#about' },
    { name: 'Contact', nameAr: 'تواصل', href: '#contact' },
  ];

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 py-2 text-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4">
            <span>📏</span>
            <span className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 
                'عزيزي العملاء، يرجى الذهاب إلى صفحة القياسات أو النقر هنا والتحقق من مقاسك قبل الطلب' :
                'Dear customers, please go to the measurements page or click here and check your size before ordering'
              }
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                LA
              </div>
              <div className="ml-3 text-right">
                <h1 className="text-lg font-bold text-gray-900">Laveen Abaya</h1>
                <p className="text-sm text-gray-600 font-arabic">لاڤين عباية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                >
                  {language === 'ar' ? item.nameAr : item.name}
                </a>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              {/* Language switcher */}
              <div className="relative group">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">{language.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => setLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ar')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 font-arabic"
                  >
                    العربية
                  </button>
                </div>
              </div>

              {/* Currency */}
              <span className="text-sm text-gray-600">USD</span>

              {/* Icons */}
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'ar' ? item.nameAr : item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;