import React, { useEffect } from 'react';
import { 
  Play, 
  Volume2, 
  Eye, 
  CheckSquare, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  Save, 
  RotateCcw, 
  HelpCircle,
  MousePointerClick
} from 'lucide-react';
import { PageId } from '../components/Navbar.tsx';
import { useTTS } from '../hooks/useTTS.ts';

interface InstructionsPageProps {
  onNavigate: (page: PageId) => void;
  tts: ReturnType<typeof useTTS>;
}

export const InstructionsPage: React.FC<InstructionsPageProps> = ({ onNavigate, tts }) => {
  const instructionScript =
    'Hai, sebelum mulai, Miss Mega ingin menjelaskan cara menggunakan aplikasi ini. Setiap soal memiliki stimulus visual yang perlu kamu amati terlebih dahulu. Bacalah informasi, perhatikan gambar, dan temukan hubungan antara data dengan konsep Biologi. Setelah menjawab, kamu bisa membuka pembahasan lengkap untuk memahami alasan ilmiah di balik jawaban. Ada juga fitur cara cepat agar kamu semakin terampil mengerjakan soal. Progress belajarmu akan tersimpan otomatis, jadi kamu tidak perlu takut kehilangan hasil latihan. Selamat belajar!';

  useEffect(() => {
    // Optionally trigger when entering instructions
    const timer = setTimeout(() => {
      if (!tts.isPlaying && tts.settings.autoPlayIntro) {
        tts.speak(instructionScript, 'instruction');
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayInstructions = () => {
    tts.speak(instructionScript, 'instruction');
  };

  const steps = [
    {
      num: 1,
      title: 'Cara Memulai Latihan',
      desc: 'Klik tombol "Mulai Latihan" pada bilah navigasi atau halaman beranda. Kamu akan langsung diarahkan ke nomor soal yang sedang aktif. Total terdapat tepat 30 butir soal penalaran HOTS.',
      icon: <Play className="w-5 h-5 text-rose-500" />,
    },
    {
      num: 2,
      title: 'Cara Membaca Stimulus Gambar dan Data',
      desc: 'Setiap soal memiliki diagram/grafik ilmiah visual. Gunakan tombol perbesar (zoom in/out) atau tombol layar penuh (maximize) untuk mengamati detail label tanpa jawaban bocor.',
      icon: <Eye className="w-5 h-5 text-purple-500" />,
    },
    {
      num: 3,
      title: 'Cara Memilih Jawaban Pilihan Ganda (PG)',
      desc: 'Pada soal tipe Pilihan Ganda biasa (10 soal), klik salah satu lingkaran radio button dari pilihan A, B, C, D, atau E. Hanya satu opsi yang dapat dipilih sebagai jawaban terbaik.',
      icon: <MousePointerClick className="w-5 h-5 text-blue-500" />,
    },
    {
      num: 4,
      title: 'Cara Menjawab Pilihan Ganda Kompleks (PGK)',
      desc: 'Pada soal Pilihan Ganda Kompleks (10 soal), centang kotak opsi A, B, C, D, atau E. Kamu dapat memilih lebih dari satu jawaban benar (2 hingga 4 opsi) sesuai bukti stimulus ilmiah.',
      icon: <CheckSquare className="w-5 h-5 text-pink-500" />,
    },
    {
      num: 5,
      title: 'Cara Mengerjakan Soal Benar-Salah (BS)',
      desc: 'Pada soal tipe Benar-Salah (10 soal), terdapat 3 pernyataan mandiri. Klik tombol "BENAR" atau "SALAH" pada setiap baris pernyataan secara terpisah dan teliti.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    },
    {
      num: 6,
      title: 'Cara Membuka Pembahasan Lengkap',
      desc: 'Setelah memilih dan menekan tombol "Periksa / Simpan Jawaban", tombol "Lihat Pembahasan" akan terbuka. Pembahasan memuat konsep dasar, analisis biokimia, sebab-akibat, dan telaah opsi salah.',
      icon: <BookOpen className="w-5 h-5 text-rose-500" />,
    },
    {
      num: 7,
      title: 'Cara Mendengarkan Narator Miss Mega',
      desc: 'Tekan tombol suara di panel audio bawah atau tombol speaker di setiap lapis (Pengantar Gambar, Panduan Soal, Dengar Pembahasan, dan Cara Cepat). Suara berbahasa Indonesia ramah akan memandumu.',
      icon: <Volume2 className="w-5 h-5 text-amber-500" />,
    },
    {
      num: 8,
      title: 'Cara Melihat Trik Cepat Menjawab',
      desc: 'Klik tombol "Cara Cepat Miss Mega" yang tersedia di samping pembahasan. Kamu akan mendapatkan tips penalaran cerdas untuk mengenali pola soal sejenis tanpa hafalan berbelit.',
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    },
    {
      num: 9,
      title: 'Cara Melanjutkan Progress Belajar',
      desc: 'Progress belajarmu tersimpan otomatis di penyimpanan lokal peramban (localStorage). Jika kamu menutup browser dan membukanya kembali nanti, semua jawaban dan status soal tetap tersimpan aman.',
      icon: <Save className="w-5 h-5 text-teal-500" />,
    },
    {
      num: 10,
      title: 'Cara Mereset Progress Belajar',
      desc: 'Jika ingin mengulang latihan dari awal dengan lembar jawaban bersih, klik tombol "Reset" di navbar atau menu pengaturan suara, lalu konfirmasi persetujuan di kotak dialog.',
      icon: <RotateCcw className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-6 sm:p-10 text-white shadow-lg shadow-rose-500/15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>PANDUAN LENGKAP SISWA</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading">
              Petunjuk Penggunaan Aplikasi
            </h1>
            <p className="text-rose-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Pelajari 10 langkah mudah menggunakan seluruh fitur interaktif aplikasi agar latihan TKA Biologi 2026 kamu semakin terarah dan menyenangkan.
            </p>
          </div>

          <button
            onClick={handlePlayInstructions}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-rose-50 text-rose-600 font-heading font-bold text-xs sm:text-sm shadow-md transition shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Dengarkan Narator Petunjuk</span>
          </button>
        </div>
      </div>

      {/* 10 Instruction Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs hover:border-rose-300 hover:shadow-md transition space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white font-extrabold text-sm flex items-center justify-center font-heading">
                {s.num}
              </span>
              <div className="p-2 rounded-xl bg-rose-50">{s.icon}</div>
            </div>
            <h2 className="font-heading font-bold text-slate-900 text-base">
              {s.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-100 text-center space-y-3">
        <h2 className="font-heading font-bold text-slate-900 text-lg">
          Sudah Siap Menguji Pemahaman Biologimu?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Miss Mega akan selalu mendampingimu di setiap nomor soal. Ingat, baca stimulus gambar dengan teliti sebelum memilih jawaban!
        </p>
        <button
          onClick={() => onNavigate('quiz')}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-heading font-bold text-sm shadow-md transition cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Mulai Kerjakan Soal 1</span>
        </button>
      </div>
    </div>
  );
};
