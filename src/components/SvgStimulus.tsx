import React, { useState } from 'react';
import { Maximize2, Minimize2, ZoomIn, ZoomOut } from 'lucide-react';

interface SvgStimulusProps {
  id: string;
  caption: string;
  className?: string;
}

export const SvgStimulus: React.FC<SvgStimulusProps> = ({ id, caption, className = '' }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  const renderGraphic = () => {
    switch (id) {
      // 1. Peta Garis Wallace & Weber
      case 'q1-wallace':
        return (
          <svg viewBox="0 0 800 450" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="450" fill="#f0fdf4" rx="16"/>
            {/* Laut dalam Wallacea */}
            <path d="M 330 30 C 370 80 430 200 410 380 C 490 370 540 280 520 100 Z" fill="#bae6fd" opacity="0.7"/>
            {/* Paparan Sunda (Asiatis) */}
            <path d="M 60 120 Q 150 100 220 180 T 170 340 T 80 260 Z" fill="#86efac" stroke="#15803d" strokeWidth="2"/>
            <text x="140" y="220" fontSize="14" fontWeight="bold" fill="#166534">Zona Asiatis (Sunda)</text>
            <text x="130" y="240" fontSize="11" fill="#14532d">Sumatra, Jawa, Kalimantan</text>
            {/* Sulawesi (Peralihan / Wallacea) */}
            <path d="M 380 150 Q 430 130 450 170 Q 420 220 440 280 Q 390 270 380 220 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2"/>
            <text x="405" y="200" fontSize="13" fontWeight="bold" fill="#9d174d">Sulawesi</text>
            <text x="390" y="218" fontSize="10" fill="#be185d">Anoa &amp; Babirusa</text>
            {/* Maluku & Nusa Tenggara */}
            <circle cx="510" cy="210" r="22" fill="#fbcfe8" stroke="#db2777" strokeWidth="2"/>
            <text x="510" y="214" fontSize="10" fontWeight="bold" fill="#9d174d" textAnchor="middle">Maluku</text>
            <path d="M 330 350 Q 430 360 480 340" stroke="#db2777" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <text x="410" y="375" fontSize="11" fontWeight="bold" fill="#9d174d" textAnchor="middle">Kep. Nusa Tenggara</text>
            {/* Paparan Sahul (Australis / Papua) */}
            <path d="M 590 160 Q 690 120 740 230 Q 680 310 590 250 Z" fill="#fed7aa" stroke="#c2410c" strokeWidth="2"/>
            <text x="645" y="210" fontSize="14" fontWeight="bold" fill="#9a3412">Zona Australis (Sahul)</text>
            <text x="655" y="230" fontSize="11" fill="#7c2d12">Papua &amp; Aru</text>
            {/* Garis Wallace */}
            <line x1="310" y1="40" x2="330" y2="410" stroke="#ef4444" strokeWidth="3" strokeDasharray="8,6"/>
            <rect x="230" y="55" width="125" height="26" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5"/>
            <text x="292" y="72" fontSize="11" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Garis Wallace</text>
            {/* Garis Weber */}
            <line x1="560" y1="40" x2="550" y2="410" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="8,6"/>
            <rect x="520" y="55" width="115" height="26" rx="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
            <text x="577" y="72" fontSize="11" fontWeight="bold" fill="#6d28d9" textAnchor="middle">Garis Weber</text>
            {/* Legend Box */}
            <rect x="40" y="370" width="220" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5"/>
            <rect x="50" y="380" width="16" height="12" fill="#bae6fd"/>
            <text x="75" y="390" fontSize="11" fill="#334155">Palung Laut Dalam (Isolasi)</text>
            <rect x="50" y="402" width="16" height="12" fill="#fbcfe8"/>
            <text x="75" y="412" fontSize="11" fill="#831843" fontWeight="bold">Zona Wallacea (Peralihan Endemik)</text>
          </svg>
        );

      // 2. Kladogram Filogenetik
      case 'q2-cladogram':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#faf5ff" rx="16"/>
            <line x1="100" y1="360" x2="220" y2="360" stroke="#475569" strokeWidth="4"/>
            <line x1="220" y1="360" x2="220" y2="120" stroke="#475569" strokeWidth="4"/>
            <line x1="220" y1="120" x2="340" y2="120" stroke="#475569" strokeWidth="4"/>
            {/* Branch T1 */}
            <line x1="340" y1="120" x2="680" y2="120" stroke="#0284c7" strokeWidth="4"/>
            <circle cx="340" cy="120" r="7" fill="#0284c7"/>
            {/* Branch to Node 2 */}
            <line x1="220" y1="360" x2="420" y2="360" stroke="#475569" strokeWidth="4"/>
            <line x1="420" y1="360" x2="420" y2="200" stroke="#475569" strokeWidth="4"/>
            {/* Branch T2 */}
            <line x1="420" y1="200" x2="680" y2="200" stroke="#059669" strokeWidth="4"/>
            <circle cx="420" cy="200" r="7" fill="#059669"/>
            {/* Branch to Node 3 */}
            <line x1="420" y1="360" x2="560" y2="360" stroke="#475569" strokeWidth="4"/>
            <line x1="560" y1="360" x2="560" y2="280" stroke="#475569" strokeWidth="4"/>
            {/* Branch T3 */}
            <line x1="560" y1="280" x2="680" y2="280" stroke="#e11d48" strokeWidth="4"/>
            <circle cx="560" cy="280" r="7" fill="#e11d48"/>
            {/* Branch T4 */}
            <line x1="560" y1="360" x2="680" y2="360" stroke="#d97706" strokeWidth="4"/>
            {/* Labels and Badges */}
            <rect x="695" y="105" width="90" height="30" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="740" y="125" fontSize="14" fontWeight="bold" fill="#0369a1" textAnchor="middle">Takson T1</text>
            <rect x="695" y="185" width="90" height="30" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="740" y="205" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">Takson T2</text>
            <rect x="695" y="265" width="90" height="30" rx="6" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.5"/>
            <text x="740" y="285" fontSize="14" fontWeight="bold" fill="#be123c" textAnchor="middle">Takson T3</text>
            <rect x="695" y="345" width="90" height="30" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="740" y="365" fontSize="14" fontWeight="bold" fill="#b45309" textAnchor="middle">Takson T4</text>
            {/* Annotations */}
            <text x="220" y="390" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">Nodus Basal Leluhur Bersama</text>
            <text x="560" y="405" fontSize="12" fontWeight="bold" fill="#e11d48" textAnchor="middle">Nodus Nenek Moyang Terkini (T3 &amp; T4)</text>
            {/* Monophyletic bracket */}
            <path d="M 685 100 Q 805 240 685 380" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,4"/>
            <text x="745" y="50" fontSize="13" fontWeight="bold" fill="#6d28d9" textAnchor="middle">Klad Monofiletik (T1–T4)</text>
          </svg>
        );

      // 3. Zonasi Mangrove
      case 'q3-mangrove':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Gradient lumpur dan air */}
            <path d="M 0 280 Q 200 270 450 300 T 800 290 L 800 420 L 0 420 Z" fill="#78716c"/>
            <path d="M 0 220 Q 150 215 320 230 L 320 280 L 0 280 Z" fill="#38bdf8" opacity="0.6"/>
            {/* Water levels */}
            <line x1="0" y1="220" x2="350" y2="220" stroke="#0284c7" strokeWidth="2" strokeDasharray="8,4"/>
            <text x="20" y="210" fontSize="12" fontWeight="bold" fill="#0369a1">Pasang Tertinggi</text>
            <line x1="0" y1="270" x2="250" y2="270" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4,4"/>
            <text x="20" y="262" fontSize="11" fill="#0369a1">Surut Terendah</text>
            {/* Zona 1: Avicennia (Pneumatophore) */}
            <g transform="translate(140, 110)">
              <rect x="70" y="60" width="14" height="110" fill="#a16207" rx="4"/>
              <ellipse cx="77" cy="50" rx="45" ry="40" fill="#22c55e"/>
              {/* Pneumatophores */}
              <line x1="20" y1="170" x2="20" y2="135" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <line x1="35" y1="170" x2="35" y2="130" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <line x1="50" y1="170" x2="50" y2="138" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <line x1="105" y1="170" x2="105" y2="132" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <line x1="120" y1="170" x2="120" y2="136" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <line x1="135" y1="170" x2="135" y2="128" stroke="#713f12" strokeWidth="4" strokeLinecap="round"/>
              <text x="77" y="195" fontSize="12" fontWeight="bold" fill="#14532d" textAnchor="middle">Avicennia sp.</text>
              <text x="77" y="210" fontSize="10" fill="#713f12" textAnchor="middle">(Akar Napas / Pneumatofor)</text>
            </g>
            {/* Zona 2: Rhizophora (Stilt Roots) */}
            <g transform="translate(420, 90)">
              <rect x="75" y="60" width="16" height="80" fill="#78350f" rx="4"/>
              <ellipse cx="83" cy="45" rx="55" ry="45" fill="#16a34a"/>
              {/* Stilt roots arching */}
              <path d="M 83 140 Q 50 160 30 200" fill="none" stroke="#78350f" strokeWidth="5"/>
              <path d="M 83 140 Q 60 170 50 200" fill="none" stroke="#78350f" strokeWidth="4"/>
              <path d="M 83 140 Q 115 160 135 200" fill="none" stroke="#78350f" strokeWidth="5"/>
              <path d="M 83 140 Q 105 170 115 200" fill="none" stroke="#78350f" strokeWidth="4"/>
              <text x="83" y="215" fontSize="12" fontWeight="bold" fill="#14532d" textAnchor="middle">Rhizophora sp.</text>
              <text x="83" y="230" fontSize="10" fill="#78350f" textAnchor="middle">(Akar Tunjang / Stilt Root)</text>
            </g>
            {/* Substrat info */}
            <rect x="250" y="360" width="300" height="40" rx="8" fill="#44403c" opacity="0.9"/>
            <text x="400" y="384" fontSize="13" fontWeight="bold" fill="#fef08a" textAnchor="middle">Substrat Lumpur Anaerobik (Kaya H2S, Miskin O2)</text>
          </svg>
        );

      // 4. Dinding Sel Bakteri Gram Positif vs Negatif
      case 'q4-bacteria-wall':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fdf2f8" rx="16"/>
            {/* Panel Kiri: Gram Positif */}
            <g transform="translate(40, 30)">
              <rect x="0" y="0" width="330" height="360" rx="12" fill="#ffffff" stroke="#f43f5e" strokeWidth="2"/>
              <text x="165" y="35" fontSize="16" fontWeight="bold" fill="#be123c" textAnchor="middle">Bakteri Gram Positif (Isolat X)</text>
              {/* Peptidoglikan Tebal */}
              <rect x="30" y="70" width="270" height="130" fill="#fda4af" stroke="#e11d48" strokeWidth="2" rx="6"/>
              <text x="165" y="130" fontSize="14" fontWeight="bold" fill="#9f1239" textAnchor="middle">Peptidoglikan Tebal (20–80 nm)</text>
              <text x="165" y="150" fontSize="11" fill="#881337" textAnchor="middle">+ Asam Teikoat &amp; Lipoteikoat</text>
              {/* Membran Plasma */}
              <rect x="30" y="230" width="270" height="40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" rx="4"/>
              <text x="165" y="255" fontSize="13" fontWeight="bold" fill="#9a3412" textAnchor="middle">Membran Plasma (Bilayer Fosfolipid)</text>
              <text x="165" y="315" fontSize="12" fill="#475569" textAnchor="middle">Sitoplasma Bakteri</text>
            </g>
            {/* Panel Kanan: Gram Negatif */}
            <g transform="translate(430, 30)">
              <rect x="0" y="0" width="330" height="360" rx="12" fill="#ffffff" stroke="#a855f7" strokeWidth="2"/>
              <text x="165" y="35" fontSize="16" fontWeight="bold" fill="#7e22ce" textAnchor="middle">Bakteri Gram Negatif (Isolat Y)</text>
              {/* Membran Luar */}
              <rect x="30" y="60" width="270" height="35" fill="#c084fc" stroke="#7e22ce" strokeWidth="2" rx="4"/>
              <text x="165" y="82" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">Membran Luar (LPS + Saluran Porin)</text>
              {/* Ruang Periplasma & Peptidoglikan Tipis */}
              <rect x="30" y="115" width="270" height="75" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" rx="4"/>
              <rect x="30" y="140" width="270" height="20" fill="#fda4af" stroke="#e11d48" strokeWidth="1.5"/>
              <text x="165" y="132" fontSize="11" fill="#475569" textAnchor="middle">Ruang Periplasma</text>
              <text x="165" y="155" fontSize="11" fontWeight="bold" fill="#9f1239" textAnchor="middle">Peptidoglikan Tipis (2–7 nm)</text>
              {/* Membran Plasma */}
              <rect x="30" y="230" width="270" height="40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" rx="4"/>
              <text x="165" y="255" fontSize="13" fontWeight="bold" fill="#9a3412" textAnchor="middle">Membran Plasma (Dalam)</text>
              <text x="165" y="315" fontSize="12" fill="#475569" textAnchor="middle">Sitoplasma Bakteri</text>
            </g>
          </svg>
        );

      // 5. Uji Kirby-Bauer Resistensi Antibiotik
      case 'q5-kirby-bauer':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Cawan Petri */}
            <circle cx="320" cy="210" r="175" fill="#fef08a" stroke="#ca8a04" strokeWidth="4"/>
            <text x="320" y="55" fontSize="14" fontWeight="bold" fill="#854d0e" textAnchor="middle">Lawn Biakan Bakteri Staphylococcus aureus</text>
            {/* Cakram A1 (Zona Sangat Luas) */}
            <circle cx="230" cy="140" r="65" fill="#ffffff" opacity="0.85" stroke="#94a3b8" strokeDasharray="3,3"/>
            <circle cx="230" cy="140" r="16" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
            <text x="230" y="145" fontSize="12" fontWeight="bold" fill="#0f172a" textAnchor="middle">A1</text>
            <text x="230" y="95" fontSize="11" fontWeight="bold" fill="#16a34a" textAnchor="middle">Zona Bening Luas</text>
            {/* Cakram A2 (Zona Sedang) */}
            <circle cx="410" cy="140" r="42" fill="#ffffff" opacity="0.85" stroke="#94a3b8" strokeDasharray="3,3"/>
            <circle cx="410" cy="140" r="16" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
            <text x="410" y="145" fontSize="12" fontWeight="bold" fill="#0f172a" textAnchor="middle">A2</text>
            {/* Cakram A3 (Zona Bening dengan Koloni Resisten di dalam) */}
            <circle cx="230" cy="280" r="50" fill="#ffffff" opacity="0.85" stroke="#94a3b8" strokeDasharray="3,3"/>
            <circle cx="230" cy="280" r="16" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
            <text x="230" y="285" fontSize="12" fontWeight="bold" fill="#0f172a" textAnchor="middle">A3</text>
            {/* Koloni mutan resisten */}
            <circle cx="210" cy="255" r="5" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5"/>
            <circle cx="255" cy="260" r="4.5" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5"/>
            <circle cx="225" cy="308" r="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="230" y="345" fontSize="10" fontWeight="bold" fill="#dc2626" textAnchor="middle">Koloni Tumbuh di Zona Hambat</text>
            {/* Cakram A4 (Resisten Total - Tanpa Zona Bening) */}
            <circle cx="410" cy="280" r="16" fill="#f1f5f9" stroke="#334155" strokeWidth="2"/>
            <text x="410" y="285" fontSize="12" fontWeight="bold" fill="#0f172a" textAnchor="middle">A4</text>
            <text x="410" y="315" fontSize="11" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Tanpa Zona Hambat</text>
            {/* Penjelasan Kanan */}
            <g transform="translate(540, 80)">
              <rect width="230" height="260" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
              <text x="115" y="30" fontSize="14" fontWeight="bold" fill="#1e293b" textAnchor="middle">Parameter Uji</text>
              <text x="20" y="65" fontSize="12" fill="#334155">• A1: Hambatan maksimal</text>
              <text x="20" y="95" fontSize="12" fill="#334155">• A2: Hambatan moderat</text>
              <text x="20" y="125" fontSize="12" fill="#334155">• A3: Seleksi koloni mutan</text>
              <text x="20" y="155" fontSize="12" fill="#334155">• A4: Bakteri resisten penuh</text>
              <rect x="20" y="185" width="190" height="50" rx="6" fill="#fee2e2"/>
              <text x="115" y="206" fontSize="11" fontWeight="bold" fill="#991b1b" textAnchor="middle">Inkubasi 24 Jam, 37°C</text>
              <text x="115" y="222" fontSize="10" fill="#b91c1c" textAnchor="middle">Medium Mueller-Hinton Agar</text>
            </g>
          </svg>
        );

      // 6. Biomagnifikasi Logam Berat
      case 'q6-biomagnification':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f0fdfa" rx="16"/>
            {/* Piramida Trofik */}
            <polygon points="400,60 580,360 220,360" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2"/>
            {/* Level 4: Elang Laut */}
            <polygon points="400,60 445,135 355,135" fill="#f43f5e" opacity="0.85"/>
            <text x="400" y="105" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">Elang Laut (Konsumen III)</text>
            <text x="400" y="122" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle">[Hg]: 50 ppm</text>
            {/* Level 3: Ikan Predator */}
            <polygon points="355,135 445,135 490,210 310,210" fill="#fb7185" opacity="0.8"/>
            <text x="400" y="175" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">Ikan Tuna / Predator (Konsumen II)</text>
            <text x="400" y="193" fontSize="11" fill="#ffffff" textAnchor="middle">[Hg]: 8,0 ppm</text>
            {/* Level 2: Ikan Kecil */}
            <polygon points="310,210 490,210 535,285 265,285" fill="#fda4af" opacity="0.75"/>
            <text x="400" y="250" fontSize="12" fontWeight="bold" fill="#881337" textAnchor="middle">Ikan Kecil &amp; Zooplankton (Konsumen I)</text>
            <text x="400" y="268" fontSize="11" fill="#9f1239" textAnchor="middle">[Hg]: 1,2 ppm</text>
            {/* Level 1: Fitoplankton */}
            <polygon points="265,285 535,285 580,360 220,360" fill="#ffe4e6" opacity="0.7"/>
            <text x="400" y="325" fontSize="12" fontWeight="bold" fill="#881337" textAnchor="middle">Fitoplankton (Produsen)</text>
            <text x="400" y="343" fontSize="11" fill="#9f1239" textAnchor="middle">[Hg]: 0,05 ppm</text>
            {/* Panah Aliran Energi vs Polutan */}
            <line x1="140" y1="360" x2="140" y2="80" stroke="#059669" strokeWidth="4" markerEnd="url(#arrow-green)"/>
            <text x="140" y="55" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">Aliran Energi Kimia</text>
            <text x="140" y="72" fontSize="10" fill="#065f46" textAnchor="middle">(Menyusut 90% per tingkat)</text>
            <line x1="660" y1="360" x2="660" y2="80" stroke="#dc2626" strokeWidth="4"/>
            <text x="660" y="55" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Biomagnifikasi Polutan (Hg)</text>
            <text x="660" y="72" fontSize="10" fill="#991b1b" textAnchor="middle">(Meningkat Pekat di Puncak)</text>
          </svg>
        );

      // 7. Eutrofikasi Danau: DO vs BOD
      case 'q7-eutrophication':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            {/* Axes */}
            <line x1="80" y1="360" x2="720" y2="360" stroke="#334155" strokeWidth="2"/>
            <line x1="80" y1="360" x2="80" y2="60" stroke="#334155" strokeWidth="2"/>
            <text x="400" y="395" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Waktu Pengamatan (Hari ke-)</text>
            <text x="50" y="50" fontSize="12" fontWeight="bold" fill="#1e293b">Konsentrasi Relatif</text>
            {/* X-axis ticks */}
            <text x="120" y="375" fontSize="11" fill="#64748b">Hari 0</text>
            <text x="250" y="375" fontSize="11" fill="#64748b">Hari 10</text>
            <text x="380" y="375" fontSize="11" fill="#64748b">Hari 15</text>
            <text x="520" y="375" fontSize="11" fill="#64748b">Hari 22</text>
            <text x="660" y="375" fontSize="11" fill="#64748b">Hari 30</text>
            {/* Kurva Alga Hijau */}
            <path d="M 80 320 Q 230 70 300 130 T 420 340 T 700 350" fill="none" stroke="#16a34a" strokeWidth="4"/>
            <text x="240" y="85" fontSize="13" fontWeight="bold" fill="#15803d">Blooming Alga</text>
            {/* Kurva BOD (Merah / Ungu) */}
            <path d="M 80 340 L 260 330 Q 380 90 480 120 T 700 280" fill="none" stroke="#9333ea" strokeWidth="4"/>
            <text x="480" y="95" fontSize="13" fontWeight="bold" fill="#7e22ce">BOD (Beban Organik &amp; Dekomposer)</text>
            {/* Kurva DO (Biru) Anjlok */}
            <path d="M 80 120 Q 240 100 320 220 T 450 350 T 600 345 T 700 230" fill="none" stroke="#0284c7" strokeWidth="4"/>
            <text x="130" y="110" fontSize="13" fontWeight="bold" fill="#0369a1">DO (Oksigen Terlarut)</text>
            {/* Highlight Zona Kritis Hipoksia */}
            <rect x="360" y="310" width="220" height="45" rx="6" fill="#fee2e2" opacity="0.75" stroke="#ef4444"/>
            <text x="470" y="335" fontSize="11" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Zona Anoksia (Kematian Massal Ikan)</text>
          </svg>
        );

      // 8. Siklus Nitrogen
      case 'q8-nitrogen-cycle':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Atmosfer N2 */}
            <rect x="250" y="20" width="300" height="45" rx="8" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
            <text x="400" y="47" fontSize="15" fontWeight="bold" fill="#0369a1" textAnchor="middle">Gas Nitrogen Atmosfer (N2 78%)</text>
            {/* Fiksasi */}
            <rect x="60" y="130" width="180" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="150" y="152" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">Fiksasi Nitrogen</text>
            <text x="150" y="168" fontSize="10" fill="#166534" textAnchor="middle">(Rhizobium / Azotobacter)</text>
            {/* Amonium */}
            <rect x="80" y="260" width="160" height="50" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="160" y="285" fontSize="14" fontWeight="bold" fill="#92400e" textAnchor="middle">Amonium (NH4+)</text>
            <text x="160" y="300" fontSize="10" fill="#b45309" textAnchor="middle">Amonifikasi Dekomposer</text>
            {/* Nitrifikasi Tahap 1: Nitrit */}
            <rect x="320" y="260" width="160" height="50" rx="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
            <text x="400" y="285" fontSize="14" fontWeight="bold" fill="#9a3412" textAnchor="middle">Nitrit (NO2-)</text>
            <text x="400" y="302" fontSize="10" fontWeight="bold" fill="#c2410c" textAnchor="middle">Oleh Nitrosomonas (Aerob)</text>
            {/* Nitrifikasi Tahap 2: Nitrat */}
            <rect x="560" y="260" width="160" height="50" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="2"/>
            <text x="640" y="285" fontSize="14" fontWeight="bold" fill="#9d174d" textAnchor="middle">Nitrat (NO3-)</text>
            <text x="640" y="302" fontSize="10" fontWeight="bold" fill="#be185d" textAnchor="middle">Oleh Nitrobacter (Aerob)</text>
            {/* Panah-panah alur */}
            <line x1="310" y1="65" x2="160" y2="130" stroke="#0284c7" strokeWidth="3"/>
            <line x1="150" y1="180" x2="150" y2="260" stroke="#16a34a" strokeWidth="3"/>
            <line x1="240" y1="285" x2="320" y2="285" stroke="#ea580c" strokeWidth="3"/>
            <line x1="480" y1="285" x2="560" y2="285" stroke="#db2777" strokeWidth="3"/>
            {/* Asimilasi ke tanaman */}
            <path d="M 640 260 L 640 160 L 450 160" fill="none" stroke="#10b981" strokeWidth="3"/>
            <text x="560" y="150" fontSize="12" fontWeight="bold" fill="#047857">Asimilasi ke Tanaman</text>
            {/* Denitrifikasi kembali ke N2 */}
            <path d="M 680 260 Q 750 130 520 65" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6,4"/>
            <text x="730" y="180" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Denitrifikasi (Anaerob)</text>
            <text x="730" y="196" fontSize="10" fill="#991b1b" textAnchor="middle">Pseudomonas sp.</text>
          </svg>
        );

      // 9. Kinetika Enzim: Kompetitif vs Non-kompetitif
      case 'q9-enzyme-kinetics':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            <line x1="100" y1="360" x2="720" y2="360" stroke="#334155" strokeWidth="2"/>
            <line x1="100" y1="360" x2="100" y2="60" stroke="#334155" strokeWidth="2"/>
            <text x="410" y="395" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Konsentrasi Substrat [S]</text>
            <text x="70" y="50" fontSize="12" fontWeight="bold" fill="#1e293b">Laju Reaksi (V)</text>
            {/* Vmax line */}
            <line x1="100" y1="110" x2="720" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4"/>
            <text x="730" y="115" fontSize="12" fontWeight="bold" fill="#475569">Vmax Kontrol</text>
            {/* Kurva Kontrol */}
            <path d="M 100 360 Q 180 130 450 115 L 700 110" fill="none" stroke="#64748b" strokeWidth="4"/>
            <text x="480" y="100" fontSize="12" fontWeight="bold" fill="#475569">Kontrol (Tanpa Inhibitor)</text>
            {/* Kurva Inhibitor P (Kompetitif: bergeser kanan, capai Vmax) */}
            <path d="M 100 360 Q 280 230 520 120 L 700 110" fill="none" stroke="#e11d48" strokeWidth="4"/>
            <text x="560" y="145" fontSize="13" fontWeight="bold" fill="#be123c">Inhibitor P (Km naik, Vmax tetap)</text>
            {/* Kurva Inhibitor Q (Non-kompetitif: Vmax terpangkas) */}
            <line x1="100" y1="210" x2="720" y2="210" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4,4"/>
            <text x="730" y="215" fontSize="12" fontWeight="bold" fill="#9333ea">Vmax Q</text>
            <path d="M 100 360 Q 220 225 450 215 L 700 210" fill="none" stroke="#9333ea" strokeWidth="4"/>
            <text x="480" y="240" fontSize="13" fontWeight="bold" fill="#7e22ce">Inhibitor Q (Vmax turun drastis)</text>
          </svg>
        );

      // 10. Pengaruh pH dan Suhu terhadap Enzim
      case 'q10-enzyme-ph-temp':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fdf4ff" rx="16"/>
            {/* Panel Kiri: Efek pH */}
            <g transform="translate(30, 20)">
              <rect width="350" height="370" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
              <text x="175" y="30" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Pengaruh Derajat Keasaman (pH)</text>
              <line x1="50" y1="320" x2="320" y2="320" stroke="#334155" strokeWidth="2"/>
              <line x1="50" y1="320" x2="50" y2="70" stroke="#334155" strokeWidth="2"/>
              <text x="185" y="350" fontSize="12" fill="#334155">pH Larutan (1 – 10)</text>
              {/* Kurva Pepsin (pH 2) */}
              <path d="M 60 320 Q 95 90 130 320" fill="none" stroke="#e11d48" strokeWidth="3"/>
              <text x="95" y="80" fontSize="12" fontWeight="bold" fill="#be123c" textAnchor="middle">Enzim X (Pepsin pH 2)</text>
              {/* Kurva Amilase (pH 7) */}
              <path d="M 180 320 Q 235 90 290 320" fill="none" stroke="#0284c7" strokeWidth="3"/>
              <text x="235" y="80" fontSize="12" fontWeight="bold" fill="#0369a1" textAnchor="middle">Enzim Y (Amilase pH 7)</text>
            </g>
            {/* Panel Kanan: Efek Suhu */}
            <g transform="translate(420, 20)">
              <rect width="350" height="370" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5"/>
              <text x="175" y="30" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">Pengaruh Suhu (°C)</text>
              <line x1="50" y1="320" x2="320" y2="320" stroke="#334155" strokeWidth="2"/>
              <line x1="50" y1="320" x2="50" y2="70" stroke="#334155" strokeWidth="2"/>
              <text x="185" y="350" fontSize="12" fill="#334155">Suhu (°C)</text>
              {/* Kurva Suhu Optimum 37C */}
              <path d="M 60 300 Q 180 230 200 90 L 245 320" fill="none" stroke="#d97706" strokeWidth="3.5"/>
              <line x1="200" y1="90" x2="200" y2="320" stroke="#94a3b8" strokeDasharray="4,4"/>
              <text x="200" y="80" fontSize="12" fontWeight="bold" fill="#b45309" textAnchor="middle">Optimum ~37°C</text>
              <text x="260" y="240" fontSize="11" fontWeight="bold" fill="#dc2626">Denaturasi (&gt;60°C)</text>
              <text x="75" y="280" fontSize="10" fill="#475569">Inaktif (0–10°C)</text>
            </g>
          </svg>
        );

      // 11. Regulasi Alosterik Glikolisis PFK-1
      case 'q11-glycolysis-pfk':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Reaksi Utama */}
            <rect x="240" y="40" width="320" height="45" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2"/>
            <text x="400" y="68" fontSize="15" fontWeight="bold" fill="#3730a3" textAnchor="middle">Fruktosa-6-Fosfat</text>
            <line x1="400" y1="85" x2="400" y2="180" stroke="#475569" strokeWidth="4"/>
            {/* Enzim PFK-1 */}
            <circle cx="400" cy="195" r="55" fill="#fbcfe8" stroke="#db2777" strokeWidth="3"/>
            <text x="400" y="192" fontSize="13" fontWeight="bold" fill="#9d174d" textAnchor="middle">Enzim PFK-1</text>
            <text x="400" y="210" fontSize="10" fill="#be185d" textAnchor="middle">(Sisi Alosterik)</text>
            <line x1="400" y1="250" x2="400" y2="330" stroke="#475569" strokeWidth="4"/>
            <rect x="240" y="330" width="320" height="45" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
            <text x="400" y="358" fontSize="15" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Fruktosa-1,6-Bisfosfat</text>
            {/* Sisi Kiri: Aktivasi AMP */}
            <rect x="50" y="170" width="160" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="130" y="195" fontSize="13" fontWeight="bold" fill="#15803d" textAnchor="middle">+ AMP Melimpah</text>
            <text x="130" y="210" fontSize="10" fill="#166534" textAnchor="middle">(Aktivator Alosterik)</text>
            <line x1="210" y1="195" x2="345" y2="195" stroke="#16a34a" strokeWidth="3"/>
            {/* Sisi Kanan: Inhibisi ATP */}
            <rect x="590" y="170" width="160" height="50" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
            <text x="670" y="195" fontSize="13" fontWeight="bold" fill="#b91c1c" textAnchor="middle">- ATP Melimpah</text>
            <text x="670" y="210" fontSize="10" fill="#991b1b" textAnchor="middle">(Inhibitor Alosterik)</text>
            <line x1="590" y1="195" x2="455" y2="195" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,4"/>
          </svg>
        );

      // 12. Kompartemen Respirasi Seluler
      case 'q12-cellular-respiration':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#eff6ff" rx="16"/>
            {/* Sitosol (Glikolisis) */}
            <rect x="30" y="40" width="220" height="340" rx="12" fill="#ffffff" stroke="#93c5fd" strokeWidth="2"/>
            <text x="140" y="70" fontSize="14" fontWeight="bold" fill="#1e40af" textAnchor="middle">Sitosol (Sitoplasma)</text>
            <rect x="50" y="110" width="180" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="140" y="145" fontSize="13" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">Glikolisis</text>
            <text x="140" y="165" fontSize="11" fill="#1e3a8a" textAnchor="middle">Glukosa (6C) -&gt; 2 Piruvat (3C)</text>
            <text x="140" y="180" fontSize="10" fill="#2563eb" textAnchor="middle">Net 2 ATP + 2 NADH</text>
            <text x="140" y="220" fontSize="11" fontWeight="bold" fill="#dc2626" textAnchor="middle">TIDAK melepas CO2</text>
            {/* Mitokondria Besar */}
            <g transform="translate(280, 40)">
              <rect width="490" height="340" rx="16" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2"/>
              <text x="245" y="30" fontSize="14" fontWeight="bold" fill="#9d174d" textAnchor="middle">Mitokondria</text>
              {/* Matriks: Dekarboksilasi Oksidatif */}
              <rect x="30" y="60" width="190" height="90" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
              <text x="125" y="85" fontSize="11" fontWeight="bold" fill="#831843" textAnchor="middle">Dekarboksilasi Oksidatif</text>
              <text x="125" y="105" fontSize="10" fill="#9d174d" textAnchor="middle">2 Piruvat -&gt; 2 Asetil Ko-A</text>
              <rect x="55" y="118" width="140" height="24" rx="4" fill="#fee2e2"/>
              <text x="125" y="134" fontSize="11" fontWeight="bold" fill="#dc2626" textAnchor="middle">LEPAS 2 CO2</text>
              {/* Matriks: Siklus Krebs */}
              <rect x="30" y="180" width="190" height="90" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
              <text x="125" y="205" fontSize="12" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Siklus Krebs (Matriks)</text>
              <text x="125" y="225" fontSize="10" fill="#6d28d9" textAnchor="middle">6 NADH, 2 FADH2, 2 ATP</text>
              <rect x="55" y="238" width="140" height="24" rx="4" fill="#fee2e2"/>
              <text x="125" y="254" fontSize="11" fontWeight="bold" fill="#dc2626" textAnchor="middle">LEPAS 4 CO2</text>
              {/* Krista Membran Dalam: Transpor Elektron */}
              <rect x="250" y="60" width="210" height="210" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5"/>
              <text x="355" y="90" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">Rantai Transpor Elektron</text>
              <text x="355" y="110" fontSize="11" fill="#065f46" textAnchor="middle">&amp; Fosforilasi Oksidatif</text>
              <text x="355" y="140" fontSize="11" fill="#047857" textAnchor="middle">Membran Krista Dalam</text>
              <text x="355" y="170" fontSize="11" fontWeight="bold" fill="#059669" textAnchor="middle">O2 + H+ -&gt; H2O</text>
              <text x="355" y="200" fontSize="13" fontWeight="bold" fill="#047857" textAnchor="middle">+ 28–34 ATP</text>
              <text x="355" y="235" fontSize="10" fill="#64748b" textAnchor="middle">TIDAK melepas CO2</text>
            </g>
          </svg>
        );

      // 13. Respirometer Sederhana
      case 'q13-respirometer':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fafafa" rx="16"/>
            {/* Tabung Spesimen */}
            <rect x="80" y="100" width="220" height="220" rx="18" fill="#e0f2fe" opacity="0.6" stroke="#0284c7" strokeWidth="3"/>
            {/* Organisme: Jangkrik */}
            <ellipse cx="200" cy="180" rx="35" ry="20" fill="#78350f"/>
            <circle cx="235" cy="175" r="14" fill="#451a03"/>
            <line x1="242" y1="170" x2="260" y2="155" stroke="#451a03" strokeWidth="2"/>
            <text x="200" y="220" fontSize="12" fontWeight="bold" fill="#78350f" textAnchor="middle">Spesimen Jangkrik</text>
            {/* Kapas dan KOH */}
            <rect x="95" y="270" width="190" height="35" rx="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="190" y="292" fontSize="12" fontWeight="bold" fill="#854d0e" textAnchor="middle">Kristal KOH + Kapas</text>
            <text x="190" y="325" fontSize="10" fill="#b45309" textAnchor="middle">(Fungsi: Mengikat Gas CO2)</text>
            {/* Pipa Kapiler Horizontal Berskala */}
            <rect x="300" y="195" width="440" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="2"/>
            {/* Skala mm */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={i} x1={330 + i * 26} y1="200" x2={330 + i * 26} y2={i % 5 === 0 ? "220" : "210"} stroke="#475569" strokeWidth="1.5"/>
            ))}
            {/* Tetesan Eosin Merah */}
            <rect x="520" y="198" width="55" height="24" rx="4" fill="#e11d48"/>
            <text x="547" y="215" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle">Eosin</text>
            {/* Panah Pergerakan */}
            <line x1="510" y1="210" x2="430" y2="210" stroke="#dc2626" strokeWidth="3"/>
            <text x="470" y="180" fontSize="12" fontWeight="bold" fill="#dc2626" textAnchor="middle">Arah Gerak Eosin (Menuju Jangkrik)</text>
            <text x="470" y="255" fontSize="11" fill="#475569" textAnchor="middle">Volume gas berkurang karena O2 diserap jangkrik</text>
          </svg>
        );

      // 14. Tilakoid Z-Scheme
      case 'q14-thylakoid-z-scheme':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f0fdf4" rx="16"/>
            {/* Membran Tilakoid */}
            <rect x="50" y="190" width="700" height="40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2"/>
            <text x="90" y="160" fontSize="13" fontWeight="bold" fill="#047857">STROMA (pH ~8)</text>
            <text x="90" y="270" fontSize="13" fontWeight="bold" fill="#b45309">LUMEN TILAKOID (Kaya H+, pH ~5)</text>
            {/* Fotosistem II */}
            <rect x="140" y="140" width="90" height="130" rx="8" fill="#22c55e" stroke="#15803d" strokeWidth="2"/>
            <text x="185" y="190" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">Fotosistem II</text>
            <text x="185" y="210" fontSize="11" fill="#ffffff" textAnchor="middle">(P680)</text>
            {/* Fotolisis Air */}
            <path d="M 185 270 L 185 330" stroke="#0284c7" strokeWidth="3"/>
            <rect x="120" y="330" width="130" height="36" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="185" y="352" fontSize="11" fontWeight="bold" fill="#0369a1" textAnchor="middle">H2O -&gt; 2H+ + 1/2 O2</text>
            {/* Kompleks Sitokrom b6f */}
            <rect x="300" y="160" width="80" height="100" rx="8" fill="#a855f7" stroke="#7e22ce" strokeWidth="2"/>
            <text x="340" y="215" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle">Sitokrom b6f</text>
            {/* Pompa H+ */}
            <line x1="340" y1="130" x2="340" y2="290" stroke="#ef4444" strokeWidth="3"/>
            <text x="340" y="120" fontSize="12" fontWeight="bold" fill="#dc2626" textAnchor="middle">Pompa H+</text>
            {/* Fotosistem I */}
            <rect x="450" y="140" width="90" height="130" rx="8" fill="#16a34a" stroke="#14532d" strokeWidth="2"/>
            <text x="495" y="190" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">Fotosistem I</text>
            <text x="495" y="210" fontSize="11" fill="#ffffff" textAnchor="middle">(P700)</text>
            {/* Pembentukan NADPH */}
            <line x1="495" y1="140" x2="560" y2="90" stroke="#f59e0b" strokeWidth="3"/>
            <rect x="520" y="60" width="150" height="35" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="595" y="82" fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">NADP+ -&gt; NADPH</text>
            {/* ATP Sintase */}
            <rect x="630" y="130" width="80" height="150" rx="8" fill="#f43f5e" stroke="#be123c" strokeWidth="2"/>
            <text x="670" y="185" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle">ATP Sintase</text>
            <text x="670" y="205" fontSize="10" fill="#ffffff" textAnchor="middle">H+ keluar</text>
            <text x="670" y="95" fontSize="12" fontWeight="bold" fill="#be123c" textAnchor="middle">ADP -&gt; ATP</text>
          </svg>
        );

      // 15. Spektrum Absorpsi Klorofil vs Spektrum Aksi
      case 'q15-absorption-spectrum':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            {/* Color spectrum band background */}
            <defs>
              <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
                <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.3"/>
                <stop offset="75%" stopColor="#eab308" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <rect x="80" y="320" width="640" height="25" fill="url(#rainbow)"/>
            <line x1="80" y1="320" x2="720" y2="320" stroke="#334155" strokeWidth="2"/>
            <line x1="80" y1="320" x2="80" y2="60" stroke="#334155" strokeWidth="2"/>
            <text x="400" y="375" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Panjang Gelombang Cahaya (nm)</text>
            <text x="130" y="340" fontSize="11" fill="#475569">400 (Ungu)</text>
            <text x="250" y="340" fontSize="11" fill="#475569">470 (Biru)</text>
            <text x="380" y="340" fontSize="11" fill="#475569">550 (Hijau)</text>
            <text x="520" y="340" fontSize="11" fill="#475569">600 (Kuning)</text>
            <text x="650" y="340" fontSize="11" fill="#475569">680 (Merah)</text>
            {/* Kurva Klorofil a */}
            <path d="M 80 180 Q 140 70 200 230 T 380 300 T 580 270 T 670 120 L 710 310" fill="none" stroke="#1d4ed8" strokeWidth="3.5"/>
            <text x="180" y="70" fontSize="12" fontWeight="bold" fill="#1d4ed8">Klorofil a (Puncak Biru &amp; Merah)</text>
            {/* Kurva Spektrum Aksi Laju Fotosintesis */}
            <path d="M 80 160 Q 150 90 220 200 T 380 295 T 570 250 T 660 130 L 710 290" fill="none" stroke="#e11d48" strokeWidth="3" strokeDasharray="6,3"/>
            <text x="620" y="90" fontSize="12" fontWeight="bold" fill="#be123c">Laju Aksi Fotosintesis</text>
            {/* Lembah Hijau Anjlok */}
            <rect x="320" y="260" width="140" height="50" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5"/>
            <text x="390" y="280" fontSize="11" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Lembah Penyerapan</text>
            <text x="390" y="296" fontSize="10" fill="#dc2626" textAnchor="middle">Cahaya Hijau Dipantulkan</text>
          </svg>
        );

      // 16. Sistem Konduksi Jantung & Siklus Tekanan
      case 'q16-cardiac-conduction':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fff1f2" rx="16"/>
            {/* Sketsa Jantung */}
            <g transform="translate(100, 30)">
              <path d="M 120 70 C 120 30 50 30 50 90 C 50 160 120 220 180 280 C 240 220 310 160 310 90 C 310 30 240 30 240 70 C 210 10 150 10 120 70 Z" fill="#ffffff" stroke="#e11d48" strokeWidth="3"/>
              {/* Nodus SA */}
              <circle cx="100" cy="80" r="10" fill="#eab308" stroke="#ca8a04" strokeWidth="2"/>
              <text x="50" y="75" fontSize="11" fontWeight="bold" fill="#a16207">Nodus SA</text>
              {/* Nodus AV */}
              <circle cx="170" cy="140" r="10" fill="#f97316" stroke="#c2410c" strokeWidth="2"/>
              <text x="170" y="165" fontSize="11" fontWeight="bold" fill="#c2410c" textAnchor="middle">Nodus AV</text>
              <rect x="110" y="175" width="120" height="22" rx="4" fill="#ffedd5"/>
              <text x="170" y="190" fontSize="10" fontWeight="bold" fill="#ea580c" textAnchor="middle">Jeda (Delay) 0.1s</text>
              {/* Berkas His & Purkinje */}
              <path d="M 170 150 L 175 220 L 140 250" fill="none" stroke="#7c3aed" strokeWidth="3"/>
              <path d="M 175 220 L 210 250" fill="none" stroke="#7c3aed" strokeWidth="3"/>
              <text x="175" y="270" fontSize="11" fontWeight="bold" fill="#6d28d9" textAnchor="middle">Serat Purkinje</text>
            </g>
            {/* Grafik Tekanan Ventrikel Kiri */}
            <g transform="translate(450, 40)">
              <rect width="310" height="330" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5"/>
              <text x="155" y="30" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Kurva Tekanan Ventrikel Kiri (mmHg)</text>
              <line x1="40" y1="280" x2="280" y2="280" stroke="#334155" strokeWidth="1.5"/>
              <line x1="40" y1="280" x2="40" y2="50" stroke="#334155" strokeWidth="1.5"/>
              <text x="25" y="70" fontSize="10" fill="#64748b">120</text>
              <text x="25" y="180" fontSize="10" fill="#64748b">80</text>
              <text x="25" y="280" fontSize="10" fill="#64748b">0</text>
              {/* Kurva Sistol Diastol */}
              <path d="M 50 270 L 90 260 L 120 70 L 190 75 L 220 270 L 270 270" fill="none" stroke="#e11d48" strokeWidth="3"/>
              <text x="155" y="60" fontSize="11" fontWeight="bold" fill="#be123c" textAnchor="middle">Puncak Sistol (120 mmHg)</text>
              <text x="155" y="305" fontSize="11" fill="#475569" textAnchor="middle">Fase Pengisian Diastol</text>
            </g>
          </svg>
        );

      // 17. Uji Aglutinasi Golongan Darah
      case 'q17-blood-agglutination':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Pelat Kartu Uji */}
            <rect x="80" y="50" width="640" height="320" rx="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2"/>
            <text x="400" y="85" fontSize="16" fontWeight="bold" fill="#0f172a" textAnchor="middle">Kartu Uji Serum Aglutinasi Golongan Darah</text>
            {/* Sumur Anti-A: Mulus (TIDAK Menggumpal) */}
            <g transform="translate(130, 115)">
              <circle cx="80" cy="80" r="65" fill="#fef2f2" stroke="#dc2626" strokeWidth="2"/>
              {/* Titik eritrosit menyebar mulus */}
              {Array.from({ length: 28 }).map((_, i) => (
                <circle key={i} cx={45 + (i % 6) * 14} cy={45 + Math.floor(i / 6) * 15} r="2.5" fill="#ef4444" opacity="0.6"/>
              ))}
              <rect x="25" y="160" width="110" height="32" rx="6" fill="#fee2e2"/>
              <text x="80" y="178" fontSize="12" fontWeight="bold" fill="#991b1b" textAnchor="middle">Serum Anti-A</text>
              <text x="80" y="210" fontSize="11" fontWeight="bold" fill="#059669" textAnchor="middle">TIDAK Menggumpal</text>
            </g>
            {/* Sumur Anti-B: Gumpalan Kasar (MENGGUMPAL) */}
            <g transform="translate(320, 115)">
              <circle cx="80" cy="80" r="65" fill="#fef2f2" stroke="#2563eb" strokeWidth="2"/>
              {/* Gumpalan aglutinasi kasar */}
              <ellipse cx="65" cy="65" rx="18" ry="12" fill="#991b1b"/>
              <ellipse cx="95" cy="90" rx="16" ry="14" fill="#991b1b"/>
              <ellipse cx="70" cy="100" rx="14" ry="10" fill="#991b1b"/>
              <circle cx="100" cy="60" r="10" fill="#991b1b"/>
              <rect x="25" y="160" width="110" height="32" rx="6" fill="#dbeafe"/>
              <text x="80" y="178" fontSize="12" fontWeight="bold" fill="#1e40af" textAnchor="middle">Serum Anti-B</text>
              <text x="80" y="210" fontSize="11" fontWeight="bold" fill="#dc2626" textAnchor="middle">MENGGUMPAL (+)</text>
            </g>
            {/* Sumur Anti-D (Rhesus): MENGGUMPAL */}
            <g transform="translate(510, 115)">
              <circle cx="80" cy="80" r="65" fill="#fef2f2" stroke="#7c3aed" strokeWidth="2"/>
              {/* Gumpalan kasar */}
              <ellipse cx="75" cy="70" rx="16" ry="14" fill="#991b1b"/>
              <ellipse cx="95" cy="85" rx="14" ry="11" fill="#991b1b"/>
              <ellipse cx="60" cy="95" rx="15" ry="10" fill="#991b1b"/>
              <rect x="25" y="160" width="110" height="32" rx="6" fill="#ede9fe"/>
              <text x="80" y="178" fontSize="12" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Serum Anti-D</text>
              <text x="80" y="210" fontSize="11" fontWeight="bold" fill="#dc2626" textAnchor="middle">MENGGUMPAL (+)</text>
            </g>
          </svg>
        );

      // 18. Alveolus Difusi O2 & CO2
      case 'q18-alveoli-diffusion':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f0f9ff" rx="16"/>
            {/* Rongga Alveolus */}
            <circle cx="270" cy="210" r="160" fill="#ffffff" stroke="#38bdf8" strokeWidth="3"/>
            <text x="270" y="130" fontSize="16" fontWeight="bold" fill="#0369a1" textAnchor="middle">Rongga Alveolus</text>
            <rect x="180" y="160" width="180" height="70" rx="8" fill="#e0f2fe"/>
            <text x="270" y="185" fontSize="14" fontWeight="bold" fill="#0284c7" textAnchor="middle">PO2 = 104 mmHg</text>
            <text x="270" y="215" fontSize="14" fontWeight="bold" fill="#0284c7" textAnchor="middle">PCO2 = 40 mmHg</text>
            {/* Kapiler Darah Melengkung */}
            <path d="M 440 30 Q 420 210 440 390 L 530 390 Q 510 210 530 30 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
            <text x="475" y="55" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Kapiler Paru</text>
            {/* Eritrosit */}
            <ellipse cx="475" cy="120" rx="18" ry="12" fill="#dc2626"/>
            <ellipse cx="475" cy="210" rx="18" ry="12" fill="#dc2626"/>
            <ellipse cx="475" cy="300" rx="18" ry="12" fill="#dc2626"/>
            {/* Panah Difusi */}
            {/* O2 masuk ke kapiler */}
            <line x1="370" y1="180" x2="445" y2="180" stroke="#0284c7" strokeWidth="4"/>
            <text x="405" y="165" fontSize="12" fontWeight="bold" fill="#0284c7" textAnchor="middle">Difusi O2</text>
            {/* CO2 keluar ke alveolus */}
            <line x1="445" y1="240" x2="370" y2="240" stroke="#dc2626" strokeWidth="4"/>
            <text x="405" y="260" fontSize="12" fontWeight="bold" fill="#dc2626" textAnchor="middle">Difusi CO2</text>
            {/* Keterangan Darah Vena vs Arteri */}
            <g transform="translate(560, 100)">
              <rect width="200" height="200" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5"/>
              <text x="100" y="30" fontSize="13" fontWeight="bold" fill="#0f172a" textAnchor="middle">Tekanan Darah Vena</text>
              <text x="20" y="60" fontSize="12" fill="#475569">• Masuk: PO2 = 40 mmHg</text>
              <text x="20" y="85" fontSize="12" fill="#475569">• Masuk: PCO2 = 45 mmHg</text>
              <line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0"/>
              <text x="100" y="135" fontSize="13" fontWeight="bold" fill="#059669" textAnchor="middle">Darah Teroksigenasi</text>
              <text x="20" y="165" fontSize="12" fill="#047857">• Keluar: PO2 = 104 mmHg</text>
              <text x="20" y="185" fontSize="12" fill="#047857">• Keluar: PCO2 = 40 mmHg</text>
            </g>
          </svg>
        );

      // 19. Spirometri Paru-Paru
      case 'q19-spirometry-graph':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            <line x1="80" y1="360" x2="680" y2="360" stroke="#334155" strokeWidth="2"/>
            <line x1="80" y1="360" x2="80" y2="50" stroke="#334155" strokeWidth="2"/>
            <text x="380" y="395" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Waktu (detik)</text>
            <text x="65" y="45" fontSize="12" fontWeight="bold" fill="#1e293b">Volume (mL)</text>
            <text x="35" y="75" fontSize="10" fill="#64748b">6000</text>
            <text x="35" y="130" fontSize="10" fill="#64748b">4600</text>
            <text x="35" y="230" fontSize="10" fill="#64748b">3000</text>
            <text x="35" y="275" fontSize="10" fill="#64748b">2500</text>
            <text x="35" y="325" fontSize="10" fill="#64748b">1200</text>
            {/* Gelombang Spirometri */}
            <path d="M 80 250 Q 110 230 140 250 T 200 250 L 250 80 L 310 320 L 360 250 Q 400 230 440 250 T 500 250 L 580 250" fill="none" stroke="#2563eb" strokeWidth="3"/>
            {/* Penanda Volume Tidal */}
            <line x1="120" y1="230" x2="160" y2="230" stroke="#0284c7" strokeWidth="1.5"/>
            <line x1="120" y1="250" x2="160" y2="250" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="140" y="215" fontSize="11" fontWeight="bold" fill="#0284c7" textAnchor="middle">VT (500 mL)</text>
            {/* Penanda Cadangan Inspirasi */}
            <line x1="250" y1="80" x2="250" y2="230" stroke="#16a34a" strokeWidth="2" strokeDasharray="4,4"/>
            <text x="210" y="150" fontSize="11" fontWeight="bold" fill="#15803d">VCI (3000 mL)</text>
            {/* Penanda Cadangan Ekspirasi */}
            <line x1="310" y1="250" x2="310" y2="320" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4"/>
            <text x="330" y="295" fontSize="11" fontWeight="bold" fill="#b45309">VCE (1100 mL)</text>
            {/* Volume Residu */}
            <rect x="80" y="320" width="500" height="40" fill="#fee2e2" opacity="0.6"/>
            <text x="320" y="345" fontSize="11" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Volume Residu (VR = 1200 mL)</text>
            {/* Bracket Kapasitas Vital */}
            <line x1="600" y1="80" x2="600" y2="320" stroke="#7c3aed" strokeWidth="3"/>
            <text x="615" y="200" fontSize="13" fontWeight="bold" fill="#6d28d9">Kapasitas Vital (KV)</text>
            <text x="615" y="220" fontSize="11" fill="#7c3aed">= 500 + 3000 + 1100</text>
            <text x="615" y="240" fontSize="12" fontWeight="bold" fill="#5b21b6">= 4600 mL</text>
          </svg>
        );

      // 20. Anatomi Nefron Ginjal
      case 'q20-nephron-anatomy':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fdf2f8" rx="16"/>
            {/* Glomerulus & Kapsula Bowman */}
            <circle cx="160" cy="120" r="35" fill="#ffffff" stroke="#e11d48" strokeWidth="3"/>
            <circle cx="160" cy="120" r="22" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="160" y="65" fontSize="12" fontWeight="bold" fill="#9f1239" textAnchor="middle">Glomerulus (Filtrasi)</text>
            <text x="160" y="125" fontSize="10" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Urine Primer</text>
            {/* Tubulus Proksimal */}
            <path d="M 195 120 Q 260 80 290 140 T 320 200" fill="none" stroke="#f43f5e" strokeWidth="8"/>
            <text x="270" y="80" fontSize="11" fontWeight="bold" fill="#be123c">Tubulus Proksimal</text>
            <text x="270" y="98" fontSize="10" fill="#9f1239">(Reabsorpsi 100% Glukosa)</text>
            {/* Lengkung Henle */}
            <path d="M 320 200 L 320 330 Q 350 370 380 330 L 380 180" fill="none" stroke="#a855f7" strokeWidth="6"/>
            <text x="350" y="385" fontSize="11" fontWeight="bold" fill="#6d28d9" textAnchor="middle">Lengkung Henle</text>
            <text x="300" y="270" fontSize="9" fill="#7e22ce">Desenden (H2O)</text>
            <text x="410" y="270" fontSize="9" fill="#7e22ce">Asenden (NaCl)</text>
            {/* Tubulus Distal */}
            <path d="M 380 180 Q 440 120 500 160" fill="none" stroke="#ec4899" strokeWidth="8"/>
            <text x="460" y="125" fontSize="11" fontWeight="bold" fill="#9d174d">Tubulus Distal</text>
            <text x="460" y="142" fontSize="10" fill="#be185d">(Augmentasi)</text>
            {/* Duktus Kolektivus */}
            <line x1="500" y1="80" x2="500" y2="360" stroke="#0284c7" strokeWidth="12"/>
            <text x="590" y="190" fontSize="13" fontWeight="bold" fill="#0369a1">Duktus Kolektivus</text>
            <text x="590" y="210" fontSize="11" fill="#0284c7">(Respons ADH / Air diserap)</text>
            <text x="500" y="390" fontSize="12" fontWeight="bold" fill="#0369a1" textAnchor="middle">Urine Sebenarnya -&gt; Pelvis</text>
          </svg>
        );

      // 21. Regulasi ADH dan Akuaporin
      case 'q21-adh-regulation':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Alur Kiri: Dehidrasi */}
            <rect x="50" y="50" width="220" height="70" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
            <text x="160" y="80" fontSize="13" fontWeight="bold" fill="#991b1b" textAnchor="middle">Dehidrasi / Keringat</text>
            <text x="160" y="100" fontSize="11" fill="#b91c1c" textAnchor="middle">Osmolaritas Plasma &gt;295 mOsm</text>
            <line x1="160" y1="120" x2="160" y2="180" stroke="#ef4444" strokeWidth="3"/>
            {/* Hipotalamus & Hipofisis */}
            <rect x="50" y="180" width="220" height="70" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
            <text x="160" y="210" fontSize="13" fontWeight="bold" fill="#9a3412" textAnchor="middle">Hipofisis Posterior</text>
            <text x="160" y="230" fontSize="11" fontWeight="bold" fill="#ea580c" textAnchor="middle">Sekresi ADH Meningkat</text>
            {/* Sel Tubulus Kolektivus dan Akuaporin */}
            <g transform="translate(330, 40)">
              <rect width="420" height="340" rx="12" fill="#ffffff" stroke="#0284c7" strokeWidth="2"/>
              <text x="210" y="35" fontSize="14" fontWeight="bold" fill="#0369a1" textAnchor="middle">Sel Epitel Tubulus Pengumpul Ginjal</text>
              {/* Membran Apikal */}
              <line x1="60" y1="80" x2="60" y2="300" stroke="#94a3b8" strokeWidth="6"/>
              <text x="40" y="190" fontSize="11" fontWeight="bold" fill="#475569" transform="rotate(-90 40 190)">Rongga Urine</text>
              {/* Kanal Akuaporin-2 */}
              <rect x="55" y="120" width="10" height="30" rx="2" fill="#0284c7"/>
              <rect x="55" y="200" width="10" height="30" rx="2" fill="#0284c7"/>
              <text x="130" y="140" fontSize="11" fontWeight="bold" fill="#0284c7">Kanal Akuaporin-2</text>
              {/* Aliran Air H2O */}
              <line x1="30" y1="135" x2="220" y2="135" stroke="#38bdf8" strokeWidth="3"/>
              <line x1="30" y1="215" x2="220" y2="215" stroke="#38bdf8" strokeWidth="3"/>
              <text x="140" y="125" fontSize="11" fill="#0369a1">Air (H2O) Diserap Balik</text>
              {/* Kapiler Darah */}
              <rect x="280" y="80" width="110" height="220" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
              <text x="335" y="180" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Kapiler</text>
              <text x="335" y="200" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Darah</text>
              <rect x="80" y="280" width="260" height="30" rx="6" fill="#fef9c3"/>
              <text x="210" y="300" fontSize="11" fontWeight="bold" fill="#854d0e" textAnchor="middle">Hasil: Urine Pekat &amp; Volume Sedikit</text>
            </g>
          </svg>
        );

      // 22. Respons Imun Primer vs Sekunder
      case 'q22-immune-response':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            <line x1="80" y1="360" x2="720" y2="360" stroke="#334155" strokeWidth="2"/>
            <line x1="80" y1="360" x2="80" y2="50" stroke="#334155" strokeWidth="2"/>
            <text x="400" y="395" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Waktu Paparan Antigen (Hari)</text>
            <text x="65" y="45" fontSize="12" fontWeight="bold" fill="#1e293b">Titer Antibodi Serum</text>
            {/* Paparan 1 */}
            <line x1="120" y1="360" x2="120" y2="100" stroke="#0284c7" strokeDasharray="4,4"/>
            <text x="120" y="85" fontSize="11" fontWeight="bold" fill="#0369a1" textAnchor="middle">Paparan 1 (Hari 0)</text>
            {/* Kurva Respons Primer (IgM & IgG lambat) */}
            <path d="M 120 360 L 170 355 Q 210 240 250 250 T 360 350" fill="none" stroke="#16a34a" strokeWidth="3"/>
            <text x="210" y="235" fontSize="11" fontWeight="bold" fill="#15803d">IgM Primer</text>
            <path d="M 120 360 L 190 355 Q 240 260 280 270 T 390 350" fill="none" stroke="#7c3aed" strokeWidth="3"/>
            <text x="280" y="250" fontSize="11" fontWeight="bold" fill="#6d28d9">IgG Primer</text>
            {/* Paparan 2 */}
            <line x1="420" y1="360" x2="420" y2="60" stroke="#dc2626" strokeDasharray="4,4"/>
            <text x="420" y="50" fontSize="12" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Paparan 2 (Hari 28)</text>
            {/* Kurva Respons Sekunder (Lonjakan Kilat IgG) */}
            <path d="M 420 350 L 440 330 Q 480 70 560 80 T 700 180" fill="none" stroke="#7c3aed" strokeWidth="5"/>
            <text x="560" y="65" fontSize="14" fontWeight="bold" fill="#5b21b6">Lonjakan Eksponensial IgG (Sel Memori)</text>
            <path d="M 420 350 Q 460 230 500 250 T 620 350" fill="none" stroke="#16a34a" strokeWidth="2.5"/>
            <text x="490" y="225" fontSize="11" fontWeight="bold" fill="#15803d">IgM Sekunder</text>
          </svg>
        );

      // 23. Struktur Molekuler Antibodi IgG
      case 'q23-antibody-structure':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#fdf4ff" rx="16"/>
            {/* Struktur Y Rantai Berat dan Rantai Ringan */}
            <g transform="translate(260, 40)">
              {/* Lengan Kiri Fab */}
              <line x1="140" y1="180" x2="40" y2="70" stroke="#e11d48" strokeWidth="12" strokeLinecap="round"/>
              <line x1="120" y1="160" x2="20" y2="50" stroke="#a855f7" strokeWidth="8" strokeLinecap="round"/>
              {/* Lengan Kanan Fab */}
              <line x1="140" y1="180" x2="240" y2="70" stroke="#e11d48" strokeWidth="12" strokeLinecap="round"/>
              <line x1="160" y1="160" x2="260" y2="50" stroke="#a855f7" strokeWidth="8" strokeLinecap="round"/>
              {/* Batang Bawah Fc */}
              <line x1="135" y1="180" x2="135" y2="310" stroke="#e11d48" strokeWidth="12" strokeLinecap="round"/>
              <line x1="145" y1="180" x2="145" y2="310" stroke="#e11d48" strokeWidth="12" strokeLinecap="round"/>
              {/* Ikatan Disulfida (-S-S-) */}
              <line x1="125" y1="210" x2="155" y2="210" stroke="#eab308" strokeWidth="3"/>
              <line x1="125" y1="230" x2="155" y2="230" stroke="#eab308" strokeWidth="3"/>
              {/* Antigen binding sites */}
              <polygon points="30,40 10,25 35,15" fill="#10b981"/>
              <polygon points="250,40 270,25 245,15" fill="#10b981"/>
              <text x="30" y="10" fontSize="11" fontWeight="bold" fill="#047857">Epitop Antigen</text>
              <text x="250" y="10" fontSize="11" fontWeight="bold" fill="#047857">Epitop Antigen</text>
            </g>
            {/* Label Kiri */}
            <rect x="50" y="90" width="180" height="60" rx="8" fill="#ffffff" stroke="#e11d48" strokeWidth="1.5"/>
            <text x="140" y="115" fontSize="12" fontWeight="bold" fill="#9f1239" textAnchor="middle">Fragmen Fab (Variabel)</text>
            <text x="140" y="135" fontSize="10" fill="#be123c" textAnchor="middle">Situs Pengikatan Antigen Spesifik</text>
            {/* Label Kanan */}
            <rect x="570" y="240" width="180" height="60" rx="8" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="660" y="265" fontSize="12" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Fragmen Fc (Konstan)</text>
            <text x="660" y="285" fontSize="10" fill="#6d28d9" textAnchor="middle">Mengikat Reseptor Sel Makrofag</text>
          </svg>
        );

      // 24. Potensial Aksi Neuron
      case 'q24-action-potential':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            <line x1="90" y1="360" x2="720" y2="360" stroke="#334155" strokeWidth="2"/>
            <line x1="90" y1="360" x2="90" y2="40" stroke="#334155" strokeWidth="2"/>
            <text x="410" y="395" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Waktu (milidetik)</text>
            <text x="50" y="40" fontSize="12" fontWeight="bold" fill="#1e293b">Voltase (mV)</text>
            <text x="45" y="85" fontSize="11" fill="#475569">+30</text>
            <text x="50" y="160" fontSize="11" fill="#475569">0</text>
            <text x="45" y="235" fontSize="11" fill="#475569">-55</text>
            <text x="45" y="280" fontSize="11" fill="#475569">-70</text>
            <text x="45" y="315" fontSize="11" fill="#475569">-80</text>
            {/* Garis batas */}
            <line x1="90" y1="280" x2="720" y2="280" stroke="#cbd5e1" strokeDasharray="4,4"/>
            <text x="730" y="285" fontSize="11" fill="#64748b">Istirahat (-70 mV)</text>
            <line x1="90" y1="235" x2="720" y2="235" stroke="#fca5a5" strokeDasharray="4,4"/>
            <text x="730" y="240" fontSize="11" fill="#dc2626">Ambang Batas (-55 mV)</text>
            {/* Gelombang Potensial Aksi */}
            <path d="M 90 280 L 190 280 Q 230 270 250 235 L 310 80 L 390 315 Q 440 310 480 280 L 700 280" fill="none" stroke="#2563eb" strokeWidth="4"/>
            {/* Label Depolarisasi */}
            <text x="230" y="130" fontSize="12" fontWeight="bold" fill="#dc2626">Depolarisasi</text>
            <text x="230" y="148" fontSize="10" fill="#b91c1c">(Na+ Masuk Deras)</text>
            {/* Label Repolarisasi */}
            <text x="390" y="130" fontSize="12" fontWeight="bold" fill="#7c3aed">Repolarisasi</text>
            <text x="390" y="148" fontSize="10" fill="#6d28d9">(K+ Keluar Deras)</text>
            {/* Label Hiperpolarisasi */}
            <text x="430" y="345" fontSize="11" fontWeight="bold" fill="#0284c7">Hiperpolarisasi (Refrakter)</text>
          </svg>
        );

      // 25. Homeostasis Glukosa Darah
      case 'q25-glucose-homeostasis':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f8fafc" rx="16"/>
            {/* Pusat Nilai Normal */}
            <rect x="290" y="180" width="220" height="60" rx="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
            <text x="400" y="206" fontSize="14" fontWeight="bold" fill="#15803d" textAnchor="middle">Glukosa Darah Normal</text>
            <text x="400" y="226" fontSize="12" fill="#166534" textAnchor="middle">70 – 110 mg/dL</text>
            {/* Jalur Atas: Glukosa Naik (Pasca Makan) */}
            <rect x="260" y="25" width="280" height="45" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
            <text x="400" y="52" fontSize="13" fontWeight="bold" fill="#b91c1c" textAnchor="middle">Kadar Glukosa Darah Naik (Pasca Makan)</text>
            {/* Sel Beta Pankreas & Insulin */}
            <rect x="530" y="90" width="230" height="65" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="645" y="115" fontSize="12" fontWeight="bold" fill="#9d174d" textAnchor="middle">Sel Beta Pankreas</text>
            <text x="645" y="135" fontSize="11" fontWeight="bold" fill="#be185d" textAnchor="middle">Sekresi Hormon INSULIN</text>
            {/* Hati & Otot: Glikogenesis */}
            <rect x="50" y="90" width="240" height="65" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="170" y="115" fontSize="12" fontWeight="bold" fill="#3730a3" textAnchor="middle">Sel Hati &amp; Otot Rangka</text>
            <text x="170" y="135" fontSize="11" fontWeight="bold" fill="#4338ca" textAnchor="middle">GLIKOGENESIS (Glukosa -&gt; Glikogen)</text>
            {/* Jalur Bawah: Glukosa Turun (Puasa) */}
            <rect x="260" y="350" width="280" height="45" rx="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="2"/>
            <text x="400" y="377" fontSize="13" fontWeight="bold" fill="#9a3412" textAnchor="middle">Kadar Glukosa Turun (Puasa)</text>
            {/* Sel Alfa Pankreas & Glukagon */}
            <rect x="530" y="265" width="230" height="65" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="645" y="290" fontSize="12" fontWeight="bold" fill="#92400e" textAnchor="middle">Sel Alfa Pankreas</text>
            <text x="645" y="310" fontSize="11" fontWeight="bold" fill="#b45309" textAnchor="middle">Sekresi Hormon GLUKAGON</text>
            {/* Hati: Glikogenolisis */}
            <rect x="50" y="265" width="240" height="65" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="170" y="290" fontSize="12" fontWeight="bold" fill="#854d0e" textAnchor="middle">Sel Hati</text>
            <text x="170" y="310" fontSize="11" fontWeight="bold" fill="#a16207" textAnchor="middle">GLIKOGENOLISIS (Pecah Glikogen)</text>
          </svg>
        );

      // 26. Siklus Menstruasi 28 Hari
      case 'q26-menstrual-cycle':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            {/* X-axis Days */}
            <line x1="80" y1="360" x2="720" y2="360" stroke="#334155" strokeWidth="2"/>
            <text x="80" y="380" fontSize="11" fill="#64748b">Hari 1</text>
            <text x="210" y="380" fontSize="11" fill="#64748b">Hari 5</text>
            <text x="400" y="380" fontSize="12" fontWeight="bold" fill="#dc2626">Hari 14 (Ovulasi)</text>
            <text x="560" y="380" fontSize="11" fill="#64748b">Hari 21</text>
            <text x="700" y="380" fontSize="11" fill="#64748b">Hari 28</text>
            {/* Ovulation vertical line */}
            <line x1="400" y1="50" x2="400" y2="360" stroke="#ef4444" strokeDasharray="4,4"/>
            {/* Kurva LH (Puncak Tajam di Hari 14) */}
            <path d="M 80 280 L 330 270 L 400 65 L 430 270 L 720 280" fill="none" stroke="#dc2626" strokeWidth="3.5"/>
            <text x="400" y="55" fontSize="13" fontWeight="bold" fill="#b91c1c" textAnchor="middle">LH Surge (Lonjakan LH)</text>
            {/* Kurva FSH */}
            <path d="M 80 250 L 330 240 L 400 130 L 440 260 L 720 270" fill="none" stroke="#2563eb" strokeWidth="2"/>
            <text x="430" y="125" fontSize="11" fontWeight="bold" fill="#1d4ed8">FSH</text>
            {/* Kurva Estrogen (Puncak Hari 12-13) */}
            <path d="M 80 320 Q 320 310 370 160 L 420 260 Q 560 210 660 330" fill="none" stroke="#16a34a" strokeWidth="3"/>
            <text x="350" y="150" fontSize="12" fontWeight="bold" fill="#15803d">Estrogen</text>
            {/* Kurva Progesteron (Bukit Besar Hari 15-28) */}
            <path d="M 80 340 L 400 340 Q 560 110 680 340 L 720 345" fill="none" stroke="#9333ea" strokeWidth="4"/>
            <text x="560" y="100" fontSize="13" fontWeight="bold" fill="#7e22ce" textAnchor="middle">Progesteron (Korpus Luteum)</text>
          </svg>
        );

      // 27. Embriogenesis & 3 Lapisan Germinal
      case 'q27-embryogenesis':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#faf5ff" rx="16"/>
            <text x="400" y="45" fontSize="16" fontWeight="bold" fill="#581c87" textAnchor="middle">Diferensiasi 3 Lapisan Germinal Gastrula</text>
            {/* 3 Kotak Lapisan */}
            {/* 1. Ektoderm */}
            <g transform="translate(60, 80)">
              <rect width="200" height="280" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
              <text x="100" y="40" fontSize="15" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">EKTODERM</text>
              <text x="100" y="60" fontSize="11" fill="#2563eb" textAnchor="middle">(Lapisan Luar)</text>
              <line x1="20" y1="80" x2="180" y2="80" stroke="#bfdbfe"/>
              <text x="20" y="115" fontSize="12" fontWeight="bold" fill="#1e3a8a">• Otak &amp; Medula Spinalis</text>
              <text x="20" y="145" fontSize="12" fill="#1e40af">• Sistem Saraf Tepi</text>
              <text x="20" y="175" fontSize="12" fill="#1e40af">• Epidermis Kulit &amp; Rambut</text>
              <text x="20" y="205" fontSize="12" fill="#1e40af">• Lensa &amp; Kornea Mata</text>
              <text x="20" y="235" fontSize="12" fill="#1e40af">• Email Gigi</text>
            </g>
            {/* 2. Mesoderm */}
            <g transform="translate(300, 80)">
              <rect width="200" height="280" rx="12" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2"/>
              <text x="100" y="40" fontSize="15" fontWeight="bold" fill="#be185d" textAnchor="middle">MESODERM</text>
              <text x="100" y="60" fontSize="11" fill="#db2777" textAnchor="middle">(Lapisan Tengah)</text>
              <line x1="20" y1="80" x2="180" y2="80" stroke="#fbcfe8"/>
              <text x="20" y="115" fontSize="12" fontWeight="bold" fill="#831843">• Otot Rangka, Jantung, Polos</text>
              <text x="20" y="145" fontSize="12" fill="#9d174d">• Tulang &amp; Tulang Rawan</text>
              <text x="20" y="175" fontSize="12" fill="#9d174d">• Darah &amp; Pembuluh Darah</text>
              <text x="20" y="205" fontSize="12" fill="#9d174d">• Ginjal &amp; Saluran Kemih</text>
              <text x="20" y="235" fontSize="12" fill="#9d174d">• Gonad (Testis &amp; Ovarium)</text>
            </g>
            {/* 3. Endoderm */}
            <g transform="translate(540, 80)">
              <rect width="200" height="280" rx="12" fill="#fefce8" stroke="#eab308" strokeWidth="2"/>
              <text x="100" y="40" fontSize="15" fontWeight="bold" fill="#a16207" textAnchor="middle">ENDODERM</text>
              <text x="100" y="60" fontSize="11" fill="#ca8a04" textAnchor="middle">(Lapisan Dalam)</text>
              <line x1="20" y1="80" x2="180" y2="80" stroke="#fef08a"/>
              <text x="20" y="115" fontSize="12" fontWeight="bold" fill="#713f12">• Epitel Saluran Cerna</text>
              <text x="20" y="145" fontSize="12" fill="#854d0e">• Epitel Paru-Paru / Alveolus</text>
              <text x="20" y="175" fontSize="12" fill="#854d0e">• Kelenjar Tiroid &amp; Paratiroid</text>
              <text x="20" y="205" fontSize="12" fill="#854d0e">• Organ Hati &amp; Pankreas</text>
              <text x="20" y="235" fontSize="12" fill="#854d0e">• Kandung Kemih</text>
            </g>
          </svg>
        );

      // 28. Penelitian Mikroplastik Daphnia magna
      case 'q28-daphnia-microplastic':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#ffffff" rx="16"/>
            {/* Grafik Batang */}
            <line x1="90" y1="350" x2="520" y2="350" stroke="#334155" strokeWidth="2"/>
            <line x1="90" y1="350" x2="90" y2="60" stroke="#334155" strokeWidth="2"/>
            <text x="305" y="390" fontSize="13" fontWeight="bold" fill="#1e293b" textAnchor="middle">Konsentrasi Mikroplastik (mg/L)</text>
            <text x="45" y="55" fontSize="11" fontWeight="bold" fill="#1e293b">Denyut Jantung (bpm)</text>
            <text x="55" y="110" fontSize="10" fill="#64748b">250</text>
            <text x="55" y="170" fontSize="10" fill="#64748b">200</text>
            <text x="55" y="230" fontSize="10" fill="#64748b">150</text>
            <text x="55" y="290" fontSize="10" fill="#64748b">100</text>
            {/* Batang 1: Kontrol 0 mg/L -> 240 bpm */}
            <rect x="130" y="110" width="60" height="240" fill="#38bdf8" rx="4"/>
            <line x1="160" y1="95" x2="160" y2="125" stroke="#0369a1" strokeWidth="2"/>
            <text x="160" y="90" fontSize="11" fontWeight="bold" fill="#0369a1" textAnchor="middle">240</text>
            <text x="160" y="370" fontSize="11" fill="#475569" textAnchor="middle">K1 (0 mg/L)</text>
            {/* Batang 2: 10 mg/L -> 210 bpm */}
            <rect x="230" y="145" width="60" height="205" fill="#818cf8" rx="4"/>
            <line x1="260" y1="130" x2="260" y2="160" stroke="#4338ca" strokeWidth="2"/>
            <text x="260" y="125" fontSize="11" fontWeight="bold" fill="#4338ca" textAnchor="middle">210</text>
            <text x="260" y="370" fontSize="11" fill="#475569" textAnchor="middle">K2 (10 mg/L)</text>
            {/* Batang 3: 50 mg/L -> 165 bpm */}
            <rect x="330" y="195" width="60" height="155" fill="#f472b6" rx="4"/>
            <line x1="360" y1="180" x2="360" y2="210" stroke="#be185d" strokeWidth="2"/>
            <text x="360" y="175" fontSize="11" fontWeight="bold" fill="#be185d" textAnchor="middle">165</text>
            <text x="360" y="370" fontSize="11" fill="#475569" textAnchor="middle">K3 (50 mg/L)</text>
            {/* Batang 4: 100 mg/L -> 110 bpm */}
            <rect x="430" y="260" width="60" height="90" fill="#fb7185" rx="4"/>
            <line x1="460" y1="245" x2="460" y2="275" stroke="#be123c" strokeWidth="2"/>
            <text x="460" y="240" fontSize="11" fontWeight="bold" fill="#be123c" textAnchor="middle">110</text>
            <text x="460" y="370" fontSize="11" fill="#475569" textAnchor="middle">K4 (100 mg/L)</text>
            {/* Sketsa Daphnia di Kanan */}
            <g transform="translate(560, 90)">
              <rect width="200" height="240" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5"/>
              <ellipse cx="100" cy="120" rx="60" ry="80" fill="#e0f2fe" opacity="0.8" stroke="#0284c7" strokeWidth="2"/>
              <circle cx="80" cy="70" r="10" fill="#0f172a"/>
              {/* Jantung Daphnia berdenyut */}
              <circle cx="95" cy="95" r="14" fill="#f43f5e" opacity="0.85"/>
              <text x="95" y="100" fontSize="9" fontWeight="bold" fill="#ffffff" textAnchor="middle">Jantung</text>
              <text x="100" y="220" fontSize="12" fontWeight="bold" fill="#0369a1" textAnchor="middle">Daphnia magna</text>
            </g>
          </svg>
        );

      // 29. Elektroforesis Gel DNA
      case 'q29-gel-electrophoresis':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#0f172a" rx="16"/>
            {/* Gel Agarosa Gelap dengan Efek UV */}
            <rect x="150" y="40" width="500" height="340" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2"/>
            <text x="180" y="30" fontSize="14" fontWeight="bold" fill="#ef4444">Katoda (-)</text>
            <text x="180" y="405" fontSize="14" fontWeight="bold" fill="#22c55e">Anoda (+)</text>
            <line x1="150" y1="45" x2="650" y2="45" stroke="#ef4444" strokeWidth="3"/>
            <line x1="150" y1="375" x2="650" y2="375" stroke="#22c55e" strokeWidth="3"/>
            {/* Sumuran (Wells) */}
            <text x="210" y="65" fontSize="11" fontWeight="bold" fill="#93c5fd" textAnchor="middle">Ladder (M)</text>
            <text x="300" y="65" fontSize="11" fontWeight="bold" fill="#93c5fd" textAnchor="middle">B1</text>
            <text x="390" y="65" fontSize="11" fontWeight="bold" fill="#93c5fd" textAnchor="middle">B2</text>
            <text x="480" y="65" fontSize="11" fontWeight="bold" fill="#93c5fd" textAnchor="middle">B3</text>
            <text x="570" y="65" fontSize="11" fontWeight="bold" fill="#93c5fd" textAnchor="middle">B4</text>
            {/* Wells boxes */}
            {[210, 300, 390, 480, 570].map((x, i) => (
              <rect key={i} x={x - 22} y="75" width="44" height="14" rx="2" fill="#0f172a" stroke="#6366f1"/>
            ))}
            {/* Pita Ladder M */}
            <rect x="192" y="105" width="36" height="5" fill="#f43f5e" rx="1"/>
            <text x="175" y="110" fontSize="9" fill="#94a3b8">1000 bp</text>
            <rect x="192" y="150" width="36" height="5" fill="#f43f5e" rx="1"/>
            <text x="175" y="155" fontSize="9" fill="#94a3b8">700 bp</text>
            <rect x="192" y="210" width="36" height="5" fill="#f43f5e" rx="1"/>
            <text x="175" y="215" fontSize="9" fill="#94a3b8">500 bp</text>
            <rect x="192" y="280" width="36" height="5" fill="#f43f5e" rx="1"/>
            <text x="175" y="285" fontSize="9" fill="#94a3b8">300 bp</text>
            <rect x="192" y="340" width="36" height="5" fill="#f43f5e" rx="1"/>
            <text x="175" y="345" fontSize="9" fill="#94a3b8">100 bp</text>
            {/* Pita B1 */}
            <rect x="282" y="105" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="282" y="210" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="282" y="340" width="36" height="5" fill="#38bdf8" rx="1"/>
            {/* Pita B2 & B3 (Identik Kekerabatan Dekat) */}
            <rect x="372" y="150" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="372" y="210" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="372" y="280" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="462" y="150" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="462" y="210" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="462" y="280" width="36" height="5" fill="#38bdf8" rx="1"/>
            {/* Pita B4 */}
            <rect x="552" y="105" width="36" height="5" fill="#38bdf8" rx="1"/>
            <rect x="552" y="280" width="36" height="5" fill="#38bdf8" rx="1"/>
            {/* Keterangan Arah Migrasi */}
            <line x1="675" y1="100" x2="675" y2="340" stroke="#facc15" strokeWidth="3"/>
            <text x="675" y="85" fontSize="11" fontWeight="bold" fill="#facc15" textAnchor="middle">Arah Migrasi</text>
            <text x="675" y="360" fontSize="10" fill="#fde047" textAnchor="middle">DNA (-)</text>
          </svg>
        );

      // 30. Eksperimen Fototropisme dan Auksin
      case 'q30-auxin-phototropism':
        return (
          <svg viewBox="0 0 800 420" className="w-full h-auto max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" fill="#f0fdf4" rx="16"/>
            {/* Cahaya dari Kanan */}
            <g transform="translate(710, 80)">
              <circle cx="30" cy="30" r="24" fill="#facc15" stroke="#eab308" strokeWidth="3"/>
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={i} x1={30 + Math.cos(i * 0.78) * 32} y1={30 + Math.sin(i * 0.78) * 32} x2={30 + Math.cos(i * 0.78) * 44} y2={30 + Math.sin(i * 0.78) * 44} stroke="#facc15" strokeWidth="3"/>
              ))}
              <text x="30" y="90" fontSize="11" fontWeight="bold" fill="#854d0e" textAnchor="middle">Cahaya Kanan</text>
            </g>
            {/* 5 Perlakuan Kecambah */}
            {/* (1) Kontrol: Bengkok ke kanan */}
            <g transform="translate(60, 160)">
              <path d="M 30 180 Q 30 90 70 50" fill="none" stroke="#22c55e" strokeWidth="18" strokeLinecap="round"/>
              <text x="35" y="210" fontSize="11" fontWeight="bold" fill="#15803d" textAnchor="middle">(1) Utuh Kontrol</text>
              <text x="35" y="225" fontSize="9" fill="#166534" textAnchor="middle">Membengkok</text>
            </g>
            {/* (2) Ujung Dipotong: Lurus Tidak Tumbuh */}
            <g transform="translate(190, 160)">
              <line x1="30" y1="180" x2="30" y2="100" stroke="#22c55e" strokeWidth="18" strokeLinecap="round"/>
              <text x="30" y="210" fontSize="11" fontWeight="bold" fill="#15803d" textAnchor="middle">(2) Pucuk Dipotong</text>
              <text x="30" y="225" fontSize="9" fill="#166534" textAnchor="middle">Tetap Lurus</text>
            </g>
            {/* (3) Ditutup Tudung Buram: Lurus */}
            <g transform="translate(320, 160)">
              <line x1="30" y1="180" x2="30" y2="70" stroke="#22c55e" strokeWidth="18" strokeLinecap="round"/>
              <rect x="18" y="55" width="24" height="30" rx="3" fill="#0f172a"/>
              <text x="30" y="210" fontSize="11" fontWeight="bold" fill="#15803d" textAnchor="middle">(3) Tudung Gelap</text>
              <text x="30" y="225" fontSize="9" fill="#166534" textAnchor="middle">Tetap Lurus</text>
            </g>
            {/* (4) Mika Kedap di Sisi Gelap: Lurus */}
            <g transform="translate(450, 160)">
              <line x1="30" y1="180" x2="30" y2="70" stroke="#22c55e" strokeWidth="18" strokeLinecap="round"/>
              <line x1="16" y1="100" x2="30" y2="100" stroke="#dc2626" strokeWidth="4"/>
              <text x="30" y="210" fontSize="11" fontWeight="bold" fill="#15803d" textAnchor="middle">(4) Mika Kedap</text>
              <text x="30" y="225" fontSize="9" fill="#166534" textAnchor="middle">Auksin Terhalang</text>
            </g>
            {/* (5) Agar-agar di Sisi Gelap: Membengkok */}
            <g transform="translate(580, 160)">
              <path d="M 30 180 Q 30 90 70 50" fill="none" stroke="#22c55e" strokeWidth="18" strokeLinecap="round"/>
              <line x1="22" y1="110" x2="38" y2="110" stroke="#0284c7" strokeWidth="4"/>
              <text x="35" y="210" fontSize="11" fontWeight="bold" fill="#15803d" textAnchor="middle">(5) Blok Agar</text>
              <text x="35" y="225" fontSize="9" fill="#166534" textAnchor="middle">Auksin Tembus</text>
            </g>
            <rect x="180" y="30" width="400" height="40" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5"/>
            <text x="380" y="55" fontSize="13" fontWeight="bold" fill="#166534" textAnchor="middle">Auksin Bermigrasi ke Sisi Gelap &amp; Memanjangkan Sel</text>
          </svg>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center p-8 text-center bg-rose-50/50 rounded-xl border border-rose-100">
            <p className="text-sm text-slate-500">Stimulus Ilmiah Biologi</p>
          </div>
        );
    }
  };

  return (
    <div className={`relative bg-white/95 rounded-2xl border border-rose-100 shadow-sm overflow-hidden transition-all duration-300 ${className}`}>
      {/* Visual Header / Controls */}
      <div className="flex items-center justify-between px-3 py-2 bg-rose-50/80 border-b border-rose-100">
        <span className="text-xs font-semibold text-rose-800 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          Stimulus Visual Ilmiah
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomOut}
            className="p-1 rounded-md text-slate-500 hover:text-rose-600 hover:bg-white text-xs transition"
            title="Perkecil Gambar"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={resetZoom}
            className="px-1.5 py-0.5 text-[11px] font-medium text-slate-600 hover:text-rose-600 hover:bg-white rounded transition"
            title="Reset Zoom"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={handleZoomIn}
            className="p-1 rounded-md text-slate-500 hover:text-rose-600 hover:bg-white text-xs transition"
            title="Perbesar Gambar"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-1 rounded-md text-slate-500 hover:text-rose-600 hover:bg-white text-xs transition ml-1"
            title={isZoomed ? "Kecilkan Tampilan" : "Perluas Tampilan (Fullscreen)"}
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SVG Container with pan & zoom capability */}
      <div 
        className={`p-3 md:p-5 flex items-center justify-center overflow-auto transition-transform duration-200 ${
          isZoomed ? 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-8 flex-col' : ''
        }`}
      >
        {isZoomed && (
          <div className="w-full max-w-4xl flex justify-between items-center mb-3 text-white">
            <span className="text-sm font-semibold">{caption}</span>
            <button
              onClick={() => setIsZoomed(false)}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>
        )}
        <div
          style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
          className="w-full max-w-full transition-transform duration-150 flex justify-center"
        >
          {renderGraphic()}
        </div>
      </div>

      {/* Scientific Caption */}
      <div className="px-4 py-2 bg-rose-50/40 border-t border-rose-100 text-center">
        <p className="text-xs font-medium text-slate-600 leading-relaxed italic">
          {caption}
        </p>
      </div>
    </div>
  );
};
