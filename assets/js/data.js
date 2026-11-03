
/* ==========================================
   PORTFOLIO ? data.js
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
  phone: "+62 857 7821 8875",
  wa: "+62 857 7821 8875",
  location: "Jakarta, Indonesia",
  available: "Tersedia untuk proyek freelance & Paruh Penuh",

  socials: [
    { name: "GitHub", url: "https://github.com/dwisetiono014", icon: "github" },
    { name: "Facebook", url: "https://www.facebook.com/share/1E9uV92dKm/?mibextid=wwXIfr", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/dwsans007?vrfl=Z2VtbDEwMjIxbjZq&utm_source=qr", icon: "instagram" },
    { name: "Tiktok", url: "www.tiktok.com/@dan.family1", icon: "tiktok" },
    { name: "Email", url: "mailto:sansdwi007@gmail.com", icon: "mail" }
  ],

  typing: [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Web Developer",
    "Problem Solver",
    "Open to Collaboration"
  ],

  stats: [
    { value: 4, suffix: "+", label: "Tahun Pengalaman" },
    { value: 12, suffix: "+", label: "Proyek Selesai" },
    { value: 10, suffix: "+", label: "Klien Dilayani" },
    { value: 98, suffix: "%", label: "Tingkat Kepuasan" }
  ],

  categories: ["Semua", "Web App", "Landing Page", "E-Commerce"],

  /* Daftar proyek */
  projects: [
    {
      id: 1,
      title: "Aplikasi Neraca Energi",
      category: "Web App",
      year: 2024,
      featured: true,
      icon: "<img src='./assets/img/ne.png' alt='Neraca Energi'>",
      desc: "Aplikasi Transaksi Tenaga Listrik PLN Jawa Madura Bali.",
      longDesc: "Aplikasi ini adalah Aplikasi Transaksi Tenaga Listrik PLN Jawa Madura Bali serta seluruh Indonesia, di peruntukan tansaksi antara pihak PLN Se-Indonesia kepada Pembangkit di luar ataupun di dalam PLN.",
      highlights: ["Summary Data", "Digital Sign", "Report BA 1"],
      tags: ["PHP", "HTML", "CSS", "JavaScript", "REST API"],
      demo: "https://neracaenergi.pln-jawa-bali.co.id/ds/",
      repo: "https://github.com/username-kamu/proyek-satu",
      role: "Programmer/Frontend Developer",
      client: "PT PLN Persero",
      duration: "12 bulan"
    },
    {
      id: 2,
      title: "Aplikasi AMR Management",
      category: "Web App",
      year: 2023,
      featured: true,
      icon: "<img src='./assets/img/amr.png' alt='AMR Management'>",
      desc: "Aplikasi Metering PLN.",
      longDesc: "Aplikasi Metering PLN ini adalah aplikasi untuk pengambilan data dari metering di olah dalam aplikasi yang nantinya akan di Singkronkan pada aplikasi Neraca Energi untuk dilakukan Transaksi Tenaga Listrik.",
      highlights: ["Master Data Metering", "Get Manual Load Profile", "Reporting Data Load Profile"],
      tags: ["PHP", "HTML", "CSS", "JavaScript", "JQuery", "REST API"],
      demo: "https://amr.pln-jawa-bali.co.id/",
      repo: "https://github.com/username-kamu/proyek-dua",
      role: "Programmer/Frontend Developer/Backend Developer",
      client: "PT PLN Persero",
      duration: "12 bulan"
    },
    {
      id: 3,
      title: "Aplikasi Rapsodi",
      category: "Web App",
      year: 2025,
      featured: true,
      icon: "<img src='./assets/img/rapsodi.png' alt='Rapsodi'>",
      desc: "Aplikasi Pencatatan Start Stop Pembangkit.",
      longDesc: "Aplikasi ini melakukan pencatatan Start Stop Pembangkit, yang akan di lakukan evaluasi terhadap kinerja pembangkitan.",
      highlights: ["Graph LDC", "Reporting", "Planing"],
      tags: ["PHP", "HTML", "CSS", "JavaScript", "JQuery", "REST API"],
      demo: "https://hdks.pln-jawa-bali.co.id/",
      repo: "https://github.com/username-kamu/proyek-tiga",
      role: "Programmer/Frontend Developer/Backend Developer",
      client: "PT PLN Persero Jawa Madura Bali (JAMALI)",
      duration: "6 bulan"
    },
    {
      id: 4,
      title: "Webtrack",
      category: "E-Commerce",
      year: 2026,
      featured: false,
      icon: "<img src='./assets/img/webtrack.png' alt='Webtrack'>",
      desc: "Toko online dengan keranjang belanja dan alur checkout ringkas.",
      longDesc: "Aplikasi E-Commerce sekaligus berlangganan tracking.",
      highlights: ["Keranjang dan checkout", "Payment gateway", "Tracking Subsriber"],
      tags: ["JavaScript", "PHP", "MySQL", "JQuery", "REST API"],
      demo: "https://webtrack.id",
      repo: "https://github.com/username-kamu/proyek-empat",
      role: "Programmer/Frontend Developer/Backend Developer",
      client: "PT. Webcenter Sentra Solusindo",
      duration: "6 bulan"
    },
    {
      id: 5,
      title: "Aplikasi PPA",
      category: "Web App",
      year: 2025,
      featured: false,
      icon: "<img src='./assets/img/ppa.png' alt='PPA'>",
      desc: "Aplikasi Power Purchase Agreement (PPA).",
      longDesc: "Aplikasi PPA ini adalah aplikasi pembayaran/tagihan dari pihak PLN ke pihak pembangkit atau distribusi.",
      highlights: ["Master Rumus Perhitungan", "Report Tagihan", "BA 2", "JTF (Tagihan Final)"],
      tags: ["PHP", "HTML", "CSS", "JavaScript", "JQuery", "Service"],
      demo: "https://hdks.pln-jawa-bali.co.id/~ppa/",
      repo: "https://github.com/username-kamu/proyek-lima",
      role: "Programmer/Frontend Developer/Backend Developer",
      client: "PT PLN Persero Jawa Madura Bali (JAMALI)",
      duration: "12 bulan"
    },
    {
      id: 6,
      title: "Aplikasi Netmoon",
      category: "Landing Page",
      year: 2026,
      featured: false,
      icon: "<img src='./assets/img/netmon.png' alt='NetMoon'>",
      desc: "Aplikasi jaringan Office dan VPN.",
      longDesc: "Aplikasi yang memantau Jaringan VPN dan internet kantor serta melakukan Loging.",
      highlights: ["Copywriting", "Graph"],
      tags: ["PHP", "JSON", "HTML", "CSS", "Analytics", "Javascript"],
      demo: "https://netmon.webcenter.co.id/",
      repo: "https://github.com/username-kamu/proyek-enam",
      role: "Programmer/Frontend Developer",
      client: "PT Webcenter Sentra Solusindo",
      duration: "2 minggu"
    }
  ],

  skills: [
    { name: "PHP", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS (Flexbox, Grid, Animasi, Bootstrap)", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "JQuery", level: 90 },
    { name: "Responsive Design", level: 92 },
    { name: "MySQL SQL", level: 80 },
    { name: "ORACLE SQL", level: 80 },
    { name: "Git dan CI/CD", level: 70 }
  ],

  tools: [
    "VS Code", "WinsCP", "Git", "GitHub", "Navicat", "Postman",
    "Putty", "AI Agent", "Remote Dekstop", "Tailwind CSS", "Bootstrap", "Brup Suite"
  ],

  timeline: [
    {
      year: "2022 sampai Sekarang",
      title: "Programmer/Web Developer di PT WebCenter Sentra Solusindo",
      // desc: "Mengembangkan aplikasi berbasis web menggunakan PHP, HTML, CSS, JavaScript, dan database MySQL / ORACLE ,Melakukan analisis kebutuhan serta menerjemahkan requirement dari user menjadi fitur aplikasi. Melakukan perbaikan bug, troubleshooting, dan maintenance terhadap aplikasi yang sudah berjalan. Mengembangkan fitur baru serta melakukan penyesuaian pada sistem sesuai kebutuhan operasional perusahaan. Melakukan pengelolaan database, termasuk membuat dan mengoptimalkan query SQL. Melakukan pengujian aplikasi sebelum digunakan oleh user serta memastikan fitur berjalan sesuai kebutuhan. Memberikan dukungan teknis apabila terdapat kendala atau error pada aplikasi yang digunakan."
      desc: "Mengembangkan aplikasi berbasis web menggunakan PHP, HTML, CSS, JavaScript, dan database MySQL / Oracle.\n" +
      "Melakukan analisis kebutuhan serta menerjemahkan requirement dari user menjadi fitur aplikasi.\n" +
      "Melakukan perbaikan bug, troubleshooting, dan maintenance terhadap aplikasi yang sudah berjalan.\n" +
      "Mengembangkan fitur baru serta melakukan penyesuaian pada sistem sesuai kebutuhan operasional perusahaan.\n" +
      "Melakukan pengelolaan database, termasuk membuat dan mengoptimalkan query SQL.\n" +
      "Melakukan pengujian aplikasi sebelum digunakan oleh user serta memastikan fitur berjalan sesuai kebutuhan.\n" +
      "Memberikan dukungan teknis apabila terdapat kendala atau error pada aplikasi yang digunakan."
    }
  ],

  certifications: [
    { title: "Nama Sertifikasi 1", issuer: "Lembaga penerbit", year: 2025 },
    { title: "Nama Sertifikasi 2", issuer: "Lembaga penerbit", year: 2024 },
    { title: "Nama Sertifikasi 3", issuer: "Lembaga penerbit", year: 2024 }
  ]
};

window.PORTFOLIO = PORTFOLIO;
