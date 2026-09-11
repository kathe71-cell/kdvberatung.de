# kdvberatung.de – Unabhängiger Leitfaden zur Kriegsdienstverweigerung (Art. 4 Abs. 3 GG)

Das schlüsselfertige Domain-Projekt für **`kdvberatung.de`**. Entwickelt als hochkonvertierendes, SEO-optimiertes und 100 % rechtssicheres Bürger- und Orientierungsportal rund um das verfassungsrechtlich garantierte Grundrecht auf Kriegsdienstverweigerung.

---

## 📋 Domain-Steckbrief & Projektierung

| Parameter | Wert / Spezifikation |
| :--- | :--- |
| **Domain** | `kdvberatung.de` |
| **Branche / Nische** | Bürgerrecht, Recht & Beratung, Wehrrecht / Kriegsdienstverweigerung (KDV) |
| **Rechtsgrundlage** | Art. 4 Abs. 3 Grundgesetz (GG), Kriegsdienstverweigerungsgesetz (KDVG) |
| **Suchintention** | Informational, Advisory & Commercial (Bürger nach Wehrerfassung, Musterungsbetroffene, aktive Soldatinnen/Soldaten [SaZ/FWDL], Reservisten sowie Fachanwälte) |
| **Modus** | Multi-Provider & Nischen-Portal (Interaktiver Navigator, Begründungs-Leitfaden, Beratungsstellen-Verzeichnis, Muster & Checklisten) |
| **Farbwelt** | Warmes Alabaster/Off-White (`#f8fafc`, `#ffffff`), Deep Slate (`#0f172a`), Tech Emerald (`#059669`), Warm Amber (`#f59e0b`) |
| **Datenschutz** | 100 % DSGVO-konform, Zero-CDN-Policy (System Font Stack), keine Tracking-Cookies |
| **Rechtssicherheit** | Vollständiges Impressum (§ 5 DDG & § 18 MStV), transparente Partnerlink-Kennzeichnung (`*`), Unabhängigkeits-Disclaimer |

---

## 🌟 Kern-Funktionen des Portals

1. **Interaktiver KDV-Status- & Antrags-Navigator**:
   - Statusgruppen: *Ungedient / Nach Wehrerfassung*, *Musterungsaufforderung erhalten*, *Aktive Soldat/innen (SaZ/FWDL)*, *Reservistinnen und Reservisten*.
   - Dynamische Berechnung: Zuständiges Karrierecenter bzw. BAPersBw Sankt Augustin, Pflichtunterlagen, Fristen und sofortige gesetzliche Schutzwirkung (§ 2 Abs. 2 KDVG).
2. **Leitfaden für die persönliche Gewissensbegründung**:
   - Strukturierung nach den 4 verfassungsrechtlichen Säulen gemäß Rechtsprechung des Bundesverfassungsgerichts (BVerfGE 12, 45).
   - Prüfpraxis-Vergleich (Dos & Don'ts) mit dringender Warnung vor unpersönlichen KI- oder Standardtexten.
3. **Unabhängiges Verzeichnis von Beratungsstellen & Fachanwälten**:
   - Filterbar nach Zielgruppen (DFG-VK, EAK, pax christi, Arbeitsstelle kokon, Fachanwaltsnetzwerk).
   - Transparente Unterscheidung zwischen kostenloser zivilgesellschaftlicher Erstberatung und anwaltlicher Vertretung.
4. **Muster-Anschreiben & Interaktive Dokumenten-Checkliste**:
   - Drei zielgruppenspezifische Musterschreiben mit 1-Klick-Kopierfunktion in die Zwischenablage und Druckansicht.
   - Interaktive Checkliste für die vollständige Antragsmappe per Einschreiben.
5. **Rechtliche FAQ-Sektion**:
   - 11 ausführliche, juristisch fundierte Antworten auf die wichtigsten Fragen zur aktuellen Wehrdienstdebatte 2025/2026.
6. **Vollständige Rechtsseiten**:
   - `/impressum` mit den vorgeschriebenen Angaben von Jens Kathe (§ 5 DDG, § 18 MStV, § 19 UStG, OS-Plattform).
   - `/datenschutz` mit vollständiger DSGVO-Erklärung für cookie-freie, statische Auslieferung.

---

## 🛠 Lokale Entwicklung & Build

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Lokalen Entwicklungsserver starten
npm run dev

# 3. Produktions-Build erstellen und verifizieren
npm run build
```

---

## 🚀 Vercel Deployment

Das Projekt ist durch `vercel.json` mit SPA-Rewrites vollständig für das sofortige Deployment auf Vercel optimiert:

```bash
# Temporäres Preview-Deployment erstellen:
vercel deploy --temporary

# Produktions-Deployment:
vercel --prod
```
