import React from 'react';
import { ShieldCheck, Compass, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 py-12 sm:py-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Unabhängiger Leitfaden zur Kriegsdienstverweigerung (KDV)</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15] mb-6">
            Das Grundrecht auf <br className="hidden sm:inline" />
            <span className="text-emerald-700">Kriegsdienstverweigerung</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-700 leading-relaxed mb-8">
            Orientierungshilfe und strukturierter Leitfaden für Ungediente, aktive Soldatinnen und Soldaten sowie Reservisten. Von den verfassungsrechtlichen Voraussetzungen nach Art. 4 Abs. 3 GG bis zum vollständigen Antragsverfahren.
          </p>

          {/* CTAs - Clean internal action buttons WITHOUT partnerlink asterisks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => scrollTo('navigator')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base transition-all shadow-sm hover:shadow-md border border-amber-400 flex items-center justify-center gap-2 group"
            >
              <Compass className="w-5 h-5 text-slate-950" />
              <span>Antrags-Navigator starten</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('begruendung')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base transition-all border border-slate-300 shadow-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>Leitfaden Gewissensbegründung</span>
            </button>
          </div>

          {/* Core Fact Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-left">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Art. 4 Abs. 3 GG</h4>
                <p className="text-xs text-slate-600 mt-0.5">Verfassungsrechtlich garantiertes Grundrecht für alle Staatsbürger</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">0,00 € Gebühren</h4>
                <p className="text-xs text-slate-600 mt-0.5">Das behördliche Prüfverfahren bei BAPersBw &amp; BAFzA ist gebührenfrei</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Regelung § 3 / § 13 KDVG</h4>
                <p className="text-xs text-slate-600 mt-0.5">Schutz vor Waffendienst nach gesetzlichen Kriterien des KDVG</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Constitutional Quote Banner & Position-0 Snippet */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-4">
        <div className="bg-white border-l-4 border-emerald-600 p-5 sm:p-6 rounded-r-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-3xl text-emerald-600 font-serif leading-none select-none">„</span>
            <div>
              <p className="text-sm sm:text-base font-semibold text-slate-900 italic">
                Niemand darf gegen sein Gewissen zum Kriegsdienst mit der Waffe gezwungen werden. Das Nähere regelt ein Bundesgesetz.
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <span>Artikel 4 Absatz 3 Satz 1 &amp; 2 Grundgesetz für die Bundesrepublik Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Position-0 Featured Snippet Definition Box */}
        <div className="bg-white border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-xl border border-slate-200 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-amber-950">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Definition &amp; Rechtsgrundlage</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            Die <strong className="text-slate-950 font-bold">Kriegsdienstverweigerung (KDV)</strong> ist ein in <strong className="text-slate-950 font-bold">Art. 4 Abs. 3 Grundgesetz (GG)</strong> verankertes Grundrecht. Jeder Staatsbürger kann den Kriegsdienst mit der Waffe aus Gewissensgründen verweigern. Das Verfahren regelt das Kriegsdienstverweigerungsgesetz (KDVG). Antragsempfänger ist die Wehrersatzbehörde (BAPersBw Köln); die inhaltliche Entscheidung trifft das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA). Erforderlich sind ein schriftlicher Antrag, ein tabellarischer Lebenslauf und eine persönliche Gewissensbegründung.
          </p>
        </div>
      </div>
    </section>
  );
}
