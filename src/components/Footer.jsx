import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-10 border-t border-gray-800">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          {/* Column 1 - Logo, Product Name, and Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-10">
            <div className="flex items-center gap-3">
              <img src="/skoolifer-logo.svg" alt="Skoolifer Logo" className="w-20 h-20 rounded-full" loading="lazy" />
              <span className="text-2xl md:text-6xl font-bold tracking-tight text-white">
                Skoolifer
              </span>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="text-brand-secondary shrink-0" />
                <span className="text-sm md:text-base hover:text-white transition-colors cursor-pointer">Lahore, Punjab, Pakistan</span>
              </div>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://wa.me/923001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-brand-secondary shrink-0" />
                <span className="text-sm md:text-base">WhatsApp Us</span>
              </a>
              <a 
                href="mailto:skoolifer@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-brand-secondary shrink-0" />
                <span className="text-sm md:text-base">skoolifer@gmail.com</span>
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.facebook.com/skoolifer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 text-brand-secondary shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base">Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Description - Two Paragraphs */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Simplifying school management to make daily operations effortless and efficient.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Streamlining workflows so educators and staff can focus on what truly matters – nurturing students.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Creating a connected and organized learning environment for students, teachers, and parents alike.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">©{new Date().getFullYear()} Skoolifer. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <Link to="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;