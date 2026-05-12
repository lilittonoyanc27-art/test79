import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, CheckCircle2,
  AlertCircle, Star,
  Hash, Lightbulb,
  CloudRain
} from 'lucide-react';
import { WEATHER_CHALLENGES } from './vocabData';

export default function GameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = WEATHER_CHALLENGES[currentIdx];
  
  const shuffledOptions = useMemo(() => {
    return [...current.options].sort(() => Math.random() - 0.5);
  }, [current]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(option);
    const correct = option === current.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentIdx < WEATHER_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, correct ? 1500 : 3000);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[40px] sm:rounded-[64px] p-8 sm:p-12 shadow-2xl border-4 border-slate-50 space-y-10 relative overflow-hidden"
        >
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto drop-shadow-xl" />
          
          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-widest text-slate-900 leading-tight">ԽԱՂԻ ԱՎԱՐՏ</h2>
            <div className="text-6xl sm:text-8xl font-black text-sky-600 drop-shadow-xl">
              {score}/{WEATHER_CHALLENGES.length}
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-400 uppercase tracking-[0.3em]">
              {score === WEATHER_CHALLENGES.length ? 'ԵՂԱՆԱԿԻ ՄԱՍՆԱԳԵՏ!' : 'ԼԱՎ ՓՈՐՁ ԷԱՐ'}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-sky-600 text-white py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors pt-4">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-6 sm:space-y-8 pb-32">
      {/* HUD */}
      <div className="flex justify-between items-center text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-white px-6 py-2 rounded-full text-slate-900 shadow-sm border border-slate-100 flex items-center gap-3">
          <CloudRain className="w-4 h-4 text-sky-500" /> {currentIdx + 1} / {WEATHER_CHALLENGES.length}
        </div>
      </div>

      {/* Progress */}
      <div className="h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-100">
        <motion.div 
          className="h-full bg-sky-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / WEATHER_CHALLENGES.length) * 100}%` }}
        />
      </div>

      {/* Main Card */}
      <motion.div
        key={currentIdx}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[40px] sm:rounded-[64px] shadow-2xl border-b-[12px] border-slate-50 relative overflow-hidden"
      >
        {/* Image Section */}
        <div className="h-64 sm:h-96 w-full relative group bg-slate-200">
           <img 
              key={currentIdx}
              referrerPolicy="no-referrer"
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent(current.imagePrompt)}?width=1024&height=1024&nologo=true&seed=${currentIdx + 100}`}
              alt="weather"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              style={{ opacity: 0, transition: 'opacity 0.5s' }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
           
           {/* Floating Caption */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-slate-100 min-w-[200px]">
              <p className="text-slate-900 font-black italic uppercase tracking-tighter text-xl sm:text-3xl text-center">
                 {current.sentence}
              </p>
           </div>
        </div>

        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-50 flex flex-col items-center justify-center text-white space-y-6 shadow-inner ${
                isCorrect ? 'bg-sky-600/95 backdrop-blur-md' : 'bg-slate-900/60 backdrop-blur-md pointer-events-none'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-24 h-24" />
                  <h3 className="text-4xl sm:text-8xl font-black italic uppercase drop-shadow-2xl">ՃԻՇՏ Է!</h3>
                  <div className="text-center space-y-2">
                    <p className="text-xl font-bold uppercase tracking-widest bg-white/20 px-6 py-2 rounded-full">{current.explanation}</p>
                    {current.alternative && (
                      <p className="text-xs font-black uppercase tracking-widest opacity-80 pt-2">ԱՅԼ ՏԱՐԲԵՐԱԿ` {current.alternative}</p>
                    )}
                  </div>
                </>
              ) : (
                <motion.div 
                  initial={{ rotateX: 90 }}
                  animate={{ rotateX: 0 }}
                  className="bg-rose-600 p-8 sm:p-12 rounded-[40px] shadow-2xl border-4 border-rose-400 space-y-4 max-w-md mx-4"
                >
                  <div className="flex items-center justify-center gap-4">
                    <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                    <h3 className="text-2xl sm:text-5xl font-black italic uppercase leading-none text-center">ՍԽԱԼ Է</h3>
                  </div>
                  <div className="space-y-4 text-center">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ՃԻՇՏ ՊԱՏԱՍԽԱՆՆ Է`</p>
                      <p className="text-4xl sm:text-7xl font-black uppercase text-white drop-shadow-md">{current.correctAnswer}</p>
                    </div>
                    <p className="text-xs font-bold opacity-90 uppercase tracking-widest border-t border-rose-400 pt-4">{current.explanation}</p>
                    {current.alternative && (
                      <div className="bg-black/20 p-4 rounded-2xl space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">ԿԱՐՈՂ ԵՍ ԱՍԵԼ ՆԱԵՎ`</p>
                        <p className="text-sm font-black uppercase text-amber-300">{current.alternative}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-8 sm:p-16 space-y-10 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-sky-50 text-sky-600 shadow-sm">
               <Lightbulb className="w-4 h-4" /> ԵՂԱՆԱԿԻ ԳԻՏԱԿ
            </div>
            <p className="text-slate-400 font-bold italic text-lg sm:text-2xl uppercase tracking-widest leading-tight">
              {current.translation}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {shuffledOptions.map((opt, i) => {
               const isSelected = selectedOption === opt;
               const showsError = isCorrect === false && isSelected;

               return (
                 <motion.button
                   key={i}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => handleAnswer(opt)}
                   className={`p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] text-xl sm:text-3xl font-black border-4 transition-all uppercase italic tracking-tighter ${
                     showsError 
                      ? 'bg-rose-600 text-white border-rose-400 shadow-[0_12px_0_0_#9f1239]' 
                      : 'bg-slate-50 text-slate-900 border-slate-100 shadow-[0_12px_0_0_#f1f5f9]'
                   } hover:shadow-[0_6px_0_0_#ced4da] hover:translate-y-[6px]`}
                 >
                   {opt}
                 </motion.button>
               );
            })}
          </div>
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] flex items-center justify-center gap-3">
         <Star className="w-4 h-4 text-sky-400" /> SPANISH WEATHER <Star className="w-4 h-4 text-sky-400" />
      </div>
    </div>
  );
}
