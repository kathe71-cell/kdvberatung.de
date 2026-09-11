import React from 'react';
import { Scale, BookOpen, ShieldAlert, CheckCircle } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-4 h-4 text-slate-700" />
            Rechtlicher Rahmen &amp; Verfassungsrang
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Verfassungsrechtliche Grundlagen der KDV
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Die Kriegsdienstverweigerung ist im Grundgesetz der Bundesrepublik Deutschland als schrankenloses Grundrecht verankert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">
                Grundgesetz (GG)
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Artikel 4 Abs. 3 Satz 1 GG
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-2 border-emerald-500 pl-3 my-3">
                „Niemand darf gegen sein Gewissen zum Kriegsdienst mit der Waffe gezwungen werden.“
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dieses Grundrecht schützt jede Person, die den bewaffneten Kriegsdienst aus existenzieller Gewissensnot ablehnt. Es gilt ohne Vorbehalt und steht jedem Staatsbürger zu.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
              Verfassungsrechtlich unantastbar
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                Bundesgesetz
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Kriegsdienstverweigerungsgesetz (KDVG)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed my-3">
                Das KDVG regelt das behördliche Verwaltungsverfahren: Zuständigkeit des Bundesamts für das Personalmanagement der Bundeswehr, Antragsfristen, Vorprüfung und Rechtsmittel.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Besonders wichtig: <strong>§ 2 Abs. 2 KDVG</strong> garantiert Schutz vor Waffendienst ab förmlichem Antragseingang bis zum Abschluss des Prüfverfahrens.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
              Gesetzliche Verfahrensordnung
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-2">
                Höchstrichterliche Rechtsprechung
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Bundesverfassungsgericht (BVerfG)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed my-3">
                Das BVerfG definiert die Gewissensentscheidung als: „Jede ernste, sittliche, an den Kategorien von Gut und Böse orientierte Entscheidung, die das Individuum innerlich bindet.“
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eine Ablehnung des Tötens darf daher weder leichtfertig noch rein taktisch motiviert sein, sondern muss eine innere Notwendigkeit darstellen.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
              Leitentscheidungen BVerfGE 12, 45 u. a.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
