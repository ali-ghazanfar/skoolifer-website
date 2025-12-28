const TermsOfServicePage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        {/* Background & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Terms of Service" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
          {/* Animated Gradient Orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            These terms of service outline the rules and regulations for the use of Skoolifer's services. By accessing this website or using our services, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="leading-relaxed text-lg">
            Skoolifer is a paid, cloud-based School ERP designed to simplify school administration and academic operations. It is intended for use by school owners, administrators, teachers, staff, students, and parents through school-provided access.
          </p>

          <p className="leading-relaxed text-lg">
            Skoolifer is offered on a subscription basis, with pricing calculated according to the monthly student count. Fees are billed monthly, for example 13 PKR per student per month. Failure to complete payment may result in temporary suspension or termination of service.
          </p>

          <p className="leading-relaxed text-lg">
            Users are responsible for maintaining the confidentiality of their account credentials and for ensuring that all data entered into the system is accurate and lawful. Skoolifer must not be used for any illegal, abusive, or unauthorized activities.
          </p>

          <p className="leading-relaxed text-lg">
            WhatsApp integration is provided as a convenience. Schools are fully responsible for the content of messages and for obtaining any required consent from recipients.
          </p>

          <p className="leading-relaxed text-lg">
            Skoolifer may update or modify its services from time to time. Continued use of the service indicates acceptance of any updates to these Terms. These Terms are governed by the laws of Pakistan.
          </p>

          <p className="leading-relaxed text-lg mt-8">
            For support or inquiries, contact <a href="mailto:skoolifer@gmail.com" className="text-brand-primary hover:underline">skoolifer@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

