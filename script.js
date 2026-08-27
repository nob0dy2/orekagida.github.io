document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Menü (Hamburger) İşlemleri
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Menüdeki veya kategorideki bir linke tıklandığında menüyü kapat (Mobil için)
        document.querySelectorAll(".nav-links li a, .filter-category-list li a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");

                // Ürünler sayfasındaki filtre çekmecesinin de otomatik kapanması için
                const filterDrawer = document.getElementById('filterDrawer');
                const filterOverlay = document.getElementById('filterOverlay');
                if (filterDrawer && filterOverlay) {
                    filterDrawer.classList.remove('open');
                    filterOverlay.classList.remove('active');
                }
            });
        });
    }

    // 2. Carousel Slider İşlemleri (Direkt Geçiş)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 4000);
    }

    // 3. Ürünler Sayfası Filtreleme Çekmecesi (Drawer) Mekanizması
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterDrawer = document.getElementById('filterDrawer');
    const filterOverlay = document.getElementById('filterOverlay');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');

    function openFilterDrawer() {
        if (filterDrawer && filterOverlay) {
            filterDrawer.classList.add('open');
            filterOverlay.classList.add('active');
        }
    }

    function closeFilterDrawer() {
        if (filterDrawer && filterOverlay) {
            filterDrawer.classList.remove('open');
            filterOverlay.classList.remove('active');
        }
    }

    if (filterToggleBtn) filterToggleBtn.addEventListener('click', openFilterDrawer);
    if (closeFilterBtn) closeFilterBtn.addEventListener('click', closeFilterDrawer);
    if (filterOverlay) filterOverlay.addEventListener('click', closeFilterDrawer);
    if (applyFilterBtn) applyFilterBtn.addEventListener('click', closeFilterDrawer);
    
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', () => {
            closeFilterDrawer();
        });
    }

    // 4. Grid ve Liste Görünüm Değiştirme Butonları
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const productContainer = document.getElementById('product-container');

    if (gridViewBtn && listViewBtn && productContainer) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            productContainer.classList.remove('list-view');
        });

        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            productContainer.classList.add('list-view');
        });
    }

    // 5. Sayfa Yüklendiğinde Sepet Sayacını Güncelle
    updateNavBadge();
});

// 6. Navbar Scroll Efekti
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

// 7. Ortak Sepet Sayacı Güncelleme Fonksiyonu
function updateNavBadge() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);
    
    const navCartBadge = document.getElementById('navCartBadge');
    if (navCartBadge) {
        navCartBadge.innerText = totalQty;
    }
}

// 8. Ürünler Sayfasından Sepete Ürün Ekleme Fonksiyonu
window.addToCart = function(name, category, image) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    
    let existingItemIndex = cart.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            name: name,
            category: category,
            image: image || 'orekalogo.png',
            description: 'Oreka marka kaliteli ürün.', 
            quantity: 1
        });
    }
    
    localStorage.setItem('orekaCart', JSON.stringify(cart));
    updateNavBadge();
    alert(name + " teklif sepetine başarıyla eklendi!");
}