import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatusNavigator from './components/StatusNavigator';
import ConscienceGuide from './components/ConscienceGuide';
import Directory from './components/Directory';
import ProcessTimeline from './components/ProcessTimeline';
import ChecklistSection from './components/ChecklistSection';
import LegalNotice from './components/LegalNotice';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import ImpressumView from './components/ImpressumView';
import DatenschutzView from './components/DatenschutzView';
import RechnerEmbed from './components/RechnerEmbed';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Code2, Copy, Check, Scale, ShieldCheck, FileCheck2 } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'impressum' | 'datenschutz' | 'embed'
  const [selectedLetterTab, setSelectedLetterTab] = useState('ungediente');
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  // Handle URL changes & direct links for Vercel SPA routing
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('impressum') || hash.includes('impressum')) {
        setCurrentView('impressum');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (path.includes('datenschutz') || hash.includes('datenschutz')) {
        setCurrentView('datenschutz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (path.includes('rechner-embed') || hash.includes('rechner-embed')) {
        setCurrentView('embed');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);

    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  // Track SPA route changes in Vercel Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('pageview', { route: currentView });
    }
  }, [currentView]);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'impressum') {
      window.history.pushState({}, '', '/impressum');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'datenschutz') {
      window.history.pushState({}, '', '/datenschutz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const copyEmbedCode = () => {
    const code = `<iframe src="https://kdvberatung.de/rechner-embed" width="100%" height="700" style="border:none; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.08);" title="KDV Antrags-Navigator"></iframe>\n<p style="font-size:12px; color:#64748b; text-align:center;">Navigator bereitgestellt von <a href="https://kdvberatung.de" target="_blank" rel="noopener" style="color:#059669; text-decoration:underline;">kdvberatung.de</a></p>`;
    navigator.clipboard.writeText(code);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const handleOpenLetter = (letterType) => {
    setSelectedLetterTab(letterType);
    const el = document.getElementById('muster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenChecklist = () => {
    const el = document.getElementById('muster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === 'embed') {
    return (
      <>
        <RechnerEmbed />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  if (currentView === 'impressum') {
    return (
      <>
        <ImpressumView onBack={() => navigateTo('home')} />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  if (currentView === 'datenschutz') {
    return (
      <>
        <DatenschutzView onBack={() => navigateTo('home')} />
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-amber-300 selection:text-slate-950">
      {/* Header */}
      <Header onOpenLegal={navigateTo} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Interactive KDV Status & Application Navigator */}
        <StatusNavigator
          onOpenLetter={handleOpenLetter}
          onOpenChecklist={handleOpenChecklist}
        />

        {/* Embed Code Widget Box */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
                    <Code2 className="w-3.5 h-3.5" />
                    Kostenloses Widget für Beratungsstellen &amp; Informationsportale
                  </div>
                  <h3 className="text-xl font-black text-white">KDV-Statusnavigator auf Ihrer Website einbinden</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Bieten Sie Ratsuchenden eine interaktive Prüfung der Zuständigkeiten und Dokumente per responsivem iFrame.
                  </p>
                </div>
                <button
                  onClick={copyEmbedCode}
                  className="self-start md:self-center px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm cursor-pointer shrink-0"
                >
                  {copiedEmbed ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmbed ? 'Code kopiert!' : 'Embed-Code kopieren'}</span>
                </button>
              </div>
              <div className="bg-slate-900 rounded-lg p-3 text-xs font-mono text-slate-300 overflow-x-auto border border-slate-800">
                <code>{`<iframe src="https://kdvberatung.de/rechner-embed" width="100%" height="700" style="border:none; border-radius:16px;" title="KDV Antrags-Navigator"></iframe>\n<p style="font-size:12px; color:#64748b; text-align:center;">Bereitgestellt von <a href="https://kdvberatung.de" target="_blank" rel="noopener">kdvberatung.de</a></p>`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Conscience Foundations Guide */}
        <ConscienceGuide
          onOpenChecklist={handleOpenChecklist}
        />

        {/* Independent Counseling Centers & Lawyers Directory */}
        <Directory />

        {/* Process Timeline */}
        <ProcessTimeline
          onOpenChecklist={handleOpenChecklist}
        />

        {/* Sample Letters & Document Checklist */}
        <ChecklistSection
          preselectedLetter={selectedLetterTab}
        />

        {/* Constitutional & Legal Authority Section */}
        <LegalNotice />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* E-E-A-T Editorial Trust Box */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Fachredaktion kdvberatung.de</h4>
                  <p className="text-xs text-slate-500">Stand: September 2026 • Rechtsgrundlage: Art. 4 Abs. 3 GG &amp; Kriegsdienstverweigerungsgesetz (KDVG)</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Verfassungsrechtlich gesichert</span>
                  </div>
                  <p>Systematische Aufbereitung der Rechtsprechung des Bundesverfassungsgerichts (BVerfGE) zum Grundrecht auf Kriegsdienstverweigerung.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <FileCheck2 className="w-4 h-4 text-emerald-700" />
                    <span>Verfahrensneutralität</span>
                  </div>
                  <p>Unabhängiges Informationsportal nach § 5 DDG ohne Verbandsbindung. Keine behördliche Vermittlungsgebühr.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Scale className="w-4 h-4 text-emerald-700" />
                    <span>BAPersBw-Konformität</span>
                  </div>
                  <p>Muster und Leitfäden orientiert an den formalen Kriterien des Bundesamtes für das Personalmanagement der Bundeswehr.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenLegal={navigateTo} />

      {/* Sticky Mobile Action Bar */}
      <StickyMobileBar />

      {/* Vercel Web Analytics & Performance Tracking */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
