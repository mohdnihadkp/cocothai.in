import React, { useState } from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { SubscriptionForm } from './components/SubscriptionForm';

const App: React.FC = () => {
  // Set target date to 14 days from now
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date;
  });

  const testimonials = [
    {
      text: "The flavors took me straight back to Bangkok! Absolutely authentic.",
      author: "Sarah Jenkins",
      rating: 5
    },
    {
      text: "Incredible attention to detail. Can't wait for the official launch.",
      author: "Michael Chen",
      rating: 5
    },
    {
      text: "Finally, real Thai cuisine is coming to our neighborhood.",
      author: "Emma Wood",
      rating: 5
    }
  ];

  const socialLinks = [
    { name: "Instagram", url: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "Facebook", url: "#", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
    { name: "Twitter", url: "#", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { name: "WhatsApp", url: "#", icon: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-brand-green to-dark-900 flex flex-col items-center justify-center text-white selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Large glow behind logo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-yellow/5 blur-[120px]" />
        
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-yellow/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-green-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center text-center max-w-5xl">
        
        {/* Custom Logo Reconstruction */}
        <div className="mb-12 animate-float select-none">
          <div className="flex flex-col items-center font-[900] tracking-tighter leading-[0.85] text-brand-yellow drop-shadow-2xl">
            {/* Top Line: COCO */}
            <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] text-shadow-brand">
              COCO
            </span>
            
            {/* Bottom Line: THAI + Palm Tree */}
            <div className="flex items-start">
              <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] text-shadow-brand z-10">
                THAI
              </span>
              
              {/* Palm Tree Icon - Positioned relative to THAI */}
              <div className="relative -ml-2 -mt-2 md:-ml-4 md:-mt-4 w-16 h-16 md:w-28 md:h-28 text-brand-yellow opacity-90">
                 <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-lg">
                    {/* Trunk */}
                    <path d="M50 95 C 45 80, 55 60, 50 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                    {/* Leaves */}
                    <path d="M50 40 Q 20 40 10 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M50 40 Q 80 40 90 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M50 40 Q 30 10 10 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M50 40 Q 70 10 90 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M50 40 Q 50 10 50 5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide">
          The Taste of Paradise
        </h2>
        
        <p className="text-lg text-green-100/70 mb-12 max-w-xl leading-relaxed">
          We are bringing authentic flavors to your doorstep. <br className="hidden md:block"/> Get ready for a culinary journey like no other.
        </p>

        {/* Countdown Timer */}
        <div className="w-full mb-16 max-w-4xl">
           <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-md mb-20">
          <SubscriptionForm />
        </div>

        {/* Testimonials Section */}
        <div className="w-full mb-20">
          <h3 className="text-xl font-semibold text-brand-yellow mb-8 tracking-widest uppercase opacity-80">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl relative flex flex-col items-center md:items-start text-left border-green-400/10 hover:bg-green-900/20 transition-colors duration-300">
                {/* Quote Icon */}
                <div className="text-brand-yellow opacity-20 text-5xl font-serif absolute top-4 left-4 leading-none select-none">"</div>
                
                <p className="text-green-100/90 italic mb-4 mt-4 relative z-10 text-sm md:text-base leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="mt-auto pt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-between border-t border-white/5">
                   <span className="font-bold text-brand-yellow text-sm">{testimonial.author}</span>
                   <div className="flex space-x-0.5 mt-1 md:mt-0">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-3 h-3 text-brand-yellow fill-current" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                     ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-green-400/20 pt-8 pb-4 flex flex-col items-center">
          <div className="flex gap-8 mb-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="group p-2 rounded-full transition-all duration-300 hover:bg-green-800/50"
                aria-label={social.name}
              >
                <svg className="w-6 h-6 fill-current text-green-200/60 group-hover:text-brand-yellow transition-colors duration-300" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-green-200/40">
            &copy; {new Date().getFullYear()} Cocothai Inc. All rights reserved.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;