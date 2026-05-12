import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, CloudSun, CheckCircle2, 
  AlertCircle, BookOpen, Sun, 
  Wind, CloudRain, Thermometer
} from 'lucide-react';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-40 pt-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-6">
        <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
            className="inline-flex p-4 bg-sky-100 rounded-3xl shadow-xl text-sky-600 border-2 border-sky-200"
        >
           <CloudSun className="w-12 h-12" />
        </motion.div>
        
        <div className="space-y-2">
            <h2 className="text-4xl sm:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              ԵՂԱՆԱԿ
            </h2>
            <p className="text-sky-600 font-black italic uppercase tracking-[0.3em] text-[10px] sm:text-sm">
              HAY, ESTÁ vs HACE
            </p>
        </div>
      </section>

      {/* Theory Cards */}
      <div className="grid gap-8">
        
        {/* HAY Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-8 sm:p-10 shadow-xl border border-slate-100 space-y-6"
        >
          <div className="flex items-center gap-4 border-b border-sky-50 pb-6">
            <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-black text-slate-900 italic uppercase">HAY + Գոյական</h3>
          </div>
          <p className="text-slate-500 font-bold italic">Օգտագործում ենք, երբ խոսում ենք երևույթի <span className="text-sky-600 underline">գոյության</span> մասին (Կա / Կան):</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <TheoryItem esp="Hay tormenta" arm="Ամպրոպ է / կա" />
            <TheoryItem esp="Hay niebla" arm="Մառախուղ է / կա" />
            <TheoryItem esp="Hay nubes" arm="Ամպեր կան" />
            <TheoryItem esp="Hay viento" arm="Քամի կա" />
          </div>
        </motion.div>

        {/* ESTÁ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-[40px] p-8 sm:p-10 shadow-xl space-y-6 text-white"
        >
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 font-black shadow-lg">
              2
            </div>
            <h3 className="text-2xl font-black text-white italic uppercase">ESTÁ + Ածական</h3>
          </div>
          <p className="text-slate-400 font-bold italic">Նկարագրում ենք եղանակի <span className="text-amber-400 underline">վիճակը</span> հիմա:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <TheoryItem esp="Está soleado" arm="Արևոտ է" inverted />
            <TheoryItem esp="Está nublado" arm="Ամպամած է" inverted />
            <TheoryItem esp="Está despejado" arm="Պարզ եղանակ է" inverted />
            <TheoryItem esp="Está húmedo" arm="Խոնավ է" inverted />
          </div>
        </motion.div>

        {/* HACE Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-sky-600 rounded-[40px] p-8 sm:p-10 shadow-xl space-y-6 text-white"
        >
          <div className="flex items-center gap-4 border-b border-sky-400 pb-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sky-600 font-black shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-black text-white italic uppercase">HACE + Զգացողություն</h3>
          </div>
          <p className="text-sky-100 font-bold italic">Օգտագործում ենք ընդհանուր <span className="text-white underline">եղանակային զգացողության</span> համար:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <TheoryItem esp="Hace frío" arm="Ցուրտ է" inverted />
            <TheoryItem esp="Hace calor" arm="Շոգ է" inverted />
            <TheoryItem esp="Hace sol" arm="Արև է" inverted />
            <TheoryItem esp="Hace viento" arm="Քամի է" inverted />
          </div>
        </motion.div>
      </div>

      {/* Common Mistakes */}
      <section className="bg-rose-50 rounded-[40px] p-8 sm:p-12 border-2 border-rose-100 space-y-6">
        <div className="flex items-center gap-3 text-rose-600">
           <AlertCircle className="w-8 h-8" />
           <h3 className="text-2xl font-black uppercase italic">ՍԽԱԼՆԵՐ ԵՎ ՃԻՇՏ ՁԵՎԵՐ</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
           <div className="space-y-2">
              <p className="text-rose-500 font-black uppercase text-xs">Սխալ ❌</p>
              <p className="text-slate-400 line-through">Hay soleado / Hay nublado</p>
              <p className="text-slate-400 line-through">Está tormenta / Está niebla</p>
           </div>
           <div className="space-y-2">
              <p className="text-emerald-600 font-black uppercase text-xs">Ճիշտ ✅</p>
              <p className="font-bold text-slate-800">Está soleado / nublado</p>
              <p className="font-bold text-slate-800">Hay tormenta / niebla</p>
           </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-slate-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">ՊԱՏՐԱ՞ՍՏ ԵՍ ԽԱՂԻՆ</h3>
          <p className="text-slate-400 font-bold italic uppercase tracking-widest text-[9px] sm:text-xs">Ստուգիր քո գիտելիքները նկարներով խաղի միջոցով:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-sky-500 text-white px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-sky-400"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-slate-800 text-white border border-slate-700 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}

function TheoryItem({ esp, arm, inverted = false }: { esp: string, arm: string, inverted?: boolean }) {
  return (
    <div className={`p-4 rounded-3xl border flex flex-col gap-1 transition-all hover:scale-105 ${
      inverted 
        ? 'bg-white/10 border-white/10 hover:bg-white/20' 
        : 'bg-slate-50 border-slate-100 hover:border-sky-300'
    }`}>
      <span className={`text-xl font-black italic uppercase tracking-tighter ${inverted ? 'text-white' : 'text-slate-900'}`}>{esp}</span>
      <span className={`text-xs font-bold uppercase tracking-widest ${inverted ? 'text-white/60' : 'text-slate-400'}`}>{arm}</span>
    </div>
  );
}
