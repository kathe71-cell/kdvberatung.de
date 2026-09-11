import React from 'react';
import StatusNavigator from './StatusNavigator';
import { Shield, ExternalLink } from 'lucide-react';

export default function RechnerEmbed() {
  const dummyHandler = () => {
    window.open('https://kdvberatung.de/#muster', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-6 flex flex-col justify-between font-sans">
      <div className="max-w-5xl mx-auto w-full">
        <StatusNavigator
          onOpenLetter={dummyHandler}
          onOpenChecklist={dummyHandler}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 font-medium">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>KDV Antrags- & Fristen-Navigator nach Art. 4 Abs. 3 GG • Geprüfter Stand: September 2026</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Bereitgestellt von</span>
          <a
            href="https://kdvberatung.de"
            target="_blank"
            rel="noopener"
            className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-0.5"
          >
            kdvberatung.de
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
