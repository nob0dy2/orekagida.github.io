document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.filter-category-list a');
    const productContainer = document.getElementById('product-container');
    const categoryTitle = document.getElementById('category-title');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    // Filtre Drawer Elementleri
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterDrawer = document.getElementById('filterDrawer');
    const filterOverlay = document.getElementById('filterOverlay');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');

    // Ürün sayısı etiketi
    const productCountBadge = document.getElementById('product-count');

    // ----------------------------------------------------
    // MOBİL HAMBURGER MENÜ KONTROLÜ
    // ----------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    let currentCategory = 'all';

    // 1. Filtre Panelini Aç / Kapat
    function toggleFilterDrawer(open) {
        if (open) {
            filterDrawer.classList.add('active');
            filterOverlay.classList.add('active');
        } else {
            filterDrawer.classList.remove('active');
            filterOverlay.classList.remove('active');
        }
    }

    if (filterToggleBtn) filterToggleBtn.addEventListener('click', () => toggleFilterDrawer(true));
    if (closeFilterBtn) closeFilterBtn.addEventListener('click', () => toggleFilterDrawer(false));
    if (filterOverlay) filterOverlay.addEventListener('click', () => toggleFilterDrawer(false));

    // 2. Kategori Seçimi
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            categoryLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            currentCategory = this.getAttribute('data-target');
            categoryTitle.textContent = this.textContent;
            
            // Kategori değiştiğinde ürünleri filtrele ve sayıyı güncelle
            filterProducts();
        });
    });

    // 3. Filtreleri Uygula Butonu
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', function () {
            filterProducts();
            toggleFilterDrawer(false);
        });
    }

    // 4. Filtreleri Sıfırla Butonu
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', function () {
            categoryLinks.forEach(item => item.classList.remove('active'));
            document.querySelector('.filter-category-list a[data-target="all"]').classList.add('active');
            currentCategory = 'all';
            categoryTitle.textContent = "Tüm Ürünler";
            if (searchInput) searchInput.value = '';
            
            filterProducts();
            toggleFilterDrawer(false);
        });
    }

    // Anlık Arama ve Sıralama Dinleyicileri
    if (searchInput) searchInput.addEventListener('input', () => filterProducts());
    if (sortSelect) sortSelect.addEventListener('change', () => sortProducts());

    // Ana Filtreleme (Kategori ve Arama) VE Ürün Sayacı
    function filterProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const productCards = productContainer.querySelectorAll('.product-card');
        
        let visibleProductCount = 0; // Görünür ürünleri saymak için değişken

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const titleText = card.querySelector('.product-title').textContent.toLowerCase();

            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesSearch = titleText.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleProductCount++; // Şarta uyanları say
            } else {
                card.style.display = 'none';
            }
        });

        // Ekranda gösterilen etiketi güncelle
        if (productCountBadge) {
            productCountBadge.textContent = visibleProductCount + " Ürün";
        }
    }

    // Sıralama Fonksiyonu (Sadece A-Z ve Z-A İsim Sıralaması)
    function sortProducts() {
        const productCardsArray = Array.from(productContainer.querySelectorAll('.product-card'));
        const sortValue = sortSelect.value;

        productCardsArray.sort((a, b) => {
            const titleA = a.querySelector('.product-title').textContent.trim();
            const titleB = b.querySelector('.product-title').textContent.trim();

            if (sortValue === 'az') return titleA.localeCompare(titleB, 'tr');
            if (sortValue === 'za') return titleB.localeCompare(titleA, 'tr');
            return 0; 
        });

        productCardsArray.forEach(card => productContainer.appendChild(card));
    }

    // Görünüm Seçenekleri (Grid / Liste)
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.addEventListener('click', function () {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            productContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
        });

        listViewBtn.addEventListener('click', function () {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            productContainer.style.gridTemplateColumns = '1fr';
        });
    }

    // Sayfa ilk yüklendiğinde tüm ürünlerin sayısını hesapla ve ekrana yaz
    filterProducts();
});