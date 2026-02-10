
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VIPDashboard from './components/VIPDashboard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const ADMIN_KEYWORD = "VIP2026";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccessRequest = () => {
    setShowAuthModal(true);
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === ADMIN_KEYWORD) {
      setView('dashboard');
      setShowAuthModal(false);
      setError('');
    } else {
      setError('Palavra-chave inválida!');
    }
  };

  if (view === 'dashboard') {
    return <VIPDashboard onLogout={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen selection:bg-brand-600 selection:text-white relative">
      <Navbar scrolled={scrolled} onEnterPanel={handleAccessRequest} />
      
      <main>
        <Hero onCtaClick={handleAccessRequest} />
        <Features />
        <Achievements />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
          <div className="bg-[#1c2433] border border-brand-500/20 p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl blue-glow">
            <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6 mx-auto border border-brand-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h2 className="text-2xl font-black text-white text-center mb-2 uppercase italic tracking-tighter">Acesso Global VIP</h2>
            <p className="text-slate-400 text-sm text-center mb-8 font-medium leading-relaxed">Insira sua palavra-chave de administrador para entrar no ecossistema Elite.</p>
            
            <form onSubmit={handleAuth} className="space-y-6">
              <input 
                type="password" 
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de Acesso..."
                className="w-full bg-[#060b16] border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-500 transition-all text-center font-bold tracking-[0.3em] uppercase placeholder:tracking-normal placeholder:font-normal placeholder:italic placeholder:text-slate-700"
              />
              {error && <p className="text-rose-500 text-xs font-black text-center uppercase tracking-widest">{error}</p>}
              
              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="flex-1 py-5 rounded-2xl font-bold text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
                >
                  Fechar
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-brand-600 hover:bg-brand-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-500/30"
                >
                  Entrar Agora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
