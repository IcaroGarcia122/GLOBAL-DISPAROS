
import React, { useState } from 'react';

interface VIPDashboardProps {
  onLogout: () => void;
}

type Tab = 'dashboard' | 'disparo' | 'contatos' | 'logs' | 'grupos' | 'aquecimento' | 'conquistas';

const VIPDashboard: React.FC<VIPDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [disparoStep, setDisparoStep] = useState(1);
  const [isConnected, setIsConnected] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Painel Geral', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: 'disparo', label: 'Disparador Elite', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
    { id: 'contatos', label: 'Listas de Contatos', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'logs', label: 'Logs de Atividade', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'grupos', label: 'Gestão de Grupos', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
    { id: 'aquecimento', label: 'Aquecimento Cloud', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' },
    { id: 'conquistas', label: 'Placas de Metas', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z' },
  ];

  const handleConnectWhatsApp = () => {
    alert("Iniciando conexão Baileys... Escaneie o QR Code que aparecerá a seguir.");
    setIsConnected(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="animate-fade-in space-y-8">
            <header className="dashboard-card p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-brand-500/20">
              <div>
                <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Resumo</span>
                <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Painel Geral</h1>
                <p className="text-slate-500 text-sm mt-1">Bem-vindo ao centro de comando. Conecte seu número para começar.</p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleConnectWhatsApp}
                  className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all shadow-xl shadow-brand-500/20 active:scale-95 border border-white/10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
                  Conectar WhatsApp
                </button>
                <div className={`flex items-center gap-3 px-6 py-3 rounded-xl border ${isConnected ? 'bg-brand-500/10 border-brand-500/20 text-brand-500' : 'bg-white/5 border-white/5 text-slate-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-brand-500 animate-pulse' : 'bg-slate-700'}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{isConnected ? 'Sessão Ativa' : 'Desconectado'}</span>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'MENSAGENS ENVIADAS', val: '0', badge: 'VOLUME TOTAL', color: 'text-emerald-500' },
                { label: 'TAXA DE ENTREGA', val: '0%', badge: 'ESTABILIDADE', color: 'text-brand-500' },
                { label: 'FALHAS DETECTADAS', val: '0', badge: 'ERROS TÉCNICOS', color: 'text-rose-500' }
              ].map((s, i) => (
                <div key={i} className="dashboard-card p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 border border-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
                    </div>
                    <span className="text-[8px] font-black text-slate-500 uppercase border border-white/5 px-2 py-1 rounded tracking-tighter">{s.badge}</span>
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-500 uppercase mb-2">{s.label}</div>
                    <div className="text-5xl font-black text-white italic tracking-tighter">{s.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 dashboard-card p-10 flex flex-col items-center justify-center min-h-[300px]">
                 <h3 className="text-xl font-black text-white italic uppercase mb-8 self-start">Fluxo de Disparos</h3>
                 <div className="flex flex-col items-center gap-4 opacity-20">
                    <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 12l3-3 3 3 4-4M8 21h12a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h2" strokeWidth="1.5"/></svg>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Aguardando dados...</span>
                 </div>
              </div>
              <div className="dashboard-card p-10 min-h-[300px] flex flex-col">
                 <h3 className="text-xl font-black text-white italic uppercase mb-8">Atividade Recente</h3>
                 <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-20">
                    <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5"/></svg>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sem logs</span>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'aquecimento':
        return (
          <div className="animate-fade-in space-y-10">
            <header className="dashboard-card p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
               <div className="relative z-10">
                 <span className="bg-brand-500/10 text-brand-500 text-[10px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Maturação</span>
                 <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Aquecimento Cloud</h1>
                 <p className="text-slate-500 text-sm mt-1 font-medium">Aumente a autoridade do seu chip de forma 100% automática.</p>
               </div>
               <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center gap-3 shadow-2xl shadow-emerald-500/20 active:scale-95">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 Iniciar Maturação Cloud
               </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-8">
                  <div className="dashboard-card p-12 relative overflow-visible">
                     <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="circle-progress-container">
                           <svg width="220" height="220" className="circle-progress-svg">
                              <circle cx="110" cy="110" r="95" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="14" />
                              <circle cx="110" cy="110" r="95" fill="transparent" stroke="#10b981" strokeWidth="14" strokeDasharray="597" strokeDashoffset="597" strokeLinecap="round" className="glow-green transition-all duration-1000" />
                           </svg>
                           <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-6xl font-black text-white italic tracking-tighter leading-none">0%</span>
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Maturidade</span>
                           </div>
                        </div>

                        <div className="flex-1 w-full">
                           <div className="flex items-center justify-between mb-8">
                              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Índice de Maturação</h3>
                              <div className="bg-white/5 px-4 py-1 rounded-full border border-white/5 flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Sistema Standby</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-2 mb-10">
                              <span className="text-slate-500 font-black italic uppercase text-xs">Aguardando Início...</span>
                           </div>

                           <div className="grid grid-cols-3 gap-4">
                              {[
                                { label: 'TOTAL INTERAÇÕES', val: '0' },
                                { label: 'TEMPO DE UPTIME', val: '00:00:00' },
                                { label: 'DELAY MÉDIO', val: '--' }
                              ].map((s, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                                   <div className="text-[8px] font-black text-slate-500 uppercase mb-2 tracking-widest">{s.label}</div>
                                   <div className="text-xl font-black text-white italic">{s.val}</div>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="dashboard-card p-10">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 border border-brand-500/20">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
                           </div>
                           <h3 className="text-lg font-black text-white italic uppercase tracking-tighter">Velocidade do Motor</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           {['Humano', 'Veloz', 'Turbo Elite', 'Caótico'].map((v, i) => (
                             <button key={i} className={`p-6 rounded-2xl border transition-all text-center ${v === 'Veloz' ? 'bg-brand-500/10 border-brand-500/40' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
                                <div className={`text-sm font-black italic uppercase ${v === 'Veloz' ? 'text-white' : 'text-slate-400'}`}>{v}</div>
                                <div className="text-[9px] text-slate-600 font-bold uppercase mt-1">15-30 seg</div>
                             </button>
                           ))}
                        </div>
                     </div>
                     <div className="dashboard-card p-10">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                           </div>
                           <h3 className="text-lg font-black text-white italic uppercase tracking-tighter">Modo & Instâncias</h3>
                        </div>
                        <div className="bg-white/5 p-2 rounded-xl border border-white/5 flex mb-8">
                           <button className="flex-1 py-3 bg-emerald-500 text-white font-black text-[10px] uppercase rounded-lg shadow-xl shadow-emerald-500/10">Modo Solo</button>
                           <button className="flex-1 py-3 text-slate-500 font-black text-[10px] uppercase">Ping Pong</button>
                        </div>
                        <div className="space-y-4">
                           <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Instância Principal</label>
                           <div className="relative">
                              <select className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-6 py-4 text-white text-xs font-bold appearance-none outline-none focus:border-brand-500">
                                 <option>Nenhuma conectada</option>
                              </select>
                              <svg className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="dashboard-card p-10 flex flex-col h-full relative overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                     <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Monitoramento Realtime</h3>
                     <span className="text-[9px] font-bold text-brand-500 uppercase tracking-widest animate-pulse italic">Live</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-6 opacity-20">
                     <svg className="w-20 h-20 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1.5"/></svg>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-center">Nenhuma atividade registrada no console.</span>
                  </div>
                  <div className="mt-8 bg-brand-500/5 p-6 rounded-2xl border border-brand-500/10 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                     </div>
                     <div>
                        <div className="text-[10px] font-black text-white uppercase tracking-widest">PROTEÇÃO ANTI-BAN</div>
                        <p className="text-[9px] text-slate-500 font-medium">Variação inteligente de delay e simulação ativa.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'conquistas':
        const plaques = [
          {
            title: 'Placa de 10k',
            subtitle: 'Iniciante PRO',
            image: 'https://i.ibb.co/ym0R0PTf/Design-sem-nome-1.png',
            desc: 'Concedida ao atingir 10 mil disparos entregues.',
            color: 'border-slate-400/30'
          },
          {
            title: 'Placa de 100k',
            subtitle: 'Expert Global',
            image: 'https://i.ibb.co/9HNDWPXS/Design-sem-nome.png',
            desc: 'Concedida ao atingir 100 mil disparos entregues.',
            color: 'border-brand-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
          },
          {
            title: 'Placa de 1 Milhão',
            subtitle: 'Lenda das Vendas',
            image: 'https://i.ibb.co/Xx2H9Z6v/Design-sem-nome-2.png',
            desc: 'O ápice da escala. Um milhão de mensagens enviadas.',
            color: 'border-brand-600 shadow-[0_0_40px_rgba(37,99,235,0.3)]'
          }
        ];
        return (
          <div className="animate-fade-in space-y-10">
            <header className="dashboard-card p-12">
               <span className="bg-brand-500/10 text-brand-500 text-[10px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Recompensas</span>
               <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Minhas Conquistas</h1>
               <p className="text-slate-500 text-sm mt-1">Acompanhe seu progresso e desbloqueie placas físicas exclusivas.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {plaques.map((plaque, idx) => (
                 <div key={idx} className={`dashboard-card p-4 border ${plaque.color} relative overflow-hidden group`}>
                    <div className="bg-[#1c2433] rounded-3xl p-6 h-full flex flex-col">
                       <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                          <img src={plaque.image} alt={plaque.title} className="w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-transparent transition-all">
                             <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:hidden">
                                <span className="text-[9px] font-black text-white uppercase tracking-widest">Bloqueado</span>
                             </div>
                          </div>
                       </div>
                       <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-1">{plaque.title}</h3>
                       <div className="text-brand-500 text-[9px] font-black uppercase tracking-widest mb-4">{plaque.subtitle}</div>
                       <div className="flex-1 text-[11px] text-slate-500 font-medium leading-relaxed mb-6">{plaque.desc}</div>
                       <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="w-0 h-full bg-brand-500 transition-all duration-1000 group-hover:w-[10%]"></div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'grupos':
        return (
          <div className="animate-fade-in space-y-8">
             <header className="dashboard-card p-10">
                <span className="bg-brand-500/10 text-brand-500 text-[9px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Gestão de Grupos</span>
                <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Adição em Massa</h1>
                <p className="text-slate-500 text-sm mt-1">Adicione membros de uma planilha automaticamente aos seus grupos.</p>
             </header>

             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="dashboard-card p-10 space-y-12">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">1. Selecionar WhatsApp</label>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4 cursor-pointer hover:border-brand-500/30 transition-all opacity-50">
                        <div className="w-10 h-10 rounded-xl bg-[#0d1117] border border-white/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18H3l4.5-4.5 4.5 4.5z"/></svg>
                        </div>
                        <span className="text-sm font-bold text-white">Nenhuma Instância</span>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">2. Modo de Operação</label>
                      <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-slate-500 font-black text-[10px] uppercase tracking-widest">Grupo Existente</button>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">3. Upload Planilha</label>
                      <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-all text-slate-500 hover:text-white group">
                         <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" strokeWidth="2.5"/></svg>
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-[0.2em]">Selecionar XLSX</span>
                      </div>
                   </div>

                   <button className="w-full py-5 rounded-2xl bg-white/5 text-slate-700 font-black text-[11px] uppercase tracking-[0.3em] cursor-not-allowed border border-white/5">
                      Iniciar Adição
                   </button>
                </div>

                <div className="lg:col-span-3 dashboard-card p-10 flex flex-col items-center justify-center gap-8 relative overflow-hidden">
                   <div className="absolute top-10 left-10 right-10 flex items-center gap-4">
                      <div className="relative flex-1">
                         <input type="text" placeholder="Filtrar grupos existentes..." className="w-full bg-[#0d1117] border border-white/5 rounded-2xl px-14 py-4 text-sm font-medium outline-none" />
                         <svg className="w-5 h-5 text-slate-600 absolute left-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      </div>
                      <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 transition-all cursor-not-allowed">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2.5"/></svg>
                      </button>
                   </div>
                   <div className="flex flex-col items-center gap-6 opacity-40">
                      <svg className="w-24 h-24 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5"/></svg>
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 italic">Nenhum Grupo Encontrado...</span>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'logs':
        return (
          <div className="animate-fade-in space-y-8">
            <header className="dashboard-card p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Sistema</span>
                  <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Logs de Atividade</h1>
                  <p className="text-slate-500 text-sm mt-1">Nenhum disparo realizado até o momento.</p>
               </div>
               <div className="flex items-center gap-4">
                  <button className="bg-white/5 opacity-50 cursor-not-allowed text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all border border-white/5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4 4m4-4v12" strokeWidth="2.5"/></svg>
                    Exportar CSV
                  </button>
               </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
               {[
                 { label: 'TOTAL HOJE', val: '0', color: 'text-brand-500' },
                 { label: 'SUCESSO', val: '0', color: 'text-emerald-500' },
                 { label: 'FALHAS', val: '0', color: 'text-rose-500' },
                 { label: 'PENDENTES', val: '0', color: 'text-amber-500' }
               ].map((s, i) => (
                 <div key={i} className="dashboard-card p-8 text-center border-white/5">
                    <div className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">{s.label}</div>
                    <div className={`text-5xl font-black italic tracking-tighter ${s.color}`}>{s.val}</div>
                 </div>
               ))}
            </div>

            <div className="dashboard-card p-24 flex flex-col items-center justify-center gap-6 border-white/5 opacity-20">
               <svg className="w-20 h-20 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5"/></svg>
               <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 italic">Lista de logs vazia</span>
            </div>
          </div>
        );

      case 'contatos':
        return (
          <div className="animate-fade-in space-y-10">
            <header className="dashboard-card p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Gestão</span>
                  <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Listas de Contatos</h1>
                  <p className="text-slate-500 text-sm mt-1">Crie listas segmentadas com variáveis personalizadas.</p>
               </div>
               <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center gap-4 shadow-2xl shadow-emerald-500/20">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                 Nova Lista
               </button>
            </header>

            <div className="py-40 flex flex-col items-center justify-center gap-6 opacity-30">
               <svg className="w-24 h-24 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5"/></svg>
               <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 italic">Nenhuma lista criada ainda.</span>
            </div>
          </div>
        );

      case 'disparo':
        return (
          <div className="animate-fade-in space-y-12">
            <header className="dashboard-card p-12">
               <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase px-3 py-1 rounded-md mb-3 inline-block tracking-widest">Envio</span>
               <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">Disparador Elite</h1>
               <p className="text-slate-500 text-sm mt-1">Configuração dinâmica de fluxos em massa.</p>
               
               <div className="mt-16 relative flex justify-between items-center max-w-2xl mx-auto">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
                  {[
                    { id: 1, label: 'Configurações', icon: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z' },
                    { id: 2, label: 'Conteúdo', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
                    { id: 3, label: 'Destinatários', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
                  ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${disparoStep === step.id ? 'bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 border border-emerald-400/30' : 'bg-[#0d1117] text-slate-600 border border-white/5'}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={step.icon} strokeWidth="2.5"/></svg>
                       </div>
                       <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${disparoStep === step.id ? 'text-white' : 'text-slate-600'}`}>{step.label}</span>
                       {disparoStep === step.id && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1"></div>}
                    </div>
                  ))}
               </div>
            </header>

            <div className="dashboard-card p-12 space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nome da Campanha</label>
                     <input type="text" placeholder="Ex: Promoção de Natal 2024" className="w-full bg-[#0d1117] border border-white/5 rounded-2xl px-8 py-6 text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Escolher Instância</label>
                     <div className="relative">
                        <select className="w-full bg-[#0d1117] border border-white/5 rounded-2xl px-8 py-6 text-sm font-bold outline-none appearance-none cursor-pointer">
                           <option>Selecionar WhatsApp Conectado</option>
                           <option>Nenhuma conectada</option>
                        </select>
                        <svg className="w-5 h-5 text-slate-500 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
                     </div>
                  </div>
               </div>

               <div className="bg-[#0d1117] p-10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5"/></svg>
                     </div>
                     <div>
                        <div className="text-sm font-black text-white italic uppercase tracking-tighter">Modo de Teste</div>
                        <p className="text-xs text-slate-500 font-bold uppercase">Envie para você mesmo antes de disparar.</p>
                     </div>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-14 h-8 bg-slate-800 rounded-full peer peer-checked:bg-emerald-500 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                  </div>
               </div>

               <div className="flex justify-end pt-10 border-t border-white/5">
                  <button onClick={() => setDisparoStep(prev => Math.min(prev + 1, 3))} className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all flex items-center gap-4 shadow-2xl shadow-emerald-500/20 active:scale-95">
                    Próximo Passo
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3"/></svg>
                  </button>
               </div>
            </div>
          </div>
        );

      default:
        return <div className="text-slate-400 font-black italic uppercase p-40 text-center opacity-40">Em breve...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col lg:flex-row transition-colors duration-500">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-[#0b1121] border-r border-white/5 p-8 flex flex-col shrink-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl shadow-black/80' : '-translate-x-full'}`}>
        <div className="hidden lg:flex items-center gap-4 mb-20 group cursor-pointer">
          <div className="w-12 h-12 bg-brand-600 rounded-[1.2rem] flex items-center justify-center text-white shadow-2xl shadow-brand-600/30">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <div className="text-2xl font-black italic tracking-tighter uppercase text-white flex flex-col leading-none">
            ZapElite<span className="text-brand-600 -mt-1 tracking-[0.4em] text-[10px]">PRO v.26</span>
          </div>
        </div>
        
        <nav className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2 pt-20 lg:pt-0">
          {sidebarItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all group ${activeTab === item.id ? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/20' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}
            >
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} /></svg>
                {item.label}
              </div>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-white/5">
            <button onClick={onLogout} className="w-full text-slate-500 hover:text-rose-500 font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group">
              Sair do Sistema
            </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default VIPDashboard;
