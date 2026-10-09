import React from 'react';
import { Shield, Scale } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-16 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                kdv<span className="text-emerald-400">beratung</span>.de
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              Unabhängiges Informations- und Bürgerportal zum Grundrecht auf Kriegsdienstverweigerung nach Artikel 4 Absatz 3 des Grundgesetzes. Hilfestellung für Ungediente, aktive Soldaten und Reservisten.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <Scale className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>DSGVO-konformes Cloud-Hosting &amp; Performance-Messung</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider mb-3">
              Themen &amp; Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('navigator')}
                  className="hover:text-white transition-colors text-left"
                >
                  Antrags-Navigator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('begruendung')}
                  className="hover:text-white transition-colors text-left"
                >
                  Leitfaden Gewissensbegründung
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('beratungsstellen')}
                  className="hover:text-white transition-colors text-left"
                >
                  Beratungsstellen-Verzeichnis
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('ablauf')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ablauf des KDV-Verfahrens
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('muster')}
                  className="hover:text-white transition-colors text-left"
                >
                  Muster-Anschreiben &amp; Checkliste
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Häufig gestellte Fragen (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Direct Links */}
          <div>
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider mb-3">
              Rechtliches &amp; Kontakt
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('impressum')}
                  className="hover:text-white font-semibold transition-colors text-left text-slate-300"
                >
                  Impressum (§ 5 DDG)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('datenschutz')}
                  className="hover:text-white font-semibold transition-colors text-left text-slate-300"
                >
                  Datenschutzerklärung (DSGVO)
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Unabhängiges Informationsportal.<br />
                Vollständige Betreiberangaben siehe Impressum.
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 pb-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-900">
          <p className="mb-2">
            <strong>Rechtlicher Hinweis &amp; Unabhängigkeitserklärung:</strong> Dieses Portal ist ein unabhängiges Angebot und steht in keinem gesellschaftsrechtlichen, organisatorischen oder behördlichen Verhältnis zur Bundeswehr, dem Bundesministerium der Verteidigung (BMVg), dem Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) oder dem Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA). Sämtliche bereitgestellten Inhalte dienen der allgemeinen Orientierung und ersetzen im Streitfall keine individuelle Rechtsberatung.
          </p>
          <p>
            Das behördliche Prüfungsverfahren bei BAPersBw und BAFzA ist gesetzlich gebührenfrei.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} kdvberatung.de – Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:underline text-slate-400"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:underline text-slate-400"
            >
              Datenschutz
            </button>
          </div>
        </div>

      </div>
    
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300">
              <span className="font-bold text-white block mb-1">Projektübernahme</span>
              <p className="mb-2">Interesse an der Übernahme von kdvberatung.de inklusive Projekt?</p>
              <a href="/projektuebernahme" className="text-blue-400 hover:text-blue-300 font-medium">
                Mehr erfahren &rarr;
              </a>
            </div>

</footer>
  );
}
