// urunlerimiz.js - Benzersiz Ürün Çeşidi Filtreleme ve Doğrudan Sepete Ekleme

const urunler = [
    // --- PEYNİR ÇEŞİTLERİ (105 Adet) ---
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bolu Kolot Peyniri 500 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İskenderoğlu Kolot Peynir 500 Gr * 16" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ariste Kolot Peyniri 500 Gr * 10" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kebir Kuymak Peynir 500 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İskenderoğlu Kuymak Peynir 500 Gr * 24" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Özdemir Mihaliç Peynir Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Teksüt Mihaliç Peyniri 350 Gr * 6" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ariste Mihaliç Peyniri 300 Gr * 6" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente İsli Çerkez Peyniri Vakumlu 1500 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Emmantel 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Frico Peynir Edam Biberli Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Frico Peynir Edam Otlu Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Frico Peynir Edam Sade Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Gouda Sade & Edam 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Brie Peynir 125 Gr Paket" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Gravyer Peyniri (Kars) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ariste Kars Gravyer Peyniri 5 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bahar Sepet Peyniri Baharatlı 350 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bolu Sepet Peyniri 500 Gr * 24" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Sarıbaş Sepet Peyniri Sade Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Sarıbaş Sepet Peyniri Biberli Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bahar Sepet Peyniri Çörek Otlu 350 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Sarıbaş Sepet Peyniri Çörekotlu Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bahar Sepet Peyniri Vakumlu 350 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Küflü Peynir (Rokfor) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Blue Heaven Peynir Rokfor Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Danablu Rokfor / Danish Blu Cheese Vakumlu 500 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Gouda Sade & Edam 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Gouda Kimyonlu 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Gouda Hardallı 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Lente Gouda Biberli 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Hard Cheese Parmesan Parça Vakumlu 2000 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ambrosini Parmesan Toz Grana Padano Vakumlu 1000 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ambrosini Parmesan Grana Padano Vakumlu 2000 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "İthal - Kerry Gold Cheddar Blok Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Royal Cheddar Burger Peynir Dilimli 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Çobanoğlu Cheddar Dilimli Peynir 1000 Gr * 6" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Parmesan Peynir Toz 1000 Gr * 10 Adet" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Tulsüt Tulum Peynir Çuval (Beyaz) 25 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Tulsüt Tulum Peynir Çuval (Sarı) 25 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Meriç Hellim Peynir Kıbrıs Az Tuzlu 225 Gr * 48" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Miraçbey Tulum Peynir Yaprak Çuval 25 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Muratbey Mozarella Rende 150 Gr * 15" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Aksa Örgü Peynir 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Aksa Köy Peynir T.yağlı Kova 9 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Aksa Dil Peynir 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Aksa Çeçil Peynir 2000 Gr * 4" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ak-du Otlu Peynir 250 Gr * 18" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ak-du Tulum Peyniri İzmir (Koyun) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ak-du Tulum Peyniri İzmir (İnek) 300 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "A.r Z Tulum Peyniri (Vakumlu) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "A.r Z Tulum Peyniri Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "A.r.muş Eski Kaşar Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Pınar Beyaz Piknik 20 Gr * 120" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Teksüt Krem Peynir Piknik" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Teksüt Misket Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Pınar Beyaz 2750 Gr * 4" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bergaz Beyaz Peynir Koyun Ezine 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Gökçebayır Beyaz Peynir Ezine İnek 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Altınkılıç Beyaz Peynir Klasik 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Beyaz Peynir Klasik Vakumlu Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Teksüt Krem Peynir Kova 5 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Özgüllü Dil Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Özgüllü Örgü Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Muratbey Burgu Peynir Tava 4 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Muratbey Topi Peynir Tava 4 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Karper Peynir 18 Li Multipack * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Karper Peynir 8 Li 100 Gr * 24" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Karper Peynir 16 Lı Ekonomik 200 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kebir Kolot Peynir 400 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kebir Kuymak Peynir 500 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Altınkılıç Otlu Peynir Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bahçıvan Mozarella Rende Peynir 2000 Gr * 6" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Bolu İsli Peynir Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Cebeci Lor Peynir 500 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Cebeci Lor Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ekici Beyaz Peynir Lokum Kıvamı 20 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ekici Hellim Peyniri 225 Gr * 10" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Gravyer Peyniri (Kars) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Gürsüt Krem Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Altınkılıç Otlu Peynir 100 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kuzucu Beyaz Peynir 1 Kg * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kuzucu Beyaz Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Kuzucu Beyaz Peynir 17 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ezine Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Altınkılıç Ezine Peynir İnek 450 Gr * 8" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Beyaz Peynir Klasik Vakumlu Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Beyaz Peynir Extra İnek 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Beyaz Peynir Vakumlu (İnce Dilim) Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Çeçil Peynir 250 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Çeçil Peynir (Koli) 4000 Gr" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Dil Peynir 250 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Eski Kaşar Anadolu 250 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Örgü Peynir 250 Gr * 20" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Taze Kaşar Peynir 700 Gr * 12" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Ünal Kaşar Peyniri 400 Gr * 20" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Aksa Beyaz Peynir Klasik İnek Gold 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Tahsildaroğlu Ezine Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Yeşilçay Yarım Yağlı Beyaz Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Onur Beyaz Peynir Olgunlaştırılmış İnek 18 Kg" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Pele Sert Beyaz Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Özgüllü Çeçil Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Güzelce Örgü Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Pele Çeçil Peynir" },
    { kategori: "peynir", gorsel: "orekalogo.png", isim: "Şensa Örgü Peynir Tava 3 Kg" },

    // --- KAŞAR ÇEŞİTLERİ (57 Adet) ---
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Pınar Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Aylaç Taze Tost Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Pınar Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Özgüllü Taze Kaşar Peynir 2,5 Kg * 5" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Trakya Eski Kaşar Peynir M D İnek Kg" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Sarıgüzel Taze Kaşar Peynir 2000 Gr * 8" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "İçer Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Özgüllü Taze Kaşar Peynir 2000 Gr * 5" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Muratbey Taze Kaşar Peynir 2000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Mupaş Eski Kaşar Peynir Vakumlu Kg" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Kars Eski Kaşar Peynir Kg" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Aksa Kaşar Peyniri Yarım Yağlı 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Has Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Aksa Kaşar Peyniri Tam Yağlı 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Güneşoğlu Taze Kaşar Peynir 2000 Gr * 5" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Gezek Taze Kaşar Peynir Pidelik 2000 Gr *5" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanyıldızı Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanyıldızı Taze Kaşar Peynir 2000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanoğlu Taze Kaşar Peynir 2000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Ünal Taze Kaşar Peynir 700 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Ünal Eski Kaşar Anadolu 250 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Teksüt Taze Kaşar Peyniri 600 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Tahsildaroğlu Taze Kaşar Peynir 600 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Tahsildaroğlu Eski Kaşar Ezine 350 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Taciroğlu Eski Kaşar 250 Gr * 10" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Sarıgüzel Taze Kaşar Peynir 2000 Gr * 8" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Güneşoğlu Taze Kaşar Peynir 1000 Gr * 10" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanoğlu Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Muratbey Taze Kaşar Peynir 500 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Cebeci Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Altınkılıç Eski Kaşar Koyun Trakya Kg" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Özgüllü Taze Kaşar Peynir 1000 Gr * 10" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Vahdet Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Sarıgüzel Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Cebeci Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Muratbey Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Torku Taze Kaşar Peynir Tost 600 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanoğlu Taze Kaşar Peynir Dilimli 1500 Gr * 8" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanyıldızı Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Türkova Taze Kaşar Peynir Dilimli 1500 Gr * 8" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Gültepe Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Narin Kaşar Peyniri Dilimli 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Kaşkar Eski Kaşar Dilimli Kg" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Aksa Kaşar Peyniri Dilimli 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanyıldızı Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Onur Taze Kaşar Peynir Dilimli 500 Gr * 24" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Torku Taze Kaşar Dilimli 350 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Coşkun Kaşar Peyniri Tost 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Muratbey Taze Kaşar Peynir Dilimli 225 Gr * 24" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Güneşoğlu Taze Kaşar Peynir Dilimli 1000 Gr *6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Cebeci Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanoğlu Kaşar Peyniri Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Çobanoğlu Kaşar Yarım Yağlı Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Özgüllü Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Uzelköy Dilimli Taze Kaşar 1000 Gr * 9" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Sarıgüzel Dilimli Kaşar 1000 Gr" },
    { kategori: "kasar", gorsel: "orekalogo.png", isim: "Cebeci Taze Kaşar Peynir Dilimli 1000 Gr * 6" },

    // --- ZEYTİN ÇEŞİTLERİ (54 Adet) ---
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Zeytin Siyah Az Tuzlu 5 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Zeytin Siyah Kalamata 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Ege Eylül Yeşil Zeytin Kuru Domates Dolgulu 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin Gurme 181-210 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin Kızıl Kahverengi Kapak 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 350-380 Mavi Kapak 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 321-350 Yeşil Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 290-320 Kırmızı Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 260-290 Bordo Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 230-260 Siyah Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin 201-230 Beyaz Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Aksa Siyah Zeytin Ezmesi Kova 5 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Marmara Birlik Siyah Zeytin Mega 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Marmara Birlik Siyah Zeytin Kuru Sele 800 Gr *6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Marmara Birlik Siyah Zeytin Gold 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Marmara Birlik Siyah Zeytin Az Tuzlu 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Pele Jumbo Siyah Zeytin 290-320 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Pele Siyah Zeytin 230-260 Clb" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Kırma 160-180 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Biberli 180-200 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Kokyeyl 100-120 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Kırma 120-140 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Çizik 201-230 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Biberli 200-230 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Güngör Yeşil Zeytin Biberli 120-140 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Ece Yeşil Zeytin Dilimli 370 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Ece Siyah Zeytin Light 400 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Ece Siyah Zeytin Dilimli 370 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Süper Kırma 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Özel Çizik (210-230) 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Kırma 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Çizik 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Biberli 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Siyah Zeytin Pet 900 Gr * 6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağbaşı Zeytin Salatası 5 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Alan Siyah Zeytin Mega 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Alan Siyah Zeytin Special 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Alan Siyah Zeytin Kuru Sele Özel Ürün 9 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Alan Siyah Zeytin Jumbo 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Fora Zeytin Ezmesi 340 Gr * 6" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Zeytin Ezmesi 200 Gr * 25" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Siyah Zeytin Ezmesi Kova 5 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Akdeniz Salatası Izgara Zeytin Kova 3 Kg * 4" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Özel Biberli 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Yeşil Zeytin Dilimli 8 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Siyah Zeytin Dilimli 8 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağbaşı Zeytin Salatası 5 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Siyah Zeytin Dilimli 8 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Siyah Zeytin Prima 10 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Bağcı Siyah Zeytin Süper 4 Kg * 4" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Biberli Yeşil Zeytin (120-140) Kalibre" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Çolban Biberli Yeşil Zeytin (140-160) Kalibre" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "İkram Yeşil Zeytin Duble Grill Izgara 9 Kg" },
    { kategori: "zeytin", gorsel: "orekalogo.png", isim: "Zova Yeşil Zeytin Izgara Zeytin (Grill) 9 Kg" },

    // --- JAMBON / ŞARKÜTERİ (82 Adet) ---
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sucuk Gold Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sucuk Çatal Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Janbon Piliç Sebzeli 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Janbon Dana 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Sırt Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Seçme Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Dilimli Sıralı 250 Gr * 30" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Dilimli 90 Gr * 15" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Antirikot Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kuru Et Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kuru Et Antirikot Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kavurma Dilimli 150 Gr * 15" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kavurma Dana Vakumlu Kare Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kavurma Dana Tnk Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Janbon Dana Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Füme Dil Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Ayan Füme Hindi Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "İmamoğlu Pastırma Dilim (Çemensiz) 100 Gr * 30" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Sırt Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Seçme Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Dilimli Sıralı 250 Gr * 30" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Çapanoğlu Pastırma Antrikot Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Pastırma Dilimli 80 Gr * 10" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Başyazıcı Pastırma Dilim Seçme 100 Gr * 20" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Salam Dana Fıstıklı 1250 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Janbon Dana 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Janbon Piliç Sebzeli 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Şahin Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Şahin Salam Dana Macar 900 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Şahin Salam İspanyol 2 Kg * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Salam Dana Macar 1000 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Salam Dana Macar Fıstıklı 1000 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Namet Salam Dana Fıstıklı 1250 Gr" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Sucuk Piliç Dilimli 250 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Sucuk Dana Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Sucuk Dana Çatal Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Sucuk Dana Kasap Kvt Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Başyazıcı Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Başyazıcı Kavurma Dana Dilimli 100 Gr * 40" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Janbon Dana Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Salam Dana Macar - Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Salam Dana İspanyol Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Sucuk Dana Baton Küvet Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Banvit Salam Piliç 750 Gr * 10" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Apikoğlu Sucuk Dana Parmak Küvet Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Apikoğlu Sucuk Dana Kangal Küvet Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Apikoğlu Kavurma Dana Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Sosis Piliç Büfe Uzun 1000 * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Sosis Piliç (Jülyen) Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Jambon Piliç Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Jambon Piliç Sebzeli Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Jambon Dana Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Jambon Hindi" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sucuk Çatal Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sucuk Gold Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sucuk Dana Diiimli 500 Gr * 9" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "İnan Sucuk Dana Baton Büfe 350 Gr * 20" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Sucuk Dilimli Piliç 750 Gr * 16" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Hünkar Sucuk Piliç Baton 400 Gr * 20" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Sosis Dana Kokteyl 215 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Sosis Dana Uzun Soyulmuş 225 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sosis Piliç Kokteyl Eko 700 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sosis Dana Kokteyl 220 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Sosis Dana Kokteyl 220 Gr * 12 Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Beşler Dökme Sosis Piliç Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Sosis Piliç Büfe Uzun 1000 * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Sosis Piliç Kokteyl 250 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Banvit Salam Piliç 750 Gr * 10" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Salam Etli Macar 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Salam Dana Macar 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Danet Salam İspanyol Fıstıklı 2000 Gr * 2" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Salam Hindi Etli 1000 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Salam Hindi Büfe 900 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Pınar Salam Hindi Fıstıklı 1000 Gr * 6" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Başyazıcı Salam Dana Macar 900 Gr * 15" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Şahin Salam Dana Macar 900 Gr * 12" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Coşkun Salam Dana Macar - Kg" },
    { kategori: "et", gorsel: "orekalogo.png", isim: "Altınay Salam Piliç Eko 1000 Gr * 10" },

    // --- PİKNİK GRUBU (45 Adet) ---
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Sütaş Çam Balı 20 Gr * 36" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Sütaş Reçel Çilek Piknik 20 Gr * 36" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Sütaş Tereyağ Piknik 15 Gr * 48" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Taze Peynir Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Labne Peynir Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Tereyağ Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Reçel Çilek Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Reçel Vişne Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "İçim Bal Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Vişne Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Vişne Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Karma Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Karma Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Çilek Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Çilek Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Vişne Reçeli 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Çilek Reçeli 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Piknik Kakaolu Fındık Krema 15 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Piknik Çam Balı 15 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Çam Balı 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Çikos Çokokrem 15 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Helva Sade Piknik 20 Gr * 25" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Piknik Çilek 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Piknik Vişne 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Reçel Piknik Kayısı 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Pınar Tereyağ Piknik 10 Gr * 192" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Teksüt Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Koska Piknik Tahin-Pekmez 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Seyidoğlu Tahinli Pekmez Piknik 20 Gr * 100" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Pınar Beyaz Piknik 20 Gr * 120" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Teksüt Krem Peynir Piknik" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Karper Peynir 18'li Multipack * 12" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Karper Peynir 8'li 100 Gr * 24" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Karper Peynir 16'lı Ekonomik 200 Gr * 12" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Barbekü Sos Bbq Hp Klasik 465 Gr * 8" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Hardal Mild 445 Gr * 10" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Ketçap Acılı 460 Gr * 10" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Ketçap Tatlı 460 Gr * 10" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Mayonez 400 Gr * 12" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Heinz Sos Acı Biberli (Hot Chilli) 245 Gr * 8" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Calve Ranch Sos 245 Gr * 12" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Tukaş Ketçap Kova 9 Kg" },
    { kategori: "piknik", gorsel: "orekalogo.png", isim: "Tukaş Mayonez Kova 8 Kg" },

    // --- YOĞURT GRUBU (3 Adet) ---
    { kategori: "yogurt", gorsel: "orekalogo.png", isim: "Gürsüt Yoğurt Süzme 10 Kg" },
    { kategori: "yogurt", gorsel: "orekalogo.png", isim: "Teksüt Süzme Yoğurt 9 Kg" },
    { kategori: "yogurt", gorsel: "orekalogo.png", isim: "Özpey Süzme Yoğurt Kova 5 Kg" },

    // --- AMBALAJ - KAĞIT GRUBU - GIDA DIŞI ÜRÜNLER (19 Adet) ---
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Focus Havlu 24'lü" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Focus Tuvalet Kağıdı 48'li" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "İçten Çekmeli Havlu 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Hareketli Havlu 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Mini Jumbo Tuvalet Kağıdı 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Z Havlu Peçete 100'lü" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Dispanser Peçete 100'lü" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Mutfak Bezi 40*40" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Eldiven (Beyaz) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Eldiven (Siyah) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Eldiven (Mavi) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Eldiven (Beyaz Pudrasız) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Karton Bardak 3000 Adet" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Streç Film (30 Cm)" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Streç Film (45 Cm)" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Alüminyum Folyo (30 Cm) 2 Kg" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Alüminyum Folyo (45 Cm) 2 Kg" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Tahta Karıştırıcı A Kalite 500 Adet" },
    { kategori: "ambalaj", gorsel: "orekalogo.png", isim: "Tahta Karıştırıcı B Kalite 500 Adet" },

    // --- MARGARİN GRUBU (5 Adet) ---
    { kategori: "margarin", gorsel: "orekalogo.png", isim: "Birma Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "orekalogo.png", isim: "Yayla Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "orekalogo.png", isim: "Bizim Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "orekalogo.png", isim: "Terem Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "orekalogo.png", isim: "Sana Margarin 250 Gr * 24" },

    // --- BAKLIYAT GRUBU (48 Adet) ---
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Gönen Baldo 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Trakya Baldo 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Osmancık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Kırık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin İri Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Orta Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Köftelik Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Kırmızı Mercimek Futbol 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Yeşil Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Sıra Fasulye 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Dermason Fasulye 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 8 Mm Nohut 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 10 Mm Nohut 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Aşurelik Buğday 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin Patlayan Mısır 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Aşurelik Buğday" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Nohut 10 Mm" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Nohut 8 Mm" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Dermason Fasulye" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Sıra Fasulye" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Yeşil Mercimek" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Kırmızı Mercimek Futbol" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Köftelik Bulgur" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Orta Bulgur" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 İri Bulgur" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Kırık Pirinç" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Osmancık" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Trakya Baldo" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mersin 2,5 Kg * 6 Gönen Baldo" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Filiz Makarna Tel Şehriye 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Filiz Makarna Arpa Şehriye 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Baldo Pirinç 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Osmancık Pirinç 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Bulgur 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Mercimek 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Yeşil Mercimek 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Fasulye Konya 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Olida Beyaz İthal Nohut 5 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Kalyon Baldo Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Zeki Osmancık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Özsarı Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "İthal Kırmızı Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yerli Kırmızı Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yeşil Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Yerli Konya Fasulye 8 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "İthal Fasulye 9 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Beyaz Nohut Meksika 12 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "orekalogo.png", isim: "Nohut 9 Mm 25 Kg" },

    // --- YAĞ GRUBU (7 Adet) ---
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Bizim Kızartma Yağı 18 L" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Komili Ayçiçek Yağı 18 L Teneke" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Yudum Ayçiçek Yağı 5 L Pet" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Biryağ Ayçiçek Yağı 5 L Pet" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Komili Sızma Zeytinyağı 5 L Teneke" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Tariş Riviera Zeytinyağı 5 L Pet" },
    { kategori: "yag", gorsel: "orekalogo.png", isim: "Kırlangıç Riviera Zeytinyağı 5 L Pet" },

    // --- YUMURTA ÇEŞİTLERİ (4 Çeşit) ---
    { kategori: "yumurta", gorsel: "orekalogo.png", isim: "Yumurta M Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "orekalogo.png", isim: "Yumurta L Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "orekalogo.png", isim: "Yumurta XL Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "orekalogo.png", isim: "Köy Yumurtası 30'lu Koli" }
];

