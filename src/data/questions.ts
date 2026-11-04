import { Question } from '../types/index.ts';

export const questionsData: Question[] = [
  // ==========================================
  // BAGIAN 1: KEANEKARAGAMAN HAYATI DAN BAKTERI (Soal 1 - 5)
  // ==========================================
  {
    id: 1,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Garis Wallace, Weber, dan Persebaran Fauna Peralihan Indonesia',
    stimulusNarrative:
      'Indonesia memiliki pola biogeografi unik akibat letaknya di antara Paparan Sunda dan Paparan Sahul. Garis Wallace memisahkan kawasan Oriental dengan kawasan Wallacea (Peralihan), sedangkan Garis Weber memisahkan kawasan Wallacea dengan Australis. Peneliti mengamati fauna endemik seperti Anoa (Bubalus depressicornis), Babirusa (Babyrousa celebensis), dan Burung Maleo (Macrocephalon maleo) di kawasan Sulawesi.',
    stimulusImageId: 'q1-wallace',
    imageCaption: 'Peta Biogeografi Kepulauan Indonesia: Garis Wallace, Garis Weber, dan Zona Peralihan (Wallacea)',
    questionText:
      'Berdasarkan posisi biogeografis dan sejarah geologi pada peta stimulus, mengapa wilayah Wallacea memiliki proporsi fauna endemik yang sangat tinggi dibandingkan dengan wilayah Asiatis dan Australis?',
    optionsPG: [
      {
        id: 'A',
        text: 'Karena wilayah Wallacea memiliki curah hujan dan kelembapan tahunan tertinggi di seluruh Nusantara.',
      },
      {
        id: 'B',
        text: 'Karena pulau-pulau di Wallacea terisolasi oleh palung laut dalam dan tidak pernah bersatu sepenuhnya dengan benua Asia maupun Australia selama zaman es.',
      },
      {
        id: 'C',
        text: 'Karena fauna di wilayah Wallacea mengalami mutasi buatan secara cepat akibat letusan gunung berapi purba.',
      },
      {
        id: 'D',
        text: 'Karena satwa di Sunda dan Sahul bermigrasi secara massal ke Sulawesi untuk menghindari kompetisi ruang.',
      },
      {
        id: 'E',
        text: 'Karena jenis vegetasi di Wallacea seluruhnya berbeda tanpa satupun famili tumbuhan yang sama dengan Asia.',
      },
    ],
    correctAnswerPG: 'B',
    discussion: {
      coreConcept:
        'Biogeografi Indonesia terbagi menjadi 3 zona: Asiatis (Paparan Sunda), Peralihan/Wallacea, dan Australis (Paparan Sahul). Zona Wallacea dikelilingi perairan dalam (deep-water trenches).',
      stimulusAnalysis:
        'Peta menunjukkan batas Garis Wallace di barat Sulawesi dan Garis Weber di timur Maluku. Area di antara keduanya adalah kepulauan oseanik terisolasi.',
      biologicalProcess:
        'Selama Zaman Pleistosen (zaman es), penurunan permukaan laut menghubungkan Jawa-Sumatra-Kalimantan ke Asia, serta Papua ke Australia. Namun, Sulawesi dan Nusa Tenggara tetap terisolasi oleh selat dan palung dalam. Isolasi geografis jangka panjang ini memicu spesiasi alopatrik intensif dan menghasilkan tingkat endemisitas tinggi.',
      answerReasoning:
        'Pilihan B adalah penjelasan ilmiah yang tepat. Pilihan A tidak valid karena variasi iklim Wallacea bahkan lebih kering di Nusa Tenggara. Pilihan C, D, dan E tidak memiliki landasan biologi evolusi.',
      scientificConclusion:
        'Isolasi geografis yang diperkuat oleh palung laut laut dalam bertindak sebagai rintangan dispersi biologis permanen, mendorong radiasi adaptif satwa endemik.',
    },
    quickTrick:
      'Ingat kata kunci "Palung Laut Dalam + Tidak Pernah Menyatu Saat Zaman Es". Isolasi geografis laut dalam adalah penyebab utama endemisitas tinggi fauna Sulawesi (Wallacea).',
    narration: {
      stimulusIntro:
        'Halo pejuang TKA! Perhatikan baik-baik peta persebaran biogeografi Indonesia di layar. Amati posisi Garis Wallace di barat dan Garis Weber di timur. Wilayah di tengahnya adalah zona Wallacea.',
      questionGuide:
        'Pertanyaan ini meminta kamu menganalisis alasan geologis dan evolusioner di balik tingginya satwa endemik di zona peralihan. Hubungkan peristiwa zaman es dengan isolasi laut dalam.',
      discussionVoice:
        'Pembahasan Miss Mega: Saat zaman es, penurunan air laut menghubungkan Sunda ke Asia dan Sahul ke Australia. Namun perairan dalam Sulawesi tidak pernah mengering. Akibat isolasi jangka panjang ini, satwa berevolusi mandiri menjadi spesies endemik.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Jika ditanya mengapa Sulawesi atau Wallacea banyak satwa endemik, langsung cari opsi tentang isolasi laut dalam dan pulau yang tidak pernah tersambung ke daratan benua.',
    },
    keyTakeaway:
      'Isolasi geografis oleh palung laut dalam pada wilayah Wallacea membatasi aliran gen dan mendorong spesiasi endemik tinggi.',
  },

  {
    id: 2,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Kladogram Filogenetik Flora Endemik dan Upaya Konservasi',
    stimulusNarrative:
      'Sebuah tim botani menganalisis hubungan kekerabatan filogenetik empat taksa tumbuhan tropis Indonesia (T1, T2, T3, dan T4) berdasarkan homologi sekuens DNA kloroplas rbcL. Kladogram menunjukkan hubungan percabangan serta status ancaman kepunahan menurut IUCN Red List.',
    stimulusImageId: 'q2-cladogram',
    imageCaption: 'Kladogram Filogenetik Tumbuhan Tropis dan Karakter Sinapomorfi Genetik',
    questionText:
      'Berdasarkan analisis kladogram dan prinsip konservasi biologi, tentukan pernyataan-pernyataan berikut yang BENAR! (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Takson T3 dan T4 memiliki nenek moyang bersama yang lebih muda (terkini) dibandingkan takson T1 dan T4.',
      },
      {
        id: 'B',
        text: 'Semua takson T1, T2, T3, dan T4 membentuk suatu kelompok monofiletik bersama nenek moyang bersama di nodus basal.',
      },
      {
        id: 'C',
        text: 'Konservasi in situ di habitat asli lebih diprioritaskan bagi takson yang berstatus Kritis (Critically Endangered) untuk menjaga interaksi ko-evolusi alaminya.',
      },
      {
        id: 'D',
        text: 'Takson T1 adalah nenek moyang langsung yang berevolusi menjadi takson T2 dan T3.',
      },
      {
        id: 'E',
        text: 'Penangkaran di kebun raya buatan merupakan satu-satunya metode yang diperbolehkan untuk takson yang terancam punah.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Kladogram menggambarkan hubungan percabangan evolusi (kladogenik) berdasarkan karakter turunan bersama (sinapomorfi). Konservasi terbagi menjadi in situ (habitat asli) dan ex situ (di luar habitat).',
      stimulusAnalysis:
        'Kladogram memperlihatkan takson T3 dan T4 bercabang dari satu nodus terdekat. Nodus pangkal mencakup T1, T2, T3, dan T4 sebagai kelompok monofiletik.',
      biologicalProcess:
        'Dua taksa yang berbagi nodus percabangan terkini memiliki kedekatan genetik lebih tinggi (A benar). Klad yang mencakup nenek moyang bersama dan seluruh keturunannya disebut monofiletik (B benar). Konservasi in situ di cagar alam mempertahankan relung ekologi dan interaksi mutualisme alami (C benar).',
      answerReasoning:
        'Pernyataan D salah karena dalam kladogram ujung garis (terminal taxa) adalah spesies sekerabat (sister taxa), bukan nenek moyang satu sama lain. Pernyataan E salah karena konservasi in situ dan ex situ saling melengkapi, bukan eksklusif.',
      scientificConclusion:
        'Kladogram menguji kedekatan hubungan evolusioner melalui percabangan nenek moyang bersama terkini, dan strategi konservasi ideal mengkombinasikan perlindungan habitat (in situ) serta bank plasma nutfah (ex situ).',
    },
    quickTrick:
      'Tips Miss Mega untuk kladogram: Spesies di ujung cabang adalah kerabat sejajar, bukan nenek moyang satu sama lain! Cari nodus percabangan bersama paling dekat untuk menentukan kedekatan kekerabatan.',
    narration: {
      stimulusIntro:
        'Amati diagram pohon kladogram filogenetik di layar. Perhatikan titik nodus percabangan serta label takson dari T1 sampai T4.',
      questionGuide:
        'Ini adalah soal Pilihan Ganda Kompleks. Kamu bisa memilih lebih dari satu jawaban yang benar. Periksa konsep kladistik monofiletik dan strategi konservasi biologi.',
      discussionVoice:
        'Mari kita bedah: Nodus antara T3 dan T4 lebih muda, membuktikan kekerabatan mereka paling dekat. Monofiletik mencakup satu nenek moyang dan semua turunannya. Sedangkan konservasi in situ sangat penting untuk menjaga interaksi alami di ekosistem aslinya.',
      quickTrickVoice:
        'Cara cepat Miss Mega: Jangan pernah menganggap takson modern sebagai nenek moyang takson lain! Mereka adalah kerabat satu generasi yang berbagi leluhur purba.',
    },
    keyTakeaway:
      'Kedekatan filogenetik ditentukan oleh kedekatan nodus nenek moyang bersama terkini (most recent common ancestor).',
  },

  {
    id: 3,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Zonasi Hutan Mangrove dan Penyesuaian Fisiologis Tumbuhan',
    stimulusNarrative:
      'Hutan mangrove pesisir tropis memperlihatkan zonasi tumbuhan dari garis pasang surut terdepan ke arah daratan: Avicennia marina dan Sonneratia alba di zona terdepan, Rhizophora mucronata di zona tengah, serta Bruguiera gymnorrhiza di zona daratan. Setiap zona menghadapi fluktuasi salinitas dan kadar oksigen lumpur anaerob yang berbeda.',
    stimulusImageId: 'q3-mangrove',
    imageCaption: 'Profil Penampang Zonasi Hutan Mangrove Pesisir Tropis dan Struktur Perakaran',
    questionText:
      'Berdasarkan profil zonasi mangrove pada stimulus visual, tentukan apakah setiap pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Akar napas (pneumatofor) pada Avicennia mengandung lentisel berukuran besar untuk memfasilitasi aerasi dan difusi oksigen pada substrat lumpur berlumpur anaerob.',
        correctAnswer: 'BENAR',
        rationale:
          'Pneumatofor tumbuh tegak ke atas ke permukaan udara dengan lentisel untuk pertukaran gas oksigen saat lumpur terendam pasang.',
      },
      {
        id: '2',
        statement:
          'Zonasi mangrove terjadi semata-mata karena pengaruh pencemaran sampah plastik manusia tanpa adanya adaptasi toleransi salinitas tanaman.',
        correctAnswer: 'SALAH',
        rationale:
          'Zonasi terbentuk secara alami berdasarkan gradien salinitas air laut, frekuensi genangan pasang surut, dan substrat lumpur.',
      },
      {
        id: '3',
        statement:
          'Akar tunjang (stilt roots) Rhizophora berfungsi sebagai penopang mekanik terhadap terpaan ombak laut sekaligus perangkap sedimen lumpur pesisir.',
        correctAnswer: 'BENAR',
        rationale:
          'Akar tunjang bercabang lengkung mencengkeram substrat lunak dan meredam energi gelombang laut serta mengendapkan sedimen.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'BENAR',
    },
    discussion: {
      coreConcept:
        'Hutan mangrove merupakan ekosistem transisi dengan tekanan lingkungan berupa kadar garam tinggi (halofit), tanah anaerobik miskin O2, dan energi hempasan ombak pasang surut.',
      stimulusAnalysis:
        'Profil penampang memperlihatkan morfologi akar napas (Avicennia) menembus lumpur ke atas, akar tunjang (Rhizophora) melengkung lebar di zona tengah, dan akar lutut (Bruguiera) di zona belakang.',
      biologicalProcess:
        'Substrat lumpur mangrove sangat jenuh air sehingga kadar O2 terlarut sangat minim. Lentisel pada pneumatofor memungkinkan masuknya gas atmosfer ke parenkim aerenkim akar.',
      answerReasoning:
        'Pernyataan 1 BENAR (fungsi fisiologis pneumatofor). Pernyataan 2 SALAH (zonasi merupakan fenomena adaptasi ekologis alami terhadap gradien salinitas dan genangan). Pernyataan 3 BENAR (fungsi biofisik akar tunjang).',
      scientificConclusion:
        'Zonasi mangrove mencerminkan adaptasi morfologis dan fisiologis tumbuhan halofit terhadap gradien abiotik pasang surut dan salinitas laut.',
    },
    quickTrick:
      'Perhatikan morfologi akar: Akar menjulang ke atas (pneumatofor) = pernapasan O2; Akar melengkung banyak (tunjang) = stabilitas mekanik ombak laut.',
    narration: {
      stimulusIntro:
        'Lihatlah penampang melintang ekosistem hutan mangrove pada stimulus. Perhatikan bentuk akar Avicennia di zona laut dan Rhizophora di zona tengah.',
      questionGuide:
        'Pada tipe soal Benar-Salah ini, kamu diminta menilai kebenaran dari 3 pernyataan fisiologi dan ekologi mangrove secara independen.',
      discussionVoice:
        'Pembahasan dari Miss Mega: Lumpur mangrove minim oksigen, sehingga akar napas tumbuh ke atas untuk menyerap udara melalui lentisel. Akar tunjang Rhizophora bertindak sebagai peredam ombak alami. Zonasi adalah adaptasi alami terhadap salinitas, bukan akibat polusi.',
      quickTrickVoice:
        'Trik Miss Mega: Ingat pneumatofor untuk napas oksigen, dan stilt root untuk penopang ombak.',
    },
    keyTakeaway:
      'Adaptasi perakaran mangrove (pneumatofor dan akar tunjang) mengatasi kendala tanah hipoksia dan hempasan gelombang.',
  },

  {
    id: 4,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Struktur Dinding Sel Bakteri Gram Positif dan Gram Negatif',
    stimulusNarrative:
      'Dua isolat bakteri diuji dengan pewarnaan Gram dan diamati di bawah mikroskop elektron transmisi (TEM). Isolat X memiliki lapisan peptidoglikan tebal (20–80 nm) kaya asam teikoat tanpa membran luar. Isolat Y memiliki lapisan peptidoglikan tipis (2–7 nm) yang diapit oleh membran luar berlipopolisakarida (LPS) dan ruang periplasma.',
    stimulusImageId: 'q4-bacteria-wall',
    imageCaption: 'Diagram Ultrastruktur Dinding Sel Bakteri Gram Positif vs Gram Negatif',
    questionText:
      'Jika kedua kultur bakteri tersebut diberi perlakuan antibiotik Penisilin (yang menghambat enzim transpeptidase sintesis peptidoglikan) dan lisozim, prediksi manakah yang paling akurat secara ilmiah?',
    optionsPG: [
      {
        id: 'A',
        text: 'Isolat Y (Gram negatif) lebih rentan lisis oleh Penisilin karena peptidoglikannya sangat tipis.',
      },
      {
        id: 'B',
        text: 'Isolat X (Gram positif) lebih sensitif terhadap Penisilin dan lisozim karena peptidoglikannya terpapar langsung tanpa pelindung membran luar.',
      },
      {
        id: 'C',
        text: 'Kedua isolat akan kebal terhadap Penisilin karena bakteri tidak membutuhkan peptidoglikan untuk mempertahankan tekanan osmotik.',
      },
      {
        id: 'D',
        text: 'Membran luar pada Isolat X akan memompa Penisilin keluar sel melalui saluran porin.',
      },
      {
        id: 'E',
        text: 'Isolat Y akan mengkristalkan dinding selnya sehingga berubah menjadi Gram positif.',
      },
    ],
    correctAnswerPG: 'B',
    discussion: {
      coreConcept:
        'Bakteri Gram positif memiliki dinding sel peptidoglikan berlapis banyak (tebal) tanpa membran luar lipid. Bakteri Gram negatif memiliki membran luar lapis ganda lipid kaya lipopolisakarida (LPS) yang melindungi peptidoglikan tipis di ruang periplasma.',
      stimulusAnalysis:
        'Diagram menunjukkan Isolat X memiliki peptidoglikan tebal di sisi luar sel. Isolat Y memiliki membran luar (outer membrane) yang menghalangi zat hidrofilik besar masuk.',
      biologicalProcess:
        'Penisilin menginhibisi enzim transpeptidase yang mengkatalisis ikatan silang tetrapeptida pada peptidoglikan. Pada Gram positif, peptidoglikan berada di lapisan terluar sehingga mudah dijangkau molekul antibiotik dan enzim lisozim. Pada Gram negatif, membran luar bertindak sebagai barier permeabilitas.',
      answerReasoning:
        'Pilihan B tepat: Isolat X (Gram positif) lebih mudah dipenetrasi Penisilin. Pilihan A keliru karena membran luar Gram negatif justru melindungi dari penetrasi penisilin biasa.',
      scientificConclusion:
        'Membran luar lipid pada bakteri Gram negatif berfungsi sebagai sawar permeabilitas tambahan, menjadikan Gram negatif umumnya lebih resisten terhadap penisilin sederhana dan lisozim dibanding Gram positif.',
    },
    quickTrick:
      'Rumus kilat: Gram Positif = Peptidoglikan terbuka tebal -> sangat peka penisilin & lisozim. Gram Negatif = Punya "jaket luar" (membran luar LPS) -> lebih tahan.',
    narration: {
      stimulusIntro:
        'Cermati diagram ultrastruktur dinding sel bakteri di layar. Bandingkan ketebalan lapisan peptidoglikan merah dan keberadaan membran luar berporin.',
      questionGuide:
        'Soal ini menanyakan efek kerja antibiotik penisilin pada kedua struktur dinding sel tersebut. Ingat molekul mana yang dilindungi oleh membran luar.',
      discussionVoice:
        'Penjelasan Miss Mega: Isolat X adalah Gram positif dengan peptidoglikan tebal tanpa pelindung membran luar. Penisilin dan lisozim dapat langsung menyerang ikatan dinding selnya. Sebaliknya, Isolat Y dilindungi membran luar yang mempersulit penetrasi penisilin.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat Gram Positif terbuka tanpa membran luar, jadi lebih mudah dihancurkan oleh penisilin alami.',
    },
    keyTakeaway:
      'Ketiadaan membran luar pada bakteri Gram positif menyebabkan lapisan peptidoglikannya lebih rentan terhadap aksi antibiotik penghambat sintesis dinding sel.',
  },

  {
    id: 5,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Uji Resistensi Antibiotik Difusi Cakram (Kirby-Bauer) dan Mutasi Genetik',
    stimulusNarrative:
      'Uji kepekaan antibiotik metode Kirby-Bauer dilakukan pada biakan Staphylococcus aureus menggunakan empat cakram antibiotik (A1, A2, A3, dan A4). Diameter zona hambat (zone of inhibition) diukur setelah inkubasi 24 jam pada suhu 37°C. Di dalam zona hambat cakram A3 ditemukan beberapa koloni bakteri kecil yang tetap tumbuh.',
    stimulusImageId: 'q5-kirby-bauer',
    imageCaption: 'Cawan Petri Uji Difusi Cakram Antibiotik dan Kemunculan Koloni Mutan Resisten',
    questionText:
      'Berdasarkan hasil pengamatan cawan petri pada stimulus visual, tentukan pernyataan-pernyataan yang BENAR! (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Cakram A1 menghasilkan efektivitas daya hambat terbesar terhadap pertumbuhan bakteri dibandingkan cakram lainnya.',
      },
      {
        id: 'B',
        text: 'Koloni kecil yang tumbuh di dalam zona jernih cakram A3 merupakan subpopulasi bakteri yang telah mengembangkan resistensi terhadap antibiotik A3.',
      },
      {
        id: 'C',
        text: 'Ketiadaan zona hambat pada cakram A4 mengindikasikan bahwa bakteri Staphylococcus aureus tersebut resisten sepenuhnya terhadap antibiotik A4.',
      },
      {
        id: 'D',
        text: 'Antibiotik A2 membunuh bakteri dengan memicu respirasi anaerob obligat pada sel manusia.',
      },
      {
        id: 'E',
        text: 'Semua antibiotik membunuh bakteri hanya dengan memecahkan membran inti sel prokariotik.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Uji Kirby-Bauer mengukur kepekaan mikroba terhadap antibiotik berdasarkan diameter zona bening (hambat). Semakin lebar zona hambat, semakin sensitif bakteri terhadap konsentrasi antibiotik tersebut.',
      stimulusAnalysis:
        'Cakram A1 memiliki diameter zona jernih terluas (paling efektif). Cakram A4 tidak membentuk zona jernih sama sekali (pertumbuhan rumput bakteri merata hingga tepi cakram = resisten). Pada cakram A3, terdapat koloni resisten di dalam zona hambat.',
      biologicalProcess:
        'Kemunculan koloni resisten di dalam zona hambat disebabkan oleh mutasi spontan atau perolehan gen resistensi (misal gen blaZ penghasil beta-laktamase via plasmid) yang memungkinkan koloni tersebut sintas dan membelah di bawah tekanan seleksi antibiotik.',
      answerReasoning:
        'Pernyataan A, B, dan C benar. Pernyataan D salah (tidak rasional dalam konteks uji in vitro). Pernyataan E salah karena bakteri adalah prokariotik yang tidak memiliki membran inti!',
      scientificConclusion:
        'Diameter zona hambat berbanding lurus dengan efektivitas antimikroba, dan munculnya koloni satelit di zona jernih menunjukkan adanya seleksi mutan resisten.',
    },
    quickTrick:
      'Zona bening paling lebar = Paling mematikan bagi bakteri (paling efektif). Ada koloni di dalam zona bening = Terjadi mutasi bakteri kebal (resisten).',
    narration: {
      stimulusIntro:
        'Perhatikan cawan petri uji difusi cakram Kirby-Bauer di layar. Amati lingkaran zona bening di sekitar cakram A1, A2, A3, dan A4.',
      questionGuide:
        'Soal PGK ini menguji kemampuanmu menginterpretasikan data mikrobiologi dan fenomena resistensi antibiotik. Ingat karakteristik prokariotik saat mengevaluasi opsi.',
      discussionVoice:
        'Analisis Miss Mega: Diameter zona bening A1 paling besar, artinya daya hambatnya paling kuat. Pada A4 bakteri tumbuh menempel cakram, menandakan resistensi total. Koloni kecil di dalam lingkaran A3 adalah bukti mutan resisten yang berhasil bertahan hidup.',
      quickTrickVoice:
        'Trik cerdas Miss Mega: Hati-hati jebakan! Bakteri itu prokariotik, tidak punya membran inti. Jadi opsi yang menyebut membran inti bakteri pasti salah.',
    },
    keyTakeaway:
      'Kemunculan koloni mikroba di dalam zona inhibisi mengindikasikan seleksi resistensi genetik terhadap agen antimikroba.',
  },

  // ==========================================
  // BAGIAN 2: EKOSISTEM (Soal 6 - 8)
  // ==========================================
  {
    id: 6,
    category: 'Ekosistem',
    categorySlug: 'ekosistem',
    type: 'BS',
    cognitiveLevel: 'C5',
    title: 'Jaring-Jaring Makanan dan Fenomena Biomagnifikasi Logam Berat',
    stimulusNarrative:
      'Limbah merkuri (Hg) cair terbuang ke perairan teluk dan diserap oleh fitoplankton. Merkuri bersifat lipofilik, stabil, dan tidak dapat dimetabolisme maupun diekskresikan secara efisien oleh jaringan makhluk hidup. Diagram menampilkan rantai trofik: Fitoplankton -> Zooplankton -> Ikan Kecil -> Ikan Predator (Tuna) -> Burung Elang Laut.',
    stimulusImageId: 'q6-biomagnification',
    imageCaption: 'Tingkat Trofik Rantai Makanan dan Peningkatan Konsentrasi Polutan (Biomagnifikasi)',
    questionText:
      'Berdasarkan prinsip aliran energi dan dinamika polutan pada rantai trofik di stimulus, tentukan status kebenaran pernyataan berikut:',
    statementsBS: [
      {
        id: '1',
        statement:
          'Konsentrasi merkuri (ppm) per gram jaringan tubuh akan bernilai paling tinggi pada organisme tingkat trofik tertinggi (Elang Laut).',
        correctAnswer: 'BENAR',
        rationale:
          'Biomagnifikasi menyebabkan akumulasi zat toksik persisten meningkat secara eksponensial di setiap kenaikan tingkat trofik.',
      },
      {
        id: '2',
        statement:
          'Aliran energi kimia murni dari produsen ke konsumen puncak meningkat 10 kali lipat di setiap tingkat trofik.',
        correctAnswer: 'SALAH',
        rationale:
          'Aliran energi justru menyusut drastis (hukum 10% Lindeman), di mana sekitar 90% energi terbuang sebagai panas dan entropi metabolisme.',
      },
      {
        id: '3',
        statement:
          'Kepunahan populasi ikan kecil akan memicu peningkatan langsung pada biomassa elang laut tanpa batas.',
        correctAnswer: 'SALAH',
        rationale:
          'Ketiadaan ikan kecil memutus pasokan makanan ikan predator dan elang laut sehingga populasi elang laut akan menurun drastis.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Biomagnifikasi adalah peningkatan konsentrasi polutan kimia persisten non-biodegradable pada jaringan organisme seiring naiknya tingkat trofik rantai makanan.',
      stimulusAnalysis:
        'Stimulus memperlihatkan piramida energi terbalik untuk polutan: konsentrasi Hg meningkat dari 0.05 ppm di produsen hingga ratusan ppm di karnivora puncak.',
      biologicalProcess:
        'Karnivora puncak harus memakan banyak mangsa selama hidupnya untuk memenuhi kebutuhan energi metaboliknya. Karena racun tidak dapat diekskresi, semua racun dari ribuan mangsa terakumulasi di dalam lemak karnivora puncak.',
      answerReasoning:
        'Pernyataan 1 BENAR (definisi biomagnifikasi). Pernyataan 2 SALAH (hukum energi 10% menyatakan energi berkurang, bukan bertambah). Pernyataan 3 SALAH (gangguan rantai makanan bawah berdampak negatif ke konsumen atas).',
      scientificConclusion:
        'Energi berkurang di setiap tingkat trofik (termodinamika ekosistem), tetapi senyawa toksik yang persisten mengalami pemekatan biologis (biomagnifikasi).',
    },
    quickTrick:
      'Bedakan: Energi makin ke atas makin habis (hanya tersisa 10%), sedangkan Racun persisten makin ke atas makin pekat!',
    narration: {
      stimulusIntro:
        'Perhatikan diagram piramida rantai makanan dan titik-titik konsentrasi polutan merkuri pada layar. Lihat bagaimana ukuran titik racun membesar ke arah puncak.',
      questionGuide:
        'Uji pemahamanmu tentang perbedaan mendasar antara aliran energi yang menyusut dan akumulasi zat kimia yang justru meningkat di trofik puncak.',
      discussionVoice:
        'Penjelasan Miss Mega: Racun persisten seperti merkuri tidak bisa diurai tubuh, sehingga saat hewan di puncak memakan banyak mangsa, seluruh racun terkumpul di tubuhnya. Sementara energi justru terbuang hingga 90% pada setiap tingkatan.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat paradoks ekosistem: Energi di puncak paling kecil, tetapi racun biomagnifikasi di puncak paling pekat!',
    },
    keyTakeaway:
      'Biomagnifikasi memusatkan zat toksik lipofilik di tingkat trofik puncak akibat hilangnya biomassa tetapi tidak hilangnya zat pencemar.',
  },

  {
    id: 7,
    category: 'Ekosistem',
    categorySlug: 'ekosistem',
    type: 'PG',
    cognitiveLevel: 'C5',
    title: 'Eutrofikasi Danau, Ledakan Alga, dan Dinamika DO terhadap BOD',
    stimulusNarrative:
      'Limpasan pupuk fosfat dan nitrat dari lahan pertanian memicu blooming mikroalga di Danau Rawapening. Grafik memantau parameter kualitas air selama 30 hari pasca blooming: kerapatan alga, kadar Oksigen Terlarut (DO - Dissolved Oxygen), dan Nilai Kebutuhan Oksigen Biokimiawi (BOD - Biochemical Oxygen Demand).',
    stimulusImageId: 'q7-eutrophication',
    imageCaption: 'Grafik Dinamika Kerapatan Alga, Oksigen Terlarut (DO), dan BOD selama Proses Eutrofikasi',
    questionText:
      'Berdasarkan grafik fluktuasi parameter pada stimulus, peristiwa biologis apakah yang menyebabkan penurunan drastis kadar Oksigen Terlarut (DO) setelah hari ke-15?',
    optionsPG: [
      {
        id: 'A',
        text: 'Penyerapan oksigen secara masif oleh akar tanaman eceng gondok untuk proses fotolisis air.',
      },
      {
        id: 'B',
        text: 'Kematian massal alga yang memicu ledakan populasi bakteri pengurai (dekomposer) yang mengonsumsi oksigen terlarut dalam respirasi aerobnya.',
      },
      {
        id: 'C',
        text: 'Peningkatan laju fotosintesis alga hijau yang mengubah seluruh molekul oksigen menjadi gas ozon terlarut.',
      },
      {
        id: 'D',
        text: 'Penguapan spontan air danau akibat kenaikan suhu air yang dipicu oleh warna hijau klorofil alga.',
      },
      {
        id: 'E',
        text: 'Ikan-ikan herbivora bermutasi menjadi bernapas dengan paru-paru sehingga menyerap habis oksigen danau.',
      },
    ],
    correctAnswerPG: 'B',
    discussion: {
      coreConcept:
        'Eutrofikasi adalah pengayaan nutrien anorganik (N dan P) yang memicu ledakan alga. Ketika alga mati karena keterbatasan nutrien dan cahaya, dekomposisi massal terjadi.',
      stimulusAnalysis:
        'Pada grafik, setelah puncak blooming alga di hari ke-10 hingga 12, kerapatan alga anjlok drastis. Bersamaan dengan itu, nilai BOD melonjak tajam sedangkan DO turun mendekati 0 mg/L (anoksia).',
      biologicalProcess:
        'Bangkai alga dalam jumlah masif menjadi substrat organik bagi bakteri dekomposer aerobik. Bakteri berkembang biak pesat dan mengonsumsi oksigen terlarut untuk merombak materi organik tersebut, menyebabkan hipoksia/anoksia yang memicu kematian massal ikan.',
      answerReasoning:
        'Pilihan B tepat dan ilmiah. Pilihan A salah karena fotolisis menghasilkan O2, bukan menyerap. Pilihan C, D, dan E tidak masuk akal secara ilmiah.',
      scientificConclusion:
        'Dekomposisi aerobik materi organik alga yang mati oleh mikroorganisme menuntut oksigen dalam jumlah masif (BOD tinggi), memicu deplesi oksigen terlarut (DO rendah).',
    },
    quickTrick:
      'Kunci eutrofikasi: Alga mati -> Bakteri pembusuk berpesta makan bangkai -> Bakteri memakai habis oksigen (BOD naik, DO anjlok) -> Ikan mati lemas.',
    narration: {
      stimulusIntro:
        'Perhatikan grafik perubahan parameter air danau pada stimulus visual. Cermati kurva alga yang turun tajam setelah hari ke-12 diikuti anjloknya garis DO biru.',
      questionGuide:
        'Hubungkan kematian alga dengan aktivitas mikroba pengurai. Apa yang dibutuhkan bakteri pembusuk saat menguraikan tonjolan materi organik tersebut?',
      discussionVoice:
        'Penjelasan Miss Mega: Saat alga kehabisan nutrisi dan mati, tubuhnya menumpuk di dasar danau. Bakteri pengurai membutuhkan oksigen untuk mendekomposisi bangkai tersebut. Aktivitas pernapasan dekomposer inilah yang menguras habis oksigen di danau.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat rantai logika: Alga mati -> Bakteri dekomposer melonjak -> Oksigen (DO) tersedot habis untuk respirasi bakteri.',
    },
    keyTakeaway:
      'Penurunan oksigen terlarut pada eutrofikasi bukan disebabkan oleh alga hidup, melainkan oleh respirasi mikroorganisme perombak biomassa alga mati.',
  },

  {
    id: 8,
    category: 'Ekosistem',
    categorySlug: 'ekosistem',
    type: 'PGK',
    cognitiveLevel: 'C4',
    title: 'Daur Biogeokimia Nitrogen dan Peran Komunitas Bakteri Tanah',
    stimulusNarrative:
      'Siklus nitrogen mempertahankan ketersediaan unsur hara makro bagi vegetasi. Tumbuhan tidak dapat menyerap langsung gas N2 bebas di udara (78%), melainkan menyerapnya dalam bentuk nitrat (NO3-) atau amonium (NH4+). Diagram menampilkan tahapan fiksasi, amonifikasi, nitrifikasi, dan denitrifikasi.',
    stimulusImageId: 'q8-nitrogen-cycle',
    imageCaption: 'Bagan Alur Siklus Nitrogen Tanah: Fiksasi, Nitrifikasi, dan Denitrifikasi',
    questionText:
      'Berdasarkan bagan siklus biogeokimia nitrogen pada stimulus, tentukan pernyataan-pernyataan yang BENAR! (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Bakteri Nitrosomonas dan Nitrosococcus mengoksidasi amonia (NH3/NH4+) menjadi ion nitrit (NO2-).',
      },
      {
        id: 'B',
        text: 'Bakteri Nitrobacter mengoksidasi ion nitrit (NO2-) menjadi ion nitrat (NO3-) yang siap diserap oleh perakaran tanaman.',
      },
      {
        id: 'C',
        text: 'Proses denitrifikasi oleh Pseudomonas denitrificans mengubah ion nitrat kembali menjadi gas nitrogen bebas (N2) dalam kondisi tanah anaerob.',
      },
      {
        id: 'D',
        text: 'Rhizobium yang bersimbiosis pada bintil akar legum mampu mengubah gas nitrogen langsung menjadi molekul glukosa murni.',
      },
      {
        id: 'E',
        text: 'Tanah yang tergenang air terus-menerus akan meningkatkan laju nitrifikasi karena bakteri nitrifikasi bersifat anaerob obligat.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Daur nitrogen melibatkan serangkaian reaksi redoks biologis yang dikatalisis oleh kelompok mikroorganisme spesifik: fiksasi N2, nitrifikasi (amonium -> nitrit -> nitrat), dan denitrifikasi (nitrat -> N2).',
      stimulusAnalysis:
        'Bagan menampilkan dua tahap nitrifikasi: Tahap 1 dikatalisis bakteri pengoksidasi amonia, Tahap 2 dikatalisis bakteri pengoksidasi nitrit. Panah pelepasan gas N2 ke atmosfer merupakan denitrifikasi.',
      biologicalProcess:
        'Nitrosomonas/Nitrosococcus: 2NH4+ + 3O2 -> 2NO2- + 4H+ + 2H2O (A benar). Nitrobacter: 2NO2- + O2 -> 2NO3- (B benar). Pseudomonas: NO3- -> NO2- -> NO -> N2O -> N2 pada kondisi anoksia (C benar).',
      answerReasoning:
        'Pernyataan D salah karena Rhizobium memfiksasi N2 menjadi ion amonium, bukan glukosa. Pernyataan E salah karena bakteri nitrifikasi adalah kemoautotrof aerob yang memerlukan oksigen berlimpah.',
      scientificConclusion:
        'Nitrifikasi adalah proses oksidasi aerobik dua langkah yang menyediakan nitrat bagi tumbuhan, sedangkan denitrifikasi mengembalikan nitrogen ke atmosfer dalam kondisi tanah tergenang/anaerob.',
    },
    quickTrick:
      'Trik hafalan Miss Mega: "Am-Rit-Rat" (Amonia jadi NitRit oleh Nitrosomonas; NitRit jadi NitRat oleh Nitrobacter). Nitrifikasi butuh O2, Denitrifikasi tanpa O2.',
    narration: {
      stimulusIntro:
        'Cermati siklus nitrogen pada bagan di layar. Perhatikan perubahan rumus kimia dari gas N2 menjadi amonium, nitrit, dan nitrat.',
      questionGuide:
        'Ingat kembali mikroorganisme spesifik yang mengkatalisis setiap langkah perubahan molekul nitrogen. Manakah pernyataan yang akurat secara biokimia?',
      discussionVoice:
        'Pembahasan Miss Mega: Nitrifikasi berlangsung dua tahap: Amonia menjadi nitrit oleh Nitrosomonas, lalu nitrit menjadi nitrat oleh Nitrobacter. Kedua bakteri ini butuh oksigen. Sementara denitrifikasi mengembalikan nitrat menjadi gas N2 saat tanah kekurangan oksigen.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat urutannya: Amonia -> NitRit (oleh Nitrosomonas) -> NitRat (oleh Nitrobacter). Keduanya perlu oksigen!',
    },
    keyTakeaway:
      'Perubahan senyawa nitrogen di alam sangat bergantung pada spesifisitas metabolisme mikroorganisme aerob dan anaerob.',
  },

  // ==========================================
  // BAGIAN 3: SEL DAN METABOLISME (Soal 9 - 15)
  // ==========================================
  {
    id: 9,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PG',
    cognitiveLevel: 'C5',
    title: 'Kinetika Enzim: Inhibitor Kompetitif vs Non-Kompetitif',
    stimulusNarrative:
      'Dua tabung reaksi berisi enzim sukrase diuji dengan konsentrasi substrat yang ditingkatkan secara bertahap. Tabung I ditambahkan zat inhibitor P, sedangkan Tabung II ditambahkan zat inhibitor Q. Grafik menunjukkan kurva kecepatan reaksi (V) terhadap konsentrasi substrat [S] dibandingkan dengan kontrol tanpa inhibitor.',
    stimulusImageId: 'q9-enzyme-kinetics',
    imageCaption: 'Kurva Kinetika Reaksi Enzimatis: Kontrol, Inhibitor P, dan Inhibitor Q',
    questionText:
      'Berdasarkan profil kurva kinetika enzim pada stimulus visual, kesimpulan manakah yang paling tepat mengenai mekanisme kerja inhibitor P dan Q?',
    optionsPG: [
      {
        id: 'A',
        text: 'Inhibitor P adalah inhibitor kompetitif karena nilai kecepatan maksimum (Vmax) dapat dicapai kembali dengan penambahan konsentrasi substrat yang tinggi.',
      },
      {
        id: 'B',
        text: 'Inhibitor P adalah inhibitor non-kompetitif karena mengubah struktur sisi aktif secara permanen dan merusak molekul enzim.',
      },
      {
        id: 'C',
        text: 'Inhibitor Q adalah inhibitor kompetitif karena nilai Vmax tetap sama persis dengan kontrol.',
      },
      {
        id: 'D',
        text: 'Inhibitor P dan Q sama-sama bersaing langsung merebut sisi aktif enzim dengan afinitas identik.',
      },
      {
        id: 'E',
        text: 'Penambahan substrat berlebih pada Tabung II (Inhibitor Q) akan mengembalikan kecepatan reaksi hingga melampaui kurva kontrol.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Inhibitor kompetitif memiliki struktur mirip substrat dan bersaing menempati sisi aktif enzim (Km meningkat, Vmax tetap). Inhibitor non-kompetitif mengikat sisi alosterik, mengubah konformasi enzim (Vmax turun, Km tetap).',
      stimulusAnalysis:
        'Kurva P mencapai nilai Vmax yang sama dengan kontrol pada konsentrasi substrat tinggi ([S] digeser ke kanan = Km naik). Kurva Q memiliki atap kecepatan reaksi (Vmax) yang terpangkas lebih rendah dan tidak pernah mencapai Vmax kontrol.',
      biologicalProcess:
        'Pada inhibitor kompetitif (P), kelebihan molekul substrat dapat memenangkan persaingan mengikat sisi aktif, sehingga laju maksimum tetap tercapai. Pada inhibitor non-kompetitif (Q), penambahan substrat tidak dapat memulihkan enzim yang konformasinya telah berubah.',
      answerReasoning:
        'Pilihan A tepat secara kinetika Michaelis-Menten. Pilihan B keliru klasifikasi. Pilihan C terbalik. Pilihan D dan E bertentangan dengan prinsip kinetika enzim.',
      scientificConclusion:
        'Efek inhibitor kompetitif dapat diatasi dengan saturasi konsentrasi substrat (Vmax konstan), sedangkan inhibitor non-kompetitif menurunkan kapasitas katalitik maksimum enzim secara permanen.',
    },
    quickTrick:
      'Trik grafik enzim Miss Mega: Jika garis kurva akhirnya bisa mencapai atap yang sama dengan kontrol -> Kompetitif! Jika atapnya terpotong rendah dan tidak pernah sampai kontrol -> Non-kompetitif!',
    narration: {
      stimulusIntro:
        'Perhatikan baik-baik kurva kinetika enzim pada grafik. Amati garis kontrol abu-abu, kurva merah Inhibitor P, dan kurva ungu Inhibitor Q.',
      questionGuide:
        'Perhatikan apakah kurva tersebut bisa mencapai batas kecepatan maksimum yang sama jika substrat terus ditambah. Ingat definisi Vmax dan sisi alosterik.',
      discussionVoice:
        'Pembahasan Miss Mega: Perhatikan kurva P! Meskipun awalnya lambat, di ujung kanan ia berhasil menyentuh garis kecepatan maksimum kontrol. Ini ciri khas inhibitor kompetitif karena pengaruhnya bisa dikalahkan dengan menambah substrat berlimpah.',
      quickTrickVoice:
        'Cara cepat Miss Mega: Cukup lihat atap kurva. Bisa menyentuh Vmax kontrol = Kompetitif. Atapnya mentok di bawah = Non-kompetitif.',
    },
    keyTakeaway:
      'Inhibitor kompetitif meningkatkan Km tanpa mengubah Vmax; inhibitor non-kompetitif menurunkan Vmax tanpa mengubah Km.',
  },

  {
    id: 10,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PGK',
    cognitiveLevel: 'C4',
    title: 'Pengaruh pH dan Suhu terhadap Konformasi Protein Enzim',
    stimulusNarrative:
      'Dua enzim pencernaan manusia, Enzim X (Pepsin lambung) dan Enzim Y (Amilase saliva), diuji aktivitas katalitiknya pada rentang pH 1–10 dan suhu 10°C–70°C. Enzim adalah protein globular yang konformasi tiga dimensinya dipertahankan oleh ikatan hidrogen, jembatan disulfida, dan interaksi ionik.',
    stimulusImageId: 'q10-enzyme-ph-temp',
    imageCaption: 'Grafik Laju Reaksi Enzimatis terhadap Perubahan Derajat Keasaman (pH) dan Suhu (°C)',
    questionText:
      'Berdasarkan data grafik pengaruh faktor lingkungan terhadap aktivitas enzim, manakah pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Enzim X bekerja optimum pada suasana sangat asam (pH sekitar 1,5–2,0), sesuai dengan lingkungan fisiologis cairan lambung.',
      },
      {
        id: 'B',
        text: 'Enzim Y bekerja optimum pada pH mendekati netral (pH 6,8–7,2), sesuai dengan kondisi rongga mulut.',
      },
      {
        id: 'C',
        text: 'Pemanasan enzim di atas suhu 60°C menyebabkan denaturasi termal akibat terputusnya ikatan hidrogen dan struktur tersier protein enzim.',
      },
      {
        id: 'D',
        text: 'Pada suhu 0°C, molekul enzim mengalami denaturasi permanen dan rantai polipeptidanya terputus menjadi asam amino tunggal.',
      },
      {
        id: 'E',
        text: 'Kedua enzim X dan Y memiliki pH optimum yang persis sama karena berasal dari spesies manusia yang sama.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Aktivitas enzim dipengaruhi oleh pH dan temperatur. Setiap enzim memiliki pH optimum dan suhu optimum spesifik yang mempertahankan konformasi sisi aktifnya.',
      stimulusAnalysis:
        'Grafik pH memperlihatkan puncak kurva Enzim X berada di pH 2 (pepsin). Puncak kurva Enzim Y berada di pH 7 (amilase). Grafik suhu menunjukkan puncak di 37°C lalu anjlok mendekati nol di atas 60°C.',
      biologicalProcess:
        'Pada pH ekstrem atau suhu tinggi (>50–60°C), energi kinetik yang berlebih memecah ikatan hidrogen dan interaksi lemah yang menstabilkan struktur tersier/kuartener enzim (denaturasi). Pada suhu rendah (0°C), enzim hanya inaktif sementara karena energi kinetik rendah, bukan terdenaturasi.',
      answerReasoning:
        'Pernyataan A, B, dan C benar. Pernyataan D salah (suhu dingin membuat inaktif, bukan denaturasi). Pernyataan E salah karena organ tubuh berbeda memiliki lingkungan pH yang sangat kontras.',
      scientificConclusion:
        'Perubahan pH dan suhu di luar rentang fisiologis mengubah ionisasi asam amino sisi aktif dan merusak konformasi tiga dimensi enzim melalui denaturasi.',
    },
    quickTrick:
      'Ingat aturan emas Miss Mega: Suhu PANAS = Denaturasi (rusak permanen). Suhu DINGIN = Inaktif (hanya tidur, bisa bangun lagi jika dihangatkan).',
    narration: {
      stimulusIntro:
        'Amati kedua grafik pada stimulus. Grafik kiri menunjukkan respons aktivitas enzim terhadap pH, dan grafik kanan menunjukkan respons terhadap kenaikan suhu.',
      questionGuide:
        'Perhatikan perbedaan pH puncak antara pepsin lambung dan amilase mulut. Evaluasi juga dampak biokimia suhu tinggi dibanding suhu beku.',
      discussionVoice:
        'Pembahasan Miss Mega: Pepsin bekerja di asam lambung dengan pH sekitar dua, sedangkan amilase mulut di pH netral tujuh. Suhu di atas enam puluh derajat merusak ikatan protein atau denaturasi. Ingat, suhu dingin hanya membuat enzim inaktif, bukan merusaknya.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Dingin membekukan (inaktif sementara), panas membakar (denaturasi permanen)!',
    },
    keyTakeaway:
      'Suhu tinggi merusak struktur spasial enzim secara permanen (denaturasi), sedangkan suhu dingin hanya menurunkan energi kinetik tumbukan (inaktivasi reversibel).',
  },

  {
    id: 11,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'BS',
    cognitiveLevel: 'C5',
    title: 'Fosforilasi ATP, Enzim Alosterik, dan Kontrol Umpan Balik Negatif Glikolisis',
    stimulusNarrative:
      'Jalur glikolisis diatur ketat oleh enzim Phosphofructokinase-1 (PFK-1). Enzim ini mengkatalisis transfer gugus fosfat dari ATP ke fruktosa-6-fosfat menjadi fruktosa-1,6-bisfosfat. PFK-1 memiliki sisi katalitik dan sisi alosterik pengatur yang sensitif terhadap rasio energi seluler (ATP/AMP).',
    stimulusImageId: 'q11-glycolysis-pfk',
    imageCaption: 'Regulasi Alosterik Enzim Fosfofruktokinase-1 (PFK-1) oleh ATP dan AMP pada Glikolisis',
    questionText:
      'Berdasarkan mekanisme regulasi alosterik jalur glikolisis pada stimulus, tentukan status kebenaran pernyataan berikut:',
    statementsBS: [
      {
        id: '1',
        statement:
          'Kadar ATP intraseluler yang melimpah bertindak sebagai inhibitor alosterik bagi enzim PFK-1 untuk mencegah pemborosan pemecahan glukosa.',
        correctAnswer: 'BENAR',
        rationale:
          'Ketika muatan energi sel tinggi, ATP mengikat sisi alosterik berafinitas rendah pada PFK-1, menurunkan laju glikolisis melalui umpan balik negatif.',
      },
      {
        id: '2',
        statement:
          'Molekul AMP konsentrasi tinggi akan menginhibisi enzim PFK-1 secara total sehingga respirasi seluler langsung berhenti seketika.',
        correctAnswer: 'SALAH',
        rationale:
          'AMP konsentrasi tinggi adalah indikator sel kehabisan energi, sehingga AMP justru bertindak sebagai aktivator alosterik yang mempercepat kerja PFK-1.',
      },
      {
        id: '3',
        statement:
          'Konversi fruktosa-6-fosfat menjadi fruktosa-1,6-bisfosfat merupakan reaksi pelepasan energi yang menghasilkan 4 molekul ATP bebas.',
        correctAnswer: 'SALAH',
        rationale:
          'Tahap ini adalah fase investasi energi (energy investment phase) yang mengonsumsi 1 molekul ATP, bukan menghasilkan.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Metabolisme seluler beroperasi berdasarkan efisiensi energi. Jalur katabolisme katabolik glikolisis dihambat ketika cadangan ATP mencukupi (feedback inhibition).',
      stimulusAnalysis:
        'Diagram alur menunjukkan panah penghambatan merah dari ATP ke sisi alosterik PFK-1, serta panah aktivasi hijau dari AMP ke PFK-1.',
      biologicalProcess:
        'Saat sel memiliki banyak ATP, ATP mengikat sisi alosterik PFK-1 dan mengubah konformasinya menjadi bentuk T (tense) yang kurang aktif. Sebaliknya, akumulasi AMP menandakan defisit energi, memicu konformasi R (relaxed) yang aktif untuk mempercepat katabolisme glukosa.',
      answerReasoning:
        'Pernyataan 1 BENAR (mekanisme homeostasis energi). Pernyataan 2 SALAH (AMP adalah aktivator, bukan inhibitor). Pernyataan 3 SALAH (reaksi ini mengonsumsi ATP pada fase investasi glikolisis).',
      scientificConclusion:
        'PFK-1 bertindak sebagai katup pengatur utama (pacemaker) glikolisis melalui modulasi alosterik oleh rasio status energi sel (ATP/AMP).',
    },
    quickTrick:
      'Logika sel: Jika sel sudah kenyang ATP -> glikolisis dimatikan (ATP = inhibitor). Jika sel lapar dan kehabisan tenaga (banyak AMP) -> glikolisis digaspol (AMP = aktivator)!',
    narration: {
      stimulusIntro:
        'Perhatikan diagram regulasi enzim fosfofruktokinase pada stimulus. Cermati tanda plus hijau dari AMP dan tanda minus merah dari ATP.',
      questionGuide:
        'Gunakan nalar biokimia seluler. Kapan sel harus menghemat glukosa dan kapan sel harus membakar glukosa lebih cepat? Nilai ketiga pernyataan tersebut.',
      discussionVoice:
        'Penjelasan Miss Mega: Sel adalah sistem cerdas yang hemat energi. Jika ATP sudah banyak, sel mengerem glikolisis lewat penghambatan alosterik enzim PFK. Jika sel kehabisan energi dan kadar AMP naik, AMP justru menyalakan enzim untuk membakar glukosa lebih cepat.',
      quickTrickVoice:
        'Trik kilat Miss Mega: Banyak ATP = rem diinjak (inhibisi). Banyak AMP = gas ditekan (aktivasi)!',
    },
    keyTakeaway:
      'Regulasi alosterik mencegah sintesis ATP berlebih saat muatan energi seluler sudah jenuh.',
  },

  {
    id: 12,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Tahapan Respirasi Aerob dan Neraca Energi Kompartemen Mitokondria',
    stimulusNarrative:
      'Respirasi seluler aerobik memecah 1 molekul glukosa (C6H12O6) melalui 4 tahapan: Glikolisis, Dekarboksilasi Oksidatif Asam Piruvat, Siklus Asam Sitrat (Krebs), dan Rantai Transpor Elektron (Fosforilasi Oksidatif). Masing-masing tahap terjadi pada kompartemen seluler yang spesifik.',
    stimulusImageId: 'q12-cellular-respiration',
    imageCaption: 'Bagan Kompartemen Seluler dan Aliran Koenzim Pereduksi (NADH & FADH2) pada Respirasi Sel',
    questionText:
      'Berdasarkan bagan kompartemen respirasi aerobik, tahapan manakah yang menghasilkan molekul karbon dioksida (CO2) sebagai produk sampingan metabolik?',
    optionsPG: [
      {
        id: 'A',
        text: 'Hanya Glikolisis di sitosol.',
      },
      {
        id: 'B',
        text: 'Glikolisis dan Fosforilasi Oksidatif pada membran dalam mitokondria.',
      },
      {
        id: 'C',
        text: 'Dekarboksilasi Oksidatif dan Siklus Krebs di dalam matriks mitokondria.',
      },
      {
        id: 'D',
        text: 'Hanya Rantai Transpor Elektron pada krista mitokondria.',
      },
      {
        id: 'E',
        text: 'Glikolisis dan Dekarboksilasi Oksidatif di ruang antar-membran.',
      },
    ],
    correctAnswerPG: 'C',
    discussion: {
      coreConcept:
        'Pemecahan rangka karbon glukosa menghasilkan CO2 pada tahapan dekarboksilasi. Glikolisis memecah C6 menjadi 2 C3 (piruvat) tanpa melepas CO2.',
      stimulusAnalysis:
        'Pada bagan, molekul CO2 dilepaskan pada tahap: (1) Perubahan Piruvat (3C) menjadi Asetil Ko-A (2C) di matriks mitokondria (Dekarboksilasi Oksidatif, 2 CO2); (2) Siklus Krebs di matriks mitokondria (4 CO2).',
      biologicalProcess:
        'Total 6 atom karbon dari 1 molekul glukosa seluruhnya dilepaskan sebagai 6 molekul gas CO2 (2 CO2 dari DO + 4 CO2 dari Siklus Krebs). Rantai Transpor Elektron tidak menghasilkan CO2, melainkan menggunakan O2 untuk membentuk H2O.',
      answerReasoning:
        'Pilihan C tepat. Pilihan A, B, D, dan E salah karena glikolisis dan transpor elektron sama sekali tidak menghasilkan CO2.',
      scientificConclusion:
        'Seluruh gas karbon dioksida yang kita hembuskan dalam respirasi berasal dari reaksi dekarboksilasi enzimatik di dalam matriks mitokondria.',
    },
    quickTrick:
      'Trik cepat Miss Mega: Ingat nama "DEKARBOKSILASI" = lepas karbon (CO2)! Tempat lepas CO2 hanya 2: Dekarboksilasi Oksidatif dan Siklus Krebs (keduanya di matriks mitokondria). Glikolisis TIDAK lepas CO2!',
    narration: {
      stimulusIntro:
        'Perhatikan bagan kompartemen mitokondria dan sitosol di layar. Amati lingkaran merah tempat panah gas CO2 keluar dari sistem reaksi.',
      questionGuide:
        'Cari tahapan yang melepaskan atom karbon menjadi gas karbon dioksida. Ingat letak kompartemen matriks mitokondria.',
      discussionVoice:
        'Pembahasan dari Miss Mega: Dari enam atom karbon glukosa, dua dilepas pada Dekarboksilasi Oksidatif dan empat dilepas pada Siklus Krebs. Keduanya berlangsung di dalam matriks mitokondria. Glikolisis tidak menghasilkan CO2 sama sekali.',
      quickTrickVoice:
        'Trik kilat Miss Mega: Lepas CO2 = Dekarboksilasi Oksidatif dan Siklus Krebs. Dua-duanya terjadi di dalam matriks mitokondria.',
    },
    keyTakeaway:
      'Dekarboksilasi kerangka karbon glukosa menjadi CO2 berlangsung eksklusif di dalam matriks mitokondria.',
  },

  {
    id: 13,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Eksperimen Respirometer Sederhana: Mengukur Laju Konsumsi Oksigen',
    stimulusNarrative:
      'Sekelompok siswa mengukur laju konsumsi oksigen jangkrik (Gryllus bimaculatus) menggunakan respirometer pipa kapiler berskala. Di dasar tabung spesimen diletakkan kristal kalium hidroksida (KOH) yang dibungkus kapas. Pergerakan cairan pewarna eosin diamati setiap 2 menit.',
    stimulusImageId: 'q13-respirometer',
    imageCaption: 'Susunan Rangkaian Eksperimen Respirometer Sederhana dengan Kristal KOH dan Manometer Eosin',
    questionText:
      'Berdasarkan prinsip kerja alat respirometer pada stimulus eksperimen, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Kristal KOH berfungsi untuk mengikat gas karbon dioksida (CO2) hasil respirasi jangkrik menjadi endapan kalium karbonat.',
        correctAnswer: 'BENAR',
        rationale:
          'Reaksi 2KOH + CO2 -> K2CO3 + H2O menyerap CO2 sehingga penurunan volume gas di tabung murni mencerminkan konsumsi O2.',
      },
      {
        id: '2',
        statement:
          'Cairan eosin bergerak ke arah tabung spesimen karena gas oksigen diserap oleh jangkrik sehingga tekanan gas di dalam tabung berkurang.',
        correctAnswer: 'BENAR',
        rationale:
          'Konsumsi O2 oleh respirasi jangkrik mengurangi volume dan tekanan parsial gas di dalam tabung tertutup.',
      },
      {
        id: '3',
        statement:
          'Jika kapas pembungkus KOH dihilangkan dan kristal KOH dibiarkan basah menyentuh tubuh jangkrik, laju respirasi jangkrik akan meningkat pesat secara sehat.',
        correctAnswer: 'SALAH',
        rationale:
          'KOH adalah basa kuat yang sangat kaustik dan beracun jika bersentuhan langsung dengan integumen serangga, merusak jaringan dan mematikan jangkrik.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'BENAR',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Respirometer mengukur laju respirasi aerobik melalui laju penurunan volume gas O2 yang dikonsumsi per satuan waktu.',
      stimulusAnalysis:
        'Pipa kapiler terhubung ke tabung spesimen kedap udara. Di dalam tabung terdapat organisme hidup dan absorben CO2 (KOH).',
      biologicalProcess:
        'Dalam respirasi: O2 diserap, CO2 dikeluarkan. Jika CO2 tidak diikat, volume gas dalam tabung tidak akan banyak berubah. KOH mengikat CO2 menjadi K2CO3 padat. Akibatnya, penurunan volume gas murni disebabkan oleh molekul O2 yang diserap sel jangkrik, menarik eosin masuk.',
      answerReasoning:
        'Pernyataan 1 BENAR (fungsi kimia KOH). Pernyataan 2 BENAR (hukum gas dan tekanan parsial). Pernyataan 3 SALAH (KOH bersifat korosif dan berbahaya jika kontak langsung).',
      scientificConclusion:
        'Pergerakan indikator respirometer mencerminkan laju konsumsi oksigen secara kuantitatif karena CO2 hasil eliminasi diikat sempurna oleh basa kuat KOH.',
    },
    quickTrick:
      'Fungsi KOH = Penyerap CO2! Karena CO2 diserap KOH, cairan eosin yang bergerak murni ditarik oleh oksigen yang dihirup jangkrik.',
    narration: {
      stimulusIntro:
        'Perhatikan susunan alat respirometer laboratorium pada stimulus visual. Amati posisi kristal KOH di dasar tabung dan tetesan eosin pada pipa kapiler berskala.',
      questionGuide:
        'Pahami fungsi kimia kristal KOH dan mengapa tetesan zat warna eosin bisa tersedot ke arah dalam tabung.',
      discussionVoice:
        'Penjelasan Miss Mega: Saat jangkrik bernapas, ia menghirup Oksigen dan mengeluarkan Karbon Dioksida. Nah, kristal KOH bertugas menangkap gas karbon dioksida tersebut. Karena gas di dalam tabung berkurang, cairan pewarna tersedot masuk ke arah jangkrik.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat KOH = penangkap CO2. Gerakan eosin = bukti nyata oksigen sedang diminum oleh sel-sel jangkrik.',
    },
    keyTakeaway:
      'KOH menyerap CO2 keluaran respirasi sehingga pergeseran meniskus cairan proporsional terhadap volume O2 yang dikonsumsi.',
  },

  {
    id: 14,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Reaksi Terang Fotosintesis: Z-Scheme dan Fotofosforilasi Non-Siklik',
    stimulusNarrative:
      'Reaksi terang fotosintesis pada membran tilakoid kloroplas digerakkan oleh foton cahaya. Aliran elektron non-siklik (Z-scheme) melibatkan Fotosistem II (P680), kompleks sitokrom b6f, Fotosistem I (P700), dan enzim ferredoxin-NADP+ reduktase (FNR). Pemompaan proton (H+) ke lumen tilakoid menghasilkan gradien elektrokimia.',
    stimulusImageId: 'q14-thylakoid-z-scheme',
    imageCaption: 'Diagram Z-Scheme Rantai Transpor Elektron Membran Tilakoid dan Kompleks ATP Sintase',
    questionText:
      'Berdasarkan diagram reaksi terang fotosintesis pada membran tilakoid di stimulus, manakah pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Fotolisis air terjadi di lumen tilakoid pada Fotosistem II untuk menggantikan elektron tereksitasi dari klorofil P680 sekaligus menghasilkan gas oksigen (O2).',
      },
      {
        id: 'B',
        text: 'Akumulasi proton (H+) di dalam lumen tilakoid menciptakan gradien proton yang menggerakkan sintesis ATP oleh kompleks ATP sintase ke arah stroma.',
      },
      {
        id: 'C',
        text: 'Akseptor elektron terakhir pada jalur non-siklik adalah NADP+ yang direduksi menjadi NADPH oleh enzim FNR di sisi stroma.',
      },
      {
        id: 'D',
        text: 'Molekul gas CO2 diikat langsung oleh Fotosistem II di dalam lumen tilakoid untuk membentuk glukosa padat.',
      },
      {
        id: 'E',
        text: 'Fotofosforilasi siklik menghasilkan NADPH dalam jumlah yang jauh lebih banyak daripada fotofosforilasi non-siklik.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Reaksi terang mengubah energi foton menjadi energi kimia (ATP dan NADPH) melalui fotolisis air dan rantai transpor elektron tilakoid.',
      stimulusAnalysis:
        'Diagram menampilkan pemecahan H2O -> 2H+ + 1/2 O2 + 2e- pada sisi lumen PS II. Elektron mengalir ke plastokuinon, kompleks sitokrom, plastosianin, PS I, feredoksin, dan akhirnya ke NADP+.',
      biologicalProcess:
        'H+ terakumulasi di lumen tilakoid (dari fotolisis H2O dan pompa sitokrom). Aliran proton kembali ke stroma melalui ATP sintase menghasilkan ATP (kemiosmosis). Reduksi NADP+ terjadi di sisi stroma.',
      answerReasoning:
        'Pernyataan A, B, dan C tepat sesuai biokimia tilakoid. Pernyataan D salah karena fiksasi CO2 terjadi pada Siklus Calvin di stroma, bukan tilakoid. Pernyataan E salah karena jalur siklik hanya menghasilkan ATP tanpa menghasilkan NADPH.',
      scientificConclusion:
        'Reaksi terang menghasilkan ATP, NADPH, dan produk sampingan O2 yang digunakan untuk menyuplai energi reduksi pada Siklus Calvin di stroma kloroplas.',
    },
    quickTrick:
      'Trik cepat reaksi terang: "Air pecah jadi O2 di PS II, NADP+ jadi NADPH di PS I, dan ATP diputar oleh aliran proton keluar stroma". Jalur siklik = HANYA ATP (tanpa NADPH).',
    narration: {
      stimulusIntro:
        'Amati diagram Z-scheme membran tilakoid pada stimulus. Perhatikan aliran elektron dari pemecahan air di Fotosistem II hingga pembentukan NADPH di Fotosistem I.',
      questionGuide:
        'Soal PGK ini memerlukan identifikasi produk reaksi terang, peran fotolisis air, serta mekanisme kemiosmosis gradien proton.',
      discussionVoice:
        'Mari kita bahas bersama Miss Mega: Fotolisis air di PS II melepaskan oksigen dan elektron. Aliran elektron memompa proton ke lumen tilakoid, lalu proton keluar memutar ATP Sintase menghasilkan ATP. Di ujung rantai, elektron ditangkap oleh NADP+ menjadi NADPH.',
      quickTrickVoice:
        'Cara cepat Miss Mega: Ingat hasil reaksi terang: ATP, NADPH, dan O2. Jangan tertukar, CO2 baru dipakai nanti di stroma pada reaksi gelap!',
    },
    keyTakeaway:
      'Kemiosmosis proton di tilakoid dan reduksi NADP+ mengonversi energi foton matahari menjadi energi ikatan fosfat dan reduktor biokimia.',
  },

  {
    id: 15,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Spektrum Absorpsi Pigmen Klorofil dan Laju Aksi Fotosintesis',
    stimulusNarrative:
      'Peneliti menganalisis spektrum absorpsi cahaya pigmen klorofil a, klorofil b, dan karotenoid dibandingkan dengan spektrum aksi laju fotosintesis (percobaan Engelmann modern). Daun disinari panjang gelombang cahaya monokromatik dari 400 nm (ungu) hingga 700 nm (merah jauh).',
    stimulusImageId: 'q15-absorption-spectrum',
    imageCaption: 'Grafik Spektrum Absorpsi Pigmen Fotosintesis dan Spektrum Aksi Laju Fotosintesis',
    questionText:
      'Berdasarkan data grafik spektrum pada stimulus, mengapa laju fotosintesis berada pada titik terendah ketika tanaman disinari cahaya dengan panjang gelombang 500–550 nm?',
    optionsPG: [
      {
        id: 'A',
        text: 'Karena cahaya hijau (500–550 nm) hampir seluruhnya dipantulkan dan ditransmisikan oleh klorofil, bukan diserap.',
      },
      {
        id: 'B',
        text: 'Karena foton cahaya hijau memiliki energi foton yang terlalu tinggi sehingga menghancurkan membran tilakoid kloroplas.',
      },
      {
        id: 'C',
        text: 'Karena cahaya hijau mengaktifkan enzim pengurai glukosa di dalam sitoplasma sel daun.',
      },
      {
        id: 'D',
        text: 'Karena pigmen klorofil a dan b mengkristal menjadi padatan bila terpapar spektrum panjang gelombang tersebut.',
      },
      {
        id: 'E',
        text: 'Karena stomata daun menutup total secara otomatis ketika mendeteksi foton berwarna hijau.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Pigmen fotosintesis menyerap foton pada panjang gelombang tertentu. Klorofil menyerap kuat spektrum biru-ungu (400–470 nm) dan merah (650–680 nm), tetapi memantulkan spektrum hijau (500–550 nm).',
      stimulusAnalysis:
        'Kurva absorpsi klorofil a dan b turun drastis membentuk lembah curam pada rentang 500–560 nm. Kurva spektrum aksi fotosintesis juga mencapai titik nadir terendah pada rentang yang sama.',
      biologicalProcess:
        'Foton hanya dapat mendorong eksitasi elektron jika diserap oleh molekul pigmen (Hukum Grotthuss-Draper). Karena cahaya hijau tidak diserap melainkan dipantulkan ke mata pengamat, daun tampak berwarna hijau dan tidak ada energi foton yang diserap untuk reaksi fotolisis.',
      answerReasoning:
        'Pilihan A tepat. Pilihan B salah (cahaya dengan energi tertinggi adalah ungu-biru, bukan hijau). Pilihan C, D, dan E tidak memiliki dasar ilmiah.',
      scientificConclusion:
        'Laju fotosintesis berkorelasi positif dengan spektrum absorpsi pigmen antena fotosistem; cahaya hijau tidak efektif karena minim penyerapan foton.',
    },
    quickTrick:
      'Logika warna: Mengapa daun berwarna hijau? Karena cahaya hijau DIPANTULKAN, tidak diserap! Kalau tidak diserap, tentu laju fotosintesisnya paling rendah.',
    narration: {
      stimulusIntro:
        'Lihat grafik spektrum penyerapan pigmen klorofil di layar. Perhatikan cekungan lembah yang sangat rendah di bagian tengah antara panjang gelombang 500 sampai 550 nanometer.',
      questionGuide:
        'Pertanyaan ini meminta kamu menjelaskan alasan fisis dan biologis mengapa fotosintesis paling lambat pada panjang gelombang cahaya hijau.',
      discussionVoice:
        'Pembahasan Miss Mega: Ingat prinsip penyerapan cahaya. Klorofil menyerap kuat cahaya biru dan merah. Cahaya hijau justru dipantulkan kembali, itulah mengapa daun terlihat hijau. Karena dipantulkan dan tidak diserap, fotosintesis di zona hijau jadi paling rendah.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Daun tampak hijau karena membuang cahaya hijau (memantulkan). Foton yang dibuang tentu tidak bisa menggerakkan fotosintesis!',
    },
    keyTakeaway:
      'Efektivitas fotosintesis bergantung pada absorpsi foton; spektrum hijau memiliki laju aksi terendah karena dipantulkan oleh klorofil.',
  },

  // ==========================================
  // BAGIAN 4: SISTEM ORGAN MANUSIA (Soal 16 - 27)
  // ==========================================
  {
    id: 16,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Siklus Jantung, Sistem Konduksi Listrik, dan Tekanan Ventrikel',
    stimulusNarrative:
      'Sistem konduksi intrinsik jantung mengoordinasikan kontraksi miokardium. Impuls ritmik dimulai dari nodus sinoatrial (SA node), menyebar melalui nodus atrioventrikular (AV node), berkas His, hingga serat Purkinje di ventrikel. Diagram kardiak menampilkan perubahan tekanan ventrikel kiri selama fase sistol dan diastol.',
    stimulusImageId: 'q16-cardiac-conduction',
    imageCaption: 'Anatomi Sistem Konduksi Listrik Jantung dan Siklus Tekanan Ventrikel Kiri',
    questionText:
      'Berdasarkan jalur konduksi listrik jantung pada stimulus visual, apakah fungsi fisiologis dari penundaan (delay) transmisi impuls sekitar 0,1 detik di Nodus AV?',
    optionsPG: [
      {
        id: 'A',
        text: 'Mencegah atrium dan ventrikel berkontraksi secara bersamaan, sehingga darah di atrium sempat mengalir sempurna mengisi ventrikel sebelum ventrikel memompa.',
      },
      {
        id: 'B',
        text: 'Menghentikan sirkulasi darah ke paru-paru agar pertukaran oksigen dapat berlangsung lebih lambat.',
      },
      {
        id: 'C',
        text: 'Mempercepat pengisian darah miskin oksigen langsung ke dalam pembuluh aorta asendens.',
      },
      {
        id: 'D',
        text: 'Membalikkan arah aliran darah dari ventrikel kiri kembali ke atrium kiri secara ritmik.',
      },
      {
        id: 'E',
        text: 'Mengurangi jumlah sel darah merah yang melewati katup semilunaris aorta.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Sistem konduksi jantung menjamin pemompaan terkoordinasi. SA node adalah perintis irama alami (pacemaker). AV node menunda sinyal sebelum diteruskan ke ventrikel.',
      stimulusAnalysis:
        'Diagram menunjukkan impuls dari SA node merambat ke dinding atrium terlebih dahulu. Di AV node, sinyal mengalami perlambatan konduksi sebelum meluncur cepat melalui berkas His ke ventrikel.',
      biologicalProcess:
        'Serabut di AV node memiliki diameter lebih kecil dan celah gap junction lebih sedikit, menciptakan hambatan listrik sementara (~0,09–0,1 detik). Jeda ini memberi waktu bagi kedua atrium untuk menyelesaikan sistol atrium dan mengisi ventrikel secara maksimal (end-diastolic volume) sebelum ventrikel menutup katup AV dan melakukan sistol isovolumetrik.',
      answerReasoning:
        'Pilihan A tepat secara fisiologi kardiovaskular. Pilihan B, C, D, dan E melanggar prinsip hemodinamika normal.',
      scientificConclusion:
        'Penundaan impuls di nodus AV menjamin pemisahan sekuensial waktu antara kontraksi atrium dan kontraksi ventrikel guna efisiensi curah jantung.',
    },
    quickTrick:
      'Trik logika jantung: Atrium harus beres memeras darah ke bawah dulu, baru giliran ventrikel memompa ke atas! Delay di Nodus AV adalah "lampu merah" agar ventrikel tidak terburu-buru.',
    narration: {
      stimulusIntro:
        'Cermati ilustrasi sistem kelistrikan jantung pada stimulus. Perhatikan titik kuning Nodus SA di atrium kanan dan Nodus AV di sekat atrioventrikular.',
      questionGuide:
        'Pertanyaan ini menanyakan alasan fungsional mengapa listrik jantung ditahan sejenak di Nodus AV sebelum dilepas ke ventrikel.',
      discussionVoice:
        'Penjelasan dari Miss Mega: Bayangkan jika atrium dan ventrikel memeras bersamaan, darah akan bertabrakan! Nodus AV menahan sinyal selama nol koma satu detik agar atrium sempat mengosongkan isinya ke ventrikel. Setelah ventrikel penuh, barulah ventrikel memompa kuat ke seluruh tubuh.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Nodus AV = pos jeda waktu, tujuannya memberi kesempatan ventrikel terisi penuh darah sebelum berkontraksi.',
    },
    keyTakeaway:
      'Keterlambatan konduksi di nodus AV menyelaraskan pengisian ventrikel sebelum kontraksi ventrikel dimulai.',
  },

  {
    id: 17,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PGK',
    cognitiveLevel: 'C4',
    title: 'Uji Golongan Darah ABO-Rhesus dan Prinsip Reaksi Aglutinasi',
    stimulusNarrative:
      'Sampel darah seorang pasien darurat diuji pada kartu uji darah menggunakan tiga jenis serum antiserum komersial: Anti-A, Anti-B, dan Anti-D (Anti-Rhesus). Pengamatan mikroskopis dilakukan untuk mendeteksi ada tidaknya aglutinasi (penggumpalan eritrosit).',
    stimulusImageId: 'q17-blood-agglutination',
    imageCaption: 'Hasil Uji Aglutinasi Kartu Golongan Darah dengan Serum Anti-A, Anti-B, dan Anti-D',
    questionText:
      'Jika hasil uji menunjukkan terjadinya aglutinasi pada sumur Anti-B dan Anti-D, sedangkan sumur Anti-A TIDAK mengalami aglutinasi, manakah kesimpulan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Pasien memiliki golongan darah B Rhesus positif (B+).',
      },
      {
        id: 'B',
        text: 'Membran eritrosit pasien mengandung aglutinogen B dan antigen D (Rhesus).',
      },
      {
        id: 'C',
        text: 'Plasma darah pasien secara alami mengandung aglutinin anti-A.',
      },
      {
        id: 'D',
        text: 'Pasien dapat menerima transfusi sel darah merah utuh dari donor bergolongan darah AB Rhesus positif tanpa risiko lisis.',
      },
      {
        id: 'E',
        text: 'Di dalam membran sel darah pasien tidak ditemukan jenis protein antigen permukaan sama sekali.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Sistem golongan darah ABO ditentukan oleh antigen (aglutinogen) glikolipid pada membran eritrosit dan antibodi (aglutinin) dalam plasma. Sistem Rhesus ditentukan oleh antigen D.',
      stimulusAnalysis:
        'Hasil uji menunjukkan: Anti-A = tidak menggumpal (tidak ada antigen A); Anti-B = menggumpal (ada antigen B); Anti-D = menggumpal (ada antigen Rh/D).',
      biologicalProcess:
        'Reaksi aglutinasi terjadi saat antibodi bivalen mengikat antigen permukaan eritrosit spesifik, membentuk jala gumpalan. Karena pasien memiliki antigen B dan antigen D, maka golongan darahnya adalah B Rh+ (A dan B benar). Individu bergolongan B memproduksi antibodi anti-A dalam plasmanya (C benar).',
      answerReasoning:
        'Pernyataan D salah karena eritrosit donor AB+ membawa antigen A yang akan segera dihancurkan oleh antibodi anti-A pasien (reaksi transfusi hemolitik). Pernyataan E salah karena ada antigen B dan D.',
      scientificConclusion:
        'Aglutinasi menandakan keberadaan antigen permukaan spesifik pada eritrosit, dan resipien hanya dapat menerima eritrosit donor yang antigennya tidak dikenali oleh antibodi resipien.',
    },
    quickTrick:
      'Rumus kilat golongan darah: "Menggumpal di serum apa = ITULAH nama antigennya!" Menggumpal di B dan D -> Darahnya adalah B Rhesus Positif (B+).',
    narration: {
      stimulusIntro:
        'Lihat pelat uji aglutinasi darah di layar. Perhatikan gumpalan kasar di lingkaran Anti-B dan Anti-D, sedangkan Anti-A tampak cair merata.',
      questionGuide:
        'Soal PGK ini menguji penalaran penentuan golongan darah dan aturan transfusi aman. Hubungkan gumpalan dengan antigen yang dimiliki sel darah merah.',
      discussionVoice:
        'Pembahasan Miss Mega: Ingat rumusnya: serum yang menggumpal menunjukkan antigen yang ada pada sel darah. Menggumpal di B dan D berarti sel darahnya punya antigen B dan antigen Rhesus, jadi golongan darahnya B positif. Dalam plasmanya terdapat antibodi anti-A.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Menggumpal = ada antigennya! Gumpal di Anti-B dan Anti-D berarti orang tersebut B Rhesus Positif.',
    },
    keyTakeaway:
      'Aglutinasi terjadi antara aglutinogen spesifik eritrosit dengan aglutinin serum yang bersesuaian.',
  },

  {
    id: 18,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Gradien Tekanan Parsial Gas O2 dan CO2 pada Pertukaran Alveolus-Kapiler',
    stimulusNarrative:
      'Pertukaran gas pernapasan (ventilasi pulmonal dan respirasi eksternal) terjadi melintasi membran alveolar-kapiler tipis (0,5 mikrometer). Proses ini didorong murni oleh difusi sederhana mengikuti penurunan gradien tekanan parsial (PO2 dan PCO2) antara alveolus dan kapiler darah paru.',
    stimulusImageId: 'q18-alveoli-diffusion',
    imageCaption: 'Diagram Gradien Tekanan Parsial Gas (PO2 dan PCO2) pada Membran Alveolar-Kapiler Paru',
    questionText:
      'Berdasarkan nilai tekanan parsial gas pada stimulus visual, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Gas oksigen berdifusi dari rongga alveolus (PO2 = 104 mmHg) menuju ke dalam plasma kapiler paru (PO2 = 40 mmHg) karena menuruni gradien konsentrasi tekanan parsial.',
        correctAnswer: 'BENAR',
        rationale:
          'Perbedaan gradien PO2 yang curam (104 mmHg vs 40 mmHg) memicu difusi cepat molekul O2 melintasi membran alveolus ke darah.',
      },
      {
        id: '2',
        statement:
          'Karbondioksida berdifusi dari kapiler darah (PCO2 = 45 mmHg) ke dalam alveolus (PCO2 = 40 mmHg) meskipun selisih gradien tekanannya relatif kecil (5 mmHg).',
        correctAnswer: 'BENAR',
        rationale:
          'Kelarutan gas CO2 dalam cairan tubuh 20 kali lebih tinggi dibanding O2, sehingga CO2 tetap berdifusi cepat walau gradien tekanannya kecil.',
      },
      {
        id: '3',
        statement:
          'Penebalan dinding alveolus akibat fibrosis paru akan meningkatkan kecepatan difusi gas oksigen sebesar 500% menurut Hukum Difusi Fick.',
        correctAnswer: 'SALAH',
        rationale:
          'Hukum Fick menyatakan laju difusi berbanding terbalik dengan ketebalan membran; penebalan membran justru menghambat difusi secara drastis.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'BENAR',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Pertukaran gas di alveolus mematuhi Hukum Difusi Fick: laju difusi berbanding lurus dengan luas permukaan dan gradien tekanan parsial, serta berbanding terbalik dengan ketebalan membran difusi.',
      stimulusAnalysis:
        'Alveolus: PO2 = 104 mmHg, PCO2 = 40 mmHg. Darah vena masuk kapiler paru: PO2 = 40 mmHg, PCO2 = 45 mmHg.',
      biologicalProcess:
        'Oksigen bergerak dari tekanan tinggi (alveolus 104) ke rendah (kapiler 40) dan terikat pada gugus heme hemoglobin eritrosit. CO2 bergerak dari darah (45) ke alveolus (40) untuk dihembuskan keluar tubuh. Penyakit seperti pneumonia atau fibrosis mempertebal membran dan memicu hipoksemia.',
      answerReasoning:
        'Pernyataan 1 BENAR (mekanisme difusi O2). Pernyataan 2 BENAR (karakteristik kelarutan CO2 tinggi). Pernyataan 3 SALAH (penebalan membran memperlambat difusi).',
      scientificConclusion:
        'Difusi gas respirasi sepenuhnya pasif, digerakkan oleh gradien tekanan parsial dan difasilitasi oleh membran respirasi yang sangat tipis dan luas.',
    },
    quickTrick:
      'Hukum alam gas: Mengalir dari tinggi ke rendah! Membran tipis = difusi cepat. Membran tebal (sakit/fibrosis) = difusi macet.',
    narration: {
      stimulusIntro:
        'Cermati diagram penampang alveolus dan kapiler darah di layar. Perhatikan angka-angka tekanan parsial gas oksigen dan karbon dioksida di kedua sisi membran.',
      questionGuide:
        'Ingat kembali konsep difusi gas menurut Hukum Fick. Nilai ketiga pernyataan mengenai difusi oksigen, CO2, dan ketebalan membran.',
      discussionVoice:
        'Pembahasan Miss Mega: Oksigen mengalir dari tekanan tinggi 104 di alveolus ke tekanan rendah 40 di kapiler darah. CO2 mengalir dari darah 45 ke alveolus 40. Meskipun selisih CO2 hanya 5 mmHg, kelarutan CO2 sangat tinggi sehingga tetap berdifusi lancar. Jika membran menebal akibat penyakit, difusi justru melambat drastis.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Selalu ingat: gas mengalir dari tekanan tinggi ke rendah! Membran tipis mempermudah napas, membran tebal bikin sesak.',
    },
    keyTakeaway:
      'Kelarutan gas yang tinggi mengimbangi gradien tekanan parsial yang lebih kecil pada difusi karbon dioksida di alveolus.',
  },

  {
    id: 19,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Interpretasi Grafik Spirometri Kapasitas Paru-Paru Manusia',
    stimulusNarrative:
      'Uji fungsi paru seorang atlet remaja diukur menggunakan spirometer digital saat istirahat dan inspirasi maksimal. Grafik spirometri mencatat fluktuasi volume udara paru terhadap waktu: Volume Tidal (VT), Volume Cadangan Inspirasi (VCI), Volume Cadangan Ekspirasi (VCE), dan Volume Residu (VR).',
    stimulusImageId: 'q19-spirometry-graph',
    imageCaption: 'Grafik Spiramogram Volume dan Kapasitas Paru-Paru Manusia Dewasa',
    questionText:
      'Berdasarkan grafik spirometri pada stimulus, jika nilai Volume Tidal = 500 mL, Volume Cadangan Inspirasi = 3000 mL, dan Volume Cadangan Ekspirasi = 1100 mL, berapakah nilai Kapasitas Vital (KV) paru-paru atlet tersebut dan bagaimana rumusnya?',
    optionsPG: [
      {
        id: 'A',
        text: 'KV = VT + VCI + VCE = 500 + 3000 + 1100 = 4600 mL.',
      },
      {
        id: 'B',
        text: 'KV = VCI - VCE = 3000 - 1100 = 1900 mL.',
      },
      {
        id: 'C',
        text: 'KV = VT + VR = 500 + 1200 = 1700 mL.',
      },
      {
        id: 'D',
        text: 'KV = VT + VCI + VCE + VR = 500 + 3000 + 1100 + 1200 = 5800 mL.',
      },
      {
        id: 'E',
        text: 'KV = VCI / VT = 3000 / 500 = 6 mL.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Kapasitas Vital (KV) adalah jumlah udara maksimal yang dapat dihembuskan sekuat-kuatnya setelah melakukan inspirasi maksimal. Kapasitas Total Paru (KTP) mencakup Kapasitas Vital ditambah Volume Residu.',
      stimulusAnalysis:
        'Grafik menunjukkan span kurva Kapasitas Vital mencakup 3 komponen: Volume Tidal (pernapasan biasa) + Udara Komplementer (cadangan inspirasi) + Udara Suplementer (cadangan ekspirasi).',
      biologicalProcess:
        'Volume Residu (VR ~1100–1200 mL) adalah udara yang tetap tertinggal di alveolus agar paru-paru tidak kempis/kolaps dan tidak dapat dikeluarkan melalui hembusan napas sekuat apapun. Oleh karena itu, VR tidak termasuk dalam Kapasitas Vital, melainkan hanya pada Kapasitas Paru Total.',
      answerReasoning:
        'Pilihan A tepat: KV = VT + VCI + VCE = 500 + 3000 + 1100 = 4600 mL. Pilihan D adalah rumus Kapasitas Paru Total (KPT), bukan Kapasitas Vital.',
      scientificConclusion:
        'Kapasitas Vital paru-paru merepresentasikan volume ventilasi kerja maksimal tanpa memperhitungkan volume residu sisa.',
    },
    quickTrick:
      'Rumus kilat Miss Mega: "Kapasitas VITAL = Semua volume yang bisa ditiup (Tidal + Cadangan Atas + Cadangan Bawah)". Volume Residu TIDAK ikut karena tidak bisa ditiup keluar!',
    narration: {
      stimulusIntro:
        'Perhatikan rekaman kurva grafik spirometri paru-paru pada stimulus visual. Cermati garis batas Volume Tidal, cadangan inspirasi, cadangan ekspirasi, dan volume residu.',
      questionGuide:
        'Pertanyaan ini meminta kamu menghitung Kapasitas Vital paru. Hati-hati membedakan antara Kapasitas Vital dengan Kapasitas Paru Total.',
      discussionVoice:
        'Penjelasan Miss Mega: Kapasitas Vital adalah udara maksimal yang bisa kamu hirup dan hembuskan sekuat tenaga. Rumusnya: Volume Tidal ditambah Cadangan Inspirasi ditambah Cadangan Ekspirasi, totalnya 4600 mL. Volume residu tidak dihitung karena tidak pernah bisa keluar dari paru-paru.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat, Kapasitas Vital adalah gabungan 3 komponen yang bisa bergerak keluar-masuk. Volume Residu tidak boleh dihitung!',
    },
    keyTakeaway:
      'Kapasitas vital paru merupakan akumulasi volume tidal, cadangan inspirasi, dan cadangan ekspirasi, mengecualikan volume residu.',
  },

  {
    id: 20,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Anatomi Nefron dan Mekanisme Pembentukan Urine Bertahap',
    stimulusNarrative:
      'Nefron adalah unit fungsional ginjal penyaring darah. Pembentukan urine berlangsung dalam 3 tahapan fisiologis: Filtrasi glomerulus menghasilkan urine primer, Reabsorpsi tubulus menghasilkan urine sekunder, dan Augmentasi di tubulus kontortus distal/kolektivus menghasilkan urine sebenarnya.',
    stimulusImageId: 'q20-nephron-anatomy',
    imageCaption: 'Diagram Struktur Nefron Ginjal: Glomerulus, Tubulus Proksimal, Lengkung Henle, dan Distal',
    questionText:
      'Berdasarkan struktur nefron dan mekanisme filtrasi-reabsorpsi pada stimulus visual, manakah pernyataan-pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Filtrasi di glomerulus dan kapsula Bowman menghasilkan urine primer yang masih mengandung glukosa, asam amino, garam, dan air, tetapi bebas dari sel darah dan protein besar.',
      },
      {
        id: 'B',
        text: 'Reabsorpsi obligat 100% glukosa dan asam amino berlangsung di Tubulus Kontortus Proksimal melalui transpor aktif sekunder kotranspor Na+-glukosa.',
      },
      {
        id: 'C',
        text: 'Keberadaan glukosa dalam urine sebenarnya (glukosuria) menandakan bahwa ambang batas penyerapan ginjal (renal threshold) telah terlampaui, seperti pada penderita diabetes melitus.',
      },
      {
        id: 'D',
        text: 'Urine primer memiliki konsentrasi protein albumin yang jauh lebih pekat dan tinggi daripada plasma darah normal.',
      },
      {
        id: 'E',
        text: 'Lengkung Henle desenden sangat impermeabel terhadap air tetapi aktif memompa ion natrium keluar.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Pembentukan urine memadukan filtrasi non-selektif berdasarkan ukuran molekul di glomerulus dengan reabsorpsi selektif zat berharga di tubulus proksimal.',
      stimulusAnalysis:
        'Diagram nefron menunjukkan: Glomerulus -> filtrasi darah. Tubulus Kontortus Proksimal -> reabsorpsi glukosa dan asam amino. Lengkung Henle desenden -> permeabel air; asenden -> permeabel garam NaCl. Tubulus Distal & Pengumpul -> augmentasi & reabsorpsi air fakultatif.',
      biologicalProcess:
        'Podosit pada membran glomerulus menyaring partikel < 68 kDa. Protein darah dan eritrosit tertahan (A benar). Karier SGLT di tubulus proksimal menyerap kembali seluruh glukosa normal (B benar). Bila kadar gula darah > 180 mg/dL, transporter jenuh sehingga glukosa lolos ke urine (C benar).',
      answerReasoning:
        'Pernyataan A, B, dan C benar. Pernyataan D salah (protein tidak lolos filtrasi). Pernyataan E salah karena lengkung Henle desenden justru sangat permeabel terhadap air (akuaporin berlimpah) dan impermeabel terhadap garam.',
      scientificConclusion:
        'Glomerulus menyaring berdasarkan ukuran molekul tanpa membedakan zat berguna atau sampah, sedangkan tubulus proksimal bertugas memulihkan nutrien organik vital secara aktif.',
    },
    quickTrick:
      'Trik cepat nefron Miss Mega: "Glomerulus = Saringan (darah & protein dilarang lewat). Proksimal = Serap Kembali (glukosa & asam amino 100% diambil lagi). Distal = Buang Sisa (augmentasi racun)".',
    narration: {
      stimulusIntro:
        'Cermati diagram nefron ginjal pada stimulus di layar. Amati bagian glomerulus, kapsula Bowman, tubulus proksimal, lengkung Henle, dan tubulus distal.',
      questionGuide:
        'Soal PGK ini menguji penguasaanmu tentang di mana terjadinya filtrasi, apa yang diserap di tubulus proksimal, dan mengapa penderita diabetes memiliki urine manis.',
      discussionVoice:
        'Pembahasan dari Miss Mega: Glomerulus bertindak seperti saringan kopi, sel darah dan protein besar tidak boleh tembus. Urine primer yang lolos masih punya banyak glukosa dan asam amino, yang kemudian diserap seratus persen di tubulus proksimal. Jika ada glukosa di urine akhir, berarti muatan gula darah terlalu tinggi melampaui kemampuan pompa ginjal.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat kata kunci: Di proksimal, semua glukosa dan asam amino diserap habis! Urine normal tidak boleh ada glukosa atau sel darah.',
    },
    keyTakeaway:
      'Reabsorpsi glukosa di tubulus proksimal memiliki ambang batas kapasitas maksimum transporter membran (Tm).',
  },

  {
    id: 21,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C5',
    title: 'Regulasi Hormon ADH (Vasopresin) dan Osmoregulasi Cairan Tubuh',
    stimulusNarrative:
      'Saat seseorang berpuasa atau berolahraga di cuaca panas tanpa minum, osmolaritas plasma darah meningkat (> 295 mOsm/kg). Osmoreseptor di hipotalamus mendeteksi kepekatan darah dan memicu hipofisis posterior mensekresikan hormon Antidiuretika (ADH / Vasopresin) ke aliran darah menuju ginjal.',
    stimulusImageId: 'q21-adh-regulation',
    imageCaption: 'Bagan Umpan Balik Hormon ADH (Vasopresin) dan Translokasi Akuaporin-2 pada Tubulus Kolektivus',
    questionText:
      'Berdasarkan bagan mekanisme homeostasis cairan tubuh pada stimulus, tentukan status kebenaran pernyataan berikut:',
    statementsBS: [
      {
        id: '1',
        statement:
          'Hormon ADH memicu insersi saluran protein akuaporin-2 ke membran apikal sel tubulus pengumpul, meningkatkan reabsorpsi air kembali ke darah.',
        correctAnswer: 'BENAR',
        rationale:
          'Pengikatan ADH pada reseptor V2 menginduksi eksositosis vesikel berakuaporin-2, meningkatkan permeabilitas air tubulus kolektivus.',
      },
      {
        id: '2',
        statement:
          'Sekresi ADH yang tinggi saat dehidrasi akan menghasilkan volume urine yang melimpah, encer, dan berwarna sangat bening transparan.',
        correctAnswer: 'SALAH',
        rationale:
          'Tingginya ADH menyerap kembali banyak air ke darah, sehingga urine yang diekskresikan berjumlah sedikit (sedikit/pekat) dan berwarna kuning pekat.',
      },
      {
        id: '3',
        statement:
          'Konsumsi minuman beralkohol menghambat pelepasan ADH dari hipofisis posterior, menyebabkan peningkatan frekuensi buang air kecil (diuresis).',
        correctAnswer: 'BENAR',
        rationale:
          'Etanol menekan sekresi ADH secara sentral, mengakibatkan air tidak diserap kembali di tubulus pengumpul sehingga terjadi poliuria.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'BENAR',
    },
    discussion: {
      coreConcept:
        'Hormon ADH (antidiuretika) bertindak mencegah diuresis (kehilangan air). ADH mengatur permeabilitas air pada duktus kolektivus melalui mobilisasi kanal akuaporin.',
      stimulusAnalysis:
        'Bagan menampilkan: Dehidrasi -> hipotalamus terangsang -> sekresi ADH naik -> akuaporin terpasang di membran -> air diserap kembali ke kapiler peritubuler -> urine pekat.',
      biologicalProcess:
        'ADH berikatan dengan reseptor V2 berpasangan protein Gs, mengaktivasi adenilat siklase -> cAMP -> PKA memfosforilasi vesikel akuaporin-2 untuk menyatu dengan membran apikal. Air mengalir secara osmosis ke intersisium medula ginjal yang hiperosmotik.',
      answerReasoning:
        'Pernyataan 1 BENAR (mekanisme molekuler akuaporin). Pernyataan 2 SALAH (urine menjadi sedikit dan pekat, bukan melimpah dan encer). Pernyataan 3 BENAR (efek farmakologis alkohol sebagai inhibitor sekresi ADH).',
      scientificConclusion:
        'Kadar hormon ADH berbanding lurus dengan kepekatan urine dan berbanding terbalik dengan volume urine yang dikeluarkan tubuh.',
    },
    quickTrick:
      'Arti nama hormon: "Anti-Diuretik" = Lawan kencing! Banyak ADH = kencing sedikit dan pekat. Kurang ADH (misal karena alkohol/diabetes insipidus) = kencing terus-menerus.',
    narration: {
      stimulusIntro:
        'Perhatikan diagram osmoregulasi hormon ADH pada stimulus visual. Cermati bagaimana sinyal dehidrasi dari hipotalamus memicu pemasangan saluran air akuaporin di ginjal.',
      questionGuide:
        'Evaluasi fungsi hormon ADH saat tubuh kekurangan air, dampaknya terhadap volume urine, dan pengaruh zat seperti alkohol.',
      discussionVoice:
        'Pembahasan Miss Mega: Nama hormon ini adalah Anti-Diuretik, artinya anti buang air kecil! Saat kamu dehidrasi, ADH dikeluarkan agar air di ginjal diserap balik ke darah melalui pintu akuaporin. Hasilnya, urine kamu menjadi sedikit dan berwarna pekat.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat kuncinya: Banyak ADH = air diselamatkan ke darah, kencing jadi sedikit dan pekat!',
    },
    keyTakeaway:
      'ADH mengendalikan retensi air fakultatif melalui regulasi ekspresi saluran akuaporin di duktus kolektivus ginjal.',
  },

  {
    id: 22,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Kinetika Respons Imun Primer vs Sekunder dan Memori Imunologis',
    stimulusNarrative:
      'Seorang individu disuntik vaksin antigen X pada Hari ke-0 (Paparan Primer), kemudian terpapar kembali oleh patogen alami yang membawa antigen X yang sama pada Hari ke-28 (Paparan Sekunder). Grafik mengukur titer konsentrasi antibodi IgM dan IgG dalam serum darah selama 50 hari.',
    stimulusImageId: 'q22-immune-response',
    imageCaption: 'Grafik Konsentrasi Titer Antibodi IgM dan IgG pada Respons Imun Primer dan Sekunder',
    questionText:
      'Berdasarkan kurva produksi antibodi pada stimulus visual, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Respons imun primer memiliki masa laten (lag phase) sekitar 5–7 hari sebelum antibodi IgM pertama kali terdeteksi dalam darah.',
        correctAnswer: 'BENAR',
        rationale:
          'Masa laten diperlukan untuk pengenalan antigen oleh APC, seleksi klonal sel limfosit B naif, dan diferensiasi menjadi sel plasma.',
      },
      {
        id: '2',
        statement:
          'Pada respons imun sekunder, titer antibodi IgG diproduksi jauh lebih cepat, mencapai konsentrasi jauh lebih tinggi, dan bertahan lebih lama di dalam serum.',
        correctAnswer: 'BENAR',
        rationale:
          'Adanya sel B memori berumur panjang memungkinkan aktivasi dan produksi IgG beravinitas tinggi secara instan tanpa masa laten yang panjang.',
      },
      {
        id: '3',
        statement:
          'Vaksinasi bekerja dengan cara memusnahkan seluruh sel B memori agar tubuh tidak mengenali antigen tersebut di masa depan.',
        correctAnswer: 'SALAH',
        rationale:
          'Tujuan utama vaksinasi justru untuk MEMBENTUK populasi sel B dan sel T memori tanpa menyebabkan penyakit aktif.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'BENAR',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Imunitas adaptif memiliki sifat spesifisitas dan memori. Respons primer didominasi IgM dengan afinitas sedang, respons sekunder didominasi IgG dengan afinitas tinggi dan pembentukan cepat.',
      stimulusAnalysis:
        'Grafik menunjukkan: Paparan 1 (Hari 0) -> jeda 7 hari -> IgM naik disusul sedikit IgG. Paparan 2 (Hari 28) -> seketika IgG melonjak tajam eksponensial dalam 1–2 hari.',
      biologicalProcess:
        'Saat paparan primer, sel B naif butuh waktu untuk kloning dan penataan gen antibodi. Sebagian sel B berdiferensiasi menjadi sel B memori. Saat paparan sekunder, sel memori mengenali epitop secara langsung dan berdiferensiasi menjadi sel plasma penghasil IgG dalam hitungan jam.',
      answerReasoning:
        'Pernyataan 1 BENAR (karakteristik fase lag respons primer). Pernyataan 2 BENAR (keunggulan kinetika respons sekunder IgG). Pernyataan 3 SALAH (vaksinasi membentuk sel memori, bukan memusnahkannya).',
      scientificConclusion:
        'Keberadaan sel memori imunologis mempercepat laju pembentukan dan melipatgandakan afinitas antibodi IgG pada paparan ulang patogen.',
    },
    quickTrick:
      'Prinsip vaksin: Paparan 1 = Belajar kenalan (lambat, antibodi sedikit). Paparan 2 = Sudah ingat kenalan lama (cepat kilat, antibodi melimpah ruah berkat sel memori)!',
    narration: {
      stimulusIntro:
        'Cermati grafik titer antibodi pada stimulus di layar. Perhatikan kurva IgM hijau dan lonjakan kurva IgG ungu pada paparan pertama dibanding paparan kedua.',
      questionGuide:
        'Bandingkan kecepatan dan ketinggian puncak antibodi pada respons pertama dengan respons kedua. Apa peran sel B memori hasil vaksinasi?',
      discussionVoice:
        'Pembahasan Miss Mega: Pada suntikan pertama tubuh butuh waktu seminggu untuk mengenali musuh dan membuat antibodi. Namun pada paparan kedua, sel memori sudah siap siaga sehingga antibodi IgG langsung diproduksi dalam jumlah luar biasa tinggi dan cepat!',
      quickTrickVoice:
        'Trik cepat Miss Mega: Respons kedua selalu LEBIH CEPAT dan LEBIH KUAT karena adanya sel memori hasil vaksinasi.',
    },
    keyTakeaway:
      'Imunisasi merangsang pembentukan klon sel memori yang mereduksi fase lag pada infeksi sekunder.',
  },

  {
    id: 23,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Struktur Molekul Antibodi (Imunoglobulin) dan Interaksi Antigen-Epitop',
    stimulusNarrative:
      'Molekul antibodi monomerik (seperti IgG) tersusun atas 4 rantai polipeptida: dua rantai berat (heavy chains) dan dua rantai ringan (light chains) yang dihubungkan oleh ikatan disulfida (-S-S-). Struktur molekul membentuk huruf Y dengan daerah variabel (V) dan daerah konstan (C).',
    stimulusImageId: 'q23-antibody-structure',
    imageCaption: 'Diagram Struktur Molekuler Imunoglobulin G: Rantai Berat, Rantai Ringan, Fragmen Fab, dan Fc',
    questionText:
      'Berdasarkan struktur molekul antibodi pada stimulus visual, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Ujung lengan Y (Fragmen Antigen-Binding / Fab) yang memiliki daerah hipervariabel berfungsi sebagai situs spesifik pengikatan epitop antigen.',
        correctAnswer: 'BENAR',
        rationale:
          'Variasi sekuens asam amino pada domain V_H dan V_L membentuk kantung paratop komplementer terhadap epitop antigen spesifik.',
      },
      {
        id: '2',
        statement:
          'Batang huruf Y (Fragmen Kristalisasi / Fc) berfungsi mengikat reseptor sel fagosit (makrofag) untuk memfasilitasi proses opsonisasi dan aktivasi komplemen.',
        correctAnswer: 'BENAR',
        rationale:
          'Daerah konstan Fc berinteraksi dengan reseptor FcR pada makrofag dan neutrofil untuk memicu penelanan patogen yang telah dilabeli.',
      },
      {
        id: '3',
        statement:
          'Satu molekul antibodi IgG tunggal memiliki 10 pasang situs pengikatan antigen yang berbeda jenis antigennya sekaligus.',
        correctAnswer: 'SALAH',
        rationale:
          'Antibodi IgG bersifat bivalen (memiliki tepat 2 situs pengikatan antigen yang identik untuk jenis antigen yang sama).',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'BENAR',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Antibodi (imunoglobulin) adalah glikoprotein efektor humoral. Bagian Fab mengikat antigen (paratop), bagian Fc menentukan fungsi efektor biologis.',
      stimulusAnalysis:
        'Diagram Y menampilkan: 2 rantai berat panjang dan 2 rantai ringan pendek. Ujung atas kedua cabang adalah domain variabel (Fab). Pangkal bawah adalah domain konstan (Fc).',
      biologicalProcess:
        'Spesifisitas antibodi ditentukan oleh rekombinasi somatik V(D)J pada domain Fab. Pengikatan Fab pada antigen menetralisir toksin. Sementara ujung Fc yang menjulur keluar bertindak sebagai bendera penanda (opsonin) yang dikenali reseptor Fc pada makrofag untuk difagositosis.',
      answerReasoning:
        'Pernyataan 1 BENAR (fungsi pengenalan antigen oleh Fab). Pernyataan 2 BENAR (fungsi efektor opsonisasi oleh Fc). Pernyataan 3 SALAH (monomer IgG hanya bivalen dengan 2 situs Fab identik).',
      scientificConclusion:
        'Struktur bifurkasi antibodi memisahkan fungsi pengenalan antigen berpresisi tinggi (pada Fab) dari fungsi aktivasi efektor sistem kekebalan (pada Fc).',
    },
    quickTrick:
      'Hafalkan bagian antibodi ala Miss Mega: "Fab = Fabrik Pengikat Antigen (di ujung cabang Y). Fc = Fagosit / Complement (di batang bawah Y untuk dipatuk makrofag)".',
    narration: {
      stimulusIntro:
        'Amati struktur molekul antibodi berbentuk huruf Y pada stimulus. Perhatikan kedua lengan Fab di atas dan satu batang Fc di bawah.',
      questionGuide:
        'Pahami perbedaan fungsi antara ujung variabel yang mencengkeram kuman (Fab) dan bagian batang yang memanggil sel makrofag (Fc).',
      discussionVoice:
        'Pembahasan Miss Mega: Ujung kedua lengan Y disebut Fab, di sanalah kuman antigen ditangkap secara spesifik seperti kunci dan gembok. Sedangkan batang bawahnya disebut Fc, berfungsi sebagai pegangan bagi sel darah putih untuk memakan kuman tersebut lewat proses opsonisasi.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ujung Y mengikat antigen (Fab), kaki Y mengikat fagosit makrofag (Fc). IgG punya tepat dua tangan penangkap!',
    },
    keyTakeaway:
      'Domain variabel Fab menentukan spesifisitas antigen, sedangkan domain konstan Fc memediasi interaksi dengan sel efektor imun.',
  },

  {
    id: 24,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Potensial Aksi Neuron: Depolarisasi, Repolarisasi, dan Pompa Na+/K+',
    stimulusNarrative:
      'Transmisi impuls saraf melibatkan perubahan potensial membran akson yang dicatat menggunakan mikroelektroda osiloskop. Fase potensial aksi meliputi: Potensial Istirahat (-70 mV), Depolarisasi hingga mencapai nilai puncak (+30 mV), Repolarisasi, dan Hiperpolarisasi refrakter.',
    stimulusImageId: 'q24-action-potential',
    imageCaption: 'Grafik Gelombang Potensial Aksi Neuron dan Status Gerbang Saluran Ion Na+ dan K+',
    questionText:
      'Berdasarkan kurva potensial aksi dan dinamika saluran ion pada stimulus visual, manakah pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Fase depolarisasi cepat (dari ambang batas -55 mV menuju +30 mV) disebabkan oleh membukanya saluran bergerbang voltase ion natrium (Voltage-Gated Na+ Channels) sehingga ion Na+ membanjiri masuk ke dalam sitoplasma neuron.',
      },
      {
        id: 'B',
        text: 'Fase repolarisasi (penurunan voltase dari +30 mV kembali ke arah negatif) dipicu oleh inaktivasi saluran Na+ dan membukanya saluran bergerbang voltase ion kalium (Voltage-Gated K+ Channels) sehingga ion K+ berdifusi keluar sel.',
      },
      {
        id: 'C',
        text: 'Pompa natrium-kalium (Na+/K+ ATPase) memulihkan gradien konsentrasi ion semula dengan memompa 3 Na+ keluar dan 2 K+ masuk ke dalam sel menggunakan energi 1 ATP.',
      },
      {
        id: 'D',
        text: 'Selama fase istirahat (-70 mV), bagian dalam membran sel neuron memiliki konsentrasi ion Na+ yang jauh lebih tinggi daripada cairan ekstraseluler.',
      },
      {
        id: 'E',
        text: 'Potensial aksi dapat merambat mundur berbalik arah secara bebas pada akson yang sama tanpa adanya periode refrakter.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Potensial aksi adalah depolarisasi reversibel singkat membran sel peka rangsang yang digerakkan oleh permeabilitas ion berurutan.',
      stimulusAnalysis:
        'Kurva memperlihatkan: -70 mV (istirahat) -> stimulasi mencapai ambang -55 mV -> lonjakan tajam ke +30 mV (depolarisasi) -> penurunan curam (repolarisasi) -> cekungan hiperpolarisasi (-80 mV).',
      biologicalProcess:
        'Stimulus membuka gerbang Na+ aktivasi: Na+ masuk deras (A benar). Pada puncak +30 mV gerbang inaktivasi Na+ menutup dan gerbang K+ terbuka: K+ keluar deras menstabilkan muatan negatif (B benar). Pompa Na+/K+ aktif mempertahankan rasio 3 Na+ keluar per 2 K+ masuk (C benar). Periode refrakter menjamin propagasi impuls searah (unidirectional).',
      answerReasoning:
        'Pernyataan A, B, dan C benar secara elektrofisiologi. Pernyataan D salah karena Na+ dominan di luar sel, bukan di dalam sel. Pernyataan E salah karena periode refrakter mencegah impuls berbalik arah.',
      scientificConclusion:
        'Gelombang potensial aksi dihasilkan dari fluks pasif ion Na+ masuk (depolarisasi) diikuti ion K+ keluar (repolarisasi), ditopang oleh transpor aktif pompa Na+/K+ ATPase.',
    },
    quickTrick:
      'Rumus kilat saraf Miss Mega: "NA-IK (Natrium Masuk = Naik depolarisasi). KE-LUAR (Kalium Keluar = Turun repolarisasi)". Pompa 3-2-1: 3 Natrium keluar, 2 Kalium masuk, 1 ATP dipakai!',
    narration: {
      stimulusIntro:
        'Cermati grafik potensial aksi neuron pada stimulus. Perhatikan fase naik menuju positif tiga puluh milivolt dan fase turun kembali ke negatif.',
      questionGuide:
        'Pahami ion apa yang bertanggung jawab saat grafik melonjak naik, ion apa yang keluar saat grafik turun, serta peran pompa Na-K.',
      discussionVoice:
        'Pembahasan dari Miss Mega: Saat grafik naik tajam menuju puncak positif, pintu natrium terbuka lebar sehingga ion Na+ berbondong-bondong masuk ke sel. Saat grafik meluncur turun, pintu kalium terbuka sehingga ion K+ keluar dari sel. Pompa Na-K kemudian merapikan posisi ion dengan melempar 3 Na keluar dan menarik 2 K masuk.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat rumusnya: Natrium masuk bikin grafik naik (depolarisasi), Kalium keluar bikin grafik turun (repolarisasi)!',
    },
    keyTakeaway:
      'Kinetika pembukaan saluran ion Na+ cepat dan saluran K+ lambat mendasari profil asimetris potensial aksi akson.',
  },

  {
    id: 25,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PG',
    cognitiveLevel: 'C5',
    title: 'Homeostasis Glukosa Darah: Antagonisme Insulin dan Glukagon',
    stimulusNarrative:
      'Kadar glukosa darah manusia dipertahankan stabil pada kisaran 70–110 mg/dL melalui mekanisme umpan balik negatif yang dikendalikan oleh sel-sel pulau Langerhans pankreas. Setelah makan makanan kaya karbohidrat atau saat puasa berkepanjangan, pankreas melepaskan hormon regulator glikemia.',
    stimulusImageId: 'q25-glucose-homeostasis',
    imageCaption: 'Bagan Lingkaran Umpan Balik Negatif Homeostasis Glukosa Darah: Insulin vs Glukagon',
    questionText:
      'Berdasarkan bagan umpan balik homeostasis pada stimulus, peristiwa biokimia manakah yang dirangsang oleh hormon Insulin pada sel hepar (hati) dan sel otot rangka saat kadar glukosa darah melonjak setelah makan?',
    optionsPG: [
      {
        id: 'A',
        text: 'Glikogenesis, yaitu translokasi transporter GLUT4 dan penggabungan molekul glukosa menjadi polimer glikogen cadangan.',
      },
      {
        id: 'B',
        text: 'Glikogenolisis, yaitu pemecahan cadangan glikogen hati menjadi glukosa bebas untuk dilepas ke plasma darah.',
      },
      {
        id: 'C',
        text: 'Glukoneogenesis, yaitu sintesis molekul glukosa baru dari asam lemak dan asam amino di dalam matriks mitokondria.',
      },
      {
        id: 'D',
        text: 'Penghancuran seluruh membran sel beta pankreas oleh enzim amilase empedu.',
      },
      {
        id: 'E',
        text: 'Penghentian penyerapan sari makanan di usus halus secara mendadak.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Insulin (dari sel beta pankreas) bersifat hipoglikemik (menurunkan gula darah). Glukagon (dari sel alfa pankreas) bersifat hiperglikemik (menaikkan gula darah).',
      stimulusAnalysis:
        'Bagan menunjukkan dua jalur: (1) Gula darah naik -> Sel Beta melepas insulin -> stimulasi glikogenesis di hati dan penyerapan glukosa di otot -> gula darah turun normal; (2) Gula darah turun -> Sel Alfa melepas glukagon -> glikogenolisis di hati -> gula darah naik normal.',
      biologicalProcess:
        'Insulin berikatan dengan reseptor tirosin kinase, memicu kaskade sinyal intraseluler yang menyebabkan vesikel penyimpan GLUT4 menyatu ke membran sel otot dan adiposa. Di hepar, insulin mengaktifkan enzim glikogen sintase untuk merangkai glukosa menjadi glikogen (glikogenesis).',
      answerReasoning:
        'Pilihan A tepat (definisi glikogenesis akibat insulin). Pilihan B dan C adalah aksi hormon Glukagon saat lapar/puasa. Pilihan D dan E keliru secara fisiologis.',
      scientificConclusion:
        'Insulin menurunkan konsentrasi glukosa darah dengan memfasilitasi uptake glukosa seluler serta memacu konversi glukosa menjadi glikogen (glikogenesis).',
    },
    quickTrick:
      'Trik kata Miss Mega: "Insulin = Simpan/Bikin Glikogen (Glikogenesis)". "Glukagon = Glikogen Habis (Glikogenolisis untuk lepas gula)". Makan kenyang = Insulin bekerja!',
    narration: {
      stimulusIntro:
        'Perhatikan lingkaran regulasi kadar gula darah pada stimulus visual. Amati jalur atas saat kenyang berenergi dan jalur bawah saat kelaparan berpuasa.',
      questionGuide:
        'Pertanyaan ini menanyakan proses biokimia yang dipicu oleh hormon insulin saat tubuh baru selesai makan karbohidrat.',
      discussionVoice:
        'Pembahasan Miss Mega: Setelah makan, gula di darah melonjak. Sel beta pankreas segera memompa insulin. Insulin menginstruksikan sel hati dan otot untuk menyerap gula dan merangkainya menjadi tabungan gula bernama glikogen. Proses pembuatan glikogen ini disebut glikogenesis.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat akhiran kata: "Genesis" artinya membuat. Insulin merangsang Glikogenesis (membuat simpanan glikogen).',
    },
    keyTakeaway:
      'Aktivasi glikogenesis oleh insulin mengamankan kelebihan glukosa sirkulasi ke dalam bentuk polimer cadangan glikogen.',
  },

  {
    id: 26,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Fluktuasi Hormonal Siklus Menstruasi dan Perkembangan Folikel Ovarium',
    stimulusNarrative:
      'Siklus reproduksi wanita rata-rata berlangsung 28 hari dan melibatkan koordinasi aksis hipotalamus-hipofisis-ovarium. Grafik memantau empat hormon utama: FSH dan LH dari hipofisis anterior, serta Estrogen dan Progesteron dari ovarium, disandingkan dengan penebalan dinding endometrium uterus.',
    stimulusImageId: 'q26-menstrual-cycle',
    imageCaption: 'Grafik Kurva Fluktuasi Hormon Hipofisis, Ovarium, dan Fase Ketebalan Endometrium Uterus',
    questionText:
      'Berdasarkan dinamika kurva hormonal dan siklus ovarium pada stimulus, manakah pernyataan-pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Lonjakan tajam sekresi hormon Luteinizing Hormone (LH surge) di sekitar hari ke-14 merupakan pemicu utama terjadinya ovulasi (pelepasan oosit sekunder dari folikel Graaf).',
      },
      {
        id: 'B',
        text: 'Fase pasca-ovulasi (fase luteal) didominasi oleh sekresi hormon Progesteron dari korpus luteum untuk memelihara penebalan dan vaskularisasi dinding endometrium.',
      },
      {
        id: 'C',
        text: 'Regresi (kemunduran) korpus luteum menjadi korpus albikans jika tidak terjadi fertilisasi menyebabkan penurunan drastis estrogen dan progesteron yang memicu fase menstruasi (luruhnya endometrium).',
      },
      {
        id: 'D',
        text: 'Hormon FSH diproduksi langsung oleh korpus luteum di dalam rongga rahim saat ovulasi berlangsung.',
      },
      {
        id: 'E',
        text: 'Penebalan dinding rahim mencapai puncaknya pada hari ke-1 hingga hari ke-5 saat hormon estrogen berada di titik nol.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Siklus menstruasi terbagi menjadi fase folikular, ovulasi, dan fase luteal. Umpan balik positif estrogen memicu lonjakan LH yang menyebabkan ovulasi.',
      stimulusAnalysis:
        'Grafik menunjukkan: Hari 1–5: Menstruasi. Hari 6–13: Fase proliferasi (Estrogen naik). Hari 14: Puncak lonjakan LH dan FSH -> Ovulasi. Hari 15–28: Fase sekretori (Progesteron melonjak tinggi dari korpus luteum).',
      biologicalProcess:
        'Kadar estrogen yang tinggi dari folikel Graaf memicu efek umpan balik positif pada hipofisis anterior sehingga LH dilepaskan secara masif (LH surge) merobek dinding folikel (A benar). Sisa folikel bertransformasi menjadi korpus luteum penghasil progesteron (B benar). Ketiadaan implantasi memicu luteolisis; penurunan steroid seks menyebabkan vasokonstriksi arteri spiralis endometrium dan luruhnya lapisan fungsional (C benar).',
      answerReasoning:
        'Pernyataan A, B, dan C benar secara endokrinologi reproduksi. Pernyataan D salah karena FSH disekresikan hipofisis anterior di otak. Pernyataan E salah karena hari 1–5 adalah fase peluruhan (menstruasi).',
      scientificConclusion:
        'Ovulasi dipicu oleh lonjakan LH akibat feedback positif estrogen, sedangkan kelangsungan endometrium luteal dikontrol secara ketat oleh hormon progesteron korpus luteum.',
    },
    quickTrick:
      'Trik grafik menstruasi Miss Mega: Puncak kurva gunung tinggi di tengah hari ke-14 = LH (pemicu ovulasi). Kurva gunung tinggi di paruh kedua hari 15–28 = Progesteron (penjaga rahim). Kalau progesteron jatuh -> Menstruasi!',
    narration: {
      stimulusIntro:
        'Amati kurva empat garis hormon reproduksi wanita pada stimulus di layar. Perhatikan lonjakan tajam di tengah grafik dan bukit hormon di sisi kanan.',
      questionGuide:
        'Kenali hormon pemicu ovulasi di hari ke-14 dan hormon penjaga ketebalan rahim pasca ovulasi. Pilih semua pernyataan yang benar.',
      discussionVoice:
        'Pembahasan Miss Mega: Di hari ke-14, terjadi lonjakan tajam hormon LH yang meletuskan folikel telur, peristiwa ini disebut ovulasi. Setelah ovulasi, bekas sarang telur berubah menjadi korpus luteum yang memproduksi progesteron untuk menjaga rahim tetap empuk dan tebal. Jika tidak dibuahi, progesteron merosot dan dinding rahim luruh sebagai darah haid.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Lonjakan di tengah = LH bikin ovulasi. Bukit besar di belakang = Progesteron jaga dinding rahim.',
    },
    keyTakeaway:
      'Transisi dari fase folikular ke fase luteal ditandai oleh lonjakan gonadotropin LH yang menginisiasi ovulasi.',
  },

  {
    id: 27,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Fertilisasi, Perkembangan Blastokista, dan Tiga Lapisan Germinal Embrio',
    stimulusNarrative:
      'Fertilisasi ovum oleh spermatozoa normalnya berlangsung di ampula tuba fallopii (saluran telur). Zigot bersel tunggal membelah secara mitosis (cleavage) menjadi morula, bertransformasi menjadi blastokista, lalu mengalami gastrulasi membentuk tiga lapisan germinal embrionik: Ektoderm, Mesoderm, dan Endoderm.',
    stimulusImageId: 'q27-embryogenesis',
    imageCaption: 'Bagan Tahapan Embriogenesis Manusia: Morula, Blastokista, dan Derivat 3 Lapisan Germinal',
    questionText:
      'Berdasarkan bagan diferensiasi lapisan germinal embrionik pada stimulus, tentukan status kebenaran pernyataan berikut:',
    statementsBS: [
      {
        id: '1',
        statement:
          'Lapisan ektoderm akan berdiferensiasi membentuk sistem saraf (otak dan medula spinalis) serta lapisan epidermis kulit luar.',
        correctAnswer: 'BENAR',
        rationale:
          'Ektoderm neural membentuk tabung saraf (sistem saraf pusat dan perifer) serta ektoderm permukaan membentuk kulit, kuku, dan lensa mata.',
      },
      {
        id: '2',
        statement:
          'Lapisan mesoderm berkembang menjadi sistem sirkulasi (jantung dan pembuluh darah), otot, tulang rangka, dan sistem urogenital.',
        correctAnswer: 'BENAR',
        rationale:
          'Mesoderm merupakan lapisan tengah pembentuk jaringan ikat, sistem kardiovaskular, sistem gerak rangka-otot, ginjal, dan gonad.',
      },
      {
        id: '3',
        statement:
          'Lapisan endoderm bermutasi menghasilkan seluruh jaringan tulang tengkorak dan sel-sel darah merah embrio.',
        correctAnswer: 'SALAH',
        rationale:
          'Tulang tengkorak dan sel darah berasal dari mesoderm; endoderm berdiferensiasi membentuk epitelium saluran pencernaan dan respirasi.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'BENAR',
      '3': 'SALAH',
    },
    discussion: {
      coreConcept:
        'Gastrulasi adalah tahap kunci morfogenesis di mana massa sel blastokista menata diri menjadi tiga lapis jaringan dasar embrionik (triploblastik).',
      stimulusAnalysis:
        'Bagan menampilkan pemetaan turunan germ layer: Ektoderm (luar) -> otak, saraf, kulit. Mesoderm (tengah) -> otot, tulang, jantung, darah, ginjal. Endoderm (dalam) -> epitel saluran cerna, hati, pankreas, paru-paru.',
      biologicalProcess:
        'Melalui induksi embrionik dan ekspresi gen diferensiasi, sel-sel punca pluripoten menempati lokasi spesifik dan terspesialisasi membentuk organ tubuh dewasa (organogenesis).',
      answerReasoning:
        'Pernyataan 1 BENAR (derivat ektoderm). Pernyataan 2 BENAR (derivat mesoderm). Pernyataan 3 SALAH (tulang dan darah berasal dari mesoderm, bukan endoderm).',
      scientificConclusion:
        'Ketiga lapisan germinal embrionik memiliki nasib diferensiasi organogenesis yang terprogram ketat selama fase gastrulasi.',
    },
    quickTrick:
      'Trik hafalan lapisan embrio Miss Mega: "Ektoderm = Luar & Pikir (kulit luar & otak/saraf). Mesoderm = Mesin Tubuh (otot, tulang, jantung, darah). Endoderm = Enak Makan & Bernapas (usus cerna, hati, paru-paru)".',
    narration: {
      stimulusIntro:
        'Perhatikan bagan diferensiasi lapisan embrio pada stimulus visual. Amati kotak lapisan Ektoderm biru, Mesoderm merah, dan Endoderm kuning.',
      questionGuide:
        'Nilai kebenaran asal-usul organ tubuh manusia: organ mana yang dibentuk dari lapisan luar ektoderm, lapisan tengah mesoderm, dan lapisan dalam endoderm.',
      discussionVoice:
        'Pembahasan Miss Mega: Ingat trik mudahnya! Ektoderm lapisan luar membentuk kulit dan sistem saraf otak. Mesoderm lapisan tengah bertindak seperti mesin penggerak: membentuk otot, tulang, dan jantung peredaran darah. Endoderm lapisan dalam membentuk dinding saluran pencernaan dan pernapasan.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ektoderm untuk saraf dan kulit. Mesoderm untuk otot, tulang, dan darah. Endoderm untuk organ dalam seperti usus dan paru.',
    },
    keyTakeaway:
      'Setiap jaringan organ dewasa dapat ditelusuri kembali ke salah satu dari tiga lapisan germinal primordial gastrula.',
  },

  // ==========================================
  // BAGIAN 5: KETERAMPILAN PROSES DAN PENALARAN BIOLOGI (Soal 28 - 30)
  // ==========================================
  {
    id: 28,
    category: 'Keterampilan Proses dan Penalaran Biologi',
    categorySlug: 'penalaran-ilmiah',
    type: 'PG',
    cognitiveLevel: 'C6',
    title: 'Interpretasi Data Penelitian: Efek Mikroplastik terhadap Fisiologi Daphnia magna',
    stimulusNarrative:
      'Peneliti menguji dampak paparan mikroplastik polietilena (ukuran 1–5 mikrometer) terhadap denyut jantung kutu air Daphnia magna. Empat kelompok perlakuan (K1 = kontrol 0 mg/L; K2 = 10 mg/L; K3 = 50 mg/L; K4 = 100 mg/L) diinkubasi selama 48 jam dengan suhu konstan 22°C dan pH 7,2. Denyut jantung (beats per minute / bpm) dihitung di bawah mikroskop cahaya.',
    stimulusImageId: 'q28-daphnia-microplastic',
    imageCaption: 'Grafik Batang Laju Rerata Denyut Jantung Daphnia magna dan Standar Deviasi Uji Toksisitas',
    questionText:
      'Berdasarkan grafik hasil eksperimen toksikologi pada stimulus, manakah simpulan ilmiah yang paling valid dan dapat dipertanggungjawabkan?',
    optionsPG: [
      {
        id: 'A',
        text: 'Peningkatan konsentrasi paparan mikroplastik berkorelasi negatif secara signifikan dengan penurunan frekuensi denyut jantung Daphnia magna.',
      },
      {
        id: 'B',
        text: 'Mikroplastik bekerja sebagai stimulan yang memicu takikardia dan mempercepat laju sirkulasi darah Daphnia.',
      },
      {
        id: 'C',
        text: 'Daphnia magna kebal total terhadap mikroplastik karena tubuhnya dilapisi karapas kitin kedap racun.',
      },
      {
        id: 'D',
        text: 'Konsentrasi mikroplastik 100 mg/L menyebabkan mutasi spontan yang mengubah Daphnia menjadi organisme fotosintetik.',
      },
      {
        id: 'E',
        text: 'Denyut jantung Daphnia magna dipengaruhi semata-mata oleh warna wadah cawan petri tanpa korelasi dosis zat uji.',
      },
    ],
    correctAnswerPG: 'A',
    discussion: {
      coreConcept:
        'Desain eksperimen biologis melibatkan variabel bebas (konsentrasi mikroplastik), variabel terikat (denyut jantung Daphnia), dan variabel kontrol (suhu, pH, fotoperiode).',
      stimulusAnalysis:
        'Grafik menunjukkan penurunan denyut jantung bertahap: Kontrol = 240 bpm -> 10 mg/L = 210 bpm -> 50 mg/L = 165 bpm -> 100 mg/L = 110 bpm. Standar deviasi (error bar) tidak saling tumpang tindih.',
      biologicalProcess:
        'Partikel mikroplastik yang tertelan menyumbat lumen usus Daphnia, memicu stres oksidatif, menghambat penyerapan nutrien, serta membebani metabolisme energi, yang berakibat pada penurunan performa neuromuskular jantung (bradikardia).',
      answerReasoning:
        'Pilihan A tepat: korelasi negatif berarti semakin tinggi variabel bebas (dosis mikroplastik), semakin rendah variabel terikat (denyut jantung). Pilihan B bertentangan dengan data grafik. Pilihan C, D, dan E tidak berbasis sains.',
      scientificConclusion:
        'Terdapat hubungan sebab-akibat (kausalitas) di mana peningkatan konsentrasi polutan mikroplastik menekan aktivitas kardiovaskular organisme planktonik secara signifikan.',
    },
    quickTrick:
      'Trik membaca grafik penelitian: Dosis plastik NAIK -> Denyut jantung TURUN. Hubungan berlawanan arah disebut "Korelasi Negatif"!',
    narration: {
      stimulusIntro:
        'Perhatikan grafik batang hasil uji laboratorium kutu air Daphnia magna di layar. Amati tinggi balok denyut jantung dari kelompok kontrol hingga konsentrasi 100 mg/L.',
      questionGuide:
        'Identifikasi hubungan variabel bebas dan variabel terikat. Apa yang terjadi pada denyut jantung saat dosis mikroplastik dinaikkan?',
      discussionVoice:
        'Pembahasan Miss Mega: Lihat grafik batangnya, semakin ke kanan konsentrasi mikroplastik dinaikkan, tinggi batang denyut jantung semakin merosot ke bawah. Ini menunjukkan korelasi negatif yang jelas, membuktikan bahwa polutan mikroplastik mengganggu kesehatan fisiologis dan detak jantung kutu air.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Satu variabel naik sementara variabel lain turun = korelasi negatif. Jangan ragu memilih opsi korelasi negatif!',
    },
    keyTakeaway:
      'Penarikan kesimpulan ilmiah harus merujuk pada arah tren data kuantitatif dan signifikansi perubahan antar perlakuan.',
  },

  {
    id: 29,
    category: 'Keterampilan Proses dan Penalaran Biologi',
    categorySlug: 'penalaran-ilmiah',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Elektroforesis Gel DNA: Analisis Keanekaragaman Genetik dan Filogeni',
    stimulusNarrative:
      'Peneliti genetika populasi mengisolasi DNA dari empat individu satwa langka badak sumatra (B1, B2, B3, B4) dan memotongnya menggunakan enzim endonuklease restriksi EcoRI. Fragmen DNA kemudian dipisahkan menggunakan elektroforesis gel agarosa dengan penanda marka DNA ladder (M) di bawah medan listrik.',
    stimulusImageId: 'q29-gel-electrophoresis',
    imageCaption: 'Foto Dokumentasi Pita Gel Elektroforesis DNA dan Marka Ukuran Pasang Basa (bp)',
    questionText:
      'Berdasarkan pola migrasi pita DNA pada gel elektroforesis di stimulus visual, manakah pernyataan-pernyataan yang BENAR? (Pilih semua jawaban yang benar)',
    optionsPGK: [
      {
        id: 'A',
        text: 'Fragmen DNA bermigrasi dari kutub negatif (katoda) menuju ke kutub positif (anoda) karena tulang punggung molekul DNA bermuatan negatif akibat gugus fosfatnya.',
      },
      {
        id: 'B',
        text: 'Fragmen DNA yang berukuran paling pendek (jumlah base pairs / bp paling kecil) akan bermigrasi paling jauh menembus pori-pori gel agarosa menuju dasar gel.',
      },
      {
        id: 'C',
        text: 'Individu B2 dan B3 memiliki profil kesamaan pita DNA yang paling identik, mengindikasikan tingkat kekerabatan genetik yang sangat dekat.',
      },
      {
        id: 'D',
        text: 'Fragmen DNA bermigrasi ke kutub negatif karena basa nitrogen adenin dan guanin bermuatan positif kuat.',
      },
      {
        id: 'E',
        text: 'Ukuran fragmen DNA tidak berpengaruh sama sekali terhadap kecepatan migrasi di dalam matriks gel agarosa.',
      },
    ],
    correctAnswerPGK: ['A', 'B', 'C'],
    discussion: {
      coreConcept:
        'Elektroforesis gel memisahkan makromolekul DNA berdasarkan ukuran molekul (panjang pasang basa) memanfaatkan medan listrik dan matriks pori gel agarosa.',
      stimulusAnalysis:
        'Pita DNA terlihat bermigrasi dari sumur atas (-) menuju bawah (+). Marka ladder menunjukkan pita kecil di dasar dan pita besar di dekat sumur. Pita individu B2 dan B3 memiliki posisi garis yang nyaris serasi.',
      biologicalProcess:
        'Gugus fosfat (PO4^3-) pada deoksiribosa memberikan muatan negatif seragam pada DNA, sehingga molekul tertarik ke kutub positif. Matriks gel bertindak sebagai saringan molekuler: fragmen kecil bergerak lincah menembus pori gel (bergerak jauh), sedangkan fragmen besar tertahan (bergerak dekat sumur).',
      answerReasoning:
        'Pernyataan A, B, dan C tepat sesuai prinsip biologi molekuler. Pernyataan D salah (arah migrasi ke anoda positif). Pernyataan E salah karena ukuran fragmen adalah faktor penentu utama laju migrasi.',
      scientificConclusion:
        'Mobilitas elektroforetik DNA berbanding terbalik dengan logaritma ukuran molekul fragmennya pada medan listrik bertegangan tetap.',
    },
    quickTrick:
      'Prinsip elektroforesis DNA Miss Mega: "Kecil lincah lari paling jauh ke bawah; Besar berat lambat tertinggal di atas". DNA bermuatan negatif, jadi selalu mengejar kutub positif!',
    narration: {
      stimulusIntro:
        'Perhatikan foto hasil elektroforesis gel agarosa DNA pada stimulus di layar. Cermati posisi sumuran di atas dan pita-pita DNA yang menyebar ke arah bawah.',
      questionGuide:
        'Ingat muatan listrik alami DNA, mengapa DNA bergerak ke bawah, dan ukuran pita mana yang mampu berlari paling cepat menembus pori gel.',
      discussionVoice:
        'Pembahasan Miss Mega: Molekul DNA memiliki gugus fosfat bermuatan negatif, sehingga saat dialiri listrik, DNA akan meluncur menuju kutub positif di bawah. Pita DNA yang kecil dan pendek bergerak gesit menembus jala gel, sehingga berada di posisi paling bawah. Kesamaan pita B2 dan B3 membuktikan hubungan kekerabatan yang sangat dekat.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Ingat analogi saringan: partikel kecil meluncur paling jauh ke bawah, partikel besar tersangkut di atas!',
    },
    keyTakeaway:
      'Muatan seragam fosfat dan efek pengayakan matriks gel memungkinkan pemisahan fragmen DNA murni berdasarkan panjang fragmen.',
  },

  {
    id: 30,
    category: 'Keterampilan Proses dan Penalaran Biologi',
    categorySlug: 'penalaran-ilmiah',
    type: 'BS',
    cognitiveLevel: 'C5',
    title: 'Desain Eksperimen Fototropisme Tumbuhan dan Mekanisme Distribusi Hormon Auksin',
    stimulusNarrative:
      'Seorang siswa mereplikasi eksperimen klasik Went dan Darwin mengenai fototropisme pada koleoptil kecambah gandum (Avena sativa). Lima koleoptil diberi perlakuan berbeda terhadap cahaya unilateral (dari arah samping kanan): (1) Kontrol utuh; (2) Ujung koleoptil dipotong; (3) Ujung ditutup tudung buram kedap cahaya; (4) Disisipkan lempeng mika kedap air di sisi gelap; (5) Disisipkan lempeng agar-agar permeabel di sisi gelap.',
    stimulusImageId: 'q30-auxin-phototropism',
    imageCaption: 'Ilustrasi Desain Eksperimen Klasik Fototropisme Koleoptil terhadap Cahaya Unilateral',
    questionText:
      'Berdasarkan prinsip kerja hormon auksin (IAA) pada eksperimen fototropisme di stimulus, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statementsBS: [
      {
        id: '1',
        statement:
          'Koleoptil (1) akan membengkok ke arah datangnya cahaya karena hormon auksin bermigrasi secara lateral ke sisi gelap, memicu elongasi (pemanjangan) sel yang lebih cepat pada sisi gelap tersebut.',
        correctAnswer: 'BENAR',
        rationale:
          'Cahaya menginduksi translokasi auksin ke sisi ternaungi/gelap, menyebabkan sisi gelap tumbuh lebih cepat sehingga batang melengkung ke cahaya.',
      },
      {
        id: '2',
        statement:
          'Koleoptil (2) yang dipotong ujung apikalnya tetap membengkok secara normal ke arah cahaya karena auksin diproduksi di akar gandum lalu naik ke pucuk.',
        correctAnswer: 'SALAH',
        rationale:
          'Ujung pucuk (meristem apikal) adalah produsen utama auksin; pemotongan ujung menghilangkan sumber auksin sehingga tidak ada pemanjangan atau fototropisme.',
      },
      {
        id: '3',
        statement:
          'Koleoptil (5) dengan blok agar-agar tetap mampu membengkok ke arah cahaya karena molekul auksin dapat berdifusi larut melintasi agar-agar hidrofilik.',
        correctAnswer: 'BENAR',
        rationale:
          'Agar-agar bersifat permeabel terhadap zat kimia larut air seperti auksin, sehingga auksin tetap mengalir ke zona pemanjangan.',
      },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'BENAR',
    },
    discussion: {
      coreConcept:
        'Fototropisme adalah gerak tumbuh bagian tumbuhan menuju arah datangnya rangsangan cahaya (fototropisme positif), dimediasi oleh distribusi asimetris hormon auksin (IAA).',
      stimulusAnalysis:
        'Eksperimen membuktikan: Ujung apikal adalah sensor penerima cahaya dan produsen auksin. Sisi gelap menerima konsentrasi auksin lebih tinggi daripada sisi terang.',
      biologicalProcess:
        'Auksin memicu hipotesis pertumbuhan asam (acid growth hypothesis): proton H+ dipompa ke dinding sel, mengaktifkan enzim ekspansin yang melonggarkan mikrofibril selulosa. Karena sisi gelap memiliki lebih banyak auksin, sel-sel sisi gelap memanjang lebih cepat dibanding sisi terang, mendorong pucuk membengkok ke sumber cahaya.',
      answerReasoning:
        'Pernyataan 1 BENAR (mekanisme fototropisme auksin). Pernyataan 2 SALAH (ujung pucuk adalah penghasil auksin; jika dipotong, tumbuhan tidak memanjang atau membengkok). Pernyataan 3 BENAR (mika kedap memblokir auksin, sedangkan agar-agar permeable meloloskan auksin).',
      scientificConclusion:
        'Fototropisme positif terjadi karena asimetri konsentrasi auksin akibat migrasi lateral ke sisi terlindung, merangsang elongasi diferensial dinding sel tumbuhan.',
    },
    quickTrick:
      'Prinsip auksin Miss Mega: "Auksin alergi cahaya, ia kabur ngumpet ke sisi gelap!" Karena sisi gelap banyak auksin, sisi gelap tumbuh lebih panjang, membuat pucuk terdorong membungkuk hormat ke arah matahari.',
    narration: {
      stimulusIntro:
        'Perhatikan ilustrasi eksperimen fototropisme pada stimulus visual. Amati perlakuan pada lima pucuk kecambah yang disinari cahaya dari sisi kanan.',
      questionGuide:
        'Hubungkan produksi auksin di ujung pucuk dengan sifat auksin yang berpindah ke sisi gelap. Nilai ketiga pernyataan eksperimen.',
      discussionVoice:
        'Pembahasan Miss Mega: Ingat, auksin diproduksi di ujung pucuk dan menyukai sisi gelap. Ketika disinari dari samping, auksin kabur ke sisi gelap dan membuat sel-sel di sisi gelap memanjang lebih cepat, sehingga pucuk membengkok ke arah cahaya. Jika ujung pucuk dipotong, tidak ada lagi auksin yang diproduksi.',
      quickTrickVoice:
        'Trik cepat Miss Mega: Auksin kabur ke sisi gelap dan memanjangkan sisi gelap. Agar-agar meloloskan auksin, sedangkan mika menghalangi auksin!',
    },
    keyTakeaway:
      'Pergerakan auksin ke sisi ternaungi memicu pemanjangan sel asimetris yang mengarahkan fotosintesis menuju foton cahaya.',
  },
];
