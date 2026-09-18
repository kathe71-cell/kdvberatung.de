import React, { useState } from 'react';
import { Users, Search, ExternalLink, ShieldCheck, Check, HelpCircle } from 'lucide-react';
import { consultingCenters } from '../data/directoryData';

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Alle Angebote' },
    { id: 'ungediente', label: 'Für Ungediente' },
    { id: 'soldaten', label: 'Für aktive Soldat/innen' },
    { id: 'reservisten', label: 'Für Reservisten' },
    { id: 'anwalt', label: 'Anwaltsuche (Rechtsberatung)' }
  ];

  const filtered = consultingCenters.filter((center) => {
    const matchesCategory = activeCategory === 'all' || center.categories.includes(activeCategory);
    const matchesSearch =
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="beratungsstellen" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Users className="w-4 h-4 text-emerald-700" />
            Beratungsstellen &amp; Anwaltsverzeichnis
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Unabhängige Angebote &amp; Rechtsberatung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Gemeinnützige Beratungsstellen, kirchliche Fachdienste und das Anwaltsverzeichnis des Deutschen Anwaltvereins (DAV). Unabhängig von Bundeswehr und Behörden.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Angebot suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          <div className="mt-3 text-xs text-slate-500 flex justify-between items-center">
            <span>
              Zeige <strong>{filtered.length}</strong> von {consultingCenters.length} Angeboten
            </span>
            <span className="italic">
              Externe Verweise öffnen in neuem Fenster
            </span>
          </div>
        </div>

        {/* Directory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
                    {center.badge}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {center.cost}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug mb-1">
                  {center.name}
                </h3>
                
                <p className="text-xs font-semibold text-emerald-700 mb-3">
                  {center.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {center.description}
                </p>

                {/* Features List */}
                <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5">
                  {center.features.map((feat, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Format: <strong>{center.format}</strong></span>
                </div>

                <a
                  href={center.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>{center.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Lawyers vs Free Centers */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <strong>Hinweis zu Kosten &amp; Rechtsberatung:</strong> Die Information und Beratung durch gemeinnützige Organisationen wie DFG-VK, EAK, kokon und pax christi ist in der Regel kostenfrei. Für eine individuelle juristische Vertretung durch freie Rechtsanwälte fallen gesetzliche Vergütungen nach dem Rechtsanwaltsvergütungsgesetz (RVG) oder Honorarvereinbarungen an.
          </div>
        </div>

      </div>
    </section>
  );
}
