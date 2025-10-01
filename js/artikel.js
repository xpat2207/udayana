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
      full: "Telkom lewat UMK Digital Fest 2025 memberikan pelatihan, marketplace integration, dan dukungan modal...",
      source: "Kompas",
      url: "https://biz.kompas.com/read/2025/08/04/170124928/telkom-dorong-umkm-naik-kelas-lewat-teknologi-di-umk-digital-fest-2025",
      date: "Agustus 2025"
    },
    {
      id: "umkm-ai",
      type: "video",
      title: "Pemerintah Dorong UMKM Manfaatkan AI",
      excerpt: "Inisiatif pemanfaatan kecerdasan buatan untuk meningkatkan daya saing UMKM.",
      image: "https://img.youtube.com/vi/auYBtPeLGME/maxresdefault.jpg", // thumbnail youtube
      embed: "https://www.youtube.com/embed/auYBtPeLGME",
      full: "Program edukasi AI untuk UMKM fokus pada otomasi pemasaran...",
      source: "YouTube",
      url: "https://www.youtube.com/watch?v=auYBtPeLGME",
      date: "2025"
    },
    {
      id: "tips-dm",
      type: "artikel",
      title: "5 Tips Digital Marketing untuk UMKM",
      excerpt: "Strategi praktis: optimasi profil, konten konsisten, pakai iklan tepat sasaran.",
      image: "https://images.unsplash.com/photo-1504691342899-9c3380b6f6d0?q=80&w=1200",
      full: "1) Optimalkan profil toko; 2) Buat konten berkualitas; 3) Gunakan foto produk yang baik; 4) Manfaatkan iklan digital; 5) Analisa performa.",
      source: "CNN Indonesia",
      url: "https://www.cnnindonesia.com/ekonomi/2025/01/tips-digital-marketing-umkm",
      date: "Jan 2025"
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
    list.forEach(a => {
      const card = document.createElement("article");
      card.className = "art-card cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white";
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
            <button class="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-700 transition read-link" data-id="${a.id}">Detail</button>
          </div>
        </div>
      `;
      articleList.appendChild(card);
    });
  }

  // Open Modal
  function openModalWith(id){
    const art = articles.find(x => x.id === id);
    if(!art) return;

    const media = art.type === "video" && art.embed
      ? `<iframe src="${art.embed}" class="w-full h-56 md:h-72 rounded-lg" frameborder="0" allowfullscreen></iframe>`
      : `<img src="${art.image}" alt="${art.title}" class="w-full h-56 md:h-72 object-cover rounded-lg">`;

    modalContent.innerHTML = `
      ${media}
      <h2 class="text-2xl font-bold text-green-700 mt-4">${art.title}</h2>
      <p class="text-sm text-gray-500 mb-3">${art.source} • ${art.date}</p>
      <p class="text-gray-700 mb-6">${art.full}</p>
      <div class="flex justify-end">
        <a href="${art.url}" target="_blank" class="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">Baca Selengkapnya</a>
      </div>
    `;
    modal.classList.remove("hidden");
  }

  // Close Modal
  closeBtn.addEventListener("click", ()=> modal.classList.add("hidden"));
  modal.addEventListener("click", (e)=>{ if(e.target === modal) modal.classList.add("hidden"); });

  // Click handler
  articleList.addEventListener("click", e=>{
    const btn = e.target.closest(".read-link");
    const card = e.target.closest(".art-card");
    let id = btn ? btn.dataset.id : card?.dataset.id;
    if(id) openModalWith(id);
  });

  // Filter
  filterBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      filterBtns.forEach(b=> b.classList.remove("bg-green-600","text-white"));
      btn.classList.add("bg-green-600","text-white");
      const f = btn.dataset.filter;
      if(f==="all") renderArticles(articles);
      else renderArticles(articles.filter(a=>a.type===f));
    });
  });

  // Search
  searchInput.addEventListener("input", e=>{
    const kw = e.target.value.toLowerCase();
    const filtered = articles.filter(a=>
      (a.title+a.excerpt+a.full+a.source).toLowerCase().includes(kw)
    );
    renderArticles(filtered);
  });

  // Initial render
  renderArticles(articles);
});
