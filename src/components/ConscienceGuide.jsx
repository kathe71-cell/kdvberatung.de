import React, { useState } from 'react';
import { FileText, CheckCircle2, XCircle, AlertTriangle, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';

export default function ConscienceGuide({ onOpenChecklist }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: "01",
      title: "Entstehung der Wertehaltung",
      subtitle: "Biografischer Ursprung & Prägung",
      content: "Das Prüfamt (BAPersBw) will verstehen, woher Ihre ethische oder religiöse Haltung stammt. Beschreiben Sie Ihre Erziehung, das familiäre Umfeld, Vorbilder, Schul- oder Gemeindeerfahrungen und den Stellenwert von Gewaltfreiheit in Ihrem Aufwachsen.",
      keyQuestions: [
        "Welche Werte wurden mir in Familie, Schule oder Glaubensgemeinschaft vermittelt?",
        "Gab es frühe Berührungen mit Gewalt oder Konflikten und wie habe ich darauf reagiert?",
        "Welche philosophischen oder religiösen Grundsätze leiten mein Handeln?"
      ]
    },
    {
      number: "02",
      title: "Schlüsselerlebnisse & Reflexion",
      subtitle: "Der Wendepunkt zum Gewissensentschluss",
      content: "Eine Gewissensentscheidung fällt selten über Nacht. Das Bundesverfassungsgericht verlangt eine nachvollziehbare Entwicklung. Schildern Sie konkrete Anlässe, Bücher, Filme, Reisen, Begegnungen oder – bei Soldaten – Erlebnisse im militärischen Alltag, die Ihren Gewissenskonflikt ausgelöst haben.",
      keyQuestions: [
        "Welches konkrete Ereignis oder Gespräch hat mich zutiefst aufgerüttelt?",
        "Wann wurde mir bewusst, dass ich im Ernstfall keinen Menschen erschießen könnte?",
        "Welche inneren Zweifel und Kämpfe habe ich durchlebt?"
      ]
    },
    {
      number: "03",
      title: "Die unbedingte Absage an das Töten",
      subtitle: "Der Kern von Artikel 4 Abs. 3 GG",
      content: "Hier formulieren Sie das unauflösliche Gebot Ihres Gewissens: Die Weigerung, einen Menschen im Kriegsdienst mit der Waffe zu töten oder daran mitzuwirken. Machen Sie deutlich, dass dies keine Zweckmäßigkeitserwägung ist, sondern eine existenzielle Entscheidung Ihres Gewissens.",
      keyQuestions: [
        "Warum ist das Töten eines Menschen für mein inneres Gewissen absolut unvereinbar?",
        "Wie stehe ich zum Gehorsam gegenüber Befehlen zum Waffeneinsatz?",
        "Warum kann ich auch in einer Notwehr- oder Verteidigungssituation keine Kriegswaffe führen?"
      ]
    },
    {
      number: "04",
      title: "Ernsthaftigkeit & Unabdingbarkeit",
      subtitle: "Glaubwürdigkeit auch in Extremsituationen",
      content: "Die Gewissensentscheidung muss von solchem Gewicht sein, dass eine Missachtung zu einer seelischen Notlage führen würde. Legen Sie dar, dass Sie bereit sind, auch persönliche Konsequenzen (z. B. zivilen Ersatzdienst, gesellschaftliche Skepsis, berufliche Neuorientierung) auf sich zu nehmen.",
      keyQuestions: [
        "Welche Konsequenzen nehme ich für meine Überzeugung in Kauf?",
        "Wie verhalte ich mich in meinem alltäglichen zivilen Leben bei Streit und Konflikten?",
        "Ist meine Entscheidung endgültig und nicht mehr verhandelbar?"
      ]
    }
  ];

  return (
    <section id="begruendung" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3 border border-amber-300">
            <BookOpen className="w-4 h-4 text-amber-900" />
            Leitfaden nach BVerfG-Rechtsprechung
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Die 4 Säulen einer tragfähigen Gewissensbegründung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Die persönliche schriftliche Begründung ist das Herzstück Ihres Antrags. Das BAPersBw prüft, ob eine echte Gewissensentscheidung im Sinne von Art. 4 Abs. 3 GG vorliegt.
          </p>
        </div>

        {/* 4 Pillars Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                  activePillar === idx
                    ? 'bg-white border-emerald-600 shadow-md ring-1 ring-emerald-600'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className={`text-sm font-black px-2.5 py-1 rounded-lg ${
                  activePillar === idx ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {pillar.number}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Pillar Detail View */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Säule {pillars[activePillar].number} im Detail
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Kriterium nach BVerfGE 12, 45 ff.
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-4 mb-3">
              {pillars[activePillar].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {pillars[activePillar].content}
            </p>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                Reflexionsfragen für Ihre Ausarbeitung:
              </h5>
              <ul className="space-y-2">
                {pillars[activePillar].keyQuestions.map((q, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">→</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Umfang: typischerweise 2 bis 5 DIN-A4-Seiten
              </span>
              <button
                onClick={onOpenChecklist}
                className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                Zur Dokumenten-Checkliste <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Dos & Don'ts Comparison Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Prüfpraxis: Was überzeugt – und was zur Ablehnung führt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Erfahrungen aus Tausenden KDV-Verfahren beim Bundesamt für das Personalmanagement der Bundeswehr.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DO Column */}
            <div className="bg-emerald-50/60 p-6 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-900 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>Unverzichtbar (Das überzeugt die Prüfer)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Eigene, authentische Sprache:</strong> Schreiben Sie in Ihrem eigenen Sprachstil. Ehrliche Zweifel wirken glaubwürdiger als geschliffene Fremdtexte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Konkrete Lebenssituationen:</strong> Veranschaulichen Sie Ihre Haltung an echten Situationen aus Ihrem bisherigen Leben oder Dienstalltag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Unbedingtheit:</strong> Stellen Sie klar, dass Ihre Weigerung zum Waffendienst ausnahmslos gilt – unabhängig von Nation, Gegner oder Bündnis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Widerspruchsfreiheit zum Lebenslauf:</strong> Hobbys, Interessen und Angaben im Lebenslauf müssen mit der friedfertigen Haltung harmonieren.</span>
                </li>
              </ul>
            </div>

            {/* DON'T Column */}
            <div className="bg-amber-50/60 p-6 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 text-sm font-extrabold text-amber-950 mb-4">
                <XCircle className="w-5 h-5 text-amber-700" />
                <span>Dringend vermeiden (Führt häufig zur Ablehnung)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">✕</span>
                  <span><strong>Kopierte Muster &amp; KI-Generatoren:</strong> Das BAPersBw erkennt Textbausteine und ChatGPT-Standardtexte sofort. Folge: Zweifel an der Ernsthaftigkeit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">✕</span>
                  <span><strong>Rein politische Statements:</strong> Kritik an der NATO, Rüstungsausgaben oder Parteipolitik begründet allein keine verfassungsrechtliche Gewissensentscheidung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">✕</span>
                  <span><strong>Bedingte Verweigerung:</strong> Aussagen wie „Ich würde nur mein Heimatdorf verteidigen“ führen direkt zur Ablehnung (sog. selektive Verweigerung).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">✕</span>
                  <span><strong>Zweckmäßigkeitsgründe:</strong> Verweise auf Studienplätze, Berufs- oder Urlaubsplanung haben im KDV-Antrag keinen Platz.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* AI Warning Callout */}
          <div className="mt-6 bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-xl flex items-start gap-3 text-xs sm:text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-bold">Wichtiger Hinweis zu KI-generierten Texten:</strong>
              <p className="mt-1 text-slate-300">
                Verwenden Sie KI-Tools höchstens zur Gliederung oder Korrektur von Rechtschreibfehlern. Das BAPersBw fordert bei Verdacht auf Fremd- oder KI-Texte häufig eine persönliche, mündliche Anhörung an, in der Sie Ihre Begründung im Detail verteidigen müssen.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
