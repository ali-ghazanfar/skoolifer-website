import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Skoolifer",
    "url": "https://skoolifer.com",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication",
    "description": "Skoolifer is a cloud-based School ERP software that helps schools manage attendance, fees, exams, payroll, and daily academic and administrative operations.",
    "offers": {
      "@type": "Offer",
      "price": "13",
      "priceCurrency": "PKR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "13",
        "priceCurrency": "PKR",
        "billingIncrement": 1,
        "unitText": "per student per month"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Skoolifer School Management Software</title>
        <meta name="description" content="Read Skoolifer's privacy policy. Learn how we protect your school data in our cloud-based school management software." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="w-full min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-brand-dark overflow-hidden">
          {/* Background & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Privacy Policy" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
          {/* Animated Gradient Orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            These privacy policies outline the rules and regulations for the use of Skoolifer's services. By accessing this website or using our services, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="leading-relaxed text-lg">
            Skoolifer is an individual-owned, cloud-based School ERP system accessed through a web browser. We value your privacy and are committed to protecting the information shared with us.
          </p>

          <p className="leading-relaxed text-lg">
            Skoolifer collects school, student, and staff data only for the purpose of providing school management services such as attendance tracking, academic management, fee records, and communication. All data is entered and controlled by the respective schools, and ownership of this data remains with the school.
          </p>

          <p className="leading-relaxed text-lg">
            Skoolifer integrates with WhatsApp to help schools communicate with students, parents, and staff. Message content and recipient management are the responsibility of the school.
          </p>

          <p className="leading-relaxed text-lg">
            We do not sell, rent, or share personal data with third parties, except where required to operate WhatsApp communication or when legally required. Reasonable security measures are implemented to protect stored data; however, no system can be guaranteed to be completely secure.
          </p>

          <p className="leading-relaxed text-lg">
            By using Skoolifer, you agree to this Privacy Policy.
          </p>

          <p className="leading-relaxed text-lg mt-8">
            For any questions or concerns, contact us at <a href="mailto:skoolifer@gmail.com" className="text-brand-primary hover:underline">skoolifer@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicyPage;

