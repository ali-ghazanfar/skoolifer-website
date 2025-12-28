import { Helmet } from 'react-helmet-async';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Zain ul Abdeen",
      role: "Software Engineer",
      description: "Zain is a software engineer with a passion for building scalable and efficient systems.",
      image: "/zain-ul-abdeen.jpeg"
    },
    {
      name: "Ali Hasnain",
      role: "Custom Support",
      description: "Ali is a custom support specialist with a passion for helping schools manage their operations.",
    },
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getGridClasses = (count) => {
    if (count === 1) {
      return "grid grid-cols-1 gap-8 max-w-md mx-auto";
    } else if (count === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto";
    } else if (count === 3) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    }
  };

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
        <title>About Us - Skoolifer School Management Software</title>
        <meta name="description" content="Learn about Skoolifer, Pakistan's leading cloud-based school ERP software. Discover our mission to simplify school management and empower educational institutions." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="w-full min-h-screen bg-white">
        <section className="relative py-20 bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="About Us" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Empowering educational institutions across Pakistan with innovative, cloud-based school management solutions.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="leading-relaxed text-lg">
              At Skoolifer, we believe that managing a school should be simple, efficient, and accessible. Our mission is to provide educational institutions across Pakistan with a comprehensive, cloud-based School ERP system that streamlines daily operations, enhances communication, and empowers educators to focus on what matters most – nurturing students.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Who We Are</h2>
            <p className="leading-relaxed text-lg">
              Skoolifer is an individual-owned, cloud-based School ERP system designed specifically for the Pakistani educational landscape. We understand the unique challenges faced by schools in our region and have built a solution that addresses these needs with precision and care.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">What We Offer</h2>
            <p className="leading-relaxed text-lg">
              Our platform provides over 100 powerful features covering every aspect of school management – from student information systems and attendance tracking to fee collection, payroll processing, examination management, and communication tools. With multi-campus support, role-based access control, and seamless WhatsApp integration, Skoolifer adapts to your school's unique requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Our Commitment</h2>
            <p className="leading-relaxed text-lg">
              We are committed to providing reliable, secure, and user-friendly software solutions, ensuring data privacy and security for all our users, and offering affordable pricing that makes quality school management accessible. We support schools with responsive customer service, continuously improve our platform based on user feedback, and build custom features and integrations when needed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Why Choose Skoolifer</h2>
            <p className="leading-relaxed text-lg">
              As Pakistan's leading online school ERP, we combine cutting-edge technology with deep understanding of local educational needs. Our cloud-based platform ensures that your school data is accessible anytime, anywhere, while our comprehensive feature set covers everything from academic management to financial operations.
            </p>

            <p className="leading-relaxed text-lg mt-8">
              Whether you're a small private school or a large multi-campus institution, Skoolifer scales with your needs and grows with your school.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
              <div className="flex-shrink-0">
                <img 
                  alt="CEO" 
                  loading="lazy"
                  src="/ali-ghazanfar.svg" 
                  className="w-96 h-96 rounded-3xl shadow-2xl"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-5xl font-bold text-gray-900 mb-2">
                    Ali Ghazanfar
                  </h2>
                  <p className="text-lg italic text-gray-500">
                    Founder & CEO of Skoolifer
                  </p>
                </div>

                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    He is dedicated to transforming school management in Pakistan, with a vision to simplify operations and empower schools to operate smarter and more efficiently.
                  </p>
                  <p className="leading-relaxed">
                    As a full-stack software engineer, he has built large-scale products from the ground up, serving thousands of users. His technical expertise ensures that Skoolifer remains innovative, reliable, and aligned with the latest technologies.
                  </p>
                  <p className="leading-relaxed">
                    Driven by a focus on innovation and operational excellence, he leads Skoolifer to streamline administrative processes while enhancing the learning experience for both students and teachers.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals behind Skoolifer, working tirelessly to revolutionize school management in Pakistan.
              </p>
            </div>

            <div className={getGridClasses(teamMembers.length)}>
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center"
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-6 rounded-full" />
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-4xl font-bold">
                      <span>{getInitials(member.name)}</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-brand-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed text-lg text-center">
              For more information or to request a demo, contact us at <a href="mailto:skoolifer@gmail.com" className="text-brand-primary hover:underline">skoolifer@gmail.com</a> or reach out via <a href="https://wa.me/923220986963" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">WhatsApp</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;

