document.addEventListener('DOMContentLoaded', () => {
    loadCartPageData();

    // Teklif Gönder butonuna tıklandığında formu aç/kapat
    const openQuoteFormBtn = document.getElementById('openQuoteFormBtn');
    const quoteFormArea = document.getElementById('quoteFormArea');

    if (openQuoteFormBtn) {
        openQuoteFormBtn.addEventListener('click', () => {
            if (quoteFormArea.style.display === 'none' || quoteFormArea.style.display === '') {
                quoteFormArea.style.display = 'block';
                openQuoteFormBtn.style.display = 'none';
            }
        });
    }

    // Form Gönderimi
    const quoteRequestForm = document.getElementById('quoteRequestForm');
    if (quoteRequestForm) {
        quoteRequestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const companyName = document.getElementById('companyName').value;
            const fullName = document.getElementById('fullName').value;

            alert(`Sayın ${fullName} (${companyName}), teklif talebiniz başarıyla alınmıştır. 24 saat içinde sizinle iletişime geçilecektir.`);
            
            localStorage.removeItem('orekaCart');
            window.location.href = 'index.html';
        });
    }

    // Sepeti Temizle Butonu
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Teklif sepetinizi tamamen boşaltmak istediğinize emin misiniz?')) {
                localStorage.removeItem('orekaCart');
                loadCartPageData();
                updateNavBadge();
            }
        });
    }
});

// Sepet Verilerini Sayfaya Yükleme ve Çizme
function loadCartPageData() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartActionsPanel = document.getElementById('cartActionsPanel');
    const heroItemCount = document.getElementById('hero-item-count');
    const statTotalTypes = document.getElementById('statTotalTypes');
    const statTotalQty = document.getElementById('statTotalQty');
    const summaryTotalTypes = document.getElementById('summaryTotalTypes');
    const summaryTotalQty = document.getElementById('summaryTotalQty');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        if (cartActionsPanel) cartActionsPanel.style.display = 'none';
        
        if (heroItemCount) heroItemCount.innerText = '0';
        if (statTotalTypes) statTotalTypes.innerText = '0';
        if (statTotalQty) statTotalQty.innerText = '0';
        if (summaryTotalTypes) summaryTotalTypes.innerText = '0';
        if (summaryTotalQty) summaryTotalQty.innerText = '0';
        return;
    }

    emptyCartMessage.style.display = 'none';
    if (cartActionsPanel) cartActionsPanel.style.display = 'block';

    let totalTypes = cart.length;
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);

    if (heroItemCount) heroItemCount.innerText = totalQty;
    if (statTotalTypes) statTotalTypes.innerText = totalTypes;
    if (statTotalQty) statTotalQty.innerText = totalQty;
    if (summaryTotalTypes) summaryTotalTypes.innerText = totalTypes;
    if (summaryTotalQty) summaryTotalQty.innerText = totalQty;

    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'cart-item-card';
        
        itemCard.innerHTML = `
            <div class="cart-item-left">
                <img src="${item.image || 'orekalogo.png'}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <span class="cart-item-badge">${item.category || 'GIDA'}</span>
                    <h3>${item.name}</h3>
                    <p>${item.description || 'Oreka marka kaliteli ürün.'}</p>
                </div>
            </div>
            <div class="cart-item-right">
                <div class="quantity-controller">
                    <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <input type="text" class="qty-input" value="${item.quantity || 1}" readonly>
                    <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    Kaldır
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(itemCard);
    });
}

// Ürün Adet Güncelleme Fonksiyonu
function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    if (cart[index]) {
        let currentQty = parseInt(cart[index].quantity || 1) + change;
        if (currentQty < 1) currentQty = 1;
        cart[index].quantity = currentQty;
        localStorage.setItem('orekaCart', JSON.stringify(cart));
        loadCartPageData();
        updateNavBadge();
    }
}

// Sepetten Ürün Kaldırma Fonksiyonu
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('orekaCart', JSON.stringify(cart));
    loadCartPageData();
    updateNavBadge();
}

// Navigasyon Rozetini Güncelleme
function updateNavBadge() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);
    const navCartBadge = document.getElementById('navCartBadge');
    if (navCartBadge) {
        navCartBadge.innerText = totalQty;
    }
}