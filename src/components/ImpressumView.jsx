import React from 'react';
import { ArrowLeft, Shield, Scale, Mail, MapPin } from 'lucide-react';

export default function ImpressumView({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </button>

        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5 text-slate-700" />
            Rechtliche Anbieterkennzeichnung
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Impressum
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Angaben nach § 5 DDG */}
          <section className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Angaben gemäß § 5 DDG:
            </h2>
            <div className="space-y-1 font-medium text-slate-800">
              <p className="font-bold text-slate-950 text-base">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>E-Mail: </span>
                <a href="mailto:jens@kathe.org" className="font-bold text-emerald-700 hover:underline">
                  jens@kathe.org
                </a>
              </div>
            </div>
          </section>

          {/* MStV */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:
            </h2>
            <p className="font-medium text-slate-800">
              Jens Kathe<br />
              Hansastraße 6<br />
              34119 Kassel<br />
              Deutschland
            </p>
          </section>

          {/* Unabhängigkeitserklärung */}
          <section className="bg-amber-50/70 p-5 rounded-xl border border-amber-200">
            <h2 className="text-base font-bold text-amber-950 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-800" />
              Unabhängigkeitserklärung &amp; Werbehinweise
            </h2>
            <p className="text-amber-900 text-xs sm:text-sm">
              Das Portal <strong>kdvberatung.de</strong> ist ein unabhängiges, privates Informations- und Orientierungsangebot. Es steht in keinem gesellschaftsrechtlichen, wirtschaftlichen oder behördlichen Verhältnis zur Bundeswehr, dem Bundesministerium der Verteidigung oder staatlichen Prüfbehörden.
            </p>
            <p className="text-amber-900 text-xs sm:text-sm mt-2">
              Soweit mit einem Sternchen (*) gekennzeichnete Links bereitgestellt werden, handelt es sich um Weiterempfehlungen, Partnerlinks oder nützliche Verweise auf zivilgesellschaftliche Beratungsstellen und Fachanwälte.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte & Links */}
          <section className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Die bereitgestellten Inhalte dienen ausschließlich der allgemeinen Orientierung und stellen keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) dar.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-center">
          <button
            onClick={onBack}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            Zurück zur Startseite
          </button>
        </div>

      </div>
    </div>
  );
}
