import { Link } from 'react-router-dom';
import { 
  FileText, Users, Database, GraduationCap, Briefcase, 
  Monitor, DollarSign, MessageCircle, Plus 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Student Management',
      description: 'Complete 360° student profiles with academic history, health records, family information, and ID card generation.',
      icon: <Users size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Fee Management',
      description: 'Automated fee invoicing, online payments, concessions, family payments, and comprehensive fee reports.',
      icon: <DollarSign size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Attendance Tracking',
      description: 'Student and staff attendance with barcode scanning, bulk entry, and detailed attendance reports.',
      icon: <FileText size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Exams & Grading',
      description: 'Complete exam management with marks entry, marksheet generation, grade calculation, and report cards.',
      icon: <GraduationCap size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Staff & Payroll',
      description: 'Staff management, payroll processing with allowances/deductions, bulk payroll, and comprehensive reports.',
      icon: <Briefcase size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Academic Resources',
      description: 'Subject management, grade setup, study materials, diary entries, timetables, and class teacher assignment.',
      icon: <Monitor size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Accounts Management',
      description: 'Income and expense tracking, account heads, financial reports, and complete accounting system.',
      icon: <Database size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Communication',
      description: 'WhatsApp integration, SMS, email notifications, bulk messaging, and noticeboard for seamless communication.',
      icon: <MessageCircle size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
            Everything You Need
          </h2>
          <p className="text-gray-500 text-lg">
            Skoolifer is providing 100+ features to manage your school operations efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col min-h-[340px] hover:shadow-xl hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-600 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* More Features Button */}
        <div className="mt-16 text-center">
          <Link to="/features" className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800 font-normal py-4 px-10 rounded-lg transition-colors text-lg">
            <Plus size={20} />
            View All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;