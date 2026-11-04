import React, { useEffect } from 'react';
import { 
  Play, 
  HelpCircle, 
  Info, 
  Sparkles, 
  Volume2, 
  CheckCircle, 
  Award, 
  Dna, 
  Microscope, 
  FlaskConical, 
  Activity, 
  Compass, 
  BrainCircuit,
  ArrowRight,
  BookOpenCheck
} from 'lucide-react';
import { PageId } from '../components/Navbar.tsx';
import { useTTS } from '../hooks/useTTS.ts';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAbout: () => void;
  answeredCount: number;
  totalQuestions: number;
  tts: ReturnType<typeof useTTS>;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAbout,
  answeredCount,
  totalQuestions,
  tts,
}) => {
  const welcomeScript =
    'Halo, para pejuang TKA Biologi 2026! Selamat datang di ruang belajar Biologi bersama Miss Mega. Di sini, kita tidak hanya menghafalkan nama organ, proses metabolisme, atau istilah ilmiah. Kita akan belajar memahami kehidupan, membaca fenomena biologis, menganalisis data, dan memecahkan berbagai persoalan menggunakan penalaran ilmiah. Jangan khawatir kalau kamu masih pemula. Miss Mega akan membimbingmu tahap demi tahap. Yuk, kita mulai perjalanan menjadi ahli Biologi!';

  const benefitsScript =
    'Keunggulan belajar bersama Miss Mega adalah kamu tidak hanya mengetahui jawaban, tetapi juga memahami bagaimana sebuah jawaban diperoleh. Kamu akan berlatih mengamati, menghubungkan informasi, membaca data, dan menyusun kesimpulan. Inilah keterampilan penting untuk menghadapi soal penalaran Biologi.';

  // Auto trigger welcome narration on first mount if not yet playing
  useEffect(() => {
    // Only attempt auto play if supported and not already speaking
    const timer = setTimeout(() => {
      if (!tts.isPlaying && tts.settings.autoPlayIntro) {
        tts.speak(welcomeScript, 'welcome');
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayWelcome = () => {
    tts.speak(welcomeScript, 'welcome');
  };

  const handlePlayBenefits = () => {
    tts.speak(benefitsScript, 'benefits');
  };

  const benefits = [
    {
      title: 'Melatih Kemampuan HOTS',
      desc: 'Melatih penalaran tingkat tinggi (analisis C4, evaluasi C5, kreasi C6) bukan sekadar hafalan.',
      icon: <BrainCircuit className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Stimulus Biologi Kompleks',
      desc: 'Membiasakan membaca wacana fenomena, studi kasus nyata, dan riset sains modern.',
      icon: <BookOpenCheck className="w-5 h-5 text-pink-500" />,
    },
    {
      title: 'Interpretasi Grafik & Data',
      desc: 'Melatih analisis kurva kinetika, tabel pengamatan, dan gelombang biolistrik.',
      icon: <Activity className="w-5 h-5 text-purple-500" />,
    },
    {
      title: '30 Stimulus Visual Realistis',
      desc: 'Setiap soal dilengkapi diagram anatomi, mikroskopi, dan skema biokimia akurat.',
      icon: <Microscope className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: 'Pendampingan Suara Miss Mega',
      desc: 'Didampingi langsung oleh narator bersuara natural bahasa Indonesia di setiap tahap.',
      icon: <Volume2 className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Cara Cepat Bernalar Ilmiah',
      desc: 'Memahami trik penalaran cerdas dan logis tanpa menebak buta.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Pembahasan Komprehensif',
      desc: 'Menjelaskan konsep dasar, analisis stimulus, dan evaluasi opsi salah.',
      icon: <FlaskConical className="w-5 h-5 text-blue-500" />,
    },
    {
      title: 'Analisis Kekuatan & Kelemahan',
      desc: 'Mengetahui topik mana yang sudah dikuasai dan materi yang perlu penguatan.',
      icon: <Award className="w-5 h-5 text-rose-500" />,
    },
    {
      title: 'Penyimpanan Progress Otomatis',
      desc: 'Bebas belajar kapan saja di laptop, tablet, atau smartphone tanpa hilang jawaban.',
      icon: <CheckCircle className="w-5 h-5 text-teal-500" />,
    },
    {
      title: 'Kesiapan TKA Biologi 2026',
      desc: 'Membangun kepercayaan diri maksimal menembus perguruan tinggi impian.',
      icon: <Dna className="w-5 h-5 text-indigo-500" />,
    },
  ];

  return (
    <div className="space-y-12 pb-24 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-rose-400 to-pink-500 text-white shadow-xl shadow-rose-500/15 p-6 sm:p-10 md:p-14">
        {/* Background Decorative Science Circles & DNA */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>EDTECH PREMIUM PREPARATORY • TKA KEMENDIKDASMEN 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-tight tracking-tight">
              TKA BIOLOGI 2026
              <span className="block text-rose-100 text-2xl sm:text-3xl md:text-4xl mt-1 font-semibold">
                Belajar Cerdas Bersama Miss Mega
              </span>
            </h1>

            <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-xl">
              "Kenali Kehidupan, Pahami Prosesnya, Taklukkan TKA!"
            </p>

            <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-xl">
              Selamat datang di ruang bimbingan interaktif Biologi tingkat SMA/MA. Berlatih 30 soal penalaran HOTS dengan stimulus visual ilmiah autentik, pembimbing suara narator Indonesia, pembahasan sistematis, dan trik cepat bernalar.
            </p>

            {/* Teacher Audio Welcome Card */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-rose-600 font-extrabold flex items-center justify-center font-heading shadow-md shrink-0">
                  MM
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">Sambutan Suara Miss Mega</h2>
                  <p className="text-[11px] text-rose-100 line-clamp-1">
                    "Halo para pejuang TKA Biologi 2026! Mari kita mulai perjalanan..."
                  </p>
                </div>
              </div>

              <button
                onClick={handlePlayWelcome}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-rose-50 text-rose-700 text-xs font-bold shadow-md transition shrink-0 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-rose-600" />
                <span>Dengarkan Sambutan</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-rose-50 text-rose-600 font-heading font-bold text-sm sm:text-base shadow-lg shadow-rose-950/20 hover:shadow-xl hover:scale-102 transition cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{answeredCount > 0 ? 'Lanjutkan Latihan' : 'Mulai Belajar Sekarang'}</span>
              </button>

              <button
                onClick={() => onNavigate('instructions')}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-heading font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/30 transition cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Petunjuk Penggunaan</span>
              </button>

              <button
                onClick={onOpenAbout}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition cursor-pointer"
              >
                <Info className="w-4 h-4" />
                <span>Tentang Aplikasi</span>
              </button>
            </div>
          </div>

          {/* Right Aesthetic Biology Lab Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-white/95 backdrop-blur-lg p-5 shadow-2xl border border-white/40 text-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <span className="text-xs font-bold text-rose-600 flex items-center gap-1.5 font-heading">
                  <FlaskConical className="w-4 h-4" />
                  LABORATORIUM VIRTUAL MISS MEGA
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-semibold">
                  TKA 2026
                </span>
              </div>

              {/* Lab Visual Banner */}
              <div className="my-4 rounded-2xl bg-gradient-to-tr from-rose-50 via-pink-50 to-purple-50 p-4 border border-rose-100 flex flex-col items-center justify-center text-center">
                <div className="relative my-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    <Microscope className="w-10 h-10 animate-bounce duration-1000" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-white shadow-xs">
                    <Dna className="w-4 h-4 text-purple-600" />
                  </span>
                </div>
                <h2 className="text-sm font-bold text-slate-900 mt-2 font-heading">
                  30 Stimulus Visual Ilmiah Autentik
                </h2>
                <p className="text-[11px] text-slate-500 mt-0.5 max-w-xs">
                  Diagram sel, kinetika enzim, ekosistem pesisir, elektrofisiologi, dan data riset biologi.
                </p>
              </div>

              {/* Progress Summary */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Progress Latihan</span>
                  <span className="font-bold text-rose-600">
                    {answeredCount} / {totalQuestions} Soal Selesai
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-500"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-100 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-rose-50/60">
                  <p className="text-base font-extrabold text-rose-600">10</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Pilihan Ganda</p>
                </div>
                <div className="p-2 rounded-xl bg-pink-50/60">
                  <p className="text-base font-extrabold text-pink-600">10</p>
                  <p className="text-[10px] text-slate-500 font-semibold">PG Kompleks</p>
                </div>
                <div className="p-2 rounded-xl bg-purple-50/60">
                  <p className="text-base font-extrabold text-purple-600">10</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Benar-Salah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Motivation from Miss Mega */}
      <section className="rounded-3xl bg-white border border-rose-100 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                  MOTIVASI BELAJAR HARIAN
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span className="text-xs text-slate-400">Dari Miss Mega</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-0.5">
                "Biologi bukan tentang menghafal rumus, melainkan mengagumi keteraturan ciptaan dan membuktikan hipotesis dengan logika ilmiah."
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Jangan takut salah saat pertama kali mencoba. Setiap pembahasan yang kamu baca adalah anak tangga yang membawamu lebih dekat ke perguruan tinggi impian.
              </p>
            </div>
          </div>

          <button
            onClick={handlePlayBenefits}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-rose-600" />
            <span>Dengar Nilai Filosofi Belajar</span>
          </button>
        </div>
      </section>

      {/* 5 Topic Categories Overview Cards */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Cakupan Kisi-Kisi TKA Biologi 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Distribusi 30 butir soal HOTS proporsional berdasarkan kurikulum Kemendikdasmen
            </p>
          </div>
          <button
            onClick={() => onNavigate('topics')}
            className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700"
          >
            <span>Lihat Silabus Rinci</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Soal 1 – 5
              </span>
              <Dna className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
              Keanekaragaman &amp; Bakteri
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Garis Wallace/Weber, pohon filogenetik kladogram, zonasi mangrove, dinding sel Gram (+/-), dan resistensi antibiotik Kirby-Bauer.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                Soal 6 – 8
              </span>
              <Compass className="w-5 h-5 text-pink-500" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
              Ekosistem &amp; Lingkungan
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Biomagnifikasi polutan rantai trofik, dinamika DO-BOD eutrofikasi danau, dan daur biogeokimia nitrogen tanah.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                Soal 9 – 15
              </span>
              <Activity className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
              Sel &amp; Metabolisme
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Kinetika enzim Michaelis-Menten, inhibitor kompetitif, regulasi alosterik PFK-1, neraca energi mitokondria, dan Z-scheme fotosintesis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 shadow-xs hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Soal 16 – 27
              </span>
              <Award className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
              Sistem Organ Manusia
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Konduksi jantung, spirometri paru, nefron ginjal, homeostasis gula darah, antibodi IgG, potensial aksi saraf, dan siklus menstruasi.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 shadow-xs hover:shadow-md transition sm:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                Soal 28 – 30
              </span>
              <FlaskConical className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
              Keterampilan Proses &amp; Penalaran Ilmiah
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Interpretasi data penelitian toksikologi mikroplastik Daphnia magna, pita elektroforesis gel DNA populasi langka, dan eksperimen fototropisme auksin tanaman.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Benefits Grid */}
      <section className="rounded-3xl bg-white border border-rose-100 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            KEUNGGULAN APLIKASI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
            Mengapa Belajar Biologi Bersama Miss Mega?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Pengalaman belajar EdTech modern yang memadukan pedagogi ilmiah, visualisasi akurat, dan bimbingan langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-rose-50/40 hover:bg-rose-50/80 border border-rose-100/80 flex items-start gap-3.5 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  {i + 1}. {b.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => onNavigate('quiz')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-heading font-bold text-sm sm:text-base shadow-lg shadow-rose-500/25 transition cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Mulai Petualangan Belajarmu Sekarang</span>
          </button>
        </div>
      </section>
    </div>
  );
};
