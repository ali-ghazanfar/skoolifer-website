import { Helmet } from 'react-helmet-async';
import { 
  Users, BookOpen, DollarSign, Settings, 
  BarChart3, Shield, Calendar,
  FileText, ClipboardList, Database, Layers, CheckCircle, UserCircle, Building2, Search, Download, Upload,
  CreditCard, Receipt, TrendingUp, PieChart, Wallet,
  Package, QrCode, LogIn, LayoutDashboard,
  MapPin, Award, FileCheck, Printer,
  ShoppingCart
} from 'lucide-react';

const FeaturesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Skoodex",
    "url": "https://Skoodex.com",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication",
    "description": "Skoodex is a cloud-based School ERP software that helps schools manage attendance, fees, exams, payroll, and daily academic and administrative operations.",
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

  const modules = [
    {
      title: "Authentication & User Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <LogIn size={20} />, name: "User Login/Logout", desc: "Secure authentication system with login and logout functionality for all user types." },
        { icon: <UserCircle size={20} />, name: "User Profile Management", desc: "Comprehensive user profile management with personal information and preferences." },
        { icon: <Shield size={20} />, name: "Role-Based Access Control", desc: "Advanced RBAC system with granular permissions and role assignments." },
        { icon: <Settings size={20} />, name: "Permission Management", desc: "Fine-grained permission system to control access to features and modules." },
        { icon: <Users size={20} />, name: "Role Assignment", desc: "Assign roles to staff members with custom role creation and management." },
        { icon: <Building2 size={20} />, name: "Multi-Campus Support", desc: "Manage multiple campuses from a single platform with campus-specific settings." },
        { icon: <FileText size={20} />, name: "User Category Management", desc: "Manage user categories: Admin, Staff, Student, and Guardian with distinct access levels." }
      ]
    },
    {
      title: "Dashboard & Analytics",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <LayoutDashboard size={20} />, name: "General Dashboard", desc: "Comprehensive dashboard with key statistics, metrics, and quick access to important features." },
        { icon: <DollarSign size={20} />, name: "Recent Payments Display", desc: "View recent payment transactions and payment history at a glance." },
        { icon: <Calendar size={20} />, name: "Upcoming Events", desc: "Display upcoming academic events, holidays, and important dates on the dashboard." }
      ]
    },
    {
      title: "School & Campus Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Building2 size={20} />, name: "Campus Profile Management", desc: "Create and manage multiple campus profiles with individual settings and configurations." },
        { icon: <MapPin size={20} />, name: "Multi-Campus Support", desc: "Seamlessly manage operations across multiple campuses from a unified platform." },
        { icon: <Calendar size={20} />, name: "Academic Session Management", desc: "Create and manage academic sessions, set active sessions, and track session-wise data." }
      ]
    },
    {
      title: "Student & Staff Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Users size={20} />, name: "Student Information System", desc: "Complete 360° student profiles with academic history, health records, family information, and ID card generation." },
        { icon: <Download size={20} />, name: "Student Import/Export", desc: "Bulk import students from Excel files and export student data for reporting and backup." },
        { icon: <FileText size={20} />, name: "Student Number Generation", desc: "Automated student number generation with customizable numbering formats." },
        { icon: <Search size={20} />, name: "Student Search", desc: "Advanced search functionality to quickly find students by name, ID, class, or other criteria." },
        { icon: <Users size={20} />, name: "Staff Management", desc: "Comprehensive staff profiles with designations, qualifications, and ID card generation." },
        { icon: <Award size={20} />, name: "Designation Management", desc: "Create and manage staff designations with role-specific permissions and hierarchies." },
        { icon: <TrendingUp size={20} />, name: "Allowance Management", desc: "Configure and manage staff allowances including housing, transport, and other benefits." },
        { icon: <TrendingUp size={20} />, name: "Deduction Management", desc: "Set up and manage staff deductions including taxes, loans, and other deductions." },
        { icon: <Search size={20} />, name: "Staff Search", desc: "Quick search functionality to find staff members by name, designation, or department." },
        { icon: <FileText size={20} />, name: "Guardian Management", desc: "Manage parent/guardian information with login access and family payment options." },
        { icon: <Search size={20} />, name: "Guardian Search", desc: "Search and filter guardians by name, student association, or contact information." },
        { icon: <Database size={20} />, name: "Certificate Generation", desc: "Auto-generate ID cards for students and staff, plus leaving certificates, character certificates, and enrollment certificates." }
      ]
    },
    {
      title: "Academics & Learning",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <BarChart3 size={20} />, name: "Grade/Class Management", desc: "Create and manage grades/classes with student capacity and class teacher assignments." },
        { icon: <BookOpen size={20} />, name: "Subject Management", desc: "Create and manage subjects with bulk creation, assign to classes, and track curriculum." },
        { icon: <Calendar size={20} />, name: "Academic Calendar", desc: "Manage academic sessions, holidays, events, and important dates throughout the year." },
        { icon: <Calendar size={20} />, name: "Academic Sessions", desc: "Create and manage academic sessions with start/end dates and session-specific settings." },
        { icon: <FileText size={20} />, name: "Document Management", desc: "Upload, store, and manage documents with access permissions for students and classes." },
        { icon: <Users size={20} />, name: "Class Teacher Assignment", desc: "Assign class teachers to manage specific classes and students with role-based access." },
        { icon: <Calendar size={20} />, name: "Timetable Management", desc: "Create and manage class timetables with bulk upsert, subject and teacher assignments." }
      ]
    },
    {
      title: "Examination & Marks",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <ClipboardList size={20} />, name: "Exam Type Management", desc: "Create and configure different exam types with grading schemes and weightage." },
        { icon: <FileCheck size={20} />, name: "Marks Entry", desc: "Individual and bulk marks entry with validation, grade calculation, and auto-computation." },
        { icon: <FileText size={20} />, name: "Marksheet Generation", desc: "Generate individual and bulk marksheets with customizable templates and formats." },
        { icon: <Printer size={20} />, name: "Marksheet Printing", desc: "Print marksheets with professional layouts, school branding, and official signatures." },
        { icon: <BarChart3 size={20} />, name: "Student Marks Form Data", desc: "View and manage comprehensive student marks data with detailed analytics and reports." }
      ]
    },
    {
      title: "Attendance Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <CheckCircle size={20} />, name: "Student Attendance", desc: "Track daily attendance with bulk entry, barcode scanning, and detailed reports." },
        { icon: <CheckCircle size={20} />, name: "Staff Attendance", desc: "Monitor staff attendance with bulk entry, barcode scanning, and attendance reports." }
      ]
    },
    {
      title: "Fee Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <FileText size={20} />, name: "Fee Categories", desc: "Create and manage fee categories with flexible naming and categorization." },
        { icon: <BarChart3 size={20} />, name: "Fee Structures", desc: "Configure fee structures by grade with different fee types and amounts." },
        { icon: <Receipt size={20} />, name: "Fee Invoices", desc: "Generate individual and bulk fee invoices with automated due date calculations." },
        { icon: <CreditCard size={20} />, name: "Fee Payments", desc: "Record and track fee payments with multiple payment methods and receipt generation." },
        { icon: <Users size={20} />, name: "Family Payment", desc: "Handle payments for multiple students from the same family in one transaction." },
        { icon: <TrendingUp size={20} />, name: "Fee Concessions", desc: "Manage concession types and apply concessions to students with approval workflows." },
        { icon: <BarChart3 size={20} />, name: "Fee Collection Report", desc: "Comprehensive fee collection reports with date ranges, payment methods, and summaries." },
        { icon: <FileText size={20} />, name: "Outstanding Fee Report", desc: "Track and report outstanding fees by student, class, or date range." },
        { icon: <PieChart size={20} />, name: "Fee Summary Report", desc: "Summary reports showing total collected, outstanding, and pending fee amounts." },
        { icon: <TrendingUp size={20} />, name: "Concession Report", desc: "Detailed reports on fee concessions granted with student-wise breakdown." },
        { icon: <Calendar size={20} />, name: "Late Fee Report", desc: "Track and report late fee charges with penalty calculations and payment status." },
        { icon: <FileCheck size={20} />, name: "Student Fee Statement", desc: "Individual student fee statements with payment history and outstanding balance." },
        { icon: <Wallet size={20} />, name: "Daily Closing Report", desc: "Daily fee collection summaries with cash, bank, and online payment breakdowns." },
        { icon: <DollarSign size={20} />, name: "Daily Advance Fee Report", desc: "Track advance fee payments and adjustments with detailed reporting." },
        { icon: <FileText size={20} />, name: "Bad Debts Report", desc: "Identify and report bad debts with aging analysis and recovery tracking." },
        { icon: <Users size={20} />, name: "Fee Defaulter Reports", desc: "Generate defaulter reports by class, month, or custom criteria with detailed lists." },
        { icon: <Receipt size={20} />, name: "Student Challans Report", desc: "Generate and print fee challans for students with payment instructions." }
      ]
    },
    {
      title: "Payroll Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Layers size={20} />, name: "Payroll Entry", desc: "Individual and bulk payroll entry with automatic calculations for allowances and deductions." },
        { icon: <Printer size={20} />, name: "Payslip Generation", desc: "Generate professional payslips with detailed salary breakdown and company branding." },
        { icon: <Printer size={20} />, name: "Bulk Payslip Printing", desc: "Print payslips in bulk for multiple employees with batch processing." },
        { icon: <BarChart3 size={20} />, name: "Monthly Payroll Report", desc: "Monthly payroll summaries with total salary, allowances, and deductions." },
        { icon: <UserCircle size={20} />, name: "Employee-wise Payroll Report", desc: "Individual employee payroll reports with year-to-date summaries." },
        { icon: <Award size={20} />, name: "Designation-wise Payroll Report", desc: "Payroll reports grouped by designation with comparative analysis." },
        { icon: <PieChart size={20} />, name: "Payroll Summary Report", desc: "Comprehensive payroll summaries with totals, averages, and breakdowns." },
        { icon: <Receipt size={20} />, name: "Salary Slip Report", desc: "Detailed salary slip reports with all components and net pay calculations." },
        { icon: <TrendingUp size={20} />, name: "Deduction Report", desc: "Reports on all deductions including taxes, loans, and other deductions." },
        { icon: <TrendingUp size={20} />, name: "Allowance Report", desc: "Detailed reports on all allowances paid to staff with category-wise breakdown." },
        { icon: <Calendar size={20} />, name: "Yearly Payroll Report", desc: "Annual payroll reports with month-wise breakdowns and year-end summaries." },
        { icon: <FileCheck size={20} />, name: "Payroll Status Report", desc: "Track payroll processing status with pending, processed, and paid statuses." },
        { icon: <Database size={20} />, name: "Payroll Register", desc: "Complete payroll register with all employee payroll details and audit trail." }
      ]
    },
    {
      title: "Accounts Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Database size={20} />, name: "Account Head Management", desc: "Create and manage account heads for income and expense categorization." },
        { icon: <TrendingUp size={20} />, name: "Income Entry", desc: "Record income transactions with account head assignment and payment methods." },
        { icon: <TrendingUp size={20} />, name: "Expense Entry", desc: "Record expense transactions with receipts, account heads, and approval workflows." },
        { icon: <LayoutDashboard size={20} />, name: "Accounts Dashboard", desc: "Financial dashboard with income/expense summaries, charts, and key metrics." },
        { icon: <PieChart size={20} />, name: "Income/Expense Summary", desc: "Comprehensive summaries of income and expenses with category-wise breakdowns." },
        { icon: <BarChart3 size={20} />, name: "Balance Sheet", desc: "Generate balance sheets with assets, liabilities, and equity calculations." },
        { icon: <FileText size={20} />, name: "Accounts Statement", desc: "Detailed account statements with transaction history and running balances." }
      ]
    },
    {
      title: "Point of Sale",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <ShoppingCart size={20} />, name: "POS Interface", desc: "Complete point of sale system for school stores and canteens with product search and cart management." },
        { icon: <Package size={20} />, name: "Product Management", desc: "Create and manage products with categories, pricing, stock tracking, and barcode support." },
        { icon: <Package size={20} />, name: "Product Category Management", desc: "Organize products into categories for better inventory management and reporting." },
        { icon: <Receipt size={20} />, name: "Sales Management", desc: "Process sales transactions, generate receipts, and track sales history with detailed reports." }
      ]
    },
    {
      title: "Asset Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Database size={20} />, name: "Asset Management", desc: "Track school assets with detailed information, location, and maintenance records." },
        { icon: <Package size={20} />, name: "Asset Category Management", desc: "Organize assets into categories for better inventory management and reporting." },
        { icon: <FileText size={20} />, name: "Asset Code Generation", desc: "Automated asset code generation with unique identifiers and barcode support." }
      ]
    },
    {
      title: "Visitor Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Users size={20} />, name: "Visitor Registration", desc: "Register visitors with check-in/check-out times, purpose of visit, and host information." },
        { icon: <FileText size={20} />, name: "Visitor Tracking", desc: "Track visitor history and maintain comprehensive visitor logs with check-in/check-out records." }
      ]
    },
    {
      title: "Lost & Found",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Search size={20} />, name: "Lost Item Management", desc: "Register and track lost items with detailed descriptions, location, and status." },
        { icon: <Package size={20} />, name: "Found Item Management", desc: "Record found items, match with lost items, and manage item returns to owners." }
      ]
    },
    {
      title: "Task Management",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <ClipboardList size={20} />, name: "Task Creation", desc: "Create and assign tasks to staff members with priority levels and deadlines." },
        { icon: <CheckCircle size={20} />, name: "Task Tracking", desc: "Track task progress, status updates, and completion with detailed task history." }
      ]
    },
    {
      title: "Technical Features",
      color: "bg-blue-50 text-blue-600",
      features: [
        { icon: <Building2 size={20} />, name: "Multi-Campus Support", desc: "Seamlessly manage multiple campuses with campus-specific configurations and data isolation." },
        { icon: <Shield size={20} />, name: "Permission-Based Routing", desc: "Advanced routing system that restricts access based on user permissions and roles." },
        { icon: <Users size={20} />, name: "Category-Based Routing", desc: "Separate routing for Student and Guardian portals with role-specific interfaces." },
        { icon: <QrCode size={20} />, name: "Barcode Scanning", desc: "Barcode scanning for quick attendance entry and asset tracking." },
        { icon: <Download size={20} />, name: "Excel Import/Export", desc: "Import and export data in Excel format for bulk operations and reporting." },
        { icon: <Layers size={20} />, name: "Bulk Operations", desc: "Perform bulk operations for attendance, invoices, payroll, marks, and other modules." },
        { icon: <FileText size={20} />, name: "Document Management", desc: "Upload, store, and manage documents with access permissions for students and classes." },
        { icon: <Upload size={20} />, name: "Image & File Upload", desc: "Support for image and file uploads with size limits and format validation." },
        { icon: <Printer size={20} />, name: "Report Generation", desc: "Generate and print comprehensive reports with customizable templates and formats." },
        { icon: <BarChart3 size={20} />, name: "Dashboard Analytics", desc: "Advanced analytics and visualizations on dashboards with interactive charts and graphs." }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features - Skoodex School Management Software | Powerful Features</title>
        <meta name="description" content="Explore powerful powerful features of Skoodex, the best school ERP software in Pakistan. Comprehensive school management system with student management, fee collection, attendance tracking, and more." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-brand-dark overflow-hidden">
          {/* Background & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Features" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
          {/* Animated Gradient Orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            From student management to fee collection, attendance tracking to payroll processing, Skoodex covers every aspect of your school operations with precision and ease.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-20">
          
          {modules.map((module, idx) => (
            <div key={idx} className="scroll-mt-24" id={module.title.toLowerCase().replace(/\s/g, '-')}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 px-4">{module.title}</h2>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {module.features.map((feature, fIdx) => (
                  <div key={fIdx} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">{feature.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Missing a feature you need?</h2>
          <p className="text-gray-600 text-lg mb-8">
            We support custom module development and integrations. Our engineering team can build exactly what your institution requires. As the leading online school ERP in Pakistan, we understand that every educational institution has unique needs, and our cloud-based school management software can be customized to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="https://wa.me/923220986963" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-brand-primary hover:bg-brand-secondary text-white font-normal py-4 px-8 rounded-lg shadow-lg transition-colors"
             >
               Request Custom Feature
             </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FeaturesPage;