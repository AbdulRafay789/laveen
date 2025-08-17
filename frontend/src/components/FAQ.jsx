import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { faqData } from '../data/mock';

const FAQ = ({ language }) => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === 'ar' ? 'text-right' : ''}`}>
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? (
              <span className="font-arabic">الأسئلة الشائعة</span>
            ) : (
              'Frequently Asked Questions'
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar' ? (
              <span className="font-arabic">إجابات على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا</span>
            ) : (
              'Answers to the most common questions about our products and services'
            )}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <Card 
                key={item.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 ${
                      language === 'ar' ? 'text-right' : ''
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {language === 'ar' ? item.questionAr : item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`p-6 pt-0 text-gray-600 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
                      <div className="border-t border-gray-100 pt-4">
                        {language === 'ar' ? item.answerAr : item.answer}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {language === 'ar' ? 
              'لم تجد إجابة لسؤالك؟' : 
              "Didn't find the answer to your question?"
            }
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
            {language === 'ar' ? 'تواصل معنا عبر الواتساب' : 'Contact us via WhatsApp'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;