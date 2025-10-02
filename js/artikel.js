document.addEventListener("DOMContentLoaded", () => {
  const artCards = document.querySelectorAll(".art-card");
  const searchInput = document.getElementById("search-article");

  // Animasi scroll reveal
  artCards.forEach(card => {
    card.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(card);
  });

  // Pencarian artikel
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    document.querySelectorAll("#article-list article").forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(keyword) ? "block" : "none";
    });
  });
});


// js/artikel.js
document.addEventListener("DOMContentLoaded", () => {
  // DATA ARTIKEL / VIDEO
  const articles = [
    {
      id: "telkom-umkm",
      type: "artikel",
      title: "Telkom Dorong UMKM Naik Kelas lewat Teknologi",
      excerpt: "Telkom mempercepat adopsi teknologi bagi puluhan ribu UMKM melalui UMK Digital Fest 2025.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      full: "Telkom lewat UMK Digital Fest 2025 memberikan pelatihan, marketplace integration, dan dukungan modal bagi 88.251 UMKM agar punya kompetensi digital dan akses pasar global. Program meliputi workshop, pemasaran digital, serta integrasi ke platform e-commerce.",
      source: "Kompas",
      url: "https://biz.kompas.com/read/2025/08/04/170124928/telkom-dorong-umkm-naik-kelas-lewat-teknologi-di-umk-digital-fest-2025",
      date: "Agustus 2025"
    },
    {
      id: "umkm-ai",
      type: "video",
      title: "Pemerintah Dorong UMKM Manfaatkan AI",
      excerpt: "Inisiatif pemanfaatan kecerdasan buatan untuk meningkatkan daya saing UMKM.",
      image: "https://img.youtube.com/vi/auYBtPeLGME/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/auYBtPeLGME",
      full: "Program edukasi AI untuk UMKM fokus pada otomasi pemasaran, analisis data pelanggan, dan prediksi stok agar UMKM lebih efisien dan responsif terhadap pasar.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=auYBtPeLGME",
      date: "2025"
    },
    {
      id: "webinar-umkm-digital",
      type: "video",
      title: "UMKM Naik Kelas: Solusi Komprehensif Digital",
      excerpt: "Webinar strategi digitalisasi bagi UMKM agar mampu bersaing di era digital.",
      image: "https://img.youtube.com/vi/4VHf_ll9BgM/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/4VHf_ll9BgM",
      full: "Webinar ini membahas bagaimana UMKM dapat memanfaatkan kanal digital, otomasi operasional, pemasaran online, hingga manajemen keuangan agar mereka dapat naik kelas dan bertahan di persaingan global.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=4VHf_ll9BgM",
      date: "2025"
    },
    {
      id: "webinar-edukasi-pajak",
      type: "video",
      title: "Edukasi Pajak UMKM Indonesia",
      excerpt: "Video edukasi mengenai kewajiban & insentif pajak bagi UMKM.",
      image: "https://img.youtube.com/vi/cl71HI6UN3s/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/cl71HI6UN3s",
      full: "Materi membahas cara pelaporan pajak, jenis pajak UMKM, serta insentif yang bisa dimanfaatkan agar usaha tetap legal dan menguntungkan.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=cl71HI6UN3s",
      date: "2025"
    },
    {
      id: "podcast-strategi-umkm",
      type: "video",
      title: "IAI Podcast: Strategi UMKM Naik Kelas",
      excerpt: "Podcast diskusi strategi agar UMKM dapat tumbuh & berkembang.",
      image: "https://img.youtube.com/vi/PlsqfYxRC-Q/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/PlsqfYxRC-Q",
      full: "Pembahasan mencakup inovasi produk, digital marketing, manajemen keuangan, serta kolaborasi antar pelaku usaha agar UMKM bisa naik kelas.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=PlsqfYxRC-Q",
      date: "2025"
    },
    {
      id: "webinar-umkm-training",
      type: "video",
      title: "Webinar Digitalisasi UMKM",
      excerpt: "Pelatihan digitalisasi & strategi pemasaran digital untuk UMKM.",
      image: "https://img.youtube.com/vi/vcTSvaSzYJc/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/vcTSvaSzYJc",
      full: "Webinar yang diadakan Kementerian Komunikasi & Digital membahas transformasi digital UMKM, pesaing global, serta ekosistem startup di Indonesia.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=vcTSvaSzYJc",
      date: "2025"
    },
    {
      id: "video-umkm-live",
      type: "video",
      title: "UKM Live! Edukasi UMKM",
      excerpt: "Program live streaming edukasi beragam topik usaha & digital.",
      image: "https://img.youtube.com/vi/VPWMr-u85PI/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/VPWMr-u85PI",
      full: "UKM Live! menyajikan sesi edukasi, tanya jawab, dan strategi bisnis digital untuk pelaku UMKM agar terus adaptif di masa kini.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=VPWMr-u85PI",
      date: "2025"
    },
    {
      id: "video-umkm-adalah-kita",
      type: "video",
      title: "UMKM Adalah Kita",
      excerpt: "Video motivasi & edukasi agar UMKM dianggap sebagai bagian penting ekonomi.",
      image: "https://img.youtube.com/vi/Opksxsx8Sjw/maxresdefault.jpg",
      embed: "https://www.youtube.com/embed/Opksxsx8Sjw",
      full: "Menyuarakan bahwa UMKM adalah bagian dari masyarakat—melalui pendidikan, akses ke pasar, dan dukungan kebijakan agar tumbuh sehat.",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=Opksxsx8Sjw",
      date: "2025"
    }, {
      id: "video-marketing-tips",
      type: "artikel",
      title: "5 Tips Video Marketing YouTube untuk UKM & UMKM",
      excerpt: "Tips memanfaatkan video marketing agar jangkauan produk UKM/UMKM makin luas.",
      image: "https://img.youtube.com/vi/auYBtPeLGME/maxresdefault.jpg",  // ini bisa diganti thumbnail sesuai video yang dimaksud
      full: "Video marketing bisa menjadi senjata ampuh untuk UKM: buat konten storytelling, tampilkan keunggulan produk, gunakan SEO YouTube, konsisten upload, dan promosikan video ke media sosial.",
      source: "Redcomm",
      url: "https://redcomm.co.id/knowledges/tips-video-marketing-youtube-untuk-umkm",
      date: "Mei 2021"
    }
  ];


  const articleList = document.getElementById("article-list");
  const modal = document.getElementById("article-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("close-modal");
  const searchInput = document.getElementById("search");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Render Cards
  function renderArticles(list) {
    articleList.innerHTML = "";
    list.forEach((a, i) => {
      const card = document.createElement("article");
      card.className = `
        art-card cursor-pointer rounded-xl overflow-hidden 
        shadow hover:shadow-2xl transition-all duration-500 bg-white
        transform hover:-translate-y-1
      `;
      card.dataset.id = a.id;

      const media = `<img src="${a.image}" alt="${a.title}" class="w-full h-44 object-cover">`;

      card.innerHTML = `
        ${media}
        <div class="p-4 flex flex-col justify-between h-[160px]">
          <div>
            <h4 class="font-semibold text-green-800 mb-1">${a.title}</h4>
            <p class="text-sm text-gray-700 mb-2">${a.excerpt}</p>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">${a.source} • ${a.date}</span>
            <button 
              class="bg-green-600 text-white text-xs px-3 py-1 rounded-md 
                     hover:bg-green-700 transition relative overflow-hidden read-link" 
              data-id="${a.id}">
              Detail
            </button>
          </div>
        </div>
      `;

      // Tambahkan delay animasi per card
      card.style.transitionDelay = `${i * 100}ms`;
      card.classList.add("opacity-0", "translate-y-6");

      articleList.appendChild(card);
    });

    // Scroll reveal effect
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".art-card").forEach(card => {
      observer.observe(card);
    });
  }

  // Open Modal with smooth animation
  function openModalWith(id) {
    const art = articles.find(x => x.id === id);
    if (!art) return;

    const media = art.type === "video" && art.embed
      ? `<iframe src="${art.embed}" class="w-full h-56 md:h-72 rounded-lg" frameborder="0" allowfullscreen></iframe>`
      : `<img src="${art.image}" alt="${art.title}" class="w-full h-56 md:h-72 object-cover rounded-lg">`;

    modalContent.innerHTML = `
      ${media}
      <h2 class="text-2xl font-bold text-green-700 mt-4">${art.title}</h2>
      <p class="text-sm text-gray-500 mb-3">${art.source} • ${art.date}</p>
      <p class="text-gray-700 mb-6">${art.full}</p>
      <div class="flex justify-end">
        <a href="${art.url}" target="_blank" 
           class="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
           Baca Selengkapnya
        </a>
      </div>
    `;

    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("opacity-100");
      modalContent.parentElement.classList.add("scale-100");
    }, 50);
  }

  function closeModal() {
    modal.classList.remove("opacity-100");
    modalContent.parentElement.classList.remove("scale-100");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Ripple effect for button
  articleList.addEventListener("click", e => {
    const btn = e.target.closest(".read-link");
    const card = e.target.closest(".art-card");
    let id = btn ? btn.dataset.id : card?.dataset.id;

    if (btn) {
      const ripple = document.createElement("span");
      ripple.className = "absolute bg-white/30 rounded-full animate-ping";
      ripple.style.width = ripple.style.height = "100px";
      ripple.style.left = `${e.offsetX - 50}px`;
      ripple.style.top = `${e.offsetY - 50}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    if (id) openModalWith(id);
  });

  // Filter
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("bg-green-600", "text-white"));
      btn.classList.add("bg-green-600", "text-white");
      const f = btn.dataset.filter;
      if (f === "all") renderArticles(articles);
      else renderArticles(articles.filter(a => a.type === f));
    });
  });

  // Search
  searchInput.addEventListener("input", e => {
    const kw = e.target.value.toLowerCase();
    const filtered = articles.filter(a =>
      (a.title + a.excerpt + a.full + a.source).toLowerCase().includes(kw)
    );
    renderArticles(filtered);
  });

  // Initial render
  renderArticles(articles);
});

