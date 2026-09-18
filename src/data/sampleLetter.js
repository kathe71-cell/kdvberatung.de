export const sampleLetters = {
  ungediente: {
    title: "Muster-Anschreiben für Ungediente & Erfasste Bürger",
    recipient: "An das\nBundesamt für das Personalmanagement der Bundeswehr\n– Wehrersatzbehörde –\nMilitärringstraße 1000\n50737 Köln",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer gemäß Art. 4 Abs. 3 Grundgesetz",
    body: `Sehr geehrte Damen und Herren,

hiermit beantrage ich gemäß Artikel 4 Absatz 3 Satz 1 des Grundgesetzes für die Bundesrepublik Deutschland sowie § 1 des Kriegsdienstverweigerungsgesetzes (KDVG) meine Anerkennung als Kriegsdienstverweigerer.

Aus Gewissensgründen lehne ich es unumstößlich ab, Kriegsdienst mit der Waffe zu leisten oder mich an Handlungen zu beteiligen, die dem gezielten Töten von Menschen dienen.

Als Anlagen füge ich diesem Antrag bei:
1. Einen ausführlichen tabellarischen Lebenslauf
2. Eine detaillierte persönliche Darlegung meiner Gewissensgründe

Ich bitte um schriftliche Bestätigung des Eingangs dieses Antrags sowie um Übermittlung der Unterlagen an die zuständige Entscheidungsbehörde (Bundesamt für Familie und zivilgesellschaftliche Aufgaben - BAFzA).

Mit freundlichen Grüßen,

[Unterschrift]
[Vorname Nachname]`
  },
  soldaten: {
    title: "Muster-Anschreiben für aktive Soldatinnen und Soldaten (SaZ / FWDL)",
    recipient: "An das\nBundesamt für das Personalmanagement der Bundeswehr\n– Wehrersatzbehörde –\nMilitärringstraße 1000\n50737 Köln\n\n(Nachrichtlich in Kopie an den Disziplinarvorgesetzten)",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer gemäß Art. 4 Abs. 3 GG",
    body: `Sehr geehrte Damen und Herren,

hiermit beantrage ich gemäß Artikel 4 Absatz 3 Satz 1 des Grundgesetzes i. V. m. § 1 KDVG meine Anerkennung als Kriegsdienstverweigerer.

Im Laufe meines Dienstes habe ich die unumstößliche Gewissensentscheidung getroffen, dass ich den Dienst mit der Waffe sowie das Töten von Menschen unter keinen Umständen mehr mit meinem Gewissen vereinbaren kann.

Ich bitte um schriftliche Eingangsbestätigung sowie Übermittlung der Unterlagen an das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) zur Entscheidung. Eine Kopie dieses Antrags habe ich meinem Disziplinarvorgesetzten zur Kenntnisnahme zugeleitet.

Anlagen:
1. Tabellarischer Lebenslauf (inkl. militärischem Werdegang)
2. Ausführliche schriftliche Gewissensbegründung

Mit freundlichen Grüßen,

[Unterschrift]
[Dienstgrad, Vorname Nachname, Personenkennziffer (PK)]`
  },
  reservisten: {
    title: "Muster-Anschreiben für Reservistinnen und Reservisten",
    recipient: "An das\nBundesamt für das Personalmanagement der Bundeswehr\n– Wehrersatzbehörde –\nMilitärringstraße 1000\n50737 Köln",
    subject: "Antrag auf Anerkennung als Kriegsdienstverweigerer für Reservisten (PK: [Ihre PK])",
    body: `Sehr geehrte Damen und Herren,

hiermit beantrage ich als Angehöriger der Reserve meine Anerkennung als Kriegsdienstverweigerer gemäß Artikel 4 Absatz 3 Satz 1 Grundgesetz.

Aufgrund einer gewandelten Gewissensüberzeugung verweigere ich künftig jede Heranziehung zum Dienst mit der Waffe sowie jede Teilnahme an militärischen Übungen.

Anlagen:
1. Tabellarischer Lebenslauf
2. Detaillierte Darlegung der veränderten Gewissensgründe

Ich bitte um schriftliche Eingangsbestätigung sowie Weiterleitung an das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA).

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
    desc: "Formloser Antrag mit Berufung auf Art. 4 Abs. 3 Satz 1 GG und § 1 KDVG. Eigenhändig unterschrieben an die Wehrersatzbehörde (BAPersBw Köln)."
  },
  {
    id: "lebenslauf",
    title: "Ausführlicher tabellarischer Lebenslauf",
    mandatory: true,
    desc: "Lückenlose Aufstellung des bisherigen Bildungswegs, der beruflichen/ehrenamtlichen Stationen und relevanter Lebensphasen."
  },
  {
    id: "begruendung",
    title: "Persönliche schriftliche Gewissensbegründung",
    mandatory: true,
    desc: "Zentraler Bestandteil: Authentische, eigene Darlegung der persönlichen Gewissensgründe gegen den Dienst mit der Waffe."
  },
  {
    id: "ausweiskopie",
    title: "Kopie des Personalausweises / Passdokuments",
    mandatory: false,
    desc: "Empfohlen zur Eindeutigkeit der Identität (Vorder- und Rückseite)."
  },
  {
    id: "bundeswehr_post",
    title: "Ggf. Bisherige Bescheide / Schreiben der Bundeswehr",
    mandatory: false,
    desc: "Falls vorhanden: Kopie von Erfassungsbogen, Musterungsbescheid, Heranziehungsbescheid oder Truppenausweis."
  },
  {
    id: "einschreiben",
    title: "Versandoption: Einschreiben mit Rückschein",
    mandatory: false,
    desc: "Empfohlene Versandoption zur vertraulichen Dokumentation des Zugangs (keine gesetzliche Pflichtunterlage)."
  }
];
