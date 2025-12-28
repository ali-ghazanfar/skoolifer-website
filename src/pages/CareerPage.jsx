import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, Heart } from 'lucide-react';

const CareerPage = () => {
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
        <title>Careers - Skoolifer School Management Software</title>
        <meta name="description" content="Learn about career opportunities at Skoolifer. We're currently not hiring, but we'd love to hear from passionate individuals who share our vision for transforming education in Pakistan." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="w-full min-h-screen bg-white">
        <section className="relative py-20 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Careers" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Careers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Join us in revolutionizing school management across Pakistan. We're building the future of education technology.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We're Building
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Skoolifer is Pakistan's leading cloud-based School ERP system, helping educational institutions streamline their operations and focus on what matters most – education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact-Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're making a real difference in how schools operate across Pakistan, helping thousands of students and educators every day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mission-Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to simplify school management and empower educational institutions with innovative, accessible technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Oriented</h3>
                <p className="text-gray-600 leading-relaxed">
                  As we continue to grow and expand our platform, we'll be looking for talented individuals to join our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Future Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                While we're not hiring right now, we're always open to connecting with exceptional talent. When opportunities arise, we typically look for:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Software Engineers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Full-stack developers passionate about building scalable, cloud-based applications. Experience with modern web technologies and a commitment to writing clean, maintainable code.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Product & Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  UX/UI designers and product managers who understand the unique challenges of educational technology and can create intuitive, user-friendly experiences.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Success</h3>
                <p className="text-gray-600 leading-relaxed">
                  Customer success specialists who are passionate about helping schools succeed and can build strong relationships with our users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerPage;

