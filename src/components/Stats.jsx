const Stats = () => {
  const stats = [
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Premium Features', value: '100+' },
    { label: 'Support Response', value: '<30m' },
    { label: 'Data Security', value: '100%' },
  ];

  return (
    <section className="relative py-16 text-white overflow-hidden bg-brand-dark">
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="School Statistics" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
        {/* Animated Gradient Orb */}
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 drop-shadow-md">{stat.value}</span>
              <span className="text-blue-200 text-xs md:text-sm font-normal uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;