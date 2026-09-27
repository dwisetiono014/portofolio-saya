/* ==========================================
   PORTFOLIO — data.js
   Semua konten (proyek, skill, sosial) ada di
   file ini. Ganti sesuai kebutuhanmu.
   ========================================== */

const PORTFOLIO = {
  name: "Dwi Setiono",
  shortName: "Dwi",
  initials: "DS",
  role: "Frontend Developer,Backend Developer,Fullstack Developer,Web Developer",
  tagline: "Saya membangun antarmuka web yang cepat, aksesibel, dan enak dilihat.",
  email: "sansdwi007@gmail.com",
  phone: "+62 857 1723 8143 / +62 857 7821 8875",
  location: "Jakarta, Indonesia",
  available: "Tersedia untuk proyek freelance & Paruh Penuh",

  /* Ganti dengan username GitHub-mu */
  socials: [
    { name: "GitHub", url: "https://github.com/dwisetiono014", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/username-kamu", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com/username.kamu", icon: "instagram" },
    { name: "X", url: "https://x.com/usernamekamu", icon: "x" },
    { name: "Email", url: "sansdwi007@gmail.com", icon: "mail" }
  ],

  /* Teks animasi di hero */
  typing: [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Web Developer",
    "Problem Solver",
    "Open to Collaboration"
  ],

  /* Angka statistik (dipakai juga sebagai counter) */
  stats: [
    { value: 4, suffix: "+", label: "Tahun Pengalaman" },
    { value: 12, suffix: "+", label: "Proyek Selesai" },
    { value: 10, suffix: "+", label: "Klien Dilayani" },
    { value: 98, suffix: "%", label: "Tingkat Kepuasan" }
  ],

  /* Filter kategori proyek */
  categories: ["Semua", "Web App", "Landing Page", "E-Commerce"],

  /* Daftar proyek. featured: true = tampil di home */
  projects: [
    {
      id: 1,
      title: "Nama Proyek Satu",
      category: "Web App",
      year: 2025,
      featured: true,
      icon: "◆",
      desc: "Deskripsi singkat satu kalimat tentang proyek ini.",
      longDesc: "Jelaskan lebih detail: masalah yang diselesaikan, fitur utama, dan dampaknya bagi pengguna. Tulis 2 sampai 3 kalimat yang jelas.",
      highlights: ["Fitur utama satu", "Fitur utama dua", "Fitur utama tiga"],
      tags: ["HTML", "CSS", "JavaScript", "REST API"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-satu",
      role: "Frontend Developer",
      client: "Nama Klien",
      duration: "3 bulan"
    },
    {
      id: 2,
      title: "Nama Proyek Dua",
      category: "Landing Page",
      year: 2025,
      featured: true,
      icon: "▲",
      desc: "Deskripsi singkat satu kalimat tentang proyek ini.",
      longDesc: "Jelaskan lebih detail: tujuan halaman, elemen interaktif yang dipakai, dan hasilnya dari sisi konversi.",
      highlights: ["Desain responsif penuh", "Animasi saat scroll", "Struktur SEO friendly"],
      tags: ["JavaScript", "GSAP", "Tailwind"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-dua",
      role: "Frontend Developer",
      client: "Startup Lokal",
      duration: "1 bulan"
    },
    {
      id: 3,
      title: "Nama Proyek Tiga",
      category: "UI Component",
      year: 2024,
      featured: true,
      icon: "●",
      desc: "Kumpulan komponen UI reusable lengkap dengan dokumentasi.",
      longDesc: "Jelaskan lebih detail: jumlah komponen, pendekatan desain yang dipakai, dan bagaimana komponen ini dipakai ulang di banyak proyek.",
      highlights: ["40+ komponen", "Mode dark dan light", "Navigasi keyboard"],
      tags: ["CSS", "Web Components", "Storybook"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-tiga",
      role: "Frontend Developer",
      client: "Proyek Internal",
      duration: "2 bulan"
    },
    {
      id: 4,
      title: "Webtrack",
      category: "E-Commerce",
      year: 2024,
      featured: false,
      icon: "■",
      desc: "Toko online dengan keranjang belanja dan alur checkout ringkas.",
      longDesc: "Jelaskan lebih detail: alur belanja, integrasi pembayaran, dan pengoptimalan yang dilakukan agar halaman tetap cepat dimuat.",
      highlights: ["Keranjang dan checkout", "Payment gateway", "Optimasi performa"],
      tags: ["JavaScript", "PHP", "MySQL"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-empat",
      role: "Frontend Developer",
      client: "PT. Webcenter Sentra",
      duration: "4 bulan"
    },
    {
      id: 5,
      title: "Nama Proyek Lima",
      category: "Web App",
      year: 2023,
      featured: false,
      icon: "◈",
      desc: "Dashboard analitik dengan visualisasi data yang interaktif.",
      longDesc: "Jelaskan lebih detail: sumber data, jenis grafik yang dipakai, dan fitur filter interaktif yang disediakan untuk pengguna.",
      highlights: ["Grafik interaktif", "Filter dinamis", "Export laporan"],
      tags: ["JavaScript", "Chart.js", "REST API"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-lima",
      role: "Frontend Developer",
      client: "Agensi",
      duration: "2 bulan"
    },
    {
      id: 6,
      title: "Nama Proyek Enam",
      category: "Landing Page",
      year: 2023,
      featured: false,
      icon: "★",
      desc: "Landing page campaign dengan animasi dan uji A/B.",
      longDesc: "Jelaskan lebih detail: tujuan campaign, strategi konten, dan hasil yang terukur lewat uji A/B pada dua versi halaman.",
      highlights: ["Copywriting", "Uji A/B", "Konversi naik 38 persen"],
      tags: ["HTML", "CSS", "Analytics"],
      demo: "https://demo-kamu.netlify.app",
      repo: "https://github.com/username-kamu/proyek-enam",
      role: "Frontend Developer",
      client: "Brand Campaign",
      duration: "2 minggu"
    }
  ],

  /* Skill utama (bar persen) */
  skills: [
    { name: "HTML dan Semantic Markup", level: 95 },
    { name: "CSS (Flexbox, Grid, Animasi)", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Responsive Design", level: 92 },
    { name: "React / Next.js", level: 75 },
    { name: "Git dan CI/CD", level: 70 }
  ],

  /* Tools yang dikuasai */
  tools: [
    "VS Code", "Figma", "Git", "GitHub", "Chrome DevTools", "Postman",
    "Netlify", "Vercel", "npm", "Tailwind CSS", "Vite", "Terminal"
  ],

  /* Riwayat pada halaman About */
  timeline: [
    {
      year: "2023 sampai Sekarang",
      title: "Frontend Developer di Nama Perusahaan",
      desc: "Jelaskan tanggung jawabmu di sini: fitur yang dibangun, ukuran tim, dan pencapaian utama yang paling terasa."
    },
    {
      year: "2022 sampai 2023",
      title: "Junior Web Developer di Nama Perusahaan",
      desc: "Ceritakan aktivitasmu: halaman yang dikerjakan, proses belajar, dan hasil yang kamu dapatkan."
    },
    {
      year: "2021 sampai 2022",
      title: "Freelance Web Developer",
      desc: "Jelaskan jenis klien yang dilayani dan kisaran proyek yang pernah dikerjakan."
    },
    {
      year: "2020 sampai 2021",
      title: "Belajar dan Berlatih Sendiri",
      desc: "Sebutkan course, bootcamp, atau komunitas tempat kamu belajar dasar-dasar web development."
    }
  ],

  /* Sertifikasi */
  certifications: [
    { title: "Nama Sertifikasi 1", issuer: "Lembaga penerbit", year: 2025 },
    { title: "Nama Sertifikasi 2", issuer: "Lembaga penerbit", year: 2024 },
    { title: "Nama Sertifikasi 3", issuer: "Lembaga penerbit", year: 2024 }
  ]
};

window.PORTFOLIO = PORTFOLIO;
