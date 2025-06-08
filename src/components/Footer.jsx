import React, { useState } from 'react';
import { Mail, Bell, MessageCircle } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';

const Footer = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const handleContactSupport = () => {
    const subject = encodeURIComponent('طلب دعم');
    const body = encodeURIComponent(`مرحبًا فريق الدعم،

  أحتاج إلى مساعدتكم بخصوص المشكلة التالية:

  [اكتب مشكلتك هنا]

  شكرًا جزيلًا.`);
    
    window.location.href = `mailto:bimartstudio@gmail.com?subject=${subject}&body=${body}`;
  };


  const handleSubscribe = () => {
    setIsSubscriptionModalOpen(true);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/212607975575', '_blank');
  };

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your productivity? Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
          <button
            onClick={handleContactSupport}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                    px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    transform hover:-translate-y-1 border border-blue-500/20"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-semibold mb-2">Contact Support</h4>
            <p className="text-blue-100 text-sm">Get help from our expert team</p>

          </button>
            <button
              onClick={handleSubscribe}
              className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 
                       px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       transform hover:-translate-y-1 border border-teal-500/20"
            >
              <Bell className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold mb-2">Subscribe</h4>
              <p className="text-teal-100 text-sm">Stay updated with latest features</p>
            </button>

            <button
              onClick={handleWhatsApp}
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 
                       px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       transform hover:-translate-y-1 border border-green-500/20"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
              <p className="text-green-100 text-sm">Chat with us instantly</p>
            </button>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ProductivityApp. Crafted with passion for better workflows.
            </p>
          </div>
        </div>
      </footer>

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </>
  );
};

export default Footer;