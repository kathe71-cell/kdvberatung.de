import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff } from 'lucide-react';

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
            Datenschutz &amp; Privatsphäre
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Informationen zur Datenverarbeitung nach Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Summary Box */}
          <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 text-emerald-950">
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-emerald-700" />
              Datensparsame Architektur (Zero-Tracking &amp; Zero-CDN)
            </h3>
            <p className="text-xs sm:text-sm">
              Diese Website setzt <strong>weder Tracking-Cookies, Werbenetzwerke noch externe CDNs (wie Google Fonts)</strong> ein. Die Typografie basiert ausschließlich auf den vorinstallierten System-Schriftarten Ihres Endgeräts. Es werden keine personenbezogenen Daten an Dritte oder in Drittstaaten übertragen.
            </p>
          </div>

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              1. Name und Kontaktdaten des Verantwortlichen
            </h2>
            <p>
              Verantwortlicher im Sinne der DSGVO und sonstiger nationaler Datenschutzgesetze ist:
            </p>
            <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200 font-medium text-slate-900">
              Jens Kathe<br />
              Hansastraße 6<br />
              34119 Kassel<br />
              Deutschland<br />
              E-Mail: jens@kathe.org<br />
              Telefon: +49 178 6652623
            </div>
          </section>

          {/* 2. Erhebung beim Aufruf */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              2. Bereitstellung der Website und Server-Logfiles
            </h2>
            <p className="mb-2">
              Beim reinen informatorischen Aufruf unserer Website erheben wir nur diejenigen Daten, die Ihr Browser an unseren Hosting-Provider (Vercel Inc.) übermittelt. Dies sind technisch notwendige Daten, um Ihnen unsere Website stabil und sicher anzuzeigen:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="mt-2">
              Rechtsgrundlage hierfür ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der technischen Bereitstellung und IT-Sicherheit). Die Logfiles werden nach Ablauf gesetzlicher Fristen automatisch gelöscht.
            </p>
          </section>

          {/* 3. Hosting über Vercel */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              3. Webhosting
            </h2>
            <p>
              Wir hosten diese Website bei dem Cloud-Anbieter Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Zur Gewährleistung eines datenschutzkonformen Betriebs haben wir einen Auftragsverarbeitungsvertrag (AVV / Data Processing Addendum) auf Basis der EU-Standardvertragsklauseln abgeschlossen.
            </p>
          </section>

          {/* 4. Keine Cookies */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              4. Cookies und Analyse-Tools
            </h2>
            <p>
              Diese Website verwendet <strong>keine</strong> Marketing-, Tracking- oder Profiling-Cookies. Es werden keine Nutzerprofile erstellt. Sämtliche interaktiven Rechner und Checklisten laufen clientseitig in Ihrem lokalen Webbrowser ab; Ihre Eingaben werden nicht auf unserem Server gespeichert.
            </p>
          </section>

          {/* 5. Betroffenenrechte */}
          <section>
            <h2 className="text-base font-bold text-slate-950 mb-2">
              5. Ihre Rechte als betroffene Person
            </h2>
            <p className="mb-2">
              Sie haben nach der DSGVO jederzeit das Recht auf:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Auskunft über Ihre von uns verarbeiteten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Beschwerderecht bei einer zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
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
