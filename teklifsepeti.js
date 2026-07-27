document.addEventListener('DOMContentLoaded', () => {
    loadCartPageData();

    // 1. AŞAMA: Form Görünümüne Geçiş
    const openQuoteFormBtn = document.getElementById('openQuoteFormBtn');
    const cartViewLayout = document.getElementById('cartViewLayout');
    const checkoutViewLayout = document.getElementById('checkoutViewLayout');

    if (openQuoteFormBtn) {
        openQuoteFormBtn.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
            if (cart.length === 0) {
                alert('Sepetiniz boş. Lütfen önce ürün ekleyin.');
                return;
            }

            cartViewLayout.style.display = 'none';
            checkoutViewLayout.style.display = 'grid';

            renderCheckoutMiniCart(cart);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Telefon Format Kontrolü (+90)
    const phoneInput = document.getElementById('chkPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            if (!this.value.startsWith('+90')) { this.value = '+90'; }
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

    // 2. AŞAMA: EmailJS İle Şık HTML Mail Gönderimi
    const finalQuoteForm = document.getElementById('finalQuoteForm');
    if (finalQuoteForm) {
        finalQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('chkFullName').value.trim();
            const companyName = document.getElementById('chkCompanyName').value.trim() || 'Belirtilmedi';
            const email = document.getElementById('chkEmail').value.trim();
            const phone = document.getElementById('chkPhone').value;
            const notes = document.getElementById('chkNotes').value.trim() || 'Yok';

            if (!fullName.includes(' ')) {
                alert('Lütfen adınızı ve soyadınızı boşluk bırakarak tam giriniz.');
                return; 
            }

            const phoneDigits = phone.substring(3).replace(/[^0-9]/g, '');
            if (phoneDigits.length < 10) {
                alert('Lütfen telefon numaranızı eksiksiz (10 hane) giriniz.');
                return; 
            }

            let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
            
            // HTML Formatında Şık Ürün Listesi
            let cartDetailsHtml = cart.map((item, index) => 
                `<div style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
                    <strong style="color: #0f172a;">${index + 1}. ${item.name}</strong> 
                    <span style="color: #ea580c; font-weight: bold; float: right;">${item.quantity || 1} Adet</span>
                </div>`
            ).join('');

            const submitBtn = finalQuoteForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Gönderiliyor...';

            // EmailJS Gönderim Parametreleri
            const templateParams = {
                full_name: fullName,
                company_name: companyName,
                reply_to: email, // Müşterinin e-posta adresi (Gönderen/Yanıtlanacak adres)
                phone: phone,
                notes: notes,
                cart_details_html: cartDetailsHtml
            };

            // YOUR_SERVICE_ID ve YOUR_TEMPLATE_ID değerlerini kendi EmailJS panelinizdekilerle değiştirin
            emailjs.send('service_9wxz67u', 'template_2yfv2pn', templateParams)
                .then(function(response) {
                    alert(`Sayın ${fullName}, teklif talebiniz başarıyla bize iletildi.`);
                    localStorage.removeItem('orekaCart');
                    window.location.href = 'index.html';
                }, function(error) {
                    console.error('EmailJS Hata:', error);
                    alert('Mail gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        });
    }

    // Sepeti Temizle
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Sepet boşaltılsın mı?')) {
                localStorage.removeItem('orekaCart');
                loadCartPageData();
                updateNavBadge();
            }
        });
    }
});

function renderCheckoutMiniCart(cart) {
    const miniCartContainer = document.getElementById('checkoutMiniCart');
    const chkTotalTypesVal = document.getElementById('chkTotalTypesVal');
    const chkTotalQtyVal = document.getElementById('chkTotalQtyVal');

    miniCartContainer.innerHTML = '';
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);

    chkTotalTypesVal.innerText = cart.length;
    chkTotalQtyVal.innerText = totalQty;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'mc-item';
        div.innerHTML = `
            <img src="${item.image || 'orekalogo.png'}" class="mc-img" alt="${item.name}">
            <div>
                <p class="mc-name">${item.name}</p>
                <span class="mc-qty">Adet: ${item.quantity || 1}</span>
            </div>
        `;
        miniCartContainer.appendChild(div);
    });
}

function loadCartPageData() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartActionsPanel = document.getElementById('cartActionsPanel');
    const cartSummarySection = document.querySelector('.cart-summary-section');
    const heroStats = document.querySelector('.hero-stats');
    
    const statTotalTypes = document.getElementById('statTotalTypes');
    const statTotalQty = document.getElementById('statTotalQty');
    const summaryTotalTypes = document.getElementById('summaryTotalTypes');
    const summaryTotalQty = document.getElementById('summaryTotalQty');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        if (cartActionsPanel) cartActionsPanel.style.display = 'none';
        if (cartSummarySection) cartSummarySection.style.display = 'none';
        if (heroStats) heroStats.style.display = 'none';
        return;
    }

    emptyCartMessage.style.display = 'none';
    if (cartActionsPanel) cartActionsPanel.style.display = 'block';
    if (cartSummarySection) cartSummarySection.style.display = 'block';
    if (heroStats) heroStats.style.display = 'flex';

    let totalTypes = cart.length;
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);

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
                    <p>${item.description || 'Oreka ürün kalitesi.'}</p>
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
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('orekaCart', JSON.stringify(cart));
    loadCartPageData();
    updateNavBadge();
}

function updateNavBadge() {
    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let totalQty = cart.reduce((sum, item) => sum + parseInt(item.quantity || 1), 0);
    const navCartBadge = document.getElementById('navCartBadge');
    if (navCartBadge) { navCartBadge.innerText = totalQty; }
}