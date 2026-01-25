import { Zap, Shield, Headphones, Gift } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="pt-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Secure Boxes - Left Side */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            <div className="relative flex flex-col items-center justify-center text-center p-6 rounded-xl border border-white/20 hover:border-brand-primary/50 transition-all duration-300 text-white overflow-hidden bg-brand-dark flex-1">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                  alt="Secure Background" 
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
              </div>
              <div className="relative z-10">
                <Shield className="w-8 h-8 text-white mb-3" />
                <h5 className="font-bold text-white mb-2">Secure & Reliable</h5>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Enterprise-grade security with 99.9% uptime guarantee
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center text-center p-6 rounded-xl border border-white/20 hover:border-brand-primary/50 transition-all duration-300 text-white overflow-hidden bg-brand-dark flex-1">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                  alt="Support Background" 
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
              </div>
              <div className="relative z-10">
                <Headphones className="w-8 h-8 text-white mb-3" />
                <h5 className="font-bold text-white mb-2">24/7 Support</h5>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Premium support with fast response times
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Card - Right Side */}
          <div className="lg:col-span-7">
            <div className="relative border border-white/20 rounded-xl p-8 hover:border-brand-primary/50 hover:shadow-md transition-all duration-300 text-center text-white overflow-hidden bg-brand-dark h-full">
              {/* Background & Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                  alt="Pricing Background" 
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
                {/* Animated Gradient Orb */}
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-brand-primary text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                    <Zap size={14} />
                    Best Value
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-white drop-shadow-md">Rs 2,499</span>
                    <span className="text-blue-200 text-xl">/month</span>
                  </div>
                  <p className="text-blue-100">
                    Unlimited everything & all premium features
                  </p>
                </div>

                <a
                  href="https://app.Skoodex.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto bg-brand-primary hover:bg-brand-secondary text-white font-normal py-4 px-12 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl mb-4 flex items-center justify-center gap-2 group"
                >
                  <Gift className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />
                  Get 14-day FREE trial
                </a>
                <p className="text-blue-200 text-sm">
                  No credit card required • Start your free trial today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

