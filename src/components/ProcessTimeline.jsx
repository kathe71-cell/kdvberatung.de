import React from 'react';
import { CheckCircle, Clock, FileCheck, Shield, Award, ArrowRight } from 'lucide-react';

export default function ProcessTimeline({ onOpenChecklist }) {
  const steps = [
    {
      num: "1",
      title: "Vorbereitung & Begründung",
      time: "1 – 3 Wochen",
      desc: "Ausarbeitung der persönlichen Gewissensbegründung nach den 4 Säulen, Zusammenstellung des tabellarischen Lebenslaufs und Aufsetzen des formellen Anschreibens.",
      note: "Tipp: Begründung vor dem Absenden von einer unabhängigen Beratungsstelle gegenlesen lassen."
    },
    {
      num: "2",
      title: "Förmliche Antragstellung",
      time: "Tag 0",
      desc: "Versand aller Unterlagen per Einwurf-Einschreiben oder Übergabe-Einschreiben an das zuständige Karrierecenter (Ungediente/Reservisten) bzw. auf dem Dienstweg (Soldaten).",
      note: "Sendenachweis und Kopien aller Unterlagen sicher aufbewahren!"
    },
    {
      num: "3",
      title: "Eingang & Schutzwirkung",
      time: "Nach ca. 2 – 4 Wochen",
      desc: "Sie erhalten ein schriftliches Aktenzeichen. Ab diesem Zeitpunkt entfaltet der Antrag Schutzwirkung vor Einberufung zum Waffendienst (§ 2 Abs. 2 KDVG).",
      note: "Wichtig: Zu ärztlichen Musterungen müssen Sie dennoch erscheinen."
    },
    {
      num: "4",
      title: "Prüfung durch das BAPersBw",
      time: "2 – 6 Monate",
      desc: "Das Prüfamt des BAPersBw prüft die Plausibilität nach Aktenlage. Nur bei Unklarheiten oder Verdacht auf Fremdtexte erfolgt eine Vorladung zur mündlichen Anhörung.",
      note: "Eventuelle behördliche Rückfragen stets fristgerecht beantworten."
    },
    {
      num: "5",
      title: "Anerkennungsbescheid & Rechtskraft",
      time: "Abschluss",
      desc: "Bei positivem Bescheid erhalten Sie die rechtskräftige Anerkennung als Kriegsdienstverweigerer. Bei Ablehnung verbleibt 1 Monat Frist zur Einlegung des Widerspruchs.",
      note: "Anerkennungsurkunde lebenslang sicher aufbewahren."
    }
  ];

  return (
    <section id="ablauf" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-4 h-4 text-slate-700" />
            Verfahrens-Chronologie
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Der Ablauf des behördlichen KDV-Verfahrens
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Von den ersten Schritten über die Vorprüfung bis zum amtlichen Anerkennungsbescheid des Bundesamts für das Personalmanagement der Bundeswehr.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black flex items-center justify-center text-sm">
                    {s.num}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {s.time}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Checklist Action */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <button
            onClick={onOpenChecklist}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm border border-amber-400 shadow-sm transition-all"
          >
            <FileCheck className="w-4 h-4 text-slate-950" />
            <span>Dokumentenmappe &amp; Anschreiben vorbereiten *</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