const container = document.getElementById('product-container');
const categoryTitle = document.getElementById('category-title');
const productCountBadge = document.getElementById('product-count');

// Aynı kategori ve isimdeki mükerrer ürünleri temizler (Benzersiz Çeşit Listesi)
function getUniqueProducts(list) {
    const seen = new Set();
    return list.filter(urun => {
        const key = `${urun.kategori}_${urun.isim.trim().toLowerCase()}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

function renderProducts(list) {
    if (!container) return;
    container.innerHTML = ""; 

    // Çeşitleri benzersizleştir
    let processedList = getUniqueProducts(list);

    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'default';

    if (sortValue === 'az') {
        processedList.sort((a, b) => a.isim.localeCompare(b.isim, 'tr', { sensitivity: 'base' }));
    } else if (sortValue === 'za') {
        processedList.sort((a, b) => b.isim.localeCompare(a.isim, 'tr', { sensitivity: 'base' }));
    }

    processedList.forEach((urun, index) => {
        const productHTML = `
            <div class="product-card" data-category="${urun.kategori}">
                <div class="product-img-wrapper">
                    <img src="${urun.gorsel}" alt="Ürün Fotoğrafı" class="product-img">
                </div>
                <div class="product-info">
                    <h4 class="product-title">${urun.isim}</h4>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" type="button" onclick="addSpecificToCart(${index})">Sepete Ekle</button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
    });

    if(productCountBadge) {
        productCountBadge.innerText = `${processedList.length} Ürün`;
    }
}

