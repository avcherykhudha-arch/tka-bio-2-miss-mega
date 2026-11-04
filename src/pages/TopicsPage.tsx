import React from 'react';
import { Layers, Dna, Compass, Activity, Award, FlaskConical, ArrowRight } from 'lucide-react';
import { PageId } from '../components/Navbar.tsx';

interface TopicsPageProps {
  onNavigateToQuestion: (qId: number) => void;
  onNavigate: (page: PageId) => void;
}

export const TopicsPage: React.FC<TopicsPageProps> = ({ onNavigateToQuestion, onNavigate }) => {
  const sections = [
    {
      num: 1,
      title: 'BAGIAN 1: KEANEKARAGAMAN HAYATI DAN BAKTERI',
      questions: 'Soal 1 – 5',
      startId: 1,
      icon: <Dna className="w-5 h-5 text-rose-500" />,
      subtopics: [
        'Soal 1: Garis Wallace, Garis Weber, persebaran fauna Wallacea dan isolasi laut dalam.',
        'Soal 2: Kladogram filogenetik takson tumbuhan, status IUCN, konservasi in situ dan ex situ.',
        'Soal 3: Profil zonasi hutan mangrove pesisir, pneumatofor Avicennia dan akar tunjang Rhizophora.',
        'Soal 4: Ultrastruktur dinding sel bakteri Gram positif (peptidoglikan tebal) vs Gram negatif (membran luar LPS) dan kerentanan terhadap Penisilin.',
        'Soal 5: Uji difusi cakram Kirby-Bauer, evaluasi zona hambat, dan seleksi koloni mutan resisten antibiotik.',
      ],
    },
    {
      num: 2,
      title: 'BAGIAN 2: EKOSISTEM DAN DINAMIKA LINGKUNGAN',
      questions: 'Soal 6 – 8',
      startId: 6,
      icon: <Compass className="w-5 h-5 text-pink-500" />,
      subtopics: [
        'Soal 6: Rantai trofik dan biomagnifikasi polutan logam berat merkuri vs penyusutan energi 10% Lindeman.',
        'Soal 7: Proses eutrofikasi danau, blooming alga, dekomposisi mikroba, dan anjloknya Oksigen Terlarut (DO) vs lonjakan BOD.',
        'Soal 8: Daur biogeokimia nitrogen, fiksasi oleh Rhizobium, oksidasi amonia ke nitrit oleh Nitrosomonas, nitrit ke nitrat oleh Nitrobacter, dan denitrifikasi anaerob.',
      ],
    },
    {
      num: 3,
      title: 'BAGIAN 3: SEL DAN METABOLISME',
      questions: 'Soal 9 – 15',
      startId: 9,
      icon: <Activity className="w-5 h-5 text-purple-500" />,
      subtopics: [
        'Soal 9: Kinetika enzim Michaelis-Menten: pengaruh inhibitor kompetitif (Vmax tetap, Km naik) vs inhibitor non-kompetitif (Vmax turun).',
        'Soal 10: Pengaruh derajat keasaman (pH pepsin lambung vs amilase saliva) dan denaturasi termal protein enzim di atas 60°C.',
        'Soal 11: Regulasi alosterik jalur glikolisis: peran enzim PFK-1 yang dihambat oleh kadar ATP tinggi dan diaktifkan oleh AMP.',
        'Soal 12: Kompartemen respirasi aerobik: pelepasan CO2 pada Dekarboksilasi Oksidatif dan Siklus Krebs di matriks mitokondria.',
        'Soal 13: Desain eksperimen respirometer serangga: fungsi kristal KOH mengikat gas CO2 dan pergeseran indikator eosin.',
        'Soal 14: Reaksi terang membran tilakoid: Z-scheme fotosistem II fotolisis air ke O2, pembentukan gradien H+, dan reduksi NADP+ menjadi NADPH.',
        'Soal 15: Spektrum penyerapan pigmen klorofil a/b dan penyebab rendahnya fotosintesis pada panjang gelombang hijau 500–550 nm.',
      ],
    },
    {
      num: 4,
      title: 'BAGIAN 4: SISTEM ORGAN MANUSIA',
      questions: 'Soal 16 – 27',
      startId: 16,
      icon: <Award className="w-5 h-5 text-rose-500" />,
      subtopics: [
        'Soal 16: Sistem konduksi kelistrikan kardiak: peranan delay 0,1s di Nodus AV untuk pengisian ventrikel sempurna.',
        'Soal 17: Uji aglutinasi darah sistem ABO dan Rhesus (deteksi antigen B dan D pada donor/resipien).',
        'Soal 18: Gradien tekanan parsial gas O2 (104 vs 40 mmHg) dan CO2 (45 vs 40 mmHg) pada sawar difusi alveolus-kapiler.',
        'Soal 19: Analisis spiramogram: rumus Kapasitas Vital (VT + VCI + VCE) tanpa menghitung Volume Residu.',
        'Soal 20: Tahapan nefron ginjal: filtrasi podosit glomerulus, reabsorpsi 100% glukosa di tubulus proksimal, dan augmentasi distal.',
        'Soal 21: Osmoregulasi hormon ADH: insersi saluran akuaporin-2 di duktus kolektivus ginjal saat dehidrasi.',
        'Soal 22: Kinetika respons imun humoral: fase lag IgM paparan primer vs lonjakan eksponensial IgG paparan sekunder berkat sel B memori.',
        'Soal 23: Struktur molekuler antibodi monomer IgG: fungsi variabel Fab mengikat epitop dan ujung Fc memicu opsonisasi makrofag.',
        'Soal 24: Elektrofisiologi potensial aksi neuron: depolarisasi saluran Na+, repolarisasi saluran K+, dan pompa 3 Na+/2 K+ ATPase.',
        'Soal 25: Umpan balik glukosa darah: stimulasi glikogenesis hati oleh insulin pasca makan vs glikogenolisis oleh glukagon saat puasa.',
        'Soal 26: Dinamika 28 hari siklus menstruasi: lonjakan LH surge hari ke-14 pemicu ovulasi dan progesteron korpus luteum luteal.',
        'Soal 27: Diferensiasi gastrula: asal-usul organ dari Ektoderm (saraf & epidermis), Mesoderm (otot, tulang, jantung, darah), dan Endoderm (epitel cerna & paru).',
      ],
    },
    {
      num: 5,
      title: 'BAGIAN 5: KETERAMPILAN PROSES DAN PENALARAN BIOLOGI',
      questions: 'Soal 28 – 30',
      startId: 28,
      icon: <FlaskConical className="w-5 h-5 text-emerald-500" />,
      subtopics: [
        'Soal 28: Interpretasi kurva toksikologi riset: korelasi negatif dosis mikroplastik terhadap penurunan denyut jantung kutu air Daphnia magna.',
        'Soal 29: Elektroforesis gel agarosa DNA: mobilitas muatan fosfat negatif DNA menuju anoda positif, laju saringan molekuler pori gel, dan uji profil pita kerabat.',
        'Soal 30: Desain eksperimen klasik fototropisme Went & Darwin: translokasi auksin ke sisi gelap, permeabilitas agar vs impermeabilitas lempeng mika.',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 animate-fade-in">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-6 sm:p-10 text-white shadow-lg shadow-rose-500/15">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>KISI-KISI &amp; SILABUS LENGKAP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading">
            Daftar Materi TKA Biologi 2026
          </h1>
          <p className="text-rose-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Kurikulum terstruktur berbasis penalaran Higher Order Thinking Skills (HOTS) dari pemula hingga mahir bersama Miss Mega.
          </p>
        </div>
      </div>

      {/* Sections Cards */}
      <div className="space-y-6">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="rounded-3xl bg-white border border-rose-100 p-6 shadow-xs hover:border-rose-200 hover:shadow-md transition space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-rose-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
                  {sec.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                    {sec.questions}
                  </span>
                  <h2 className="font-heading font-extrabold text-slate-900 text-base sm:text-lg mt-1">
                    {sec.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => onNavigateToQuestion(sec.startId)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition cursor-pointer self-start sm:self-auto"
              >
                <span>Buka Bagian Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5 pl-2">
              {sec.subtopics.map((sub, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
