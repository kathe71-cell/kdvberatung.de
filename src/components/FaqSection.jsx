import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, BookOpen } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FaqSection() {
  const [openIds, setOpenIds] = useState({ 'grundrecht-aktuell': true, 'zeitpunkt-antrag': true });
  const [query, setQuery] = useState('');

  const toggle = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(query.toLowerCase()) ||
    item.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-slate-700" />
            Häufig gestellte Fragen (FAQ)
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Wissenswertes zur Kriegsdienstverweigerung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Juristisch fundierte und sachliche Antworten auf die wichtigsten Praxisfragen zu KDV-Antrag, Wehrerfassung, Fristen und Rechtsfolgen.
          </p>

          {/* Quick FAQ Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Frage durchsuchen (z. B. Musterung, Kosten, BAPersBw)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white p-8 rounded-xl text-center border border-slate-200 text-slate-600 text-sm">
              Keine passenden Fragen zu „{query}“ gefunden. Nutzen Sie bitte eine der aufgeführten Beratungsstellen für Einzelfallfragen.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-500">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <p className="text-xs sm:text-sm text-slate-700">
            Haben Sie eine Frage zu Ihrem persönlichen Einzelfall oder benötigen Sie juristischen Beistand?
          </p>
          <div className="mt-3 flex justify-center gap-3">
            <a
              href="#beratungsstellen"
              className="px-4 py-2 rounded-lg text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
            >
              Beratungsstelle kontaktieren *
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
