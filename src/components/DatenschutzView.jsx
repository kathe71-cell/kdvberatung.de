import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Info } from 'lucide-react';

export default function DatenschutzView({ onBack }) {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Datenschutz &amp; Transparenz
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Informationen zur Datenverarbeitung nach Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Transparent Overview Box */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-slate-800">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2 text-slate-950">
              <Info className="w-5 h-5 text-emerald-700" />
              Übersicht zur Datenverarbeitung
            </h3>
            <p className="text-xs sm:text-sm">
              Auf dieser Website kommen modernes Cloud-Hosting (Vercel), aggregierte Reichweiten- und Performance-Messung (Vercel Analytics &amp; Speed Insights) sowie Online-Werbeeinbindungen (Google AdSense) zum Einsatz. Nachfolgend informieren wir Sie transparent über Art, Umfang und Zweck der Datenverarbeitung.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              1. Name und Kontaktdaten des Verantwortlichen
            </h2>
            <p className="mb-2">
              Verantwortlicher im Sinne der DSGVO ist:
            </p>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 font-medium text-slate-900">
              Jens Kathe<br />
              Hansastraße 6<br />
              34119 Kassel<br />
              Deutschland<br />
              E-Mail: jens@kathe.org<br />
              Telefon: +49 178 6652623
            </div>
          </section>

          {/* 2. Webhosting über Vercel */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              2. Webhosting (Vercel Inc.)
            </h2>
            <p className="mb-2">
              Wir hosten unsere Website bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Beim Abruf von Seiten werden automatisch technisch erforderliche Server-Logfiles verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit des Zugriffs, abgerufene Seite, Browser-Typ und Betriebssystem).
            </p>
            <p>
              Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an einer sicheren und stabilen Auslieferung). Die Datenübertragung in die USA ist durch die Zertifizierung von Vercel unter dem EU-U.S. Data Privacy Framework (DPF) abgesichert.
            </p>
          </section>

          {/* 3. Vercel Web Analytics & Speed Insights */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              3. Reichweiten- &amp; Performance-Messung (Vercel Analytics &amp; Speed Insights)
            </h2>
            <p className="mb-2">
              Wir nutzen Vercel Analytics sowie Vercel Speed Insights zur aggregierten Analyse von Ladezeiten, Performance und Seitenaufrufen. Diese Dienste dienen der technischen Optimierung und der benutzerfreundlichen Bereitstellung der Inhalte.
            </p>
            <p>
              Die Erfassung erfolgt in anonymisierter bzw. aggregierter Form ohne Erstellung personenbeziehbarer Nutzerprofile. Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.
            </p>
          </section>

          {/* 4. Google AdSense */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              4. Werbeeinbindung (Google AdSense)
            </h2>
            <p className="mb-2">
              Diese Website bindet Werbeanzeigen von Google AdSense (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein. Google AdSense verwendet Technologien wie Cookies oder Web Beacons, um Anzeigen bereitzustellen und deren Wirksamkeit zu messen.
            </p>
            <p className="mb-2">
              Dabei können Daten wie Ihre IP-Adresse, Geräte-Identifikatoren sowie Informationen zum Aufruf von Werbemitteln von Google verarbeitet werden. Bei der Darstellung von Anzeigen werden die Einstellungen der Einwilligungssteuerung (Consent Management / Cookie-Banner) beachtet.
            </p>
            <p>
              Rechtsgrundlage für die Einbindung von Cookies und personalisierter Werbung ist Ihre Einwilligung nach <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> / § 25 TDDDG. Sie können Ihre Einstellungen jederzeit anpassen oder über die Deaktivierungsseite von Google für Werbeeinstellungen widersprechen.
            </p>
          </section>

          {/* 5. Betroffenenrechte */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              5. Ihre Rechte als betroffene Person
            </h2>
            <p className="mb-2">
              Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Auskunftsrecht (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
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
