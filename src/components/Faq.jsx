import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "Can we migrate data from our existing system?",
      answer: "Yes, Skoolifer supports data migration from your existing school management system. We provide assistance for migrating student data, staff information, and other important data. Our team will help ensure a smooth transition with minimal disruption to your operations."
    },
    {
      question: "Can Skoolifer handle multiple campuses?",
      answer: "Yes, Skoolifer supports multi-campus management. You can manage multiple campuses from a single platform with campus-specific settings, data isolation, and centralized reporting."
    },
    {
      question: "Does Staff, Parents & Students have separate portal?",
      answer: "Yes, Skoolifer have a dedicated Staff, Parents & Students Portal."
    },
    {
      question: "How secure is our school data?",
      answer: "Skoolifer uses enterprise-grade security with encrypted data storage, secure authentication, role-based access control, and regular backups. Your data is protected with industry-standard security measures."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Header */}
          <div className="lg:col-span-5">
            <span className="text-brand-primary font-normal tracking-wider uppercase text-sm mb-3 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Got questions?<br/>We have answers.
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              If you can't find the answer you're looking for, chat with our support team directly. As the best school ERP in Pakistan, we're here to help you understand how our cloud-based school management software can transform your school operations.
            </p>
            <a 
              href="https://wa.me/923220986963" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-brand-dark px-8 py-4 rounded-lg font-normal hover:bg-gray-800 transition-colors shadow-lg"
            >
              Contact Support
            </a>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-brand-primary/50 bg-blue-50/30 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-normal ${openIndex === index ? 'text-brand-primary' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <div className="bg-brand-primary text-white p-1 rounded-full"><Minus size={16} /></div>
                  ) : (
                    <div className="bg-gray-100 text-gray-500 p-1 rounded-full"><Plus size={16} /></div>
                  )}
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                     <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;