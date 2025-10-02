
document.addEventListener('DOMContentLoaded', () => {
  // --- Data Konten (saya perbarui tautan ke sumber aktif) ---
  const contents = [
    {
      id: 1, category: 'informasi',
      title: 'Regulasi Halal Terbaru: Kewajiban Sertifikasi 2025',
      short_description: 'Ringkasan batas waktu dan prosedur sertifikasi halal untuk UMKM.',
      long_description: 'Pemerintah melalui BPJPH memperbarui skema pendaftaran sertifikasi halal; pastikan persyaratan dan mekanisme pendaftaran dipenuhi agar produk Anda terdaftar resmi.',
      tags: ['Regulasi','Hukum','Pangan'],
      date: '10 Oktober 2025',
      link: 'https://bpjph.halal.go.id/detail/sertifikasi-halal',
      image: 'https://images.unsplash.com/photo-1596489391038-f94d93616616?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Dokumen dan regulasi'
    },
    {
      id: 2, category: 'informasi',
      title: 'Harga Minyak Goreng Curah Stabil, Cabai Merah Naik 8%',
      short_description: 'Laporan mingguan fluktuasi harga pangan penting.',
      long_description: 'Panel harga pangan nasional menunjukkan pergerakan harga penting seperti minyak goreng dan cabai. Pantau data resmi untuk perencanaan biaya produksi.',
      tags: ['Harga Pokok','Ekonomi','Komoditas'],
      date: '1 Oktober 2025',
      link: 'https://panelharga.badanpangan.go.id/',
      image: 'https://images.unsplash.com/photo-1542838132-92c733004cd8?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Pasar Tradisional'
    },
    {
      id: 3, category: 'update',
      title: 'Tren Green Packaging: Biaya Bahan Baku Kemasan Ramah Lingkungan Turun',
      short_description: 'Harga bahan baku kemasan ramah lingkungan semakin terjangkau.',
      long_description: 'Permintaan kemasan ramah lingkungan meningkat — kesempatan untuk UMKM beralih ke kemasan yang lebih sustainable sekaligus menarik konsumen modern.',
      tags: ['Tren Pasar','Bahan Baku','Lingkungan'],
      date: '28 September 2025',
      link: 'https://www.cnbcindonesia.com/entrepreneur/20220923163731-25-374532/jurus-produk-umkm-laris-manis-buat-kemasan-yang-mengesankan',
      image: 'https://images.unsplash.com/photo-1558237517-57ed6c61f224?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Green packaging'
    },
    {
      id: 4, category: 'update',
      title: 'Kebijakan Bank: Kredit Usaha Rakyat (KUR) Limit Naik Hingga Rp 500 Juta',
      short_description: 'Informasi perubahan plafon KUR dan implikasinya untuk UMKM.',
      long_description: 'Pemerintah dan lembaga penyalur melakukan penyesuaian skema KUR untuk memperbesar akses modal bagi UMKM yang layak.',
      tags: ['Kebijakan','Perbankan','Pendanaan'],
      date: '25 September 2025',
      link: 'https://kur.ekon.go.id/kebijakan-kur',
      image: 'https://images.unsplash.com/photo-1556740714-a837c3554030?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Pinjaman bank'
    },
    {
      id: 5, category: 'wawasan',
      title: 'Laporan Industri: Dominasi Produk Kecantikan Lokal di E-commerce',
      short_description: 'Analisis kesuksesan brand kecantikan lokal di platform e-commerce.',
      long_description: 'Brand lokal berhasil memanfaatkan storytelling dan digital marketing untuk menguasai pangsa pasar di platform e-commerce utama.',
      tags: ['Analisis Pasar','E-commerce','Laporan'],
      date: '20 September 2025',
      link: 'https://databoks.katadata.co.id/tags/produk-kecantikan',
      image: 'https://images.unsplash.com/photo-1622328608405-c49c7199c016?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Beauty products'
    },
    {
      id: 6, category: 'wawasan',
      title: '5 Tips Mengelola SDM: Membangun Tim Unggul Skala Mikro',
      short_description: 'Tips praktis merekrut, melatih, dan mempertahankan karyawan UMKM.',
      long_description: 'Berfokus pada role clarity, pelatihan berkala, dan budaya kerja positif untuk meningkatkan retensi dan produktivitas.',
      tags: ['Tips Bisnis','SDM','Manajemen'],
      date: '15 September 2025',
      link: 'https://www.ekrut.com/media/manajemen-sumber-daya-manusia',
      image: 'https://images.unsplash.com/photo-1531545514256-429c9b45967a?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Meeting bisnis'
    },
    {
      id: 7, category: 'info_pasar',
      title: 'Komoditas Unggulan: Kenaikan Permintaan Rempah-Rempah Global',
      short_description: 'Lonjakan permintaan ekspor rempah memberikan peluang bagi petani dan UMKM.',
      long_description: 'Data ekspor rempah menunjukkan peluang ekspor; pelajari standar sertifikasi dan pasar tujuan untuk memaksimalkan potensi.',
      tags: ['Komoditas','Ekspor','Peluang Usaha'],
      date: '5 September 2025',
      link: 'https://satudata.kemendag.go.id/data-informasi/perdagangan-luar-negeri/ekspor-non-migas-komoditi',
      image: 'https://images.unsplash.com/photo-1596728076044-f18b31a54163?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Rempah-rempah'
    },
    {
      id: 8, category: 'agenda',
      title: 'Jadwal Pameran UMKM Digital Expo 2025 di Jakarta',
      short_description: 'Detail lokasi, tanggal, dan pendaftaran pameran UMKM besar di Jakarta.',
      long_description: 'Digital Expo 2025 mempertemukan UMKM dengan buyer, investor, dan penyedia teknologi; agenda termasuk business-matching dan pelatihan digital.',
      tags: ['Event','Pameran','Pelatihan'],
      date: '30 Agustus 2025',
      link: 'https://briumkmexport.com/',
      image: 'https://images.unsplash.com/photo-1558507652-320c22998782?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Pameran bisnis'
    },
    {
      id: 9, category: 'kabar_umkm',
      title: 'Kisah UMKM Kopi Lokal Naik Kelas Berkat Pendampingan',
      short_description: 'Cerita sukses UMKM kopi yang mendapat pendampingan dan investor awal.',
      long_description: 'Pendampingan oleh lembaga/pihak ketiga (perbankan, inkubator) sering menjadi pemicu naik kelasnya UMKM kopi lokal.',
      tags: ['Inspirasi','Kisah Sukses','Berita Lokal'],
      date: '20 Agustus 2025',
      link: 'https://www.cnnindonesia.com/ekonomi/20250926163426-625-1278125/pendampingan-bri-dorong-kopi-lokal-naik-kelas-dari-hobi-jadi-bisnis',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Kopi dan bisnis'
    },
    {
      id: 10, category: 'insight',
      title: 'Analisis Mendalam: Peluang Ekspor Furnitur Lokal Pasca-Pandemi',
      short_description: 'Laporan market & standar legal untuk ekspor furnitur Indonesia.',
      long_description: 'Insight ini membahas negara tujuan utama, persyaratan sertifikasi, dan strategi harga untuk menembus pasar internasional.',
      tags: ['Laporan','Ekspor','Analisis Harga'],
      date: '10 Agustus 2025',
      link: 'https://www.bps.go.id/id/statistics-table/2/MjMxMiMy/nilai-ekspor-bulanan-hasil-industri-menurut-komoditas.html',
      image: 'https://images.unsplash.com/photo-1596048123000-69279589d81d?auto=format&fit=crop&w=1200&q=80',
      image_alt: 'Furniture'
    }
  ];

  // --- Elemen DOM (null-safe checks) ---
  const menuBtn = document.getElementById('menu-btn');
  const menuNav = document.getElementById('menu-nav');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const contentContainer = document.getElementById('content-container');
  const mainHeader = document.getElementById('main-header');

  // Elemen Modal (cek sebelum dipakai)
  const modalOverlay = document.getElementById('detail-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalCloseAction = document.getElementById('modal-close-action');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDate = document.getElementById('modal-date');
  const modalLongDescription = document.getElementById('modal-long-description');
  const modalSourceLink = document.getElementById('modal-source-link');

  // --- Safe menu (jika Anda memiliki drawer/menu di layout) ---
  if (menuBtn && menuNav) {
    menuBtn.addEventListener('click', () => {
      menuNav.classList.toggle('-translate-x-full');
    });
  }

  // --- Modal logic (dengan fokus & accessibility) ---
  let lastFocus = null;
  const showModal = (item) => {
    if (!modalOverlay) return;
    lastFocus = document.activeElement;

    modalImage.src = item.image || '';
    modalImage.alt = item.image_alt || '';
    modalTitle.textContent = item.title || '';
    modalCategory.textContent = (item.category || '').toUpperCase().replace('_', ' ');
    modalDate.textContent = 'Tanggal: ' + (item.date || '');
    modalLongDescription.textContent = item.long_description || '';
    modalSourceLink.href = item.link || '#';

    modalOverlay.classList.remove('hidden');
    // small delay/frame to allow transition
    requestAnimationFrame(() => {
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
    });
    document.body.style.overflow = 'hidden';
    // fokus ke tombol tutup agar keyboard users langsung bisa menutup
    if (closeModalBtn) closeModalBtn.focus();
  };

  const hideModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      modalOverlay.classList.add('hidden');
      document.body.style.overflow = '';
      // kembalikan fokus ke elemen terakhir
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }, 300);
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);
  if (modalCloseAction) modalCloseAction.addEventListener('click', hideModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) hideModal();
    });
  }

  // tutup modal dengan Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && !modalOverlay.classList.contains('hidden')) {
      hideModal();
    }
  });

  // --- Fungsi membuat kartu ---
  const createCard = (item) => {
    const tagHTML = (item.tags || []).map(tag => `<span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">${tag}</span>`).join('');

    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col card-interactive animate-fadein';
    card.innerHTML = `
      <div class="relative">
        <img src="${item.image}" alt="${item.image_alt || ''}" class="w-full h-40 object-cover" loading="lazy" />
        <span class="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">${(item.category||'').toUpperCase().replace('_',' ')}</span>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <h3 class="font-bold text-lg mb-1">${item.title}</h3>
        <p class="text-gray-700 mb-4 flex-1">${item.short_description}</p>
        <div class="flex flex-wrap gap-2 mb-2">${tagHTML}</div>
        <div class="flex items-center gap-2 text-gray-500 text-sm">
          <span>📅 ${item.date}</span>
          <button data-item-id="${item.id}" class="detail-btn ml-auto bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-green-700 transition">Lihat Detail</button>
        </div>
      </div>
    `;

    // event listener tombol detail (pastikan tombol ada)
    const detailButton = card.querySelector('.detail-btn');
    if (detailButton) {
      detailButton.addEventListener('click', () => showModal(item));
    }
    return card;
  };

  // --- Filter konten berdasarkan kategori ---
  const filterContent = (category) => {
    if (!contentContainer) return;
    contentContainer.innerHTML = '';

    const filtered = contents.filter(i => i.category === category);
    if (filtered.length === 0) {
      contentContainer.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500 text-lg">Tidak ada konten untuk kategori <strong>${category.toUpperCase().replace('_',' ')}</strong> saat ini.</div>`;
      return;
    }

    filtered.forEach((item, idx) => {
      const card = createCard(item);
      setTimeout(() => {
        contentContainer.appendChild(card);
      }, idx * 80);
    });
  };

  // --- Tab button behavior (safe) ---
  if (tabButtons && tabButtons.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selected = button.getAttribute('data-tab');
        tabButtons.forEach(b => b.classList.remove('tab-active'));
        button.classList.add('tab-active');
        filterContent(selected);
      });
    });
  }

  // default load
  filterContent('informasi');

  // --- Header shadow on scroll (hanya jika #main-header ada) ---
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) mainHeader.classList.add('shadow-xl');
      else mainHeader.classList.remove('shadow-xl');
    });
  }
});