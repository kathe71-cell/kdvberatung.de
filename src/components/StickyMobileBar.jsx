import React, { useState, useEffect } from 'react';
import { Compass, Users } from 'lucide-react';

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl animate-fade-in-up">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          onClick={() => scrollTo('navigator')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-sm flex items-center justify-center gap-1.5 border border-amber-400"
        >
          <Compass className="w-4 h-4 text-slate-950" />
          <span>Antrags-Navigator</span>
        </button>

        <button
          onClick={() => scrollTo('beratungsstellen')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5"
        >
          <Users className="w-4 h-4 text-emerald-400" />
          <span>Beratung finden</span>
        </button>
      </div>
    </div>
  );
}
