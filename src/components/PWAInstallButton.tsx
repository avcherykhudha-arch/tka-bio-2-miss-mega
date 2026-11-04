import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';
import { Download, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Hide if already running in standalone mode
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 border border-rose-200 px-3 py-1.5 text-xs font-semibold shadow-xs transition cursor-pointer"
        title="Pasang Aplikasi di Perangkat (Offline Mode)"
      >
        <Download className="w-3.5 h-3.5 text-rose-600 animate-bounce" />
        <span>Pasang Aplikasi</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 border border-rose-200 px-3 py-1.5 text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5 text-rose-600" />
          <span>Pasang di iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-rose-100">
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <h3 className="text-base font-bold text-slate-800">Pasang di iPhone / iPad</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                1. Ketuk tombol <strong className="text-rose-600">Bagikan (Share)</strong> di bilah navigasi Safari.<br />
                2. Gulir ke bawah lalu pilih <strong className="text-rose-600">Tambah ke Layar Utama (Add to Home Screen)</strong>.<br />
                3. Buka aplikasi secara mandiri dengan akses offline penuh!
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 py-2.5 text-sm font-semibold text-white shadow-md hover:from-rose-600 hover:to-pink-700 transition"
              >
                Mengerti
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
