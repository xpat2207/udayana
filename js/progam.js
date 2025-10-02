/* js/program.js */
document.addEventListener("DOMContentLoaded", () => {
    // DATA PROGRAM
    const programs = [
        {
            id: "level-up",
            category: "kelas",
            title: "UMKM Level Up (Kominfo)",
            subtitle: "Program digitalisasi & pendampingan UMKM",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
            description: "Program UMKM Level Up (Kominfo) mendorong adopsi teknologi, pelatihan e-commerce, dan integrasi pasar digital bagi UMKM di berbagai daerah.",
            source: "Indonesia.go.id",
            url: "https://indonesia.go.id/kategori/editorial/8587/umkm-indonesia-makin-kuat-program-level-up-2024-siap-dorong-digitalisasi-bisnis",
            duration: "4–12 bulan"
        },
        {
            id: "umk-digital-fest",
            category: "event",
            title: "UMK Digital Fest 2025 (Telkom)",
            subtitle: "Festival transformasi digital & bazar UMKM",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
            description: "Konferensi + bazar + workshop AI & digital marketing untuk UMKM. Fokus pada integrasi marketplace dan pelatihan teknis.",
            source: "Kompas (Tekno)",
            url: "https://biz.kompas.com/read/2025/08/04/170124928/telkom-dorong-umkm-naik-kelas-lewat-teknologi-di-umk-digital-fest-2025",
            duration: "29–31 Juli 2025"
        },
        {
            id: "umkm-go-export",
            category: "kelas",
            title: "UMKM Go Export (BCA & ICC)",
            subtitle: "Pendampingan ekspor & akses pasar internasional",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
            description: "Program pelatihan ekspor untuk UMKM: compliance, logistik, sertifikasi, serta channel buyer internasional.",
            source: "BCA Pressroom",
            url: "https://www.bca.co.id/",
            duration: "Program berkala"
        }
        // bisa tambah program lain
    ];

    // DOM
    const listEl = document.getElementById("program-list");
    const modalWrap = document.getElementById("program-modal");
    const modalPanel = document.getElementById("program-modal-panel");
    const modalContent = document.getElementById("program-modal-content");
    const modalClose = document.getElementById("program-modal-close");
    const searchInput = document.getElementById("program-search");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // render cards
    function render(list) {
        listEl.innerHTML = "";
        list.forEach(p => {
            const card = document.createElement("div");
            card.className = "bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1";
            card.innerHTML = `
        <div class="relative">
          <img src="${p.img}" alt="${p.title}" class="w-full h-44 object-cover">
          <span class="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">${p.category}</span>
        </div>
        <div class="p-4 flex flex-col h-36">
          <h3 class="font-semibold text-lg text-green-800 mb-1">${p.title}</h3>
          <p class="text-sm text-gray-700 mb-2">${p.subtitle}</p>
          <div class="mt-auto flex items-center justify-between">
            <span class="text-xs text-gray-500">${p.source}</span>
            <button class="read-more bg-green-600 text-white px-3 py-1 rounded text-xs" data-id="${p.id}">Detail</button>
          </div>
        </div>
      `;
            listEl.appendChild(card);
        });
    }

    // buka modal
    function openModal(id) {
        const p = programs.find(x => x.id === id);
        if (!p) return;
        modalContent.innerHTML = `
      <div class="space-y-5">
        <img src="${p.img}" alt="${p.title}" class="w-full h-56 object-cover rounded-md shadow-sm">
        <h2 class="text-2xl font-bold text-green-700">${p.title}</h2>
        <div class="text-sm text-gray-500">${p.source} • ${p.duration}</div>
        <p class="text-gray-700 leading-relaxed">${p.description}</p>
        <div class="flex justify-end gap-3 mt-4">
          <a href="${p.url}" target="_blank" class="bg-green-600 text-white px-4 py-2 rounded-lg">Kunjungi Sumber</a>
          <button id="program-modal-close-inner" class="text-gray-600 px-4 py-2 rounded-lg border">Tutup</button>
        </div>
      </div>
    `;
        modalWrap.classList.remove("hidden");
        setTimeout(() => {
            modalPanel.classList.remove("scale-95", "opacity-0");
            modalPanel.classList.add("scale-100", "opacity-100");
        }, 20);

        document.getElementById("program-modal-close-inner").onclick = closeModal;
    }

    function closeModal() {
        modalPanel.classList.remove("scale-100", "opacity-100");
        modalPanel.classList.add("scale-95", "opacity-0");
        setTimeout(() => modalWrap.classList.add("hidden"), 200);
    }

    // event
    listEl.addEventListener("click", e => {
        const btn = e.target.closest(".read-more");
        if (btn) openModal(btn.dataset.id);
    });
    modalClose.onclick = closeModal;
    modalWrap.onclick = e => { if (e.target === modalWrap) closeModal(); };
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    // filter
    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove("bg-green-600", "text-white"));
            btn.classList.add("bg-green-600", "text-white");
            const f = btn.dataset.filter;
            if (f === "all") render(programs);
            else render(programs.filter(p => p.category === f));
        };
    });

    // search
    searchInput.oninput = e => {
        const q = e.target.value.toLowerCase();
        const filtered = programs.filter(p => (p.title + p.subtitle + p.description + p.source).toLowerCase().includes(q));
        render(filtered);
    };

    // init
    render(programs);
});
