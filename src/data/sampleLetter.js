export const sampleLetters = {
  ungediente: {
    title: "Muster-Anschreiben für Ungediente & Erfasste Bürger",
    recipient: "An das zuständige\nKarrierecenter der Bundeswehr\n(bzw. Bundesamt für das Personalmanagement der Bundeswehr)",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer gemäß Art. 4 Abs. 3 Grundgesetz",
    body: `Sehr geehrte Damen und Herren,

hiermit beantrage ich gemäß Artikel 4 Absatz 3 Satz 1 des Grundgesetzes für die Bundesrepublik Deutschland sowie § 1 des Kriegsdienstverweigerungsgesetzes (KDVG) meine Anerkennung als Kriegsdienstverweigerer.

Aus Gewissensgründen lehne ich es unumstößlich ab, Kriegsdienst mit der Waffe zu leisten oder mich an Handlungen zu beteiligen, die dem gezielten Töten von Menschen dienen.

Als Anlagen füge ich diesem Antrag bei:
1. Einen ausführlichen tabellarischen Lebenslauf
2. Eine detaillierte persönliche Darlegung meiner Gewissensgründe

Ich bitte um schriftliche Bestätigung des Eingangs dieses Antrags sowie um Weiterleitung an das Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw) zur behördlichen Entscheidung.

Mit freundlichen Grüßen,

[Unterschrift]
[Vorname Nachname]`
  },
  soldaten: {
    title: "Muster-Anschreiben für aktive Soldatinnen und Soldaten (SaZ / FWDL)",
    recipient: "An den Disziplinarvorgesetzten\n[Dienstgrad, Name Vorgesetzte/r]\n[Einheit / Dienststelle]",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer gemäß Art. 4 Abs. 3 GG und Entlassung",
    body: `Sehr geehrte/r Frau/Herr [Dienstgrad],

hiermit stelle ich auf dem Dienstweg den Antrag auf Anerkennung als Kriegsdienstverweigerer gemäß Artikel 4 Absatz 3 des Grundgesetzes und § 1 KDVG.

Im Laufe meines Dienstes habe ich nach intensiver Auseinandersetzung die unüberwindbare Gewissensentscheidung getroffen, dass ich den Dienst an der Waffe und das Töten von Menschen unter keinen Umständen mit meinem Gewissen vereinbaren kann.

Ich beantrage nach Abschluss des Prüfverfahrens die Entlassung aus dem Dienstverhältnis der Bundeswehr. Bis zur Entscheidung berufe ich mich auf § 2 Abs. 2 KDVG hinsichtlich der Nichtverwendung an der Waffe.

Anlagen:
1. Tabellarischer Lebenslauf
2. Ausführliche schriftliche Gewissensbegründung

Mit kameradschaftlichen Grüßen,

[Unterschrift]
[Dienstgrad, Vorname Nachname, Personenkennziffer (PK)]`
  },
  reservisten: {
    title: "Muster-Anschreiben für Reservistinnen und Reservisten",
    recipient: "An das Bundesamt für das Personalmanagement der Bundeswehr (BAPersBw)\nReferat KDV\nAlte Heerstraße 111\n53757 Sankt Augustin",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer für Reservisten (PK: [Ihre PK])",
    body: `Sehr geehrte Damen und Herren,

hiermit beantrage ich als Angehöriger der Reserve meine Anerkennung als Kriegsdienstverweigerer gemäß Artikel 4 Absatz 3 Satz 1 Grundgesetz.

Aufgrund einer gewandelten und nunmehr festen Gewissensüberzeugung verweigere ich künftig jede Heranziehung zum Dienst mit der Waffe sowie jede Teilnahme an Übungen oder militärischen Einsätzen.

Anlagen:
1. Tabellarischer Lebenslauf
2. Detaillierte Darlegung der veränderten Gewissensgründe

Ich bitte um Bestätigung des Antragseingangs sowie um Zuerkennung des Status als Kriegsdienstverweigerer.

Mit freundlichen Grüßen,

[Unterschrift]
[Vorname Nachname]`
  }
};

export const documentChecklist = [
  {
    id: "anschreiben",
    title: "Schriftliches Antragsschreiben",
    mandatory: true,
    desc: "Formloser Antrag mit eindeutiger Berufung auf Art. 4 Abs. 3 Satz 1 GG und § 1 KDVG. Eigenhändig unterschrieben."
  },
  {
    id: "lebenslauf",
    title: "Ausführlicher tabellarischer Lebenslauf",
    mandatory: true,
    desc: "Lückenlose Aufstellung des bisherigen Bildungswegs, ehrenamtlichen Engagements, persönlicher Interessen und relevanter Stationen."
  },
  {
    id: "begruendung",
    title: "Persönliche schriftliche Gewissensbegründung",
    mandatory: true,
    desc: "Das Herzstück des Antrags: Authentische, eigene Darlegung der inneren Haltung gegen das Töten von Menschen im Kriegsdienst (ca. 2-5 Seiten empfohlen)."
  },
  {
    id: "ausweiskopie",
    title: "Kopie des Personalausweises / Reisepasses",
    mandatory: false,
    desc: "Zur eindeutigen Identitätsfeststellung (Vorder- und Rückseite, unbeglaubigte Kopie genügt i. d. R.)."
  },
  {
    id: "bundeswehr_post",
    title: "Ggf. Bisherige Schreiben der Bundeswehr",
    mandatory: false,
    desc: "Falls vorhanden: Kopie des Erfassungsbogens, der Musterungsaufforderung oder des Einberufungsbescheids bzw. Truppenausweises."
  },
  {
    id: "einschreiben",
    title: "Versand per Einschreiben mit Rückschein",
    mandatory: true,
    desc: "Dringend empfohlen: Rechtssicherer Nachweis über den rechtzeitigen Zugang des Antrags bei der Behörde."
  }
];