// Ürünü ve seçilen adeti sepete ekleme
window.addSpecificToCart = function(index) {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const activeCategoryLink = document.querySelector('.filter-category-list a.active');
    const currentCategory = activeCategoryLink ? activeCategoryLink.getAttribute('data-target') : 'all';

    let filtered = urunler.filter(urun => {
        const matchCategory = currentCategory === 'all' || urun.kategori === currentCategory;
        const matchSearch = urun.isim.toLowerCase().includes(searchText);
        return matchCategory && matchSearch;
    });

    // Filtrelenmiş ve benzersizleştirilmiş listeden ürünü seç
    filtered = getUniqueProducts(filtered);

    if (sortValue === 'az') {
        filtered.sort((a, b) => a.isim.localeCompare(b.isim, 'tr', { sensitivity: 'base' }));
    } else if (sortValue === 'za') {
        filtered.sort((a, b) => b.isim.localeCompare(a.isim, 'tr', { sensitivity: 'base' }));
    }

    const urun = filtered[index];
    const quantity = 1;

    if (!urun) return;

    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let existingIndex = cart.findIndex(item => item.name === urun.isim);

    if (existingIndex !== -1) {
        cart[existingIndex].quantity = parseInt(cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            name: urun.isim,
            category: urun.kategori,
            image: urun.gorsel || 'orekalogo.png',
            description: 'Oreka marka kaliteli ürün.',
            quantity: quantity
        });
    }

    localStorage.setItem('orekaCart', JSON.stringify(cart));
    if (typeof updateNavBadge === 'function') {
        updateNavBadge();
    }

    // Modal Göster
    showCartModal(urun.isim, quantity);
};

