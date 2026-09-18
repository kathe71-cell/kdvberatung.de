import React, { useState, useEffect } from 'react';
import { CheckSquare, Copy, Check, Printer, FileText } from 'lucide-react';
import { sampleLetters, documentChecklist } from '../data/sampleLetter';

export default function ChecklistSection({ preselectedLetter = 'ungediente' }) {
  const [activeTab, setActiveTab] = useState(preselectedLetter);
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    if (preselectedLetter) {
      setActiveTab(preselectedLetter);
    }
  }, [preselectedLetter]);

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = () => {
    const letter = sampleLetters[activeTab];
    const fullText = `${letter.recipient}\n\nBetreff: ${letter.subject}\n\n${letter.body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentLetter = sampleLetters[activeTab] || sampleLetters.ungediente;

  const totalMandatory = documentChecklist.filter(i => i.mandatory).length;
  const completedMandatory = documentChecklist.filter(i => i.mandatory && checkedItems[i.id]).length;

  return (
    <section id="muster" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <CheckSquare className="w-4 h-4 text-emerald-700" />
            Muster-Vorlagen &amp; Unterlagen-Checkliste
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Antragsmappe vorbereiten
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Nutzen Sie unsere Orientierungsmuster für das Anschreiben an BAPersBw (Köln) und haken Sie benötigte Anlagen vor dem Versand ab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Sample Letters */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Muster-Anschreiben
              </h3>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 rounded-lg border border-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Text kopieren</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-300 transition-colors flex items-center gap-1.5"
                  title="Drucken"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span className="hidden sm:inline">Drucken</span>
                </button>
              </div>
            </div>

            {/* Sub-tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { id: 'ungediente', label: 'Für Ungediente' },
                { id: 'soldaten', label: 'Für aktive Soldaten' },
                { id: 'reservisten', label: 'Für Reservisten' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setCopied(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Letter Preview Box */}
            <div className="bg-white p-5 rounded-xl border border-slate-300 font-mono text-xs sm:text-[13px] text-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
              <div className="text-slate-500 mb-3 pb-3 border-b border-slate-100 italic">
                {currentLetter.recipient}
              </div>
              <div className="font-bold text-slate-900 mb-3">
                {currentLetter.subject}
              </div>
              <div>{currentLetter.body}</div>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 italic">
              Hinweis: Platzhalter in eckigen Klammern [ ] durch persönliche Daten ersetzen. Das Schreiben muss eigenhändig unterschrieben werden.
            </div>
          </div>

          {/* Right: Interactive Checklist */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-600" />
                Unterlagen-Checkliste
              </h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                {completedMandatory}/{totalMandatory} Pflichtpunkte
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Haken Sie benötigte Dokumente vor dem Absenden ab:
            </p>

            <div className="space-y-3">
              {documentChecklist.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="mt-0.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 pointer-events-none"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-xs font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                          {item.title}
                        </span>
                        {item.mandatory ? (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                            Pflicht
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                            Option
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checklist Completion Message */}
            {completedMandatory === totalMandatory && (
              <div className="mt-5 p-3.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-2 border border-emerald-300">
                <Check className="w-4 h-4 text-emerald-800" />
                <span>Alle erforderlichen Hauptunterlagen sind abgehakt!</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
