document.addEventListener('DOMContentLoaded', () => {
    loadCartPageData();

    // 1. AŞAMA: Teklif Gönder Butonu ile Yeni Tasarımı Açma
    const openQuoteFormBtn = document.getElementById('openQuoteFormBtn');
    const cartViewLayout = document.getElementById('cartViewLayout');
    const checkoutViewLayout = document.getElementById('checkoutViewLayout');

    if (openQuoteFormBtn) {
        openQuoteFormBtn.addEventListener('click', () => {
            // Sepet boşsa geçişi engelle
            let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
            if (cart.length === 0) {
                alert('Sepetiniz boş. Lütfen önce ürün ekleyin.');
                return;
            }

            // Standart görünümü gizle, checkout görünümünü aç
            cartViewLayout.style.display = 'none';
            checkoutViewLayout.style.display = 'grid';

            // Yeni sağ taraftaki mini sepeti doldur
            renderCheckoutMiniCart(cart);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Telefon Numarası Format Kontrolü (+90 ve maksimum 10 rakam zorunluluğu)
    const phoneInput = document.getElementById('chkPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            if (!this.value.startsWith('+90')) {
                this.value = '+90';
            }
            let digits = this.value.substring(3).replace(/[^0-9]/g, '');
            if (digits.length > 10) { digits = digits.substring(0, 10); }
            this.value = '+90' + digits;
        });

        phoneInput.addEventListener('keydown', function(e) {
            if ((e.key === 'Backspace' || e.key === 'Delete') && this.selectionStart <= 3) {
                e.preventDefault();
            }
        });
    }

    // 2. AŞAMA: Form Gönderimi (Final Submit) ve Mailto Yönlendirmesi
    const finalQuoteForm = document.getElementById('finalQuoteForm');
    if (finalQuoteForm) {
        finalQuoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('chkFullName').value.trim();
            const companyName = document.getElementById('chkCompanyName').value.trim() || 'Belirtilmedi';
            const email = document.getElementById('chkEmail').value.trim();
            const phone = document.getElementById('chkPhone').value;
            const notes = document.getElementById('chkNotes').value.trim();

            // --- DOĞRULAMA (VALIDATION) KONTROLLERİ ---
            
            // Ad ve Soyad arasında boşluk kontrolü
            if (!fullName.includes(' ')) {
                alert('Lütfen adınızı ve soyadınızı aralarında bir boşluk bırakarak tam olarak giriniz.');
                return; 
            }

            // Telefon numarasının tam 10 hane olup olmadığını kontrol et (+90 hariç)
            const phoneDigits = phone.substring(3).replace(/[^0-9]/g, '');
            if (phoneDigits.length < 10) {
                alert('Lütfen telefon numaranızı eksiksiz (10 rakam) giriniz.');
                return; 
            }

            // ------------------------------------------

            // Sepetteki ürünleri al
            let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
            let cartDetails = cart.map(item => `- ${item.name} (Adet: ${item.quantity || 1})`).join('\n');

            // Mailto yönlendirmesi için verileri hazırla
            const mailToAddress = 'rugownpat@send4.uk';
            const mailSubject = encodeURIComponent(`${fullName} - Yeni Teklif Talebi`);
            const mailBody = encodeURIComponent(
                `Firma Adı: ${companyName}\n` +
                `Ad Soyad: ${fullName}\n` +
                `E-posta: ${email}\n` +
                `Telefon: ${phone}\n` +
                `Notlar: ${notes}\n\n` +
                `--- SEPETTEKİ ÜRÜNLER ---\n${cartDetails}`
            );

            // 1. Önce Mail uygulamasını tetikle
            window.location.href = `mailto:${mailToAddress}?subject=${mailSubject}&body=${mailBody}`;

            // 2. iOS Safari'nin mail uygulamasını açabilmesi için gecikme (Timeout) ekle
            setTimeout(() => {
                alert(`Sayın ${fullName}, teklif talebiniz e-posta uygulamanıza aktarıldı. Lütfen açılan uygulamadan e-postayı göndermeyi unutmayın.`);
                
                // Sepeti sıfırlayıp anasayfaya dön
                localStorage.removeItem('orekaCart');
                window.location.href = 'index.html';
            }, 1500);
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

// Yeni Checkout Tasarımındaki Mini Sepeti Çizme Fonksiyonu
function renderCheckoutMiniCart(cart) {
    const miniCartContainer = document.getElementById('checkoutMiniCart');
    const chkTotalTypesVal = document.getElementById('chkTotalTypesVal');
    const chkTotalQtyVal = document.getElementById('chkTotalQtyVal');

    miniCartContainer.innerHTML = '';

    let totalTypes = cart.length;
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);

    chkTotalTypesVal.innerText = totalTypes;
    chkTotalQtyVal.innerText = totalQty;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'mc-item';
        div.innerHTML = `
            <img src="${item.image || 'orekalogo.png'}" class="mc-img" alt="${item.name}">
            <div class="mc-details">
                <p class="mc-name">${item.name}</p>
                <span class="mc-qty">Adet: ${item.quantity || 1}</span>
            </div>
        `;
        miniCartContainer.appendChild(div);
    });
}

