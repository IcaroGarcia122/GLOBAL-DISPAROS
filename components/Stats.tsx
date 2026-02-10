
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Empresas Atendidas', value: '15.000+' },
    { label: 'Mensagens Enviadas', value: '500M+' },
    { label: 'ROI Médio', value: '450%' },
    { label: 'Suporte 24/7', value: '⭐ 4.9/5' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 border-y border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
