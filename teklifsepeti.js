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

    // Telefon Format ZORUNLULUĞU (+90)
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

    // 2. AŞAMA: Web3Forms API ile HTML E-Posta Gönderimi
    const finalQuoteForm = document.getElementById('finalQuoteForm');
    if (finalQuoteForm) {
        finalQuoteForm.addEventListener('submit', async (e) => {
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
            
            // Ürünler Tablosu (HTML Mail İçin)
            let cartTableRows = cart.map(item => `
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;">${item.name}</td>
                    <td align="right" style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #ea580c;">${item.quantity || 1} Adet</td>
                </tr>
            `).join('');

            // TRENDYOL / KURUMSAL STİLİNDE HTML MAIL ŞABLONU
            const htmlMessage = `
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; border-collapse: collapse; background-color: #ffffff; margin-top: 10px; margin-bottom: 10px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-family: Arial, sans-serif;">
                
                <!-- HEADER / LOGO -->
                <tr>
                    <td align="center" bgcolor="#ea580c" style="padding: 25px 20px;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 1px;">OREKA GIDA</h1>
                        <p style="color: #ffedd5; margin: 5px 0 0 0; font-size: 12px; font-weight: bold;">WEB TEKLİF BİLDİRİMİ</p>
                    </td>
                </tr>

                <!-- İÇERİK -->
                <tr>
                    <td style="padding: 25px; background-color: #fff7ed;">
                        <h2 style="color: #ea580c; margin: 0 0 12px 0; font-size: 18px; border-bottom: 2px solid #fed7aa; padding-bottom: 6px;">MÜŞTERİ BİLGİLERİ</h2>
                        
                        <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #fed7aa; margin-bottom: 20px; font-size: 13px; color: #334155;">
                            <tr>
                                <td><strong>Ad Soyad:</strong> ${fullName}</td>
                                <td><strong>Firma Adı:</strong> ${companyName}</td>
                            </tr>
                            <tr>
                                <td><strong>E-posta:</strong> ${email}</td>
                                <td><strong>Telefon:</strong> ${phone}</td>
                            </tr>
                            <tr>
                                <td colspan="2"><strong>Notlar:</strong> ${notes}</td>
                            </tr>
                        </table>

                        <h2 style="color: #ea580c; margin: 0 0 12px 0; font-size: 18px; border-bottom: 2px solid #fed7aa; padding-bottom: 6px;">SEPETTEKİ ÜRÜNLER</h2>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 13px;">
                            <tr bgcolor="#f8fafc" style="color: #64748b; font-size: 11px; text-transform: uppercase;">
                                <th align="left" style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">Ürün Adı</th>
                                <th align="right" style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">Adet</th>
                            </tr>
                            ${cartTableRows}
                        </table>
                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center" bgcolor="#ea580c" style="padding: 15px; color: #ffffff; font-size: 11px;">
                        <p style="margin: 0 0 3px 0; font-weight: bold;">OREKA GIDA SAN. TİC. LTD. ŞTİ.</p>
                        <p style="margin: 0; opacity: 0.85;">Kocatepe Mah. Mega Center, Bayrampaşa / İstanbul</p>
                    </td>
                </tr>
            </table>
            `;

            // Form Butonunu Yükleniyor Durumuna Getir
            const submitBtn = finalQuoteForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Gönderiliyor...';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: '1ca901c4-718b-4733-8e1c-52b7094ae799',
                        subject: `Yeni Teklif Talebi: ${fullName}`,
                        from_name: 'Oreka Gıda Web',
                        replyto: email,
                        // Web3Forms'un HTML maillere özel alan parametreleri:
                        is_html: 'true',
                        message: htmlMessage
                    })
                });

                const result = await response.json();

                if (result.success) {
                    alert(`Sayın ${fullName}, teklif talebiniz başarıyla bize iletildi. En kısa sürede sizinle iletişime geçeceğiz.`);
                    
                    // Sepeti sıfırla ve anasayfaya dön
                    localStorage.removeItem('orekaCart');
                    window.location.href = 'index.html';
                } else {
                    alert('Bir hata oluştu. Lütfen tekrar deneyiniz.');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                }
            } catch (error) {
                console.error('Hata:', error);
                alert('Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
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