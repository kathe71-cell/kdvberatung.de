import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, FileText, Send, Building, Clock, Info } from 'lucide-react';

export default function StatusNavigator({ onOpenLetter, onOpenChecklist, onOpenBeratungsstellen }) {
  const [status, setStatus] = useState('ungediente');
  const [conflictType, setConflictType] = useState('ethisch');
  const [hasBescheid, setHasBescheid] = useState('bitte_auswaehlen');
  const [fg13, setFg13] = useState('bitte_auswaehlen');

  // Matrix configuration
  const config = {
    ungediente: {
      title: "Ungediente Bürger / Erfasste Personen",
      authority: "BAPersBw – Wehrersatzbehörde – (Köln)",
      authorityAddress: "Militärringstraße 1000, 50737 Köln",
      decidingAuthority: "Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)",
      submissionWay: "Schriftlich direkt an das BAPersBw – Wehrersatzbehörde – (Köln) zur Weiterleitung an das BAFzA.",
      protectionEffectNoBescheid: "Gemäß § 3 Abs. 2 Satz 1 KDVG werden ungediente Kriegsdienstverweigerer von der Einberufung zum Grundwehrdienst bis zur unanfechtbaren Ablehnung oder Rücknahme ihres Antrags nicht einberufen.",
      protectionEffectHasBescheidJahrgang: "Gesetzliche Konstellation nach § 13 Abs. 1 KDVG: Für ungediente Antragsteller, die vor dem 1. Januar 2010 geboren sind, gelten die Sonderregelungen des § 13 KDVG für das Prüfungsverfahren und die Weiterleitung.",
      protectionEffectHasBescheidAnderer: "Fälle außerhalb des § 13 Abs. 1 KDVG: Liegt ein Einberufungs- oder Heranziehungsbescheid vor und sind die Kriterien des § 13 Abs. 1 KDVG nicht erfüllt, hemmt der KDV-Antrag die Vollziehung nicht automatisch (§ 3 Abs. 2 Satz 2 KDVG). Vorläufiger Rechtsschutz (§ 80 Abs. 5 VwGO) kann beim zuständigen Verwaltungsgericht beantragt werden.",
      processingTime: "Behördliche Bearbeitungsdauer abhängig von Vollständigkeit der Unterlagen und BAFzA-Prüfung",
      documentsRequired: [
        "Schriftlicher, eigenhändig unterschriebener KDV-Antrag",
        "Lückenloser tabellarischer Lebenslauf",
        "Ausführliche persönliche Gewissensbegründung (selbst verfasst)",
        "Ggf. Kopie des Ausweisdokuments / Meldebescheinigung"
      ],
      recommendedLetter: "ungediente",
      badge: "Ungedient"
    },
    musterung: {
      title: "Musterungsaufforderung / Erfassungsverfahren",
      authority: "BAPersBw – Wehrersatzbehörde – (Köln)",
      authorityAddress: "Militärringstraße 1000, 50737 Köln",
      decidingAuthority: "Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)",
      submissionWay: "Schriftlich an die Wehrersatzbehörde (BAPersBw Köln) unter Bezugnahme auf das Aktenzeichen des Musterungsschreibens.",
      protectionEffectNoBescheid: "Eine Ladung zur amtsärztlichen Musterung bleibt wirksam. Gemäß § 3 Abs. 2 Satz 1 KDVG schützt der Antrag vor der Einberufung zum Grundwehrdienst bis zur unanfechtbaren Entscheidung.",
      protectionEffectHasBescheidJahrgang: "Verfahren nach § 13 Abs. 1 KDVG: Geht nach der Musterung ein Bescheid zu und sind die gesetzlichen Voraussetzungen des § 13 Abs. 1 KDVG erfüllt, greifen die Sonderregelungen zur Antragweiterleitung.",
      protectionEffectHasBescheidAnderer: "Kein automatischer Schutz (§ 3 Abs. 2 Satz 2 KDVG): Bei vorliegendem Bescheid ohne Vorliegen der Voraussetzungen des § 13 Abs. 1 KDVG entsteht kein automatischer Vollzugsschutz. Vorläufiger Rechtsschutz ist per Eilantrag (§ 80 Abs. 5 VwGO) beim zuständigen Verwaltungsgericht zu beantragen.",
      processingTime: "Prüfung durch BAFzA nach Vorprüfung durch die Wehrersatzbehörde",
      documentsRequired: [
        "Schriftlicher KDV-Antrag (unter Bezug auf das Musterungsschreiben)",
        "Tabellarischer Lebenslauf",
        "Persönliche Gewissensbegründung",
        "Kopie des Anschreibens / Bescheids"
      ],
      recommendedLetter: "ungediente",
      badge: "Musterung"
    },
    soldat: {
      title: "Aktive Soldatinnen und Soldaten (SaZ / FWDL / Berufssoldaten)",
      authority: "BAPersBw – Wehrersatzbehörde – (Köln)",
      authorityAddress: "Militärringstraße 1000, 50737 Köln (Kopie nachrichtlich an Disziplinarvorgesetzte/n)",
      decidingAuthority: "Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)",
      submissionWay: "Schriftlich direkt an die Wehrersatzbehörde (BAPersBw Köln) mit nachrichtlicher Kenntnisnahme an den Disziplinarvorgesetzten.",
      protectionEffectNoBescheid: "Nach KDVG greifen gesetzliche Schutzbestimmungen bezüglich der Ausbildung und Verwendung an der Waffe während des laufenden Prüfungsverfahrens.",
      protectionEffectHasBescheidJahrgang: "Dienstverhältnis & Bescheidlage: Bei aktiven Soldaten gelten für KDV-Anträge und Bescheide die besonderen Bestimmungen des KDVG und des Soldatengesetzes. Ein eigenmächtiges Fernbleiben vom Dienst ist unzulässig.",
      protectionEffectHasBescheidAnderer: "Kein automatischer Vollzugsstopp: Wurde ein konkreter Marsch- oder Einsatzbefehl erlassen, bewirkt ein Antrag keine automatische Vollziehungsaussetzung (§ 3 Abs. 2 Satz 2 KDVG). Eilrechtsschutz (§ 80 Abs. 5 VwGO) ist beim zuständigen Verwaltungsgericht zu beantragen.",
      processingTime: "Mehrstufiges Verfahren unter Verwertung der Dienstakten und BAFzA-Prüfung",
      documentsRequired: [
        "Schriftlicher KDV-Antrag an BAPersBw (Kopie an Vorgesetzte/n)",
        "Militärischer & ziviler tabellarischer Lebenslauf",
        "Ausführliche Begründung des Gewissenswandels während der Dienstzeit",
        "Ggf. Dienstzeitbestätigung / Truppenausweis-Kopie"
      ],
      recommendedLetter: "soldaten",
      badge: "Aktiver Dienst"
    },
    reservist: {
      title: "Reservistinnen und Reservisten / Frühere Soldaten",
      authority: "BAPersBw – Wehrersatzbehörde – (Köln)",
      authorityAddress: "Militärringstraße 1000, 50737 Köln",
      decidingAuthority: "Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA)",
      submissionWay: "Schriftlich per Post an BAPersBw – Wehrersatzbehörde – (Köln) unter Angabe der Personenkennziffer (PK).",
      protectionEffectNoBescheid: "Bei Unanfechtbarkeit der Anerkennung entfällt die Heranziehung zu Dienstleistungen mit der Waffe in der Reserve.",
      protectionEffectHasBescheidJahrgang: "Reserve-Heranziehung: Bei zugestelltem Heranziehungsbescheid gelten für Reservisten die Sonder- und Antragsbestimmungen nach KDVG.",
      protectionEffectHasBescheidAnderer: "Kein automatischer Vollzugsstopp: Wurde eine Heranziehung bereits zugestellt, hemmt die Antragstellung die Pflicht zum Dienstantritt nicht automatisch (§ 3 Abs. 2 Satz 2 KDVG). Vorläufiger Rechtsschutz (§ 80 Abs. 5 VwGO) ist beim zuständigen Verwaltungsgericht zu beantragen.",
      processingTime: "Regelprüfverfahren beim BAFzA nach Eingang der Wehrersatzakte",
      documentsRequired: [
        "Schriftlicher KDV-Antrag unter Angabe der Personenkennziffer (PK)",
        "Tabellarischer Lebenslauf",
        "Ausführliche Begründung des gewandelten Gewissensentschlusses",
        "Ggf. Nachweis über den früheren Dienstzeitraum"
      ],
      recommendedLetter: "reservisten",
      badge: "Reserve"
    }
  };

  const currentConfig = config[status] || config.ungediente;
  const isBescheidUnklar = hasBescheid === 'bitte_auswaehlen';
  const isBescheidYes = hasBescheid === 'ja';
  const isBescheidNo = hasBescheid === 'nein';
  const isFgUnklar = fg13 === 'bitte_auswaehlen';

  let protectionText = "";
  let protectionBadge = null;

  if (isBescheidUnklar) {
    protectionText = "Bitte wählen Sie in Schritt 2 aus, ob bereits ein konkreter Bescheid vorliegt, um die rechtliche Schutzwirkung nach § 3 Abs. 2 bzw. § 13 KDVG zu bewerten.";
    protectionBadge = (
      <span className="text-slate-600 font-medium flex items-center gap-1">
        <Info className="w-3.5 h-3.5 shrink-0 text-slate-500" />
        Angaben unvollständig – Keine individuelle Schutzbestätigung ohne Auswahlen.
      </span>
    );
  } else if (isBescheidNo) {
    protectionText = currentConfig.protectionEffectNoBescheid;
    protectionBadge = (
      <span className="text-emerald-800 font-bold flex items-center gap-1">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
        Gesetzliche Grundregel nach § 3 Abs. 2 Satz 1 KDVG.
      </span>
    );
  } else if (isBescheidYes) {
    if (isFgUnklar) {
      protectionText = "Bescheid liegt vor (§ 13 KDVG): Bitte wählen Sie in Schritt 2a aus, ob die gesetzliche Fallgruppe nach § 13 Abs. 1 KDVG (Ungedient & Geburtsdatum vor dem 01.01.2010) vorliegt.";
      protectionBadge = (
        <span className="text-amber-800 font-bold flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          Verfahrenskonstellation unklar (§ 13 Abs. 1 KDVG) – Keine Schutzwirkung bestätigt.
        </span>
      );
    } else if (fg13 === 'schutz_jahrgang') {
      protectionText = currentConfig.protectionEffectHasBescheidJahrgang;
      protectionBadge = (
        <span className="text-emerald-800 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
          Gesetzliche Fallgruppe nach § 13 Abs. 1 KDVG erfüllt.
        </span>
      );
    } else {
      protectionText = currentConfig.protectionEffectHasBescheidAnderer;
      protectionBadge = (
        <span className="text-amber-800 font-bold flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          Keine automatische Schutzwirkung (§ 3 Abs. 2 Satz 2 KDVG). Eilantrag (§ 80 Abs. 5 VwGO) beim Verwaltungsgericht erforderlich.
        </span>
      );
    }
  }

  return (
    <section id="navigator" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Compass className="w-4 h-4 text-emerald-700" />
            Interaktiver KDV-Status- &amp; Verfahrens-Navigator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Ihre rechtliche Ausgangslage strukturieren
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Ermitteln Sie die zuständigen Behörden (Antragsempfänger BAPersBw Köln vs. Entscheidungsbehörde BAFzA), benötigte Unterlagen und die rechtlichen Rahmenbedingungen nach § 3 Abs. 2 &amp; § 13 KDVG.
          </p>
        </div>

        {/* Step Inputs */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-4">
            Schritt 1: Aktueller Status / Dienstverhältnis
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'ungediente', label: 'Ungedient / Erfasst', sub: 'Bisher kein Wehrdienst geleistet' },
              { id: 'musterung', label: 'Musterung / Aufforderung', sub: 'Erfassungs- oder Musterungsverfahren' },
              { id: 'soldat', label: 'Aktiver Soldat (SaZ / FWDL)', sub: 'Laufendes Dienstverhältnis' },
              { id: 'reservist', label: 'Reservist / Früherer Soldat', sub: 'Beorderung oder Reservestatus' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setStatus(item.id);
                  setHasBescheid('bitte_auswaehlen');
                  setFg13('bitte_auswaehlen');
                }}
                className={`text-left p-4 rounded-xl border transition-all ${
                  status === item.id
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${status === item.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-100 text-slate-600'}`}>
                    {status === item.id ? 'Ausgewählt' : 'Wählen'}
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
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Schritt 2: Liegt bereits ein konkreter Einberufungs- / Heranziehungsbescheid vor?
                </label>
                <select
                  value={hasBescheid}
                  onChange={(e) => {
                    setHasBescheid(e.target.value);
                    if (e.target.value !== 'ja') {
                      setFg13('bitte_auswaehlen');
                    }
                  }}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="bitte_auswaehlen">-- Bitte auswählen: Bescheidstatus --</option>
                  <option value="nein">Nein – Bisher liegt kein Einberufungsbescheid vor</option>
                  <option value="ja">Ja – Einberufungs- oder Heranziehungsbescheid liegt vor (§ 13 KDVG beachten)</option>
                </select>
              </div>

              {hasBescheid === 'ja' && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <label className="block text-xs font-bold text-amber-950 mb-1.5">
                    Schritt 2a: Gesetzliche Fallgruppenprüfung nach § 13 Abs. 1 KDVG:
                  </label>
                  <select
                    value={fg13}
                    onChange={(e) => setFg13(e.target.value)}
                    className="w-full bg-white border border-amber-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="bitte_auswaehlen">-- Bitte auswählen: Kriterien nach § 13 Abs. 1 KDVG --</option>
                    <option value="schutz_jahrgang">
                      Erfüllt: Ungedient &amp; Geburtsdatum vor dem 1. Januar 2010 (§ 13 Abs. 1 KDVG Konstellation)
                    </option>
                    <option value="anderer_fall">
                      Nicht erfüllt / Abweichende Konstellation (Fall außerhalb § 13 Abs. 1 KDVG)
                    </option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Schritt 3: Schwerpunkt der persönlichen Gewissensbegründung
              </label>
              <select
                value={conflictType}
                onChange={(e) => setConflictType(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="ethisch">Ethisch-humanitär (Tötungsverbot, Menschenwürde)</option>
                <option value="religioes">Religiös / Glaubensbasiert (z. B. christliches Friedensgebot)</option>
                <option value="dienstwandel">Gewissenswandel während des militärischen Dienstes</option>
                <option value="politisch">Völkerrechtlich &amp; friedensethisch</option>
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
                  Verfahrensübersicht &amp; Adressen
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                {currentConfig.title}
              </h3>
            </div>

            {/* Internal Action Buttons - NO PARTNERLINK ASTERISKS */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onOpenLetter(currentConfig.recommendedLetter)}
                className="px-3.5 py-2 text-xs sm:text-sm font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                Muster-Anschreiben anzeigen
              </button>
              <button
                onClick={onOpenChecklist}
                className="px-3.5 py-2 text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 border border-amber-400 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                Unterlagen-Checkliste
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            
            {/* Box 1: Antragsempfänger & Entscheider */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                <Building className="w-4 h-4 text-emerald-600" />
                Amtlicher Antragsempfänger
              </div>
              <div className="text-sm font-bold text-slate-900">
                {currentConfig.authority}
              </div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                {currentConfig.authorityAddress}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700">
                <strong>Entscheidungsbehörde:</strong><br />
                {currentConfig.decidingAuthority}
              </div>
            </div>

            {/* Box 2: Protection & Legal Rules */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-amber-600" />
                Schutzwirkung (§ 3 Abs. 2 / § 13 KDVG)
              </div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                {protectionText}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 text-[11px]">
                {protectionBadge}
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
              <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-500 italic">
                Hinweis: Kopien aller Unterlagen für eigene Akten aufbewahren.
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>
              Unverbindliche Orientierungshilfe zur Antragstellung bei der Wehrersatzbehörde (BAPersBw Köln) und Entscheidung durch das BAFzA.
            </span>
            {onOpenBeratungsstellen ? (
              <button
                type="button"
                onClick={onOpenBeratungsstellen}
                className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
              >
                Beratungsstellen anzeigen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="#beratungsstellen"
                className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
              >
                Beratungsstellen anzeigen <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
