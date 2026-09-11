import React, { useState } from 'react';
import { Shield, Menu, X, FileText, Compass, Users, HelpCircle, CheckSquare } from 'lucide-react';

export default function Header({ onOpenLegal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 group-hover:bg-slate-800 transition-colors shadow-sm">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-950">
                  kdv<span className="text-emerald-600">beratung</span>.de
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  Art. 4 Abs. 3 Grundgesetz
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => scrollTo('begruendung')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              Gewissensbegründung
            </button>
            <button
              onClick={() => scrollTo('beratungsstellen')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Users className="w-4 h-4 text-emerald-600" />
              Beratungsstellen
            </button>
            <button
              onClick={() => scrollTo('ablauf')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Ablauf
            </button>
            <button
              onClick={() => scrollTo('muster')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              Muster &amp; Checkliste
            </button>
          </nav>

          {/* Right Action: Single Clean Antrags-Navigator CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('navigator')}
              className="px-4 py-2.5 text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl shadow-sm border border-amber-400 transition-all hover:shadow flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-slate-950" />
              <span>Antrags-Navigator *</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => scrollTo('begruendung')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 flex items-center gap-2"
          >
            <FileText className="w-5 h-5 text-emerald-600" />
            Gewissensbegründung
          </button>
          <button
            onClick={() => scrollTo('beratungsstellen')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 flex items-center gap-2"
          >
            <Users className="w-5 h-5 text-emerald-600" />
            Beratungsstellen
          </button>
          <button
            onClick={() => scrollTo('ablauf')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Ablauf des KDV-Verfahrens
          </button>
          <button
            onClick={() => scrollTo('muster')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-100 flex items-center gap-2"
          >
            <CheckSquare className="w-5 h-5 text-emerald-600" />
            Muster &amp; Checkliste
          </button>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => scrollTo('navigator')}
              className="w-full text-center py-3 text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl shadow-sm flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-slate-950" />
              <span>Antrags-Navigator starten *</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLegal('impressum'); }}
              className="w-full text-center py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
            >
              Impressum &amp; Datenschutz
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
