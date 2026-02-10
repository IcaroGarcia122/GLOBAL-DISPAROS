
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIScriptGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!product) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Gere um script curto e matador para abordagem no WhatsApp para vender o seguinte produto: ${product}. Use gatilhos mentais, emojis e uma chamada para ação clara. O tom deve ser profissional porém amigável.`,
      });
      setResult(response.text || 'Erro ao gerar script.');
    } catch (error) {
      console.error(error);
      setResult('Erro na conexão com o assistente AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-[2.5rem] glass-card shadow-2xl overflow-hidden relative border-emerald-500/20">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>
      
      <div className="relative flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Seu Produto ou Serviço</label>
          <textarea
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Ex: Mentoria de emagrecimento para mulheres ocupadas"
            className="w-full h-40 bg-slate-950/50 border border-white/10 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !product}
            className={`mt-6 w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${loading ? 'bg-slate-800' : 'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20'}`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gerando Script...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Criar Script Matador
              </>
            )}
          </button>
        </div>

        <div className="flex-1 bg-slate-950/50 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Resultado do ZapElite AI</span>
            {result && (
              <button 
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-xs font-bold text-emerald-500 hover:text-emerald-400"
              >
                COPIAR SCRIPT
              </button>
            )}
          </div>
          <div className="text-slate-300 leading-relaxed h-[260px] overflow-y-auto whitespace-pre-wrap text-sm md:text-base">
            {result ? result : <span className="text-slate-600 italic">O script gerado aparecerá aqui. Descreva seu produto ao lado e clique em gerar.</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScriptGenerator;