// Orijinal Sepet Verilerini Sayfaya Yükleme
function loadCartPageData() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartActionsPanel = document.getElementById('cartActionsPanel');
    const cartSummarySection = document.querySelector('.cart-summary-section');
    
    // Değerleri yazdığımız yerler (Hero & Sağ Özet)
    const statTotalTypes = document.getElementById('statTotalTypes');
    const statTotalQty = document.getElementById('statTotalQty');
    const summaryTotalTypes = document.getElementById('summaryTotalTypes');
    const summaryTotalQty = document.getElementById('summaryTotalQty');
    const heroDescription = document.querySelector('.hero-text p');

    // Checkout form açıksa ve sepet boşaltılmışsa geriye dön
    const cartViewLayout = document.getElementById('cartViewLayout');
    const checkoutViewLayout = document.getElementById('checkoutViewLayout');
    if (cart.length === 0 && checkoutViewLayout && checkoutViewLayout.style.display === 'grid') {
        checkoutViewLayout.style.display = 'none';
        cartViewLayout.style.display = 'flex';
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        if (cartActionsPanel) cartActionsPanel.style.display = 'none';
        if (cartSummarySection) cartSummarySection.style.display = 'none';
        if (heroDescription) heroDescription.innerText = 'Sepetiniz boş. Premium ürünlerimizi keşfedin.';
        
        if (statTotalTypes) statTotalTypes.innerText = '0';
        if (statTotalQty) statTotalQty.innerText = '0';
        return;
    }

    emptyCartMessage.style.display = 'none';
    if (cartActionsPanel) cartActionsPanel.style.display = 'block';
    if (cartSummarySection) cartSummarySection.style.display = 'block';

    let totalTypes = cart.length;
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);

    if (heroDescription) heroDescription.innerHTML = `Sepetinizde <strong>${totalQty}</strong> ürün var. En iyi teklifi almak için hemen başvurun.`;
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

function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    if (cart[index]) {
        let currentQty = parseInt(cart[index].quantity || 1) + change;
        if (currentQty < 1) currentQty = 1;
        cart[index].quantity = currentQty;
        localStorage.setItem('orekaCart', JSON.stringify(cart));
        loadCartPageData();
        updateNavBadge();
        
        // Eğer checkout sayfasındayken miktar değişirse mini sepeti de güncelle
        const checkoutViewLayout = document.getElementById('checkoutViewLayout');
        if (checkoutViewLayout && checkoutViewLayout.style.display === 'grid') {
            renderCheckoutMiniCart(cart);
        }
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('orekaCart', JSON.stringify(cart));
    loadCartPageData();
    updateNavBadge();
    
    // Eğer checkout sayfasındayken ürün kaldırılırsa mini sepeti de güncelle
    const checkoutViewLayout = document.getElementById('checkoutViewLayout');
    if (checkoutViewLayout && checkoutViewLayout.style.display === 'grid') {
        renderCheckoutMiniCart(cart);
    }
}

function updateNavBadge() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);
    const navCartBadge = document.getElementById('navCartBadge');
    if (navCartBadge) {
        navCartBadge.innerText = totalQty;
    }
}