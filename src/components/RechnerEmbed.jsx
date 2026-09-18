import React, { useEffect, useRef } from 'react';
import StatusNavigator from './StatusNavigator';
import { Shield, ExternalLink } from 'lucide-react';

export default function RechnerEmbed() {
  const containerRef = useRef(null);

  const handleOpenLetter = (letterType) => {
    window.open('https://kdvberatung.de/#muster', '_blank', 'noopener,noreferrer');
  };

  const handleOpenChecklist = () => {
    window.open('https://kdvberatung.de/#muster', '_blank', 'noopener,noreferrer');
  };

  const handleOpenBeratungsstellen = () => {
    window.open('https://kdvberatung.de/#beratungsstellen', '_blank', 'noopener,noreferrer');
  };

  // Post height message to parent frame for dynamic iframe resizing
  useEffect(() => {
    const sendHeight = () => {
      if (containerRef.current && window.parent) {
        const height = Math.max(
          containerRef.current.scrollHeight,
          containerRef.current.offsetHeight,
          document.documentElement.scrollHeight
        );
        window.parent.postMessage({ type: 'kdv-embed-height', height }, '*');
      }
    };

    sendHeight();
    const timer = setTimeout(sendHeight, 300);
    window.addEventListener('resize', sendHeight);

    const observer = new ResizeObserver(sendHeight);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', sendHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 p-2 sm:p-4 font-sans max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <StatusNavigator
          onOpenLetter={handleOpenLetter}
          onOpenChecklist={handleOpenChecklist}
          onOpenBeratungsstellen={handleOpenBeratungsstellen}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full mt-3 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 px-2">
        <div className="flex items-center gap-1.5 font-medium text-[11px]">
          <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>KDV Antrags- &amp; Verfahrens-Navigator nach Art. 4 Abs. 3 GG</span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span>Bereitgestellt von</span>
          <a
            href="https://kdvberatung.de"
            target="_blank"
            rel="noopener noreferrer"
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
