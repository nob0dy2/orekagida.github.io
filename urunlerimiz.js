document.addEventListener('DOMContentLoaded', () => {
    
    // --- SEPETE EKLEME İŞLEVİ ---
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartBadge = document.querySelector('.cart-badge');
    
    // Gerçek bir e-ticaret sitesinde bu değer localStorage veya veritabanından gelir. 
    // Şimdilik sayfa yenilendiğinde sıfırlanacak basit bir sayaç kullanıyoruz.
    let cartCount = parseInt(cartBadge.textContent) || 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Sepet sayısını artır ve yazdır
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Sepet rozetine (badge) zıplama animasyonu ver
            cartBadge.style.transition = 'transform 0.2s ease';
            cartBadge.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);

            // Butona tıklandığına dair görsel geri bildirim ver (Geçici olarak yeşil yap)
            const originalText = this.textContent;
            this.textContent = 'Eklendi ✔';
            this.style.backgroundColor = '#2ecc71'; // Başarı yeşili
            this.style.borderColor = '#2ecc71';
            this.style.color = '#fff';

            // 1.5 saniye sonra butonu eski haline döndür
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
                this.style.borderColor = '';
                this.style.color = '';
            }, 1500);
        });
    });


    // --- KATEGORİ SEÇİM İŞLEVİ ---
    const categoryLinks = document.querySelectorAll('.category-list a');
    const productsHeaderTitle = document.querySelector('.products-header h2');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Sayfanın en üste atlamasını engeller
            
            // Tüm linklerden 'active' sınıfını kaldır
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // Sadece tıklanan linke 'active' sınıfını ekle
            this.classList.add('active');
            
            // Sağ taraftaki başlığı, seçilen kategori adıyla değiştir
            productsHeaderTitle.textContent = this.textContent;
            
            // Not: Gerçek bir sistemde burada ürünleri filtrelemek için bir AJAX/Fetch 
            // isteği atılır veya sayfadaki ürünler data-kategori etiketlerine göre gizlenir/gösterilir.
        });
    });

});