function showCartModal(productName, qty) {
    const overlay = document.getElementById('cartModalOverlay');
    const textEl = document.getElementById('modalProductText');
    if (textEl) {
        textEl.innerHTML = `<strong>"${productName}"</strong> teklif sepetinize başarıyla eklendi.`;
    }
    if (overlay) {
        overlay.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (container) {
        renderProducts(urunler);
        setupFilters();
    }

    const modalContinueBtn = document.getElementById('modalContinueBtn');
    const overlay = document.getElementById('cartModalOverlay');
    if (modalContinueBtn && overlay) {
        modalContinueBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
});

function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryLinks = document.querySelectorAll('.filter-category-list a');
    const sortSelect = document.getElementById('sortSelect');
    let currentCategory = 'all';

    function filterData() {
        const searchText = searchInput ? searchInput.value.toLowerCase() : "";
        const filteredList = urunler.filter(urun => {
            const matchCategory = currentCategory === 'all' || urun.kategori === currentCategory;
            const matchSearch = urun.isim.toLowerCase().includes(searchText);
            return matchCategory && matchSearch;
        });
        renderProducts(filteredList);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterData);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterData);
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            currentCategory = e.target.getAttribute('data-target');
            if(categoryTitle) categoryTitle.innerText = e.target.innerText;
            
            filterData();
        });
    });
}