(function () {
  "use strict";

  var CV = "img/CV_Muhammad_Jodra_Armiza_2026.pdf";

  // English text lives in index.html; this holds the Indonesian version.
  var id = {
    "hero.subtitle": "Sarjana Ilmu Komputer (Teknik Informatika) dari BINUS University",

    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.skills": "Keahlian",
    "nav.portfolio": "Portofolio",
    "nav.contact": "Kontak",

    "about.name": "Nama: ",
    "about.profile": "Profil: ",
    "about.education": "Pendidikan: ",
    "about.major": "Jurusan: ",
    "about.majorValue": "Ilmu Komputer",
    "about.gpa": "IPK: ",
    "about.skill": "Keahlian",
    "about.goLang": "Bahasa Go",
    "about.webDev": "Pengembangan Web (HTML, CSS, JavaScript)",
    "about.title": "Tentang Saya",
    "about.p1": "Saya Muhammad Jodra Armiza, lulusan Ilmu Komputer dari Universitas Bina Nusantara. Sebagai Data Analyst, Data Engineer, Software Developer, dan Front-End Programmer yang memiliki minat besar pada machine learning dan pemecahan masalah nyata, saya aktif mencari kesempatan untuk menerapkan keahlian saya dalam proyek yang berdampak.",
    "about.p2": "Saya telah mengerjakan berbagai proyek, termasuk Riset Klasifikasi Alzheimer, Desain Website VetDoc, dan Enkripsi Citra Digital, serta menyelesaikan magang selama satu tahun sebagai Full-Stack Developer di PT Zegen Solusi Mandiri, tempat saya membangun Learning Management System perusahaan menggunakan React TypeScript, Go (framework Echo), dan PostgreSQL. Keahlian teknis saya mencakup Python, SQL, Java, C, R, dan berbagai teknologi web modern.",
    "about.p3": "Saya siap berkontribusi dalam tim yang dinamis, mengembangkan solusi data untuk kebutuhan nyata, dan belajar dari para profesional industri. Minat saya ada di bidang Data Engineering, Software Development (spesialis Backend), dan Data Analytics, di mana saya yakin dapat memberikan dampak nyata.",
    "about.p4": 'Anda dapat mengunduh <a href="img/Resume_Muhammad Jodra Armiza.pdf" class="linked-text" download="Muhammad_Jodra_Armiza_Resume">Resume</a> dan <a href="' + CV + '" class="linked-text" download="CV_Muhammad_Jodra_Armiza_2026.pdf">CV</a> saya untuk informasi lebih lanjut.',

    "exp.title": "Pengalaman Kerja",
    "exp.subtitle": "Tempat saya menerapkan keahlian saya.",
    "exp.role": "Magang Full-Stack Developer",
    "exp.b1": "Direkrut sebagai Backend Developer dan dipercaya memegang penuh pengembangan full-stack Learning Management System (LMS) utama perusahaan, menggunakan React, TypeScript, dan Go (framework Echo).",
    "exp.b2": "Merancang sistem Role-Based Access Control (RBAC) yang dinamis dan menyusun berbagai modul pembelajaran dalam satu platform terpusat.",
    "exp.b3": "Mengelola arsitektur database dan integritas data dengan PostgreSQL, memastikan komunikasi client-server yang andal dan performa query yang baik.",
    "exp.b4": "Membangun dan memelihara komponen UI front-end dengan React dan TypeScript, menggunakan Chakra UI untuk tampilan yang responsif dan konsisten.",
    "exp.b5": "Menerjemahkan logika produk dan bisnis menjadi antarmuka front-end yang intuitif, meningkatkan navigasi dan kemudahan penggunaan secara keseluruhan.",
    "exp.note": "Diselesaikan dengan hasil <strong>Sangat Memuaskan</strong>.",

    "cv.subtitle": 'CV terbaru saya &mdash; <a href="' + CV + '" class="linked-text" download="CV_Muhammad_Jodra_Armiza_2026.pdf">klik di sini untuk mengunduh</a>.',
    "cv.fallback": 'Browser Anda tidak dapat menampilkan PDF di sini. <a href="' + CV + '" target="_blank" rel="noopener" class="linked-text">Buka CV di tab baru</a>.',
    "cv.button": "Klik di sini untuk mengunduh CV",

    "skills.title": "Apa yang bisa saya lakukan",
    "skills.subtitle": "Keahlian &amp; Kompetensi",
    "skills.webDesign": "Desain Web",
    "skills.webDev": "Pengembangan Web",
    "skills.dataAnalysis": "Analisis Data",
    "skills.dataViz": "Visualisasi Data",
    "skills.sql": "SQL &amp; Manajemen Database",
    "skills.webDesignDesc": "Saya merancang website yang mudah digunakan dan menarik secara visual, dengan fokus pada desain UI/UX menggunakan Figma.",
    "skills.webDevDesc": "Saya membangun website yang responsif dan fungsional menggunakan React TypeScript, Node.js, dan Golang dengan framework Echo.",
    "skills.dataAnalysisDesc": "Saya berfokus pada pembersihan, eksplorasi, dan analisis data menggunakan Python, R, dan SQL untuk menghasilkan insight yang dapat ditindaklanjuti dari data mentah.",
    "skills.mlDesc": "Saya antusias menerapkan algoritma machine learning untuk masalah nyata, dengan pengalaman dalam teknik klasifikasi, regresi, dan clustering.",
    "skills.dataVizDesc": "Saya membuat visualisasi yang intuitif dan informatif menggunakan library R dan Python seperti Matplotlib dan Seaborn untuk menyampaikan insight berbasis data secara efektif.",
    "skills.sqlDesc": "Saya memiliki keahlian kuat dalam SQL dan manajemen database, termasuk penulisan query, optimasi performa, dan pemeliharaan database relasional.",

    "stats.projects": "10+ Proyek",
    "stats.projectsDesc": "Proyek Analisis Data &amp; Machine Learning yang Telah Diselesaikan",
    "stats.years": "2+ Tahun",
    "stats.yearsDesc": "Pengalaman dalam Analisis Data &amp; Pemrograman",
    "stats.hours": "50+ Jam",
    "stats.hoursDesc": "Dihabiskan untuk Kursus Pembelajaran &amp; Sertifikasi",
    "stats.certs": "10 Sertifikasi",
    "stats.certsDesc": "Tersertifikasi di bidang SQL, Python, dan Analisis Data",

    "work.title": "Portofolio",
    "work.subtitle": "Berikut beberapa hasil karya saya.",
    "work.alzheimer": "Riset Klasifikasi Alzheimer",
    "work.vetdoc": "Desain Website VetDoc (Software Engineer)",
    "work.encryption": "Enkripsi Citra Digital",
    "work.lms": "LMS Zegen (Magang Fullstack)",
    "work.catWebDesign": "Desain Web",
    "work.catEncryption": "Enkripsi Citra",
    "work.catLms": "Pengembangan Web | React TypeScript, GO, PostgreSQL",

    "certs.title": "Sertifikat",
    "certs.subtitle": "Berikut beberapa sertifikat saya.",
    "certs.internship": "Magang Full-Stack Developer (Sangat Baik)",
    "certs.letter": "Surat Keterangan Magang (Sangat Memuaskan)",
    "certs.volunteer1": "Relawan: ESR Recycle",
    "certs.volunteer2": "Relawan: Save The Ocean",

    "contact.title": "Hubungi Saya",
    "contact.text": "Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berbincang. Jika Anda memiliki pertanyaan tentang karya saya, membutuhkan bantuan untuk sebuah proyek, atau sekadar ingin terhubung, jangan ragu untuk menghubungi saya. Saya menantikan kabar dari Anda!"
  };

  var STORAGE_KEY = "lang";
  var nodes = document.querySelectorAll("[data-i18n]");
  var english = {};
  nodes.forEach(function (el) {
    english[el.getAttribute("data-i18n")] = el.innerHTML;
  });

  var heroItems = document.querySelector(".text-slider-items");
  english["hero.subtitle"] = heroItems ? heroItems.textContent : "";

  /*--/ Language switch in the navbar /--*/
  var navList = document.querySelector("#navbarDefault .navbar-nav");
  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "lang-toggle";
  toggle.innerHTML = '<span data-lang="en">EN</span><span data-lang="id">ID</span>';
  if (navList) {
    var li = document.createElement("li");
    li.className = "nav-item lang-item";
    li.appendChild(toggle);
    navList.appendChild(li);
  }

  function restartTyping(text) {
    if (!window.Typed || !document.querySelector(".text-slider")) return;
    if (window.heroTyped) window.heroTyped.destroy();
    window.heroTyped = new Typed(".text-slider", {
      strings: [text],
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  var current = "en";

  function setLanguage(lang, animate) {
    if (lang !== "id") lang = "en";
    var dict = lang === "id" ? id : english;

    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = dict[key] !== undefined ? dict[key] : english[key];
    });

    document.documentElement.lang = lang;
    toggle.setAttribute("aria-label", lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
    toggle.classList.toggle("is-id", lang === "id");

    if (heroItems && (lang !== current || animate)) {
      heroItems.textContent = dict["hero.subtitle"];
      restartTyping(dict["hero.subtitle"]);
    }

    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  toggle.addEventListener("click", function () {
    setLanguage(current === "id" ? "en" : "id");
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved === "id") setLanguage("id");
  else toggle.setAttribute("aria-label", "Ganti ke Bahasa Indonesia");
})();
