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
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');

    // Hamburger Menü Kontrolü
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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
            minPriceInput.value = '';
            maxPriceInput.value = '';
            if (searchInput) searchInput.value = '';
            filterProducts();
            toggleFilterDrawer(false);
        });
    }

    // Anlık Arama ve Sıralama Dinleyicileri
    if (searchInput) searchInput.addEventListener('input', () => filterProducts());
    if (sortSelect) sortSelect.addEventListener('change', () => sortProducts());

    // Ana Filtreleme (Kategori, Arama ve Fiyat Aralığı)
    function filterProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
        const productCards = productContainer.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const titleText = card.querySelector('.product-title').textContent.toLowerCase();
            const priceText = parseFloat(card.querySelector('.product-price').textContent.replace('₺', '').replace(',', '.')) || 0;

            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesSearch = titleText.includes(searchTerm);
            const matchesPrice = (priceText >= minPrice && priceText <= maxPrice);

            if (matchesCategory && matchesSearch && matchesPrice) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sıralama Fonksiyonu
    function sortProducts() {
        const productCardsArray = Array.from(productContainer.querySelectorAll('.product-card'));
        const sortValue = sortSelect.value;

        productCardsArray.sort((a, b) => {
            const titleA = a.querySelector('.product-title').textContent.trim();
            const titleB = b.querySelector('.product-title').textContent.trim();
            
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('₺', '').replace(',', '.')) || 0;
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('₺', '').replace(',', '.')) || 0;

            if (sortValue === 'az') return titleA.localeCompare(titleB, 'tr');
            if (sortValue === 'za') return titleB.localeCompare(titleA, 'tr');
            if (sortValue === 'price-asc') return priceA - priceB;
            if (sortValue === 'price-desc') return priceB - priceA;
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
});