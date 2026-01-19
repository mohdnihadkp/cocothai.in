import React, { useState } from 'react';

export const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      // Simple mock validation
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="glass-panel p-2 rounded-full flex flex-col sm:flex-row items-center relative group border-green-400/20">
        
        {/* Glow effect on focus/hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-yellow to-green-400 rounded-full opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
        
        <form onSubmit={handleSubmit} className="relative z-10 flex w-full flex-col sm:flex-row gap-2">
            <div className="relative flex-grow w-full">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-green-200/50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                 </div>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== 'idle') setStatus('idle');
                    }}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-transparent text-white placeholder-green-200/50 border-none outline-none focus:ring-0 px-4 pl-12 py-3 rounded-full transition-all duration-300 focus:bg-white/5 focus:scale-[1.02] focus:shadow-[0_0_15px_rgba(252,227,0,0.1)]"
                />
            </div>
            
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`
                    w-full sm:w-auto px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center whitespace-nowrap
                    ${status === 'success' 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-brand-yellow hover:bg-yellow-300 text-brand-dark shadow-[0_0_20px_rgba(252,227,0,0.3)] hover:shadow-[0_0_30px_rgba(252,227,0,0.5)]'
                    }
                    disabled:opacity-70 disabled:cursor-not-allowed
                `}
            >
                {status === 'loading' && (
                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Notify Me'}
            </button>
        </form>
      </div>
      
      {/* Feedback Message */}
      <div className={`mt-3 text-sm text-center transition-opacity duration-300 ${status === 'error' ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-red-300 bg-red-900/30 inline-block px-3 py-1 rounded-full border border-red-500/20">
            Please enter a valid email address.
          </p>
      </div>
      <div className={`mt-3 text-sm text-center transition-opacity duration-300 ${status === 'success' ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-brand-yellow">
             Welcome to the family! We'll keep you posted.
          </p>
      </div>
    </div>
  );
};