import { PlayCircle, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern School Classroom" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-primary/40 mix-blend-multiply"></div>
        {/* Animated Gradient Orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col justify-center h-full py-20">
        
        {/* Left Aligned Content */}
        <div className="space-y-8 animate-fade-in-up max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight text-left">
            Focus Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">School</span><br />
            Growth, Not Hassle.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed text-left">
            Reduce administrative workload by 65%, boost operational efficiency by 50%, and fast your school growth.
          </p>
          
          <div className="flex flex-col items-start gap-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                rel="noopener noreferrer" 
                onClick={() => window.open('https://wa.me/923220986963', '_blank')}
                className="bg-brand-primary hover:bg-brand-secondary text-white font-normal py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
              >
                Get Demo Account FREE
              </button>
              
              <button className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white font-normal py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-3 text-lg group">
                <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform text-brand-accent" />
                Watch Video
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-medium text-gray-400 mt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Refundable within 30 days
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Premium support
              </span>
            </div>
          </div>

          {/* <div className="pt-6 flex items-center justify-start gap-4 text-sm text-gray-400">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />
               ))}
             </div>
             <div className="flex flex-col items-start">
               <div className="flex text-brand-accent">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <span>Rated 4.9/5 by Administrators</span>
             </div>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;