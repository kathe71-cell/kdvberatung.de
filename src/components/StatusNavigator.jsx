import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, FileText, Send, Building, Clock, Info } from 'lucide-react';

export default function StatusNavigator({ onOpenLetter, onOpenChecklist }) {
  const [status, setStatus] = useState('ungediente');
  const [conflictType, setConflictType] = useState('ethisch');
  const [urgency, setUrgency] = useState('vorsorglich');

  // Matrix configuration
  const config = {
    ungediente: {
      title: "Ungediente Bürger / Junge Menschen nach Wehrerfassung",
      authority: "Karrierecenter der Bundeswehr (zuständig für Ihren Wohnort)",
      authorityDetail: "Weiterleitung an das Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw), Referat KDV, 53757 Sankt Augustin",
      submissionWay: "Schriftlich per Einschreiben mit Rückschein direkt an das für Ihren Wohnort zuständige Karrierecenter der Bundeswehr.",
      protectionEffect: "Verhindert die Einberufung zum Dienst an der Waffe. Eine amtsärztliche Tauglichkeitsprüfung (Musterung) kann dennoch durchgeführt werden.",
      processingTime: "Ca. 2 bis 6 Monate (nach vollständigem Eingang aller Unterlagen)",
      documentsRequired: [
        "Schriftlicher, eigenhändig unterschriebener KDV-Antrag",
        "Lückenloser tabellarischer Lebenslauf",
        "Ausführliche persönliche Gewissensbegründung (authentisch verfasst)",
        "Ggf. Kopie des Personalausweises / Meldebescheinigung"
      ],
      recommendedLetter: "ungediente",
      badge: "Kein aktives Dienstverhältnis"
    },
    musterung: {
      title: "Musterungsaufforderung / Akute Erfassung",
      authority: "Karrierecenter der Bundeswehr (Postadresse auf Ihrem Bescheid)",
      authorityDetail: "Sofortige Vorlage bei der Musterungsstelle und Weiterleitung an das BAPersBw",
      submissionWay: "Schriftlich per Einwurf-Einschreiben / Vorlage bei der Musterung. Fristen auf dem Bescheid genau beachten!",
      protectionEffect: "Musterung findet in der Regel statt (Feststellung Tauglichkeitsgrad T1-T5). Keine Einberufung zur Truppe bis zur rechtskräftigen Entscheidung über den KDV-Antrag.",
      processingTime: "Ca. 1 bis 4 Monate (Vorrangige Prüfung bei nahendem Einberufungstermin)",
      documentsRequired: [
        "Eilbedürftiger schriftlicher KDV-Antrag mit Aktenzeichen des Bescheids",
        "Tabellarischer Lebenslauf",
        "Gewissensbegründung (Fokus auf Unvereinbarkeit mit dem Wehrdienst)",
        "Kopie der Musterungsaufforderung / des Schreibens"
      ],
      recommendedLetter: "ungediente",
      badge: "Fristgebunden & Eilbedürftig"
    },
    soldat: {
      title: "Aktive Soldatinnen und Soldaten (SaZ / FWDL / Berufssoldaten)",
      authority: "Auf dem Dienstweg über den Disziplinarvorgesetzten",
      authorityDetail: "Entscheidung trifft das Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw)",
      submissionWay: "Förmlich auf dem Dienstweg schriftlich bei der/dem zuständigen Kompaniechefin/Kompaniechef bzw. Staffelkapitän einzureichen.",
      protectionEffect: "Gemäß § 2 Abs. 2 KDVG dürfen Sie ab Antragstellung bis zur Entscheidung nicht mehr zu Handlungen mit der Waffe herangezogen werden.",
      processingTime: "Ca. 3 bis 9 Monate (inkl. Stellungnahme des Vorgesetzten & BAPersBw-Prüfung)",
      documentsRequired: [
        "Schriftlicher KDV-Antrag auf dem Dienstweg (inkl. Antrag auf Entlassung)",
        "Tabellarischer Lebenslauf (inkl. militärischem Werdegang)",
        "Ausführliche Darlegung des Gewissenswandels während der Dienstzeit",
        "Vorgeschriebene Truppenärztliche & disziplinarische Stellungnahmen (dienstintern)"
      ],
      recommendedLetter: "soldaten",
      badge: "Aktiver Bundeswehrdienst"
    },
    reservist: {
      title: "Reservistinnen und Reservisten / Frühere Soldaten",
      authority: "Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw)",
      authorityDetail: "Referat KDV, Alte Heerstraße 111, 53757 Sankt Augustin (oder zuständiges Karrierecenter)",
      submissionWay: "Schriftlich per Einschreiben direkt an das BAPersBw oder das zuständige Karrierecenter der Reserve.",
      protectionEffect: "Freistellung von künftigen Reserveübungen, Beorderungen und Einberufungen im Spannungs- oder Verteidigungsfall.",
      processingTime: "Ca. 2 bis 5 Monate",
      documentsRequired: [
        "Schriftlicher KDV-Antrag unter Angabe der Personenkennziffer (PK)",
        "Tabellarischer Lebenslauf nach dem aktiven Dienst",
        "Ausführliche Gewissensbegründung über den Wandel der inneren Haltung",
        "Kopie des Wehrdienstzeit-Nachweises / Entlassungsurkunde (falls griffbereit)"
      ],
      recommendedLetter: "reservisten",
      badge: "Reserve & Beorderung"
    }
  };

  const currentConfig = config[status];

  return (
    <section id="navigator" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Compass className="w-4 h-4 text-emerald-700" />
            Interaktiver KDV-Status- &amp; Antrags-Navigator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Ihre individuelle Ausgangslage ermitteln
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Wählen Sie Ihren aktuellen Status und Hintergrund. Der Navigator schlüsselt Zuständigkeiten, Unterlagen, Fristen und Schutzwirkungen für Ihren konkreten Fall auf.
          </p>
        </div>

        {/* Step 1: Status Selection */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-4">
            Schritt 1: Aktueller Status / Ausgangssituation
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'ungediente', label: 'Ungedient / Nach Wehrerfassung', sub: 'Keine bisherige Bundeswehrzeit' },
              { id: 'musterung', label: 'Musterungsaufforderung', sub: 'Bescheid erhalten / Frist läuft' },
              { id: 'soldat', label: 'Aktiver Soldat (SaZ / FWDL)', sub: 'In laufender Dienstzeit' },
              { id: 'reservist', label: 'Reservist / Früherer Soldat', sub: 'Beorderung oder Reserve' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setStatus(item.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  status === item.id
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${status === item.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 text-slate-600'}`}>
                    {status === item.id ? 'Aktiv' : 'Wählen'}
                  </span>
                </div>
                <div className="font-bold text-sm leading-snug">{item.label}</div>
                <div className={`text-xs mt-1 ${status === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Sub-Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Schritt 2: Schwerpunkt des Gewissenskonflikts
              </label>
              <select
                value={conflictType}
                onChange={(e) => setConflictType(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ethisch">Ethisch-humanitär (Tötungsverbot, Menschenwürde)</option>
                <option value="religioes">Religiös / Glaubensbasiert (z. B. christliches Friedensgebot)</option>
                <option value="dienstwandel">Gewissenswandel durch Dienstalltag / Auslandseinsatzerfahrung</option>
                <option value="politisch">Völkerrechtlich &amp; Friedensethisch</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Schritt 3: Dringlichkeit / Zeitrahmen
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="vorsorglich">Vorsorglich / Zeitnahe Vorbereitung</option>
                <option value="akut">Akut (Bescheid erhalten, 1-Monats-Frist beachten)</option>
                <option value="dienstantritt">Bevorstehender Dienstantritt / Einberufung</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Results Card */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {currentConfig.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Ergebnis &amp; Leitfaden
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                {currentConfig.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenLetter(currentConfig.recommendedLetter)}
                className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                Muster-Anschreiben anzeigen *
              </button>
              <button
                onClick={onOpenChecklist}
                className="px-3.5 py-2 text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 border border-amber-400 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                Unterlagen-Checkliste *
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            
            {/* Box 1: Authority */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4 text-emerald-600" />
                Zuständige Behörde / Einreichung
              </div>
              <div className="text-sm font-bold text-slate-900">
                {currentConfig.authority}
              </div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                {currentConfig.authorityDetail}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <strong>Verfahrensweg:</strong> {currentConfig.submissionWay}
              </div>
            </div>

            {/* Box 2: Protection & Timeline */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-amber-600" />
                Schutzwirkung &amp; Dauer
              </div>
              <div className="text-sm font-bold text-slate-900">
                {currentConfig.processingTime}
              </div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                {currentConfig.protectionEffect}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700 font-medium">
                <strong>Rechtsgrundlage:</strong> Art. 4 Abs. 3 GG &amp; § 1, 2 KDVG
              </div>
            </div>

            {/* Box 3: Mandatory Documents */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                <Send className="w-4 h-4 text-emerald-600" />
                Benötigte Unterlagen
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {currentConfig.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-600 italic">
                Tipp: Niemals Originalurkunden ohne Durchschlag versenden; alles per Einschreiben.
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>
              * Modellrechnung / Orientierungshilfe. Die behördliche Entscheidung trifft das Bundesamt für das Personalmanagement der Bundeswehr.
            </span>
            <a
              href="#beratungsstellen"
              className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
            >
              Unabhängige Beratungsstelle vor Ort finden <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
