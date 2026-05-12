import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, CloudSun,
  ArrowRight, Star,
  BookOpen, Compass
} from 'lucide-react';
import GameView from './GameView';
import VocabView from './VocabView';

export type AppScreen = 'menu' | 'vocab' | 'game';

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center space-y-16">
      <div className="space-y-8">
        <div className="flex justify-center gap-4">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
             >
               <Star className="w-8 h-8 text-sky-400 fill-sky-400 opacity-20" />
             </motion.div>
           ))}
        </div>
        <div className="space-y-4">
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
            ԻՍՊԱՆԵՐԵՆԻ <br/><span className="text-sky-600">ԵՂԱՆԱԿ</span>
          </h1>
          <p className="text-xs sm:text-2xl md:text-3xl font-bold text-slate-400 uppercase tracking-[0.2em]">
            HAY, ESTÁ, HACE - ԳՐԱԳԵՏ ԽՈՍՔ
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 max-w-2xl mx-auto">
        {/* Theory section */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('vocab')}
          className="group relative bg-white p-6 sm:p-10 rounded-[48px] shadow-2xl border-2 border-slate-50 overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-sky-50 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex items-center gap-6 text-slate-900 font-sans">
            <div className="p-5 bg-sky-100 rounded-[32px] shadow-inner rotate-3 group-hover:rotate-12 transition-transform">
              <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-sky-600" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-sky-600 transition-colors">ՔԵՐԱԿԱՆՈՒԹՅՈՒՆ</h3>
              <p className="text-slate-400 text-sm sm:text-base font-bold italic leading-tight">Ե՞րբ օգտագործել Hay, Está կամ Hace:</p>
            </div>
            <ArrowRight className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all hidden sm:block text-sky-500" />
          </div>
        </motion.button>

        {/* Start Game */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('game')}
          className="group relative bg-slate-900 p-6 sm:p-10 rounded-[48px] shadow-2xl overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          <div className="relative z-10 flex items-center gap-6 text-white">
            <div className="p-5 bg-sky-500 rounded-[32px] shadow-inner -rotate-6 group-hover:rotate-6 transition-transform">
              <Compass className="w-8 h-8 sm:w-12 sm:h-12 text-slate-900" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-sky-400 transition-colors">ԻՆՏԵՐԱԿՏԻՎ ԽԱՂ</h3>
              <p className="text-white/40 text-sm sm:text-base font-bold italic leading-tight">15 վարժություն իրական նկարներով:</p>
            </div>
            <ArrowRight className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:translate-x-4 transition-all hidden sm:block text-sky-500" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <AnimatePresence mode="wait">
        {screen === 'menu' && (
          <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <MainMenu setScreen={setScreen} />
          </motion.div>
        )}
        
        {screen === 'vocab' && (
          <motion.div key="vocab" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <VocabView onBack={() => setScreen('menu')} onPlay={() => setScreen('game')} />
          </motion.div>
        )}

        {screen === 'game' && (
          <motion.div key="game" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}>
            <GameView onBack={() => setScreen('menu')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-2xl border border-slate-100 shadow-2xl rounded-full px-8 py-5 flex items-center gap-8 sm:gap-12 max-w-[95vw] overflow-x-auto no-scrollbar">
        <NavButton 
          active={screen === 'menu'} 
          icon={<Home />} 
          label="Մենյու" 
          onClick={() => setScreen('menu')} 
        />
        <NavButton 
          active={screen === 'vocab'} 
          icon={<BookOpen />} 
          label="Գրամատիկա" 
          onClick={() => setScreen('vocab')} 
        />
        <NavButton 
          active={screen === 'game'} 
          icon={<CloudSun />} 
          label="Խաղ" 
          onClick={() => setScreen('game')} 
        />
      </nav>

      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-sky-50 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-slate-50 rounded-full blur-[140px]" />
      </div>

      <footer className="px-4 py-24 text-center pb-32">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
           &copy; 2026 ԻՍՊԱՆԵՐԵՆԻ ՈՒՍՈՒՑՈՒՄ: ԵՂԱՆԱԿ
        </p>
      </footer>
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: any, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 group transition-all ${active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
    >
      <div className={`p-2.5 rounded-2xl transition-colors ${active ? `bg-sky-600 text-white shadow-xl shadow-sky-100` : 'text-slate-600'}`}>
        {React.cloneElement(icon, { size: 20, strokeWidth: 2.5 })}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${active ? 'text-sky-600' : 'text-slate-500'}`}>
        {label}
      </span>
    </button>
  );
}
