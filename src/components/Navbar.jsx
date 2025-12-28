import { useState } from 'react';
import { Menu, X, ChevronDown, Headset } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'FAQs', path: '/#faqs' },
    { name: 'About Us', path: '/about-us' },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const handleFaqClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const faqSection = document.getElementById('faqs');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const faqSection = document.getElementById('faqs');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className="relative w-full z-50 shadow-md">
      {/* Main Navbar */}
      <div className="w-full bg-white px-6 md:px-12 lg:px-20 flex items-center justify-between border-b border-gray-100 py-4">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
          <span className="flex items-center gap-2 text-2xl md:text-4xl font-bold text-brand-primary tracking-tight">
            <img src="/skoolifer-logo.svg" className="w-12 h-12 rounded-full" alt="Skoolifer Logo" loading="lazy" />
            Skoolifer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
           <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
               const isActive = location.pathname === link.path;
               // Handle anchor links vs route links
               const isAnchor = link.path.startsWith('/#');
               
               return isAnchor ? (
                 <button
                   key={link.name}
                   onClick={handleFaqClick}
                   className="flex items-center gap-1 text-sm font-normal text-gray-600 hover:text-brand-primary transition-colors uppercase tracking-wide"
                 >
                   {link.name}
                   {link.dropdown && <ChevronDown size={14} strokeWidth={3} className="mt-0.5" />}
                 </button>
               ) : (
                 <Link 
                   key={link.name} 
                   to={link.path}
                   className={`flex items-center gap-1 text-sm font-normal transition-colors uppercase tracking-wide ${isActive ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'}`}
                 >
                    {link.name}
                 </Link>
               );
            })}
           </nav>
           
           <div className="h-8 w-px bg-gray-200 mx-2"></div>

           <div className="flex items-center gap-4 group cursor-pointer">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://wa.me/923220986963"
                className="flex gap-2 bg-white text-brand-primary py-2.5 rounded-md transition-colors cursor-pointer"
              >
                <Headset size={40} className="cursor-pointer" />
                <div className="flex flex-col cursor-pointer">
                  <span className="text-xs font-normal text-gray-600 cursor-pointer">Need help?</span>
                  <span className="font-normal text-brand-primary cursor-pointer">WhatsApp Us</span>
                </div>
              </a>
           </div>
           
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-700 hover:text-brand-primary transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-40 flex flex-col shadow-xl animate-fade-in-up md:hidden">
           <div className="p-4 flex flex-col gap-1">
             {navLinks.map((link) => {
               const isActive = location.pathname === link.path;
               const isAnchor = link.path.startsWith('/#');
               
               return isAnchor ? (
                 <button
                   key={link.name}
                   onClick={handleFaqClick}
                   className="text-lg font-normal text-gray-800 py-4 px-4 border-b border-gray-100 hover:bg-gray-50 hover:text-brand-primary transition-colors text-left"
                 >
                   {link.name}
                 </button>
               ) : (
                 <Link
                   key={link.name}
                   to={link.path}
                   className={`text-lg font-normal py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                     isActive ? 'text-brand-primary' : 'text-gray-800 hover:text-brand-primary'
                   }`}
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {link.name}
                 </Link>
               );
             })}
           </div>
            
            <div className="p-6 bg-gray-50 space-y-4">
              {/* <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                to="https://app.skoolifer.com" 
                className="flex items-center justify-center gap-2 w-full bg-white border border-brand-primary text-brand-primary font-normal py-3 rounded-lg shadow-sm"
              >
                <Lock size={18} /> Login
              </Link> */}
              <a 
                href="https://wa.me/923220986963" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brand-primary text-white font-normal py-3 rounded-lg shadow-md transition-colors"
              >
                Request Demo
              </a>
            </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;