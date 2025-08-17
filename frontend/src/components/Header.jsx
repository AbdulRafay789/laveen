import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, User, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top notification bar - exact match */}
      <div className="bg-yellow-100 border-b border-yellow-200 text-amber-800 py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-2">
            <span>📏</span>
            <span>Dear customers, please go to the measurements page or click here and check your size before ordering</span>
          </div>
        </div>
      </div>

      {/* Main header - exact match */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left section - Menu */}
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-5 w-5 mr-2" />
                <span className="hidden md:inline">MENU</span>
              </Button>
              
              {/* Theme toggle and search */}
              <Button variant="ghost" size="sm" className="ml-4">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              </Button>
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">LA</span>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              {/* Language and Currency */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Language: </span>
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    <span className="font-medium">ENGLISH</span>
                    <ChevronDown className="h-3 w-3 ml-1" />
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
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      العربية
                    </button>
                  </div>
                </div>
                
                <span className="mx-2">Currency: </span>
                <span className="font-medium">US Dollar</span>
              </div>

              {/* User and Cart */}
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
                <span className="ml-2 text-sm font-medium">USD</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